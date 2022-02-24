/* eslint-disable no-shadow */
import { getAll, remove } from "../../api/post";
import { reRender } from "../utils";

const index = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desc</th>
            </tr>
        </thead>
        <tbody>
        <button>
        <a href="/admin/add">Thêm mới</a>
        </button>
            ${data.map((post, index) => `
                <tr>
                    <td class=" px-6 py-4 whitespace-nowrap">${index + 1}</td>
                    <td class=" px-6 py-4 whitespace-nowrap">${post.title}</td>
                    <td class=" px-6 py-4 whitespace-nowrap">
                    <img src="${post.img}" width="80"/>
                    </td>
                    <td class=" px-6 py-4 whitespace-nowrap">${post.desc}</td>
                    <td>
                       <a href="/admin/news/${post.id}/edit">Edit</a  
                       
                    </td>
                    <td>
                    <button data-id="${post.id}" class="btn btn-remove">Xóa</button>
                    </td>
                   
                </tr>
            `).join("")}
            
        </tbody>
    </table>
    
        
        `;
    },
    afterRender() {
        // lấy danh sách button sau khi render
        const buttons = document.querySelectorAll(".btn");
        // tạo vòng lặp cho nodelist button
        buttons.forEach((btn) => {
            // lấy ID từ thuộc tính data-id của button
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa không ?");
                if (confirm) {
                    // gọi hàm delete trong folder API và bắn id vào hàm
                    remove(id).then(() => {
                        alert("Đã xóa thành công!");
                        reRender(index, "#app");
                    });
                }
            });
        });
    },
};

export default index;
