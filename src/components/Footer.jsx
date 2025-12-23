function Footer() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#1e1a3d] to-[#299B46] text-white p-6 rounded-xl shadow-xl border border-white/20 backdrop-blur-sm flex items-center justify-center mx-4 my-14">
        <div className="w-full max-w-6xl">

          <div className="flex flex-wrap gap-8 items-start justify-center">

            {/* Contact */}
            <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 min-w-[230px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 text-green-400 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Contact Us
                </h2>
                <p className="text-sm text-green-300 mt-1">
                  <a
                    href="tel:+917355169038"
                    className="hover:text-[#1e1a3d]"
                  >
                    +91 7355169038
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 min-w-[230px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 text-green-400 shrink-0"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Email Address
                </h2>
                <p className="text-sm text-green-300 mt-1">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=pesticidekaran@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1e1a3d] cursor-pointer"
                  >
                    pesticidekaran@gmail.com
                  </a>
                </p>

              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 min-w-[230px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 text-green-400 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Location
                </h2>
                <p className="text-xs text-green-300 mt-1">
                  <a
                    href="https://www.google.com/maps?q=183+Shankracharya+Nagar+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:hover:text-[#1e1a3d] cursor-pointer"
                  >
                    183 Shankracharya Nagar, UP
                  </a>
                </p>

              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 min-w-[230px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-9 h-9 text-green-400 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Working Hours
                </h2>
                <p className="text-sm text-green-300 mt-1">
                  9:00 AM – 6:00 PM, Mon – Fri
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
