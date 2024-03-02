import React, { useState, useEffect } from 'react';
import "./Header.scss"
import { Link } from 'react-router-dom';

function Header({dark, isDark, openDrawer}) {
    const [isDrawerActive, setIsDrawerActive] = useState(true);
    const [isLinksActive, setIsLinksActive] = useState(false);
    const [isLogoActive, setIsLogoActive] = useState(false);
    useEffect(()=>{
        const rs = () =>{
          const width = window.innerWidth
          if(width <= 724){
              setIsDrawerActive(true)
              setIsLinksActive(false)
              setIsLogoActive(false)
          }
          else if (width > 724 & width <1025){
            setIsDrawerActive(true)
            setIsLinksActive(false)
            setIsLogoActive(true)
          }
          else{
            setIsDrawerActive(false);
            setIsLogoActive(true)
            setIsLinksActive(true)
          }
        }
        rs()
        window.addEventListener("resize",rs)
        return ()=>{
          window.removeEventListener("resize",rs);
        }
    },[])
    return (
      <div
        className="Header"
        style={{ backgroundColor: dark ? "#212121" : "#ffffff" }}
      >
        <div className="Top">
          <div className="Left">
            {isDrawerActive ? (
              <button
                aria-label="Open Drawer"
                className="DrawerBtn"
                onClick={() => {
                  openDrawer(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 7H19"
                    stroke={dark ? "#ffffff" : "#33363F"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke={dark ? "#ffffff" : "#33363F"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 17H19"
                    stroke={dark ? "#ffffff" : "#33363F"}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            ) : (
              <></>
            )}
            {isLogoActive ? (
              <Link to="/" className="logoLink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  zoomAndPan="magnify"
                  viewBox="0 0 75 42.75"
                  height="75"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                  style={{marginRight:"25px"}}
                >
                  <defs>
                    <g />
                    <clipPath id="2c425ea185">
                      <path
                        d="M 0.21875 25.578125 L 12.882812 25.578125 L 12.882812 38.242188 L 0.21875 38.242188 Z M 0.21875 25.578125 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                    <clipPath id="80eecb5e67">
                      <path
                        d="M 6.550781 25.578125 C 3.054688 25.578125 0.21875 28.414062 0.21875 31.910156 C 0.21875 35.410156 3.054688 38.242188 6.550781 38.242188 C 10.046875 38.242188 12.882812 35.410156 12.882812 31.910156 C 12.882812 28.414062 10.046875 25.578125 6.550781 25.578125 Z M 6.550781 25.578125 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(0.218023, 17.43923)">
                      <g>
                        <path d="M 1.640625 0 L 1.640625 -12.671875 L 4.15625 -12.671875 L 4.15625 -7.5 L 4.421875 -7.5 L 8.65625 -12.671875 L 11.21875 -12.671875 L 11.21875 -12.453125 L 6.5625 -6.6875 L 11.703125 -0.21875 L 11.703125 0 L 8.875 0 L 4.421875 -5.46875 L 4.15625 -5.46875 L 4.15625 0 Z M 1.640625 0 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(11.924097, 17.43923)">
                      <g>
                        <path d="M 2.578125 -10.703125 C 2.140625 -10.703125 1.785156 -10.832031 1.515625 -11.09375 C 1.242188 -11.363281 1.109375 -11.703125 1.109375 -12.109375 C 1.109375 -12.523438 1.242188 -12.863281 1.515625 -13.125 C 1.785156 -13.382812 2.140625 -13.515625 2.578125 -13.515625 C 2.859375 -13.515625 3.113281 -13.453125 3.34375 -13.328125 C 3.570312 -13.210938 3.75 -13.050781 3.875 -12.84375 C 4 -12.632812 4.0625 -12.390625 4.0625 -12.109375 C 4.0625 -11.835938 4 -11.59375 3.875 -11.375 C 3.75 -11.164062 3.570312 -11 3.34375 -10.875 C 3.113281 -10.757812 2.859375 -10.703125 2.578125 -10.703125 Z M 1.375 0 L 1.375 -9.5625 L 3.78125 -9.5625 L 3.78125 0 Z M 1.375 0 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(17.070956, 17.43923)">
                      <g>
                        <path d="M 1.375 0 L 1.375 -9.5625 L 3.6875 -9.5625 L 3.6875 -8.28125 L 3.859375 -8.25 C 4.171875 -8.757812 4.535156 -9.132812 4.953125 -9.375 C 5.378906 -9.613281 5.914062 -9.734375 6.5625 -9.734375 C 7.289062 -9.734375 7.875 -9.59375 8.3125 -9.3125 C 8.75 -9.03125 9.070312 -8.613281 9.28125 -8.0625 L 9.453125 -8.0625 C 9.742188 -8.632812 10.125 -9.054688 10.59375 -9.328125 C 11.0625 -9.597656 11.640625 -9.734375 12.328125 -9.734375 C 14.316406 -9.734375 15.3125 -8.632812 15.3125 -6.4375 L 15.3125 0 L 12.90625 0 L 12.90625 -6.125 C 12.90625 -6.6875 12.796875 -7.09375 12.578125 -7.34375 C 12.359375 -7.59375 12.003906 -7.71875 11.515625 -7.71875 C 10.203125 -7.71875 9.546875 -6.832031 9.546875 -5.0625 L 9.546875 0 L 7.140625 0 L 7.140625 -6.125 C 7.140625 -6.6875 7.023438 -7.09375 6.796875 -7.34375 C 6.578125 -7.59375 6.226562 -7.71875 5.75 -7.71875 C 5.125 -7.71875 4.640625 -7.507812 4.296875 -7.09375 C 3.953125 -6.675781 3.78125 -6.019531 3.78125 -5.125 L 3.78125 0 Z M 1.375 0 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(33.60329, 17.43923)">
                      <g>
                        <path d="M 1.375 3.875 L 1.375 -9.5625 L 3.78125 -9.5625 L 3.78125 -8.3125 L 3.953125 -8.28125 C 4.242188 -8.757812 4.625 -9.117188 5.09375 -9.359375 C 5.570312 -9.609375 6.128906 -9.734375 6.765625 -9.734375 C 7.523438 -9.734375 8.191406 -9.550781 8.765625 -9.1875 C 9.347656 -8.832031 9.796875 -8.28125 10.109375 -7.53125 C 10.429688 -6.789062 10.59375 -5.875 10.59375 -4.78125 C 10.59375 -3.6875 10.421875 -2.769531 10.078125 -2.03125 C 9.742188 -1.289062 9.273438 -0.734375 8.671875 -0.359375 C 8.078125 0.00390625 7.390625 0.1875 6.609375 0.1875 C 6.015625 0.1875 5.5 0.0859375 5.0625 -0.109375 C 4.625 -0.316406 4.253906 -0.628906 3.953125 -1.046875 L 3.78125 -1.015625 L 3.78125 3.875 Z M 5.9375 -1.859375 C 6.65625 -1.859375 7.195312 -2.09375 7.5625 -2.5625 C 7.9375 -3.03125 8.125 -3.769531 8.125 -4.78125 C 8.125 -5.789062 7.9375 -6.53125 7.5625 -7 C 7.195312 -7.46875 6.65625 -7.703125 5.9375 -7.703125 C 5.269531 -7.703125 4.738281 -7.457031 4.34375 -6.96875 C 3.945312 -6.488281 3.75 -5.757812 3.75 -4.78125 C 3.75 -3.800781 3.945312 -3.066406 4.34375 -2.578125 C 4.738281 -2.097656 5.269531 -1.859375 5.9375 -1.859375 Z M 5.9375 -1.859375 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(45.049422, 17.43923)">
                      <g>
                        <path d="M 6.59375 -2.28125 L 7.21875 -0.5 C 6.957031 -0.289062 6.628906 -0.125 6.234375 0 C 5.847656 0.125 5.40625 0.1875 4.90625 0.1875 C 3.875 0.1875 3.085938 -0.09375 2.546875 -0.65625 C 2.003906 -1.226562 1.734375 -2.050781 1.734375 -3.125 L 1.734375 -7.65625 L 0.28125 -7.65625 L 0.28125 -9.5625 L 1.734375 -9.5625 L 1.734375 -11.4375 L 4.140625 -11.828125 L 4.140625 -9.5625 L 6.859375 -9.5625 L 6.859375 -7.65625 L 4.140625 -7.65625 L 4.140625 -3.296875 C 4.140625 -2.816406 4.238281 -2.46875 4.4375 -2.25 C 4.632812 -2.039062 4.921875 -1.9375 5.296875 -1.9375 C 5.722656 -1.9375 6.09375 -2.050781 6.40625 -2.28125 Z M 6.59375 -2.28125 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(52.475111, 17.43923)">
                      <g>
                        <path d="M 5.5625 0.1875 C 4.625 0.1875 3.800781 -0.00390625 3.09375 -0.390625 C 2.382812 -0.773438 1.832031 -1.335938 1.4375 -2.078125 C 1.050781 -2.828125 0.859375 -3.726562 0.859375 -4.78125 C 0.859375 -5.832031 1.050781 -6.726562 1.4375 -7.46875 C 1.832031 -8.21875 2.382812 -8.78125 3.09375 -9.15625 C 3.800781 -9.539062 4.625 -9.734375 5.5625 -9.734375 C 6.488281 -9.734375 7.304688 -9.539062 8.015625 -9.15625 C 8.722656 -8.78125 9.273438 -8.21875 9.671875 -7.46875 C 10.066406 -6.726562 10.265625 -5.832031 10.265625 -4.78125 C 10.265625 -3.726562 10.066406 -2.828125 9.671875 -2.078125 C 9.273438 -1.335938 8.722656 -0.773438 8.015625 -0.390625 C 7.304688 -0.00390625 6.488281 0.1875 5.5625 0.1875 Z M 5.5625 -1.859375 C 7.039062 -1.859375 7.78125 -2.832031 7.78125 -4.78125 C 7.78125 -5.789062 7.585938 -6.53125 7.203125 -7 C 6.828125 -7.46875 6.28125 -7.703125 5.5625 -7.703125 C 4.070312 -7.703125 3.328125 -6.726562 3.328125 -4.78125 C 3.328125 -2.832031 4.070312 -1.859375 5.5625 -1.859375 Z M 5.5625 -1.859375 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(63.583315, 17.43923)">
                      <g>
                        <path d="M 1.375 0 L 1.375 -9.5625 L 3.6875 -9.5625 L 3.6875 -8.15625 L 3.859375 -8.109375 C 4.460938 -9.191406 5.429688 -9.734375 6.765625 -9.734375 C 7.867188 -9.734375 8.675781 -9.429688 9.1875 -8.828125 C 9.707031 -8.234375 9.96875 -7.363281 9.96875 -6.21875 L 9.96875 0 L 7.5625 0 L 7.5625 -5.921875 C 7.5625 -6.554688 7.429688 -7.015625 7.171875 -7.296875 C 6.921875 -7.578125 6.519531 -7.71875 5.96875 -7.71875 C 5.28125 -7.71875 4.742188 -7.492188 4.359375 -7.046875 C 3.972656 -6.597656 3.78125 -5.898438 3.78125 -4.953125 L 3.78125 0 Z M 1.375 0 " />
                      </g>
                    </g>
                  </g>
                  <g clipPath="url(#2c425ea185)">
                    <g clipPath="url(#80eecb5e67)">
                      <path
                        fill="#ff914d"
                        d="M 0.21875 25.578125 L 12.882812 25.578125 L 12.882812 38.242188 L 0.21875 38.242188 Z M 0.21875 25.578125 "
                        fillOpacity="1"
                        fill-rule="nonzero"
                      />
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(13.711919, 38.722905)">
                      <g>
                        <path d="M 6.1875 -12.65625 C 8.25 -12.65625 9.816406 -12.125 10.890625 -11.0625 C 11.972656 -10 12.515625 -8.421875 12.515625 -6.328125 C 12.515625 -4.234375 11.972656 -2.65625 10.890625 -1.59375 C 9.816406 -0.53125 8.25 0 6.1875 0 L 1.640625 0 L 1.640625 -12.65625 Z M 6.046875 -2.109375 C 7.347656 -2.109375 8.320312 -2.4375 8.96875 -3.09375 C 9.613281 -3.757812 9.9375 -4.835938 9.9375 -6.328125 C 9.9375 -7.804688 9.613281 -8.878906 8.96875 -9.546875 C 8.320312 -10.210938 7.347656 -10.546875 6.046875 -10.546875 L 4.140625 -10.546875 L 4.140625 -2.109375 Z M 6.046875 -2.109375 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(27.231375, 38.722905)">
                      <g>
                        <path d="M 4.140625 -5.546875 L 4.140625 -2.09375 L 10.1875 -2.09375 L 10.1875 0 L 1.640625 0 L 1.640625 -12.65625 L 10.046875 -12.65625 L 10.046875 -10.5625 L 4.140625 -10.5625 L 4.140625 -7.59375 L 9.296875 -7.59375 L 9.296875 -5.546875 Z M 4.140625 -5.546875 " />
                      </g>
                    </g>
                  </g>
                  <g fill={ dark ? "#ffffff" : "#000000" } fillOpacity="1">
                    <g transform="translate(38.104028, 38.722905)">
                      <g>
                        <path d="M 7.515625 0 L 4.5 0 L 0.21875 -12.65625 L 2.875 -12.65625 L 5.953125 -3.21875 L 6.171875 -3.21875 L 9.203125 -12.65625 L 11.78125 -12.65625 Z M 7.515625 0 " />
                      </g>
                    </g>
                  </g>
                </svg>
              </Link>
            ) : (
              <></>
            )}
            {isLinksActive ? (
              <>
                <Link
                  className="HeaderLink"
                  style={{ color: dark ? "#ffffff" : "#000000" }}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="HeaderLink"
                  style={{ color: dark ? "#ffffff" : "#000000" }}
                  to="/about"
                >
                  About
                </Link>
                <Link
                  className="HeaderLink"
                  style={{ color: dark ? "#ffffff" : "#000000" }}
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className="HeaderLink"
                  style={{ color: dark ? "#ffffff" : "#000000" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="Right">
            <label className="ui-switch">
              <input
                type="checkbox"
                onChange={(e) => {
                  isDark(!dark);
                }}
              />
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
}

export default Header;