export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-[100vh] w-full bg-white">
      {children}
      <div className="h-full w-[50%] p-2">
        <div className="h-full rounded-lg bg-[#4153EF] py-10 px-14 text-white xl:py-16">
          <div>
            <h1 className="max-w-[70%] text-2xl">
              The Simplest way to get Tech Gadgets for your next Events
            </h1>
            <p className="mt-1 text-[12px] font-light">
              Enjoy Shopping with us and get amazing rewards
            </p>
          </div>
          <div className="mt-6 h-[70%] flex-1 bg-white xl:h-[80%]"></div>
          <div className="mt-6 flex w-full items-center justify-between gap-x-6">
            <svg
              width="80"
              height="38"
              viewBox="0 0 80 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.8963 17.5259C70.0593 14.9185 70.7704 13.7037 72.1037 13.7037C73.4222 13.7037 74.1037 14.9481 74.1926 17.5259H69.8963ZM79.6593 19.0815C79.6593 16.1778 79.0222 13.8666 77.7778 12.2518C76.5037 10.6074 74.6074 9.76295 72.1926 9.76295C67.2444 9.76295 64.163 13.4222 64.163 19.2889C64.163 22.5778 64.9778 25.037 66.6074 26.6074C68.0593 28.0148 70.1481 28.7259 72.8444 28.7259C75.3333 28.7259 77.6296 28.1333 79.0815 27.1704L78.4444 23.1852C77.0074 23.9555 75.3481 24.3852 73.4667 24.3852C72.3407 24.3852 71.5704 24.1481 71.0074 23.6592C70.4 23.1407 70.0444 22.2963 69.9259 21.0963H79.5704C79.6148 20.8148 79.6593 19.4963 79.6593 19.0815ZM56.3704 23.0222C55.8963 23.9111 55.1704 24.3852 54.3259 24.3852C53.7333 24.3852 53.2296 24.2666 52.7556 24.0296V15.3481C53.7481 14.3111 54.637 14.1926 54.963 14.1926C56.4444 14.1926 57.1704 15.7926 57.1704 18.9037C57.1704 20.6963 56.9185 22.0889 56.3704 23.0222ZM61.2148 11.7629C60.1778 10.4296 58.7556 9.76295 56.9185 9.76295C55.2296 9.76295 53.7481 10.4741 52.3704 11.9407L52.0593 10.1037H46.9481V35.1259L52.7704 34.1629V28.2963C53.6593 28.5778 54.5778 28.7259 55.3926 28.7259C56.8444 28.7259 58.963 28.3555 60.6074 26.5629C62.1778 24.8444 62.9778 22.1926 62.9778 18.6963C62.963 15.6 62.3852 13.2592 61.2148 11.7629ZM38.8 10.1185H44.637V28.3852H38.8V10.1185ZM41.7333 8.31109C43.4222 8.31109 44.7852 6.93332 44.7852 5.22961C44.7852 3.51109 43.4222 2.14813 41.7333 2.14813C40.0148 2.14813 38.6519 3.51109 38.6519 5.22961C38.6667 6.9185 40.0296 8.31109 41.7333 8.31109ZM36.2963 9.86665C34.6519 9.86665 33.3333 10.7259 32.8296 12.2815L32.4741 10.1185H27.3778V28.3852H33.2V16.5333C33.9259 15.6444 34.963 15.3185 36.3704 15.3185C36.6815 15.3185 37.0074 15.3185 37.4074 15.3926V9.99998C36.9926 9.91109 36.637 9.86665 36.2963 9.86665ZM25.1259 14.4296L25.837 10.1037H22.1185V4.87406L17.1259 5.70369L16.4 10.1185L14.637 10.4L13.9852 14.4296H16.4V22.9037C16.4 25.1111 16.963 26.637 18.1185 27.5704C19.0815 28.3407 20.4593 28.7259 22.4148 28.7259C23.9111 28.7259 24.8296 28.4741 25.4667 28.2963V23.7185C25.1111 23.8074 24.3111 23.9704 23.7778 23.9704C22.6222 23.9704 22.1333 23.3778 22.1333 22.0444V14.4296H25.1259ZM8.45926 16.9926C6.74074 16.3555 5.80741 15.8666 5.80741 15.0963C5.80741 14.4444 6.34074 14.0592 7.3037 14.0592C9.06667 14.0592 10.8741 14.7407 12.1185 15.3481L12.8296 11.0074C11.837 10.5333 9.82222 9.76295 7.03704 9.76295C5.06667 9.76295 3.42222 10.2815 2.25185 11.2444C1.02222 12.2518 0.385185 13.7037 0.385185 15.4666C0.385185 18.6518 2.32593 20.0148 5.4963 21.1704C7.54074 21.8963 8.22222 22.4148 8.22222 23.2148C8.22222 23.9852 7.57037 24.4296 6.37037 24.4296C4.88889 24.4296 2.44444 23.7037 0.859259 22.7704L0.148148 27.1555C1.51111 27.9259 4.04444 28.7259 6.66667 28.7259C8.75556 28.7259 10.4889 28.237 11.6593 27.2889C12.9778 26.2518 13.6593 24.7259 13.6593 22.7555C13.6593 19.4963 11.6741 18.1333 8.45926 16.9926Z"
                fill="url(#paint0_linear_7_9)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7_9"
                  x1="87.1111"
                  y1="12.4445"
                  x2="-19.5556"
                  y2="17.7778"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="160"
              height="28"
              viewBox="0 0 160 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7_17)">
                <mask
                  id="mask0_7_17"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="-1"
                  width="160"
                  height="28"
                >
                  <path
                    d="M0.370438 -0.195516H159.664V26.8338H0.370438V-0.195516Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_7_17)">
                  <mask
                    id="mask1_7_17"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="160"
                    height="28"
                  >
                    <path
                      d="M0.370438 26.8337H159.664V-0.195577H0.370438V26.8337Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_7_17)">
                    <path
                      d="M62.8371 2.76275C62.8371 2.12077 63.0921 1.50508 63.5461 1.05113C64 0.597186 64.6158 0.34216 65.2578 0.34216C65.8997 0.34216 66.5154 0.597186 66.9693 1.05113C67.4233 1.50508 67.6783 2.12077 67.6783 2.76275C67.6549 3.38909 67.3897 3.98199 66.9383 4.41685C66.4869 4.85171 65.8845 5.09467 65.2578 5.09467C64.631 5.09467 64.0286 4.85171 63.5772 4.41685C63.1258 3.98199 62.8605 3.38909 62.8371 2.76275Z"
                      fill="white"
                    />
                    <path
                      d="M101.029 18.9062C101.029 17.5627 102.111 16.4772 103.444 16.4772C104.088 16.4772 104.706 16.7329 105.161 17.1881C105.616 17.6434 105.872 18.2608 105.872 18.9045C105.872 19.5483 105.616 20.1657 105.161 20.6209C104.706 21.0761 104.088 21.3318 103.444 21.3318C102.113 21.3318 101.029 20.2446 101.029 18.9045"
                      fill="white"
                    />
                    <path
                      d="M23.1116 17.856C21.0281 17.856 19.5785 16.2007 19.5785 13.8341C19.5785 11.4691 21.0281 9.8155 23.1132 9.8155C25.2085 9.8155 26.6733 11.4691 26.6733 13.8341C26.6733 16.2378 25.2406 17.856 23.1116 17.856ZM23.1116 6.2807C18.7019 6.2807 15.5009 9.45814 15.5009 13.8341C15.5009 18.2117 18.7036 21.3875 23.1116 21.3875C27.5398 21.3875 30.7525 18.2117 30.7525 13.8358C30.7525 9.45814 27.5381 6.2807 23.1116 6.2807ZM58.1493 14.2133C57.9959 13.9165 57.8019 13.6425 57.5729 13.3992L57.438 13.2593L57.5797 13.1244C57.7819 12.9103 57.9892 12.6575 58.1881 12.3642L62.0819 6.57906H57.3555L54.4308 11.105C54.2656 11.3477 53.9319 11.4691 53.4313 11.4691H52.7654V2.91278C52.7654 1.20185 51.6984 0.969232 50.5471 0.969232H48.5749L48.5799 21.1649H52.7671V15.1067H53.1599C53.6369 15.1067 53.9605 15.1624 54.1105 15.422L56.4198 19.781C57.0654 20.9644 57.7077 21.1649 58.918 21.1649H62.1258L59.7356 17.2138L58.1511 14.2133M78.4749 6.24699C76.3442 6.24699 74.9856 7.19432 74.2237 7.995L73.9709 8.25122L73.8798 7.90229C73.6573 7.0443 72.9022 6.574 71.7677 6.574H69.8915L69.9034 21.1599H74.0618V14.4375C74.0618 13.7801 74.1461 13.2104 74.3214 12.6895C74.7833 11.1134 76.0745 10.1341 77.6876 10.1341C78.9856 10.1341 79.493 10.8201 79.493 12.5901V18.9433C79.493 20.4536 80.1925 21.1599 81.7045 21.1599H83.6835L83.6768 11.8821C83.6768 8.19728 81.8782 6.24699 78.4749 6.24699ZM65.3083 6.57906H63.3377L63.3512 17.8577V21.1649H65.4532L65.5274 21.1683L66.5085 21.1649H67.4828V21.1599H67.4895L67.4979 8.79568C67.4979 7.30389 66.785 6.58074 65.31 6.58074M39.4437 17.856C37.3603 17.856 35.909 16.2007 35.909 13.8341C35.909 11.4691 37.3603 9.8155 39.4455 9.8155C41.5357 9.8155 43.0056 11.4691 43.0056 13.8341C43.0056 16.2378 41.5728 17.856 39.4455 17.856H39.4437ZM39.4437 6.2807C35.0307 6.2807 31.828 9.45814 31.828 13.8341C31.828 18.2117 35.0308 21.3875 39.4455 21.3875C43.8669 21.3875 47.0865 18.2117 47.0865 13.8358C47.0865 9.45814 43.8669 6.2807 39.4455 6.2807"
                      fill="white"
                    />
                  </g>
                </g>
                <mask
                  id="mask2_7_17"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="-1"
                  width="160"
                  height="28"
                >
                  <path
                    d="M0.370438 -0.195516H159.664V26.8338H0.370438V-0.195516Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask2_7_17)">
                  <mask
                    id="mask3_7_17"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="160"
                    height="27"
                  >
                    <path
                      d="M0.370438 0.337146H159.63V26.7984H0.370438V0.337146Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask3_7_17)">
                    <mask
                      id="mask4_7_17"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="-1"
                      width="160"
                      height="28"
                    >
                      <path
                        d="M0.370438 26.8338H159.664V-0.195516H0.370438V26.8338Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask4_7_17)">
                      <path
                        d="M128.572 17.856C126.489 17.856 125.036 16.2007 125.036 13.8341C125.036 11.4691 126.489 9.8155 128.572 9.8155C130.666 9.8155 132.134 11.4691 132.134 13.8341C132.134 16.2378 130.701 17.856 128.572 17.856ZM128.572 6.2807C124.159 6.2807 120.958 9.45814 120.958 13.8341C120.958 18.2117 124.159 21.3875 128.572 21.3875C132.995 21.3875 136.213 18.2117 136.213 13.8358C136.213 9.45814 132.994 6.2807 128.572 6.2807Z"
                        fill="white"
                      />
                      <path
                        d="M92.4438 17.2138C90.1699 17.2138 89.3608 15.2315 89.3608 13.3722C89.3608 12.553 89.568 9.88462 92.2263 9.88462C93.5462 9.88462 95.3043 10.2622 95.3043 13.5088C95.3043 16.5716 93.7485 17.2138 92.4438 17.2138ZM97.4636 6.5403C96.6747 6.5403 96.0679 6.85551 95.7628 7.43032L95.6482 7.65282L95.456 7.48426C94.7851 6.9044 93.5816 6.21497 91.6279 6.21497C87.7392 6.21497 85.1214 9.13619 85.1214 13.4801C85.1214 17.8223 87.8302 20.8565 91.7055 20.8565C93.0287 20.8565 94.0754 20.5463 94.9048 19.9193L95.2251 19.6782V20.0828C95.2251 22.0314 93.9659 23.1068 91.6818 23.1068C90.571 23.1068 89.5613 22.8371 88.8837 22.591C88.0038 22.3247 87.4846 22.5455 87.1289 23.4305L86.7986 24.2463L86.3316 25.4397L86.6199 25.5931C88.083 26.3685 89.9862 26.8321 91.7055 26.8321C95.2454 26.8321 99.3819 25.02 99.3819 19.9193L99.3971 6.5403H97.4636Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
                <mask
                  id="mask5_7_17"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="-1"
                  width="160"
                  height="28"
                >
                  <path
                    d="M0.370438 -0.195516H159.664V26.8338H0.370438V-0.195516Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask5_7_17)">
                  <mask
                    id="mask6_7_17"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="-1"
                    width="160"
                    height="28"
                  >
                    <path
                      d="M0.370438 26.8337H159.664V-0.195578H0.370438V26.8337Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask6_7_17)">
                    <path
                      d="M7.62713 17.6892L4.24236 17.6858V13.6402C4.24236 12.7738 4.5778 12.3254 5.3178 12.2209H7.62713C9.274 12.2209 10.3393 13.2593 10.341 14.9399C10.3393 16.666 9.30097 17.6875 7.62713 17.6875V17.6892ZM4.24236 6.77292V5.70759C4.24236 4.77543 4.63682 4.3321 5.50155 4.27479H7.23442C8.71947 4.27479 9.60949 5.16313 9.60949 6.65155C9.60949 7.7843 8.99926 9.10754 7.28833 9.10754H4.24236V6.77292ZM11.9492 10.8117L11.3372 10.4678L11.8716 10.011C12.4936 9.47669 13.5337 8.27483 13.5337 6.20148C13.5337 3.02573 11.0726 0.975982 7.26138 0.975982H2.41679C1.87168 0.995857 1.35513 1.2247 0.974159 1.61509C0.593183 2.00548 0.377002 2.52748 0.370438 3.07292V21.0925H7.34728C11.5833 21.0925 14.3174 18.7865 14.3174 15.2146C14.3174 13.2913 13.4342 11.6478 11.9492 10.8117Z"
                      fill="white"
                    />
                    <path
                      d="M154.787 6.2959C153.929 6.29907 153.082 6.49505 152.31 6.86938C151.537 7.2437 150.858 7.78682 150.324 8.45859L150.024 8.83954L149.788 8.41308C149.016 7.00893 147.691 6.2959 145.848 6.2959C143.915 6.2959 142.619 7.37472 142.017 8.01526L141.622 8.44173L141.471 7.88041C141.252 7.0713 140.532 6.62798 139.443 6.62798H137.695L137.678 21.1582H141.648V14.7444C141.648 14.1814 141.719 13.6268 141.858 13.0452C142.238 11.4944 143.279 9.82733 145.031 9.99421C146.11 10.0987 146.639 10.9331 146.639 12.5446V21.1582H150.637V14.7444C150.637 14.0414 150.703 13.5155 150.862 12.9896C151.182 11.5096 152.271 9.99252 153.96 9.99252C155.184 9.99252 155.635 10.6836 155.635 12.5446V19.0343C155.635 20.5008 156.289 21.1582 157.758 21.1582H159.625L159.629 11.8821C159.629 8.1754 157.997 6.2959 154.787 6.2959ZM118.657 16.1131C118.645 16.1283 116.938 17.9285 114.688 17.9285C112.638 17.9285 110.568 16.671 110.568 13.8644C110.568 11.4405 112.173 9.74642 114.472 9.74642C115.217 9.74642 116.066 10.0128 116.2 10.4628L116.218 10.5387C116.303 10.8485 116.488 11.1217 116.744 11.3158C117 11.51 117.313 11.6142 117.634 11.6124L119.809 11.6158V9.71439C119.809 7.20615 116.618 6.2959 114.472 6.2959C109.88 6.2959 106.549 9.49189 106.549 13.8948C106.549 18.2943 109.843 21.4869 114.388 21.4869C118.329 21.4869 120.473 18.8961 120.493 18.8708L120.608 18.7292L118.885 15.8721L118.657 16.1131Z"
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_7_17">
                  <rect width="160" height="27.136" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="90"
              height="33"
              viewBox="0 0 90 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2143 14.43V11.3571H22.5C22.605 11.8993 22.6671 12.5421 22.6671 13.2407C22.6671 15.5443 22.0371 18.3964 20.0057 20.4278C18.03 22.485 15.5079 23.5821 12.1607 23.5821C5.96143 23.5821 0.75 18.5357 0.75 12.3364C0.75 6.13713 5.96143 1.0907 12.1607 1.0907C15.5893 1.0907 18.03 2.43427 19.8686 4.18927L17.7021 6.3557C16.3864 5.12141 14.6036 4.16141 12.1607 4.16141C7.635 4.16141 4.09714 7.80856 4.09714 12.3364C4.09714 16.8643 7.635 20.5114 12.1607 20.5114C15.0964 20.5114 16.7679 19.3328 17.8393 18.2614C18.7114 17.3893 19.2857 16.14 19.5086 14.43H12.2143Z"
                fill="white"
              />
              <path
                d="M38.34 16.3393C38.34 20.5093 35.0764 23.58 31.0714 23.58C27.0664 23.58 23.8029 20.5071 23.8029 16.3393C23.8029 12.1436 27.0664 9.09857 31.0714 9.09857C35.0764 9.09857 38.34 12.1436 38.34 16.3393ZM35.1579 16.3393C35.1579 13.7336 33.2657 11.9507 31.0714 11.9507C28.8771 11.9507 26.985 13.7336 26.985 16.3393C26.985 18.9171 28.8771 20.7279 31.0714 20.7279C33.2657 20.73 35.1579 18.9193 35.1579 16.3393Z"
                fill="white"
              />
              <path
                d="M53.9829 16.3393C53.9829 20.5093 50.7193 23.58 46.7143 23.58C42.7093 23.58 39.4457 20.5071 39.4457 16.3393C39.4457 12.1436 42.7093 9.09857 46.7143 9.09857C50.7193 9.09857 53.9829 12.1436 53.9829 16.3393ZM50.8007 16.3393C50.8007 13.7336 48.9086 11.9507 46.7143 11.9507C44.52 11.9507 42.6279 13.7336 42.6279 16.3393C42.6279 18.9171 44.52 20.7279 46.7143 20.7279C48.9086 20.73 50.8007 18.9193 50.8007 16.3393Z"
                fill="white"
              />
              <path
                d="M69 9.53358V22.5386C69 27.8871 65.8457 30.0814 62.115 30.0814C58.605 30.0814 56.4921 27.7222 55.6971 25.8022L58.4679 24.6493C58.9607 25.8279 60.1693 27.2271 62.115 27.2271C64.5021 27.2271 65.9829 25.7464 65.9829 22.9757V21.9343H65.8736C65.16 22.8129 63.7886 23.58 62.0614 23.58C58.44 23.58 55.1207 20.4257 55.1207 16.365C55.1207 12.2786 58.44 9.09644 62.0614 9.09644C63.7886 9.09644 65.16 9.86358 65.8736 10.7143H65.9829V9.53144H69V9.53358ZM66.2014 16.3671C66.2014 13.815 64.5 11.9507 62.3336 11.9507C60.1393 11.9507 58.3007 13.815 58.3007 16.3671C58.3007 18.8914 60.1393 20.7279 62.3336 20.7279C64.5021 20.73 66.2014 18.8914 66.2014 16.3671Z"
                fill="white"
              />
              <path
                d="M74.3571 1.92859V23.1429H71.175V1.92859H74.3571Z"
                fill="white"
              />
              <path
                d="M86.43 18.7264L88.8986 20.3721C88.1036 21.5507 86.1836 23.5821 82.8643 23.5821C78.75 23.5821 75.6771 20.4 75.6771 16.3414C75.6771 12.0343 78.7757 9.10071 82.5064 9.10071C86.265 9.10071 88.1014 12.09 88.7057 13.7079L89.0357 14.5307L79.3521 18.5357C80.0936 19.9886 81.2443 20.73 82.8621 20.73C84.4821 20.73 85.6071 19.9329 86.43 18.7264ZM78.8314 16.1207L85.305 13.4336C84.9493 12.5293 83.8779 11.8971 82.6179 11.8971C80.9979 11.8971 78.75 13.3221 78.8314 16.1207Z"
                fill="white"
              />
            </svg>
            <svg
              width="90"
              height="40"
              viewBox="0 0 90 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_7_11)">
                <mask
                  id="mask0_7_11"
                  maskUnits="userSpaceOnUse"
                  x="-1"
                  y="-1"
                  width="91"
                  height="41"
                >
                  <path
                    d="M-0.0010376 -0.00250244H89.9978V39.9642H-0.0010376V-0.00250244Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_7_11)">
                  <path
                    d="M89.4425 29.8308H85.4635L89.5882 17.0762C89.7056 16.6957 89.4999 16.4326 89.1202 16.4326H80.5495C80.1964 16.4326 79.9933 16.6374 79.9933 16.9888V19.1553C79.9933 19.5085 80.1981 19.7107 80.5495 19.7107H84.0597L79.9103 32.4652C79.7929 32.8457 79.9986 33.1088 80.4074 33.1088H89.4469C89.8 33.1088 90.0022 32.904 90.0022 32.5526V30.3861C89.9978 30.0356 89.793 29.8308 89.4425 29.8308ZM78.707 30.5035V16.9888C78.707 16.6357 78.5022 16.4326 78.1508 16.4326H74.8454C74.4649 16.4326 74.2601 16.6374 74.2601 16.9888V18.1586H73.9387C73.6456 16.9297 72.7681 16.2278 71.1595 16.2278C68.7317 16.2278 67.3571 17.8072 67.3571 23.0443V26.5254C67.3571 31.7616 68.7025 33.3119 71.1595 33.3119C72.9146 33.3119 73.8804 32.4926 74.1435 30.9714H74.4967L74.8772 32.6091C74.9655 32.9313 75.1694 33.107 75.4952 33.107H78.5666C78.9763 33.107 79.1228 32.8422 79.0637 32.4891L78.707 30.5035ZM74.2601 27.4029C74.2601 29.5668 73.9069 30.0356 73.0612 30.0356C72.2419 30.0356 71.8905 29.5668 71.8905 27.4321V21.9319C71.8905 19.7671 72.271 19.2992 73.0612 19.2992C73.9096 19.2992 74.2601 19.7672 74.2601 21.9619V27.4029ZM65.9233 16.4618L62.7353 18.7439H62.5305V16.9888C62.5305 16.6357 62.3257 16.4326 61.9743 16.4326H58.8446C58.4915 16.4326 58.2884 16.6374 58.2884 16.9888V32.5508C58.2884 32.904 58.4932 33.107 58.8446 33.107H62.1791C62.5596 33.107 62.7353 32.9022 62.7353 32.5508V23.2165L66.2455 20.7012C66.5104 20.4964 66.5987 20.3207 66.5987 20.0285V16.8131C66.596 16.3743 66.2747 16.1987 65.9233 16.4618ZM56.6507 30.5035V16.9888C56.6507 16.6357 56.4459 16.4326 56.0945 16.4326H52.7935C52.413 16.4326 52.2082 16.6374 52.2082 16.9888V18.1586H51.8868C51.5946 16.9297 50.7171 16.2278 49.1076 16.2278C46.6798 16.2278 45.3052 17.8072 45.3052 23.0443V26.5254C45.3052 31.7616 46.6506 33.3119 49.1076 33.3119C50.8627 33.3119 51.8286 32.4926 52.0917 30.9714H52.4448L52.8244 32.6091C52.9127 32.9313 53.1175 33.107 53.4424 33.107H56.5015C56.9111 33.107 57.0577 32.8422 56.9986 32.4891L56.6507 30.5035ZM52.2038 27.4029C52.2038 29.5668 51.8506 30.0356 51.0049 30.0356C50.1856 30.0356 49.8351 29.5668 49.8351 27.4321V21.9319C49.8351 19.7671 50.2147 19.2992 51.0049 19.2992C51.8533 19.2992 52.2038 19.7672 52.2038 21.9619V27.4029ZM36.964 10.8751H32.1666C31.7861 10.8751 31.6104 11.0799 31.6104 11.4304V32.5508C31.6104 32.904 31.7869 33.107 32.1666 33.107H36.964C41.7314 33.107 43.9262 30.9423 43.9262 23.4531V20.5282C43.9262 12.835 41.5857 10.8751 36.964 10.8751ZM39.2453 25.5013C39.2453 28.7775 38.6273 29.4211 37.0805 29.4211H36.203V14.4762H37.0788C38.629 14.4762 39.2435 15.0324 39.2435 18.3961L39.2453 25.5013ZM22.728 5.92139L12.7235 0.159015C12.1391 -0.194126 11.6711 0.041584 11.6711 0.743451V13.0301L21.6165 18.7634C22.2018 19.1165 22.2018 19.6409 21.6165 19.9923L12.7235 25.1128C12.1391 25.466 11.6711 25.2302 11.6711 24.5284V13.0301L0.616959 19.407C0.175533 19.6718 -0.0010376 19.9631 -0.0010376 20.4602V32.6877C-0.0010376 33.1847 0.175533 33.4823 0.616959 33.7409L11.0602 39.7673C11.5016 40.0321 11.8495 40.0321 12.2883 39.7673L22.7315 33.7409C23.1729 33.4761 23.3495 33.1847 23.3495 32.6877V6.97198C23.3425 6.47758 23.1668 6.18448 22.728 5.92139Z"
                    fill="url(#paint0_linear_7_11)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_7_11"
                  x1="-13"
                  y1="20"
                  x2="98"
                  y2="27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_7_11">
                  <rect width="90" height="39.9673" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}