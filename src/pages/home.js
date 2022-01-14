import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Logo from "../components/logo";
import news from "../components/news";

const HomePage = {
    render() {
        return /* html */`<div class="logo">
        ${Logo.render()}
   </div>
   ${Header.render()}
   <div class="banner">
       ${Banner.render()}
   </div>
   <div class="news">
       ${news.render()}
   </div>

   <div class="footer">
       ${Footer.render()}
   </div>
    `;
    },
};
export default HomePage;
