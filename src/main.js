import Navigo from "navigo";
import AboutPage from "./pages/about";
import index from "./pages/admin";
import Add from "./pages/admin/add";
import adminDashboard from "./pages/admin/adminDashboard";
import adminTable from "./pages/admin/adminTable";
import adminEdit from "./pages/admin/edit";
import Detailpage from "./pages/detail";
import edit from "./pages/edit";
import HomePage from "./pages/home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) component.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news/:id": ({ data }) => {
        print(Detailpage, data.id);
    },
    "/admin/dashboard": () => {
        print(adminDashboard);
    },
    "/admin/table": () => {
        print(adminTable);
    },
    signin: () => {
        print(SignIn);
    },
    "/signup": () => {
        print(Signup);
    },
    "/pages/table/:id/edit": ({ data }) => {
        print(edit, data.id);
    },
    "/admin/add": () => {
        print(Add);
    },
    "/admin/news": () => {
        print(index);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(adminEdit, data.id);
    },
});

router.resolve();
