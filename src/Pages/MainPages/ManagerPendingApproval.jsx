import { LogoLogin } from "../../components/LogoLogin";
import { ManagerControlButtonlari } from "../../components/ManagerControlButtonlari";
import { UpdateCompanyDetails } from "../../components/UpdateCompanyDetails";
import { Logout } from "../../components/LogoutButton";
import { SwitchButtonToEmployee } from "../../components/SwitchManagerToEmployeeButton";

export function ManagerPendingApproval(){
    return(
        <div className="managerPage">

         <header>
         <nav >
            <LogoLogin/>
            <SwitchButtonToEmployee />
            <Logout />
          </nav>
        </header>

        <main>
            <div className="managerSideBar">
            <h4 className="managerSideBarTitle">Yönetici Araç Çubuğu</h4>
            <ManagerControlButtonlari/>
           
            </div>
            <div className="managerViewSection">
               {/* <h3>Sirket Bilgilerini Guncelle</h3> */}
               <UpdateCompanyDetails />
            </div>
        </main>
        </div>
        
    )

}