import { LogoLogin } from "../../components/LogoLogin";
import { KayitOlButton } from "../../components/KayitOlButton";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

// ===================Metodlar========================
const LoginUrl = "http://localhost:8080/auth/login";
const LoginUrlCloud = "http://34.123.15.45/auth/login";

// ==========Backend baglanti ==========
function LoginMethod(LoginParam) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(LoginParam),
  };
  return fetch(LoginUrl, options)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err.message));
}

// =================Sayfa===============
export function Login() {
  return (
    <>
      <header>
        <nav style={{backgroundColor:"rgb(239, 230, 232)"}}>
          <LogoLogin />
          <KayitOlButton />
        </nav>
      </header>
      <main style={{backgroundColor:"rgb(239, 230, 232)"}}>
        <div >
          <LoginFrm LoginMethod={LoginMethod} />
        </div>
      </main>
      <footer style={{backgroundColor:"rgb(239, 230, 232)"}}>
        <img src="../../../public/images/Footer_upscaled.png" alt="" />
      </footer>
    </>
  );
}
// =============Sayfa Componentleri============
function LoginFrm({ LoginMethod }) {

  const navigate=useNavigate();

  const [LoginParam, SetLoginParam] = useState({ email: "", password: "" });
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [error,setError]=useState(null);
  function handleChange(e) {
    SetLoginParam({ ...LoginParam, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    LoginMethod(LoginParam)
      .then((data) => {
        console.log(data);
        if (data.token) {
          setNotificationStatus(!notificationStatus);
          localStorage.setItem("token",data.token)
          localStorage.setItem("userType",data.userType)
          data.companyName !== null && localStorage.setItem("companyName",data.companyName)
          
          localStorage.getItem("userType") === "MANAGER" && navigate("manager/managerpersonel")
          localStorage.getItem("userType") === "ADMIN" && navigate("admin/admincommentapprove")
          localStorage.getItem("userType") === "EMPLOYEE" && navigate("personel/personelpagepersonalinformation")
          localStorage.getItem("userType") === "VISITOR" && navigate("visitor/mainpage")
          
        }
        if(data.fields){
          setError(data.fields[0])
        }else{
          setError(data.message)
        }
        console.log(typeof(error))
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <h2>Giris Yap</h2>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Sifre"
          onChange={handleChange}
        />
        <section>
          {/* <NavLink to="manager"><p>Yonetici girisi </p></NavLink> */}
          <NavLink to="forgotpassword">
            <p>Sifremi unuttum</p>
          </NavLink>
        </section>
        <button type="submit">Giris yap</button>
      </form>
      {notificationStatus && <p>Giris Yapildi</p>}
      
      {error !== null && <p style={{color:"red"}}>{error}</p> }
    </>
  );
}
