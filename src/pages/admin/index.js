/* eslint-disable no-shadow */
import { getAll, remove } from "../../api/post";
import { reRender } from "../utils";

const index = {
    async render() {
        const { data } = await getAll();
        return `
        <table>
        <thead>
            <tr>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Ảnh</th>
                <th>Desc</th>
            </tr>
        </thead>
        <tbody>
        <a href="/admin/add">Thêm mới</a>
            ${data.map((post, index) => `
                <tr>
                    <td>${index + 1}</td>
                    <td>${post.title}</td>
                    <td>
                    <img src="${post.img}" width="80"/>
                    </td>
                    <td>${post.desc}</td>
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
                        alert("Đã xóa thành công !");
                        reRender(index, "#app");
                    });
                }
            });
        });
    },
};

export default index;
