import Banner from "../components/banner";
import Footer from "../components/footer";
import Logo from "../components/logo";
import news from "../components/news";

const HomePage = {
    async render() {
        return /* html */`<div class="logo">
        ${Logo.render()}
   </div>

   <div class="banner">
       ${Banner.render()}
   </div>
   <div class="news"> 
       ${await news.render()}
   </div>

   <div class="footer">
       ${Footer.render()}
   </div>
    `;
    },
};
export default HomePage;
