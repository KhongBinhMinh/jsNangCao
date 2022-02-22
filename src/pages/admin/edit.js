// import axios from "axios";
import axios from "axios";
import index from ".";
import { get, update } from "../../api/post";
import { reRender } from "../utils";

const adminEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`      
      
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title" value="${data.title}"/><br />
                        <input type="file" id="img-post" class="border border-black"  placeholder="Image " /> 
                        <div><img width="200" src="${data.img}" id="img-preview"/></div>
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description" ></textarea><br />
                        <button>update</button>
                    </form>
                </div>
            </div>                                                                                          
            </main>
        </div>
        `;
    },
    afterRender(id) {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-post");
        let imgLink = "";
        const CLOUD_API = "https://api.cloudinary.com/v1_1/djultth5g/image/upload";
        const CLOUD_PRESET = "dxrqjome";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUD_PRESET);
                // CAll API
                const { data } = await axios.post(CLOUD_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                // eslint-disable-next-line no-const-assign
                imgLink = data.url;
            }
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: imgLink || imgPreview.src,
                desc: document.querySelector("#desc-post").value,
            });

            window.location.href = "/admin/news";
            reRender(index, "#app");
        });
    },
};
export default adminEdit;
