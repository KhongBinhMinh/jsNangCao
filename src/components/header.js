const Header = {
    render() {
        return /* html */` <nav class="bg-amber-600 px-4">
        <ul class="grid md:grid-cols-10 gap gap-1">
          <li class="pl-1">
            <a href="/"  class=" block py-3  hover:text-white">Trang chủ</a>
          </li>
          <li class="pl-1">
            <a href=""  class=" block py-3  hover:text-white">Chương trình </a>
          </li>
          <li class="pl-1">
            <a href=""  class=" block py-3  hover:text-white">Tuyển dụng</a>
          </li>
          <li class="pl-1">
          <a href=""  class=" block py-3  hover:text-white">Sinh viên</a>
        </li>
        <li class="pl-1">
          <a href=""  class=" block py-3  hover:text-white">Hoạt động</a>
        </li>
          <li class="">
            <a href="/admin/dashboard"  class=" block py-3  hover:text-white">Admin</a>
          </li>
          <li class="px-5 pt-3 p-1 pl-0.5">
            <input class="px-0.5" type="text" name="search">
          </li>
          <li class="pl-11 px-5 pt-3">
           <button class="bg-zinc-500  "  type="submit "  >Tìm kiếm</button >
          </li>
          <li class="px-2 py-1 flex ">
          <button class="bg-fuchsia-600 text-white px-8 py-1 mx-4 rounded-md text-sm font-medium "><a class="" href="/SignIn">SignIn</a></button>
          <button class="bg-red-700 text-white px-8 py-1   mx-4  rounded-md text-sm font-medium "><a href="/signup">SignUp</a></button>
          </li>
        </ul>
      </nav> `;
    },
};
export default Header;
