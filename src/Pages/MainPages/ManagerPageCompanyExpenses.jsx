import { NavLink } from "react-router-dom";
import { LogoLogin } from "../../components/LogoLogin";
import { ManagerControlButtonlari } from "../../components/ManagerControlButtonlari";
import { CompanyExpensesTable } from "../../components/SirketGiderleri";
import { Logout } from "../../components/LogoutButton";
import { SwitchButtonToEmployee } from "../../components/SwitchManagerToEmployeeButton";

export function ManagerPageCompanyExpenses() {
    return (
        <div className="managerPage">

            <header>
                <nav >
                    <LogoLogin />
                    <SwitchButtonToEmployee/>
                    <Logout />
                </nav>
            </header>

            <main>
                <div className="managerSideBar">
                    <h4 className="managerSideBarTitle">Yönetici Araç Çubuğu</h4>
                    <ManagerControlButtonlari />

                </div>
                <div className="managerViewSection">
                    <CompanyExpensesTable />
                </div>
            </main>
        </div>





    )

}