"use client";
import React, { useEffect, useRef, useState } from "react";

const Location = ({ onChange, defaltValue, value }) => {
  const idd = useState(Math.random());
  const mapref = useRef();
  const inputRef = useRef();
  const wrapperRef = useRef();
  const onLocationChange = async (lat, lng, placeId) => {
    await rentperApi
      .get(
        ...(placeId
          ? [
              "https://maps.googleapis.com/maps/api/place/autocomplete/json?input={city_name}&locationrestriction=circle:100000@20.895331088361214,75.43674319171771&type=%28cities%29&fields=geometry&key={process.env.NEXT_PUBLIC_MAP_KEY}",
              {
                params: {
                  place: placeId,
                },
              },
            ]
          : [
              "https://maps.googleapis.com/maps/api/place/details/json?place_id={place}&key={process.env.NEXT_PUBLIC_MAP_KEY}",
              {
                params: {
                  latitude: lat,
                  longitude: lng,
                },
              },
            ])
      )
      .then((res) => {
        const { address_components, formatted_address } = res?.data?.results[0];

        let building = "",
          landmark = "",
          street = "",
          area = "",
          city = "",
          state = "",
          pincode = "";

        address_components.forEach((component) => {
          const types = component.types;
          const value = component.long_name;

          // Assign values based on component types
          types.forEach((type) => {
            switch (type) {
              case "premise":
                building = value;
                break;
              case "route":
                street = value;
                break;
              case "neighborhood":
              case "sublocality":
                if (area) area = area + ", " + value;
                else area = value;
                break;
              case "locality":
                city = value;
                break;
              case "administrative_area_level_1":
                state = value;
                break;
              case "postal_code":
                pincode = value;
                break;
              // Add more cases as needed for other address components
            }
          });
        });

        onChange({
          building,
          street,
          landmark,
          area,
          city,
          state,
          pincode,
          point: { type: "Point", coordinates: [lng, lat] },
          cord: { lat, lng },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=geometry,drawing,places`;
    script.async = true;
    script.onload = async () => {
      const map = new google.maps.Map(mapref.current, {
        center: defaltValue,
        zoom: 11,
        mapTypeId: "roadmap",
        mapId: "4504f8b37365c3d0",
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: google.maps.ControlPosition.BOTTOM_CENTER,
        },
      });
      console.log(map);
      // Create the search box and link it to the UI element.
      const input = inputRef.current;
      const searchBox = new google.maps.places.SearchBox(input);

      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        wrapperRef.current
      );
      const MarkerControl = new google.maps.Marker({
        map,
        position: defaltValue,
        draggable: true,
        title: "This marker is draggable.",
      });
      window[idd] = { MarkerControl };
      // Bias the SearchBox results towards current map's viewport.
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          MarkerControl.setPosition(place.geometry.location);
          onLocationChange(
            place.geometry.location?.lat(),
            place.geometry.location?.lng(),
            place.place_id
          );
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });

      google.maps.event.addListener(
        MarkerControl,
        "dragend",
        async function (event) {
          // 'event' contains information about the marker's new position
          await onLocationChange(event?.latLng.lat(), event?.latLng.lng());
          // You can perform any actions you need with the new position here
        }
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="ml-3">

        <div className="w-full p-1" ref={wrapperRef}>
          <input className="mt-2 p-2 bg-gray-200  " plceholder="Address" ref={inputRef} />
        </div>
        <div
          className="w-full bg-white  form-input rounded h-[300px] "
          ref={mapref}
        ></div>
      </div>
    </>
  );
};

export default Location;
