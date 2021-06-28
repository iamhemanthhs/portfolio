import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, BlobHeader } from "./atoms"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation"
    >
      <Link to="/" aria-label="Website logo, go back to homepage.">
        {/* <svg
          aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 530 373"
        >
          <path d="M307.637 285.072c31.627-38.387 81.471-113.234 86.314-208.168-52.916 10.502-106.705 32.174-156.527 63.866 1.863 9.817 12.854 73.39-3.901 126.722-12.067-46.235-32.049-79.213-42.001-93.702-39.202 31.739-74.552 70.245-103.206 114.852 6.178 26.257 34.812 51.931 71.999 59.845-45.123 3.83-88.857-7.115-127.216-34.21C131.15 116.786 300.265 24.935 486.784-9.521c-36.526 133.853-103.325 234.484-179.147 294.593zM13.373 271.268C-1.682 182.688 58.725 72.512 126.585 30.505c-13.643 22.125-19.636 34.08-28.477 60.978C174.923 21.302 289.322-3.54 386.365-12.123 234.265 29.23 77.778 118.242 13.374 271.269zM487.735 87.666c19.744 82.303 10.79 144.022-19.432 195.124-1.387-26.878-10.634-51.175-10.665-51.257-.007.146-21.579 71.84-82.148 118.436 8.956-20.031 11.304-44.879 11.304-44.879-43.279 21.442-102.288 45.54-166.712 47.429 138.556-52.395 221.66-135.299 267.653-264.853z" />
        </svg> */}
        <svg
          aria-hidden="true"
          role="img"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 187.000000 182.000000"
        >
          <g transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
fill="#707a82" stroke="none">
         <path d="M1456 1675 c-111 -21 -116 -26 -64 -60 61 -40 201 -179 245 -242 44
