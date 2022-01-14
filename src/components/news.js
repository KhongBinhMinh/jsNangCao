import data from "../data";

const News = {
    render() {
        return /* html */`
        <h2 class="uppercase font-bold text-xl my-5 text-blue-800 px-4">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border p-3 mx-auto">
                <a href="/news/${post.id}"><img src="${post.img}" alt="" /></a>
                <h3 class="my-3"><a href="/products/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                <p>${post.desc}</p>
            </div>
            `).join("")}
            
        </div>
        `;
    },
};
export default News;
