import Navigo from "navigo";
import AboutPage from "./pages/about";
import adminDashboard from "./pages/admin/adminDashboard";
import adminTable from "./pages/admin/adminTable";
import Detailpage from "./pages/detail";
import edit from "./pages/edit";
import HomePage from "./pages/home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/news/:id": ({ data }) => {
        const { id } = data;
        print(Detailpage.render(id));
    },
    "/admin/dashboard": () => {
        print(adminDashboard.render());
    },
    "/admin/table": () => {
        print(adminTable.render());
    },
    "/SignIn": () => {
        print(SignIn.render());
    },
    "/SignUp": () => {
        print(SignUp.render());
    },
    "/pages/table/:id/edit": ({ data }) => {
        const { id } = data;
        print(edit.render(id));
    },
});

router.resolve();
