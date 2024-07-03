
import Confirm from './deleveryapp/Confirm'
import Payments from './deleveryapp/Payments'
import Login from './deleveryapp/Login'
import Register from './deleveryapp/Register'
import RegisterVerify from './deleveryapp/RegisterVerify'
import PaymentsDate from './deleveryapp/PaymentsDate'
import Homepage from './deleveryapp/Homepage'
export default function Home() {
  return (
    <main className="bg-white flex  flex-col items-center justify-between  m-auto mt-0  ">
<Homepage />


 
 {/* <Login />
 <div className="h-20"></div>
 <RegisterVerify/>
<div className="h-20"></div>
<Register />
<div className="h-20"></div>

<Homepage />
<div className="h-20"></div>
<Confirm />
<div className="h-20"></div>
<Payments />
<div className="h-20"></div>
<PaymentsDate /> */}
    </main>
  );
}
