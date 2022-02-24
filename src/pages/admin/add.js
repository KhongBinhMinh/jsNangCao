// import axios from "axios";
import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";
import index from ".";
import { add } from "../../api/post";
import { reRender } from "../utils";

const Add = {
    render() {
        return /* html */`      
      
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input name="title" type="text" class="border border-black" id="title-post" placeholder="Title"/><br />
                        <div><img width="200" src="https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg" id="img-preview"/></div>
                        <input name="file" type="file" id="img-post" class="border border-black"  placeholder="Image" /> 
                        <textarea name="desc"  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        const vali = $("#form-add-post").validate({
            rules: {
                title: {
                    required: true,

                },
                file: {
                    required: true,
                },
                desc: {
                    required: true,

                },
                messages: {
                    title: {
                        required: "Không được để trống.",
                    },
                    file: {
                        required: "Không được để trống.",
                    },
                    password: {

                        required: "Không đưuọc để trống.",
                    },
                },
            },
        });

        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const imgPost = document.querySelector("#img-post");
        const CLOUD_API = "https://api.cloudinary.com/v1_1/djultth5g/image/upload";
        const CLOUD_PRESET = "dxrqjome";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            if (vali.errorList.length === 0) {
                const file = imgPost.files[0];
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUD_PRESET);

                const { data } = await axios.post(CLOUD_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                add({
                    title: document.querySelector("#title-post").value,
                    img: data.url,
                    desc: document.querySelector("#desc-post").value,
                });
                window.location.href = "/admin/news";
                reRender(index, "#app");

            // fetch("http://localhost:3005/post", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: JSON.stringify(post),
            // });
            }
        });
    },
};
export default Add;