-64 46 -62 69 68 15 87 15 221 1 235 -13 14 -177 13 -251 -1z"/>
<path d="M1167 1576 c-203 -102 -411 -281 -655 -561 l-61 -70 261 -262 262
-262 50 42 c175 146 386 367 475 497 59 85 141 237 141 259 0 23 -85 137 -159
214 -71 74 -208 177 -234 177 -7 0 -43 -15 -80 -34z m179 -260 c29 -29 34 -41
34 -79 0 -54 -33 -100 -84 -117 -27 -9 -42 -8 -74 5 -124 50 -89 225 45 225
38 0 50 -5 79 -34z"/>
<path d="M170 1144 c-109 -110 -121 -126 -95 -121 17 3 81 13 143 23 l113 17
32 -31 32 -31 97 109 98 109 -53 10 c-28 6 -88 15 -132 21 -44 6 -87 13 -95
16 -10 2 -62 -44 -140 -122z"/>
<path d="M442 773 c-12 -21 -31 -52 -41 -68 l-20 -31 162 -162 162 -161 55 35
c30 19 62 39 70 44 12 7 -25 49 -170 195 -102 102 -187 185 -191 185 -3 0 -15
-17 -27 -37z"/>
<path d="M1214 529 c-16 -17 -64 -60 -107 -96 l-78 -66 32 -33 32 -33 -17
-113 c-10 -62 -20 -126 -23 -143 -5 -26 10 -14 119 93 l125 123 -22 145 c-12
79 -24 146 -27 149 -2 3 -18 -9 -34 -26z"/>
<path d="M343 467 c-84 -47 -151 -154 -160 -258 l-6 -60 39 6 c121 20 195 59
248 128 51 66 50 136 0 176 -30 24 -87 27 -121 8z"/></g></svg>
        {/* <svg
          aria-hidden="true"
          className="h-12 sm:h-10 w-12 sm:w-10 fill-current hover:text-accent transition duration-150"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.10156 37.7504C8.10156 33.0504 9.05156 28.7004 10.9516 24.7004C12.9516 20.7004 15.6016 17.2504 18.9016 14.3504C22.3016 11.4504 26.2016 9.1504 30.6016 7.45039C35.1016 5.75039 39.8516 4.90039 44.8516 4.90039C52.6516 4.90039 59.4016 6.30039 65.1016 9.10039C70.9016 11.8004 75.2516 14.9504 78.1516 18.5504C78.8516 19.4504 78.8016 20.2504 78.0016 20.9504L67.6516 31.7504C67.2516 32.1504 66.7516 32.3504 66.1516 32.3504C65.6516 32.3504 65.2016 32.1004 64.8016 31.6004C63.9016 30.6004 62.7516 29.6004 61.3516 28.6004C60.0516 27.6004 58.5016 26.7004 56.7016 25.9004C55.0016 25.0004 53.1516 24.3004 51.1516 23.8004C49.1516 23.3004 47.1016 23.0504 45.0016 23.0504C42.5016 23.0504 40.2016 23.4504 38.1016 24.2504C36.1016 24.9504 34.4016 25.9004 33.0016 27.1004C31.6016 28.3004 30.5016 29.7004 29.7016 31.3004C28.9016 32.9004 28.5016 34.6004 28.5016 36.4004C28.5016 39.3004 29.4516 41.8004 31.3516 43.9004C33.2516 46.0004 36.1016 47.4504 39.9016 48.2504L54.6016 51.1004C59.4016 52.0004 63.6016 53.4504 67.2016 55.4504C70.9016 57.3504 73.9516 59.6504 76.3516 62.3504C78.8516 65.0504 80.7516 68.1004 82.0516 71.5004C83.3516 74.8004 84.0016 78.3004 84.0016 82.0004C84.0016 86.0004 83.1516 89.9504 81.4516 93.8504C79.8516 97.7504 77.4016 101.25 74.1016 104.35C70.9016 107.45 66.9516 109.95 62.2516 111.85C57.5516 113.65 52.1516 114.55 46.0516 114.55C41.7516 114.55 37.7016 114.1 33.9016 113.2C30.2016 112.3 26.8016 111.15 23.7016 109.75C20.7016 108.25 18.0516 106.65 15.7516 104.95C13.4516 103.15 11.5516 101.4 10.0516 99.7004C9.35156 99.0004 9.35156 98.2004 10.0516 97.3004L19.5016 85.1504C19.8016 84.6504 20.2016 84.4004 20.7016 84.4004C21.3016 84.3004 21.8016 84.4504 22.2016 84.8504C23.6016 86.1504 25.1516 87.5004 26.8516 88.9004C28.5516 90.2004 30.4016 91.4004 32.4016 92.5004C34.4016 93.6004 36.5516 94.5004 38.8516 95.2004C41.1516 95.9004 43.6016 96.2504 46.2016 96.2504C51.7016 96.2504 55.9016 95.0504 58.8016 92.6504C61.7016 90.2504 63.1516 87.1504 63.1516 83.3504C63.1516 80.3504 62.0516 77.7504 59.8516 75.5504C57.7516 73.2504 54.6016 71.7004 50.4016 70.9004L35.7016 67.9004C27.3016 66.2004 20.6016 62.7504 15.6016 57.5504C10.6016 52.3504 8.10156 45.7504 8.10156 37.7504Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M89.0816 88.4004H114.426C114.81 88.4004 115.002 88.5924 115.002 88.9764V96.0324C115.002 96.4804 114.874 96.8804 114.618 97.2324L108.474 105.2L114.618 113.168C114.874 113.52 115.002 113.92 115.002 114.368V121.424C115.002 121.808 114.81 122 114.426 122H89.0816C88.9216 122 88.7776 121.952 88.6496 121.856C88.5536 121.728 88.5056 121.584 88.5056 121.424V88.9764C88.5056 88.8164 88.5536 88.6884 88.6496 88.5924C88.7776 88.4644 88.9216 88.4004 89.0816 88.4004ZM108.714 115.904L100.794 105.584C100.634 105.328 100.634 105.088 100.794 104.864L108.714 94.4964H94.6496V115.904H108.714Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="8"
              y1="5"
              x2="115"
              y2="122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5DD2F3" />
              <stop offset="1" stop-color="#5D99F3" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="8"
              y1="5"
              x2="115"
              y2="122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5DD2F3" />
              <stop offset="1" stop-color="#5D99F3" />
            </linearGradient>
          </defs>
        </svg> */}
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
        <NavLink to="/" title="Home" selected={activePage === "/"}>
          Home
        </NavLink>
        <NavLink to="/blog" title="Blog" selected={activePage === "blog"}>
          Blog
        </NavLink>
        <NavLink
          to="/projects"
          title="Projects"
          selected={activePage === "projects"}
        >
          Projects
        </NavLink>
        <NavLink to="/about" title="About" selected={activePage === "about"}>
          About
        </NavLink>
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
