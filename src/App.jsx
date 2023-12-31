import "./assets/styles/reset.css";
import "./App.css";

import { RegisterVisitor } from "./Pages/MainPages/RegisterVisitor";
import { RegisterManager } from "./Pages/MainPages/RegisterManager";
import { Login } from "./Pages/MainPages/Login"
import { Route, Routes } from "react-router";
import { ManagerPagePersonel } from "./Pages/MainPages/ManagerPagePersonel";
import { ManagerPendingApproval } from "./Pages/MainPages/ManagerPendingApproval";
import { ManagerPageProfitLoss } from "./Pages/MainPages/ManagerPageProfitLoss";
import { ManagerPageCompanyExpenses } from "./Pages/MainPages/ManagerPageCompanyExpenses";
import { ManagerPageUpcomingPayment } from "./Pages/MainPages/ManagerPageUpcomigPayments";
import { ManagerPagePublicHoliday } from "./Pages/MainPages/ManagerPagePublicHoliday";
import { ManagerPagePersonelTraces } from "./Pages/MainPages/ManagerPageListPersonelDayOffs";
import { ForgotPassword } from "./Pages/MainPages/ForgotPassword";
import { PersonelPagePersonalInformation } from "./Pages/MainPages/PersonelPagePersonalInformation";
import { PersonelPageCompanyInfo } from "./Pages/MainPages/PersonelPageCompanyInfo";
import { PersonelPageCompanyBreakTime } from "./Pages/MainPages/PersonelPageCompanyBreakTime";
import { PersonelPageCompanyContact } from "./Pages/MainPages/PersonelPageCompanyContact";
import { PersonelPageCompanyPublicHoliday } from "./Pages/MainPages/PersonelPageCompanyPublicHoliday";
import { AdminCommentApprove } from "./Pages/MainPages/AdminApproveComment";
import { AdminManagerRegisterApprove } from "./Pages/MainPages/AdminApproveRegisterManager";
import { VisitorPagePersonalInfo } from "./Pages/MainPages/VisitorPagePersonalInfo";
import { VisitorPageCompanyContact } from "./Pages/MainPages/VisitorPageCompanyContact";


import { MainPage } from "./Pages/MainPages/MainPage";
import { CompanyPage } from "./components/CompanyPage";

import { ManagerDeleteEmployee } from "./Pages/MainPages/ManagerDeleteEmployee";
import { ManagerRegisterEmployee } from "./Pages/MainPages/ManagerRegisterEmployee";
import { EmployeeCommentToCompany } from "./Pages/MainPages/PersonelCommentToCompany";
import { PersonelPageCreateDayOffRequest } from "./Pages/MainPages/ManagerCreateEmployeeDayOff";
import { PersonelPageCreateExpenseRequest } from "./Pages/MainPages/PersonelCreateExpenseRequest";
import { ProtectedRoute } from "./Pages/MainPages/ProtectedRoute";
import { ManagerPendingExpenses } from "./Pages/MainPages/ManagerPendingExpenseRequests";
import { PersonalPageUpdatePersonalInfo } from "./Pages/MainPages/PersonalPageUpdatePersonalInfo";
import { PersonelPageCreateAdvancePaymentRequest } from "./Pages/MainPages/PersonelCreateAdvancePaymentRequest";
import { ManagerPendingAdvances } from "./Pages/MainPages/ManagerPendingAdvanceRequests";
import { PackagePageGeneral } from "./components/PackagePage";

function App() {

  return (

    <>
      <Routes>
        {/* herkesin ulasabilecegi sayfalar */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/registerVisitor" element={<RegisterVisitor />}></Route>
        <Route path="/registerManager" element={<RegisterManager />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/managerpackageselect" element={<PackagePageGeneral />}></Route>

        {/* sadece managerin ulasabilecegi sayfalar */}

        <Route path="/manager" element={<ProtectedRoute />}>
          <Route path="managerpersonel" element={<ManagerPagePersonel />}></Route>
          <Route path="managerpendingapproval" element={<ManagerPendingApproval />}></Route>
          <Route path="managerprofitloss" element={<ManagerPageProfitLoss />}></Route>
          <Route path="managercompanyexpenses" element={<ManagerPageCompanyExpenses />}></Route>
          <Route path="managerupcomingpayment" element={<ManagerPageUpcomingPayment />}></Route>
          <Route path="managerpublicholiday" element={<ManagerPagePublicHoliday />}></Route>
          <Route path="managerpersoneltraces" element={<ManagerPagePersonelTraces />}></Route>
          <Route path="managerregisteremployee" element={<ManagerRegisterEmployee />}></Route>
          <Route path="managerdeleteemployee" element={<ManagerDeleteEmployee />}></Route>
          <Route path="managerpendingexpenserequests" element={<ManagerPendingExpenses />}></Route>
          <Route path="managerpendingadvancerequest" element={<ManagerPendingAdvances />}></Route>
        </Route>

        {/* personel ve manager'in ulasabilecegi sayfalar */}
        <Route path="/personel" element={<ProtectedRoute />}>
          <Route path="personelpagepersonalinformation" element={<PersonelPagePersonalInformation />} ></Route>
          <Route path="personelpageupdateinformation" element={<PersonalPageUpdatePersonalInfo />} ></Route>
          <Route path="personelpagepecompanyinfo" element={<PersonelPageCompanyInfo />} ></Route>
          <Route path="personelpagepebreaktime" element={<PersonelPageCompanyBreakTime />} ></Route>
          <Route path="personelpagepecontact" element={<PersonelPageCompanyContact />} ></Route>
          <Route path="personelpagepublicholiday" element={<PersonelPageCompanyPublicHoliday />} ></Route>
          <Route path="personelleaveacomment" element={<EmployeeCommentToCompany />} ></Route>
          <Route path="employeerequestdayoff" element={<PersonelPageCreateDayOffRequest />}></Route>
          <Route path="employeeexpenserequest" element={<PersonelPageCreateExpenseRequest />}></Route>
          <Route path="employeeadvancepaymentrequest" element={<PersonelPageCreateAdvancePaymentRequest />}></Route>
        </Route>


        {/* sadece adminin ulasabilecegi sayfa */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route path="admincommentapprove" element={<AdminCommentApprove />} ></Route>
          <Route path="registermanagerapprove" element={<AdminManagerRegisterApprove />} ></Route>
        </Route>


        {/* sadece ziyaretcinin ulasabilecegi sayfalar */}
        <Route path="/visitor" element={<ProtectedRoute />}>
          <Route path="visitorpagepersonelinfo" element={<VisitorPagePersonalInfo />} ></Route>
          <Route path="visitorpagepecontact" element={<VisitorPageCompanyContact />} ></Route>
          <Route path="mainpage" element={<MainPage />} ></Route>
          <Route path="companypage" element={<CompanyPage />} ></Route>
        </Route>

      </Routes>
    </>

  )
}

export default App
