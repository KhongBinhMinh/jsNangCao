const Header = {
    render() {
        return /* html */` <nav class="bg-amber-600 px-4">
        <ul class="grid md:grid-cols-7 ">
          <li class="pl-8">
            <a href="/"  class=" block py-3  hover:text-white">Trang chủ</a>
          </li>
          <li>
            <a href="/about"  class=" block py-3  hover:text-white">Tuyển Sinh</a>
          </li>
          <li class="pl-1">
            <a href=""  class=" block py-3  hover:text-white">Chương trình </a>
          </li>
          <li class="pl-1">
            <a href=""  class=" block py-3  hover:text-white">Góc sinh viên</a>
          </li>
          <li class="pl-1">
            <a href=""  class=" block py-3  hover:text-white">Tuyển dụng</a>
          </li>
          <li class="px-5 pt-3">
            <input type="text" name="search">
          </li>
          <li class="px-5 pt-3">
           <button class="bg-zinc-500  "  type="submit "  >Tìm kiếm</button >
          </li>
        </ul>
      </nav> `;
    },
};
export default Header;
