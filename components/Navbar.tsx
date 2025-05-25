export function Navbar() {
  return (
    <nav className="sticky -webkit-sticky top-0 z-50 bg-[#10100E] border-t border-b px-[16px] md:px-[32px] xl:px-[48px] 2xl:px-[64px] border-[#F6F5FF33] h-[84px] flex items-center justify-center overflow-hidden">
      <div className="w-full mx-auto  py-4 flex items-center justify-between">
        <ul className="w-full flex items-center justify-between">
          <li>
            <a
              href="#projects"
              className="font-space uppercase  font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="font-space uppercase font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              My Stack
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-space uppercase font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              About Me
            </a>
          </li>
          <li className="hidden lg:block">
            <a
              href="#contact"
              className="font-space bg-white  rounded-[100px] py-[9px] px-[16px] uppercase font-bold text-[#10100E] hover:border hover:border-white hover:bg-[#10100e] hover:text-[#F6F5FF]"
            >
              get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
