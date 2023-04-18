//SJSU CMPE 138 Spring 2022 TEAM2
import Product from "../components/product";
import Application from "../components/application";
import Scholarship from "../components/scholarship";
import ProviderScholarship from "../components/providerscholarship";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
import EditProfile from "../components/editprofile";
import Profile from "../components/profile";
import ApplicationDetail from "../components/applicationDetail";
import CLOHome from "../components/clohome";
import AmbassdorHome from "../components/ambassdorhome";
import ProviderHome from "../components/providerhome";
import SeekerHome from "../components/seekerhome";
import CreateScholarship from "../components/createScholarship";
import CreateEvent from "../components/createEvent";
import Event from "../components/events";
import Student from "../components/student";
import ApprovedStudent from "../components/approvedstudent";
import ProviderApplication from "../components/providerapplication";
import ProviderApplicationDetail from "../components/providerApplicationDetail";
import OrganizedEvents from "../components/organizedEvents";
import Notification from "../components/notification";



const routes = [
    {
      path: "/",
      component: SignIn,
      exact: true,
    },
    {
      path: "/home",
      component: Product,
    },
    {
      path: "/signin",
      component: SignIn,
    },
    {
      path: "/signup",
      component: SignUp,
    },
    {
      path: "/profile/:id",
      component: Profile,
      exact:true
    },
    {
      path: "/editprofile",
      component: EditProfile,
    },
    {
      path: "/application",
      component: Application,
      exact: true,
    },
    {
      path: "/application/:id",
      component: ApplicationDetail
    },
    {
      path: "/event",
      component: Event,
    },
    {
      path: "/organized-events",
      component: OrganizedEvents,
    },
    {
      path: "/student",
      component: Student,
    },
    {
      path: "/approved-student",
      component: ApprovedStudent,
    },
  
    {
      path: "/scholarship",
      component: Scholarship,
    },
    {
      path: "/notification",
      component: Notification,
    },
    {
      path: "/provider-scholarship",
      component: ProviderScholarship,
    },
    {
      path: "/provider-application",
      component: ProviderApplication,
      exact: true,
    },
    {
      path: "/provider-application/:id",
      component: ProviderApplicationDetail,
      exact:true,
    },
    {
      path: "/create-scholarship",
      component: CreateScholarship,
    },
   
    {
      path: "/seeker/home",
      component: SeekerHome,
    },
    {
      path: "/ambassdor/home",
      component: AmbassdorHome,
    },
    {
      path: "/clo/home",
      component: CLOHome,
    },
    {
      path: "/provider/home",
      component: ProviderHome,
    },
    {
      path: "/create-event",
      component: CreateEvent,
    }
  ];
  
  export default routes