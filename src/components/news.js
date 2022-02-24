import { getAll } from "../api/post";

const News = {
    async  render() {
        const { data } = await getAll();
        return /* html */ `
    
             <h2 class="uppercase font-bold text-xl my-5 text-blue-800 px-4">Các Sản Phẩm Yêu Thích</h2>
                      <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border p-3 mx-auto">
                <a " href="/products/${post.id}"><img class="mx-auto" src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="/products/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
                <button type="button" class="btn btn-primary">Xem chi tiết</button>
            </div>
           
            `).join("")}
            


        
        
     
        `;
    },
};
export default News;
