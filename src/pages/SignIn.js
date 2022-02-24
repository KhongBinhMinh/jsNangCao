import toastr from "toastr";
import { signin } from "../api/user";
import "toastr/build/toastr.min.css";

const Signin = {
    render() {
        return /* html */`
        <form id="formSignup">
        <section class="flex justify-center items-center h-screen bg-gray-800">
        <div class="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
        <div class="mb-4">
        <p class="text-gray-400">Sign In</p>
        <h2 class="text-xl font-bold text-white">Join our community</h2>
        </div>
        <div>
        <input id="email" class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email">
        </div>
        <div>
        <input id="password" class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password">
        </div>
        <div>
        <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign In</button>
        </div>
        <div class="flex items-center justify-between text-center">
        <div class="mt-3 text-center">
        <p class="text-blue-100">Bạn chưa có tài khoản? 
        <a class="text-blue-600" href="/signup">SignUp</a></p>
  </div>
    </div>
</div>
</section>
</form>
         `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                // Lấy thông tin loacalStorage và hiển thị
                localStorage.setItem("user", JSON.stringify(data.user));
                toastr.success("Bạn đã đăng nhập thành công, chờ 3s để chuyển trang");
                setTimeout(() => {
                // kiểm tra quyền dựa trên ID
                    if (data.user.id === 1) {
                        document.location.href = "/admin/dashboard";
                    } else {
                        document.location.href = "/";
                    }
                }, 3000);
            } catch (error) {
                toastr.error(error.response.data);
                // console.log(error.response.data);
            }
        });
    },
};
export default Signin;
