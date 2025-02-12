export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#10100E] border-t border-b border-[#F6F5FF33] h-16">
      <div className="w-full mx-auto px-[18px] sm:px-8 py-4 flex items-center justify-between">
        <ul className="w-full flex items-center justify-between px-10">
          <li>
            <a
              href="#projects"
              className="font-space font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#stack"
              className="font-space font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              My Stack
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-space font-bold text-[#F6F5FF66] hover:text-[#F6F5FF] hover:underline hover:decoration-4 hover:underline-offset-[26px]
                         relative hover:before:content-['>'] hover:before:text-[#F6F5FF] hover:before:absolute hover:before:-left-6 hover:before:top-1/2 hover:before:-translate-y-1/2"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-space bg-white rounded-[100px] py-[8px] px-[16px] capitalize font-bold text-[#10100E] hover:border hover:border-white hover:bg-[#10100e] hover:text-[#F6F5FF]"
            >
              get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
