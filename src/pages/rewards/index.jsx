const Rewards = () => {
  return (
    <section className="grid grid-cols-7">
      <div className="col-span-1 py-10 px-5 bg-[#262626] rounded-md h-screen">
        {/*Campaign */}
        <div className="flex items-center  gap-4 my-6 text-white font-semibold">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1668 15.1667C21.8363 15.1667 21.559 15.0547 21.335 14.8307C21.111 14.6067 20.9994 14.3298 21.0002 14C21.0002 13.6695 21.1122 13.3922 21.3362 13.1682C21.5602 12.9442 21.8371 12.8326 22.1668 12.8334H24.5002C24.8307 12.8334 25.108 12.9454 25.332 13.1694C25.556 13.3934 25.6676 13.6703 25.6668 14C25.6668 14.3306 25.5548 14.6079 25.3308 14.8319C25.1068 15.0559 24.8299 15.1675 24.5002 15.1667H22.1668ZM21.4668 22.6334L19.6002 21.2334C19.3279 21.0389 19.1724 20.7862 19.1335 20.475C19.0946 20.1639 19.1724 19.8723 19.3668 19.6C19.5613 19.3278 19.8141 19.1723 20.1252 19.1334C20.4363 19.0945 20.7279 19.1723 21.0002 19.3667L22.8668 20.7667C23.1391 20.9612 23.2946 21.2139 23.3335 21.525C23.3724 21.8362 23.2946 22.1278 23.1002 22.4C22.9057 22.6723 22.6529 22.8278 22.3418 22.8667C22.0307 22.9056 21.7391 22.8278 21.4668 22.6334ZM21.0002 8.63338C20.7279 8.82782 20.4363 8.9056 20.1252 8.86671C19.8141 8.82782 19.5613 8.67227 19.3668 8.40005C19.1724 8.12782 19.0946 7.83616 19.1335 7.52505C19.1724 7.21393 19.3279 6.96116 19.6002 6.76671L21.4668 5.36671C21.7391 5.17227 22.0307 5.09449 22.3418 5.13338C22.6529 5.17227 22.9057 5.32782 23.1002 5.60005C23.2946 5.87227 23.3724 6.16394 23.3335 6.47505C23.2946 6.78616 23.1391 7.03893 22.8668 7.23338L21.0002 8.63338ZM5.8335 22.1667V17.5H4.66683C4.02516 17.5 3.47566 17.2714 3.01833 16.814C2.561 16.3567 2.33272 15.8076 2.3335 15.1667V12.8334C2.3335 12.1917 2.56216 11.6422 3.0195 11.1849C3.47683 10.7275 4.02594 10.4993 4.66683 10.5H9.3335L13.3877 8.05005C13.7766 7.81671 14.1701 7.81671 14.5683 8.05005C14.9666 8.28338 15.1661 8.62366 15.1668 9.07088V18.9292C15.1668 19.3764 14.9673 19.7167 14.5683 19.95C14.1693 20.1834 13.7758 20.1834 13.3877 19.95L9.3335 17.5H8.16683V22.1667H5.8335ZM16.3335 17.9084V10.0917C16.8585 10.5584 17.2816 11.1273 17.6028 11.7985C17.9241 12.4698 18.0843 13.2036 18.0835 14C18.0835 14.7973 17.9229 15.5315 17.6017 16.2027C17.2804 16.8739 16.8577 17.4425 16.3335 17.9084Z"
              fill="white"
            />
          </svg>
          <p>Campaign</p>
        </div>
        {/*Live*/}
        <div className="flex items-center  gap-4 my-6 text-white font-semibold">
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.125 3.86804H17.875C18.0573 3.86804 18.2322 3.94047 18.3611 4.06941C18.4901 4.19834 18.5625 4.37321 18.5625 4.55554V18.3055C18.5625 18.4879 18.4901 18.6627 18.3611 18.7917C18.2322 18.9206 18.0573 18.993 17.875 18.993H4.125C3.94266 18.993 3.7678 18.9206 3.63886 18.7917C3.50993 18.6627 3.4375 18.4879 3.4375 18.3055V4.55554C3.4375 4.37321 3.50993 4.19834 3.63886 4.06941C3.7678 3.94047 3.94266 3.86804 4.125 3.86804ZM1.375 4.55554C1.375 3.8262 1.66473 3.12672 2.18046 2.611C2.69618 2.09527 3.39565 1.80554 4.125 1.80554H17.875C18.6043 1.80554 19.3038 2.09527 19.8195 2.611C20.3353 3.12672 20.625 3.8262 20.625 4.55554V18.3055C20.625 19.0349 20.3353 19.7344 19.8195 20.2501C19.3038 20.7658 18.6043 21.0555 17.875 21.0555H4.125C3.39565 21.0555 2.69618 20.7658 2.18046 20.2501C1.66473 19.7344 1.375 19.0349 1.375 18.3055V4.55554ZM14.4843 10.292C14.6703 10.418 14.8226 10.5877 14.9279 10.7861C15.0332 10.9846 15.0882 11.2059 15.0882 11.4305C15.0882 11.6552 15.0332 11.8765 14.9279 12.0749C14.8226 12.2734 14.6703 12.4431 14.4843 12.569L10.395 15.3369C10.1881 15.4767 9.94712 15.5576 9.69779 15.5708C9.44846 15.584 9.20024 15.5291 8.97976 15.4119C8.75928 15.2948 8.57486 15.1198 8.4463 14.9058C8.31773 14.6917 8.24987 14.4467 8.25 14.197V8.66404C8.24987 8.41436 8.31773 8.16936 8.4463 7.95533C8.57486 7.74129 8.75928 7.56631 8.97976 7.44914C9.20024 7.33197 9.44846 7.27705 9.69779 7.29027C9.94712 7.30349 10.1881 7.38435 10.395 7.52417L14.4843 10.292Z"
              fill="white"
            />
          </svg>

          <p>Live</p>
        </div>
        {/*Campaign */}
        <div className="flex items-center  gap-4 my-6 text-white font-semibold">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6668 21.4305C16.9168 21.4305 15.3951 20.8764 14.1017 19.768C12.8082 18.6597 12.0258 17.2694 11.7543 15.5972H3.50017C3.16961 15.5972 2.89233 15.4852 2.66833 15.2612C2.44433 15.0372 2.33272 14.7603 2.3335 14.4305C2.3335 14.1 2.4455 13.8227 2.6695 13.5987C2.8935 13.3747 3.17039 13.2631 3.50017 13.2639H11.7543C12.0266 11.5917 12.8094 10.2014 14.1028 9.09304C15.3963 7.98471 16.9176 7.43054 18.6668 7.43054C20.6113 7.43054 22.2641 8.1111 23.6252 9.47221C24.9863 10.8333 25.6668 12.4861 25.6668 14.4305C25.6668 16.375 24.9863 18.0278 23.6252 19.3889C22.2641 20.75 20.6113 21.4305 18.6668 21.4305Z"
              fill="white"
            />
          </svg>

          <p>Ended</p>
        </div>
        {/*My Rewards */}
        <div className="flex items-center  gap-4 my-6 text-white font-semibold">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_127_968)">
              <path
                d="M4.5 2.43054C3.12 2.43054 2 3.55054 2 4.93054V7.25454C2.00053 7.78922 2.14395 8.31404 2.41541 8.77468C2.68688 9.23532 3.07651 9.61505 3.544 9.87454L9.296 13.0725C8.0912 13.6808 7.12664 14.6774 6.55818 15.9015C5.98972 17.1256 5.85056 18.5056 6.16318 19.8185C6.4758 21.1314 7.22194 22.3006 8.28105 23.1371C9.34016 23.9737 10.6504 24.4287 12 24.4287C13.3496 24.4287 14.6598 23.9737 15.719 23.1371C16.7781 22.3006 17.5242 21.1314 17.8368 19.8185C18.1494 18.5056 18.0103 17.1256 17.4418 15.9015C16.8734 14.6774 15.9088 13.6808 14.704 13.0725L20.458 9.87654C20.9254 9.61662 21.3148 9.23647 21.586 8.77547C21.8571 8.31446 22 7.78936 22 7.25454V4.93054C22 3.55054 20.88 2.43054 19.5 2.43054H4.5ZM10 11.1745V4.43054H14V11.1745L12 12.2865L10 11.1745ZM16 18.4305C16 19.4914 15.5786 20.5088 14.8284 21.259C14.0783 22.0091 13.0609 22.4305 12 22.4305C10.9391 22.4305 9.92172 22.0091 9.17157 21.259C8.42143 20.5088 8 19.4914 8 18.4305C8 17.3697 8.42143 16.3523 9.17157 15.6021C9.92172 14.852 10.9391 14.4305 12 14.4305C13.0609 14.4305 14.0783 14.852 14.8284 15.6021C15.5786 16.3523 16 17.3697 16 18.4305Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_127_968">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.430542)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>My Rewards </p>
        </div>
        {/*Favorites */}
        <div className="flex items-center  gap-4 my-6 text-white font-semibold">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.65 20.6611L8.925 19.0861C7.15833 17.4694 5.56233 15.8651 4.137 14.2731C2.71167 12.6811 1.99933 10.9271 2 9.01111C2 7.44444 2.525 6.13611 3.575 5.08611C4.625 4.03611 5.93333 3.51111 7.5 3.51111C8.38333 3.51111 9.21667 3.69844 10 4.07311C10.7833 4.44778 11.45 4.96044 12 5.61111C12.55 4.96111 13.2167 4.44844 14 4.07311C14.7833 3.69778 15.6167 3.51044 16.5 3.51111C18.0667 3.51111 19.375 4.03611 20.425 5.08611C21.475 6.13611 22 7.44444 22 9.01111C22 10.9278 21.2917 12.6861 19.875 14.2861C18.4583 15.8861 16.85 17.4944 15.05 19.1111L13.35 20.6611C12.9667 21.0111 12.5167 21.1861 12 21.1861C11.4833 21.1861 11.0333 21.0111 10.65 20.6611Z"
              fill="white"
            />
          </svg>

          <p>Favorites</p>
        </div>
      </div>
      <div className="col-span-6"></div>
    </section>
  );
};

export default Rewards;
