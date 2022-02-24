import { get } from "../api/post";

const Detailpage = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
                 <div>
                    <h1> ${data.title}</h1>
                    <img src="${data.img}"  alt=""/>
                     <p> ${data.desc}</p>
                 
                 </div>
                 `;
    },
};
export default Detailpage;
