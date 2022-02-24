import { signup } from "../api/user";

const Signup = {
    render() {
        return /* html */`
        <form id="formSignup">
        <section class="flex justify-center items-center h-screen bg-gray-800">
        <div class="max-w-md w-full bg-gray-900 rounded p-6 space-y-4">
        <div class="mb-4">
        <p class="text-gray-400">Sign Up</p>
        <h2 class="text-xl font-bold text-white">Join our community</h2>
        </div>
        <div>
        <input id="username" class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Username">
        </div>
        <div>
        <input id="email" class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Email">
        </div>
        <div>
        <input id="password" class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Password">
        </div>
        <div>
        <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign Up</button>
        </div>
        <div class="flex items-center justify-between">
        <div class="flex flex-row items-center">
            <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
            <label for="comments" class="ml-2 text-sm font-normal text-gray-400">Remember me</label>
        </div>
        <div>
            <a class="text-sm text-blue-600 hover:underline" href="#">Forgot password?</a>
        </div>
    </div>
</div>
</section>
</form>
         `;
    },
    afterRender() {
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },
};
export default Signup;
