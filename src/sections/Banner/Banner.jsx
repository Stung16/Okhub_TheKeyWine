import useWindowSize from "@/hooks/useScreenSize";
import Image from "next/image";

const Banner = () => {
  const { width } = useWindowSize();
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-y-[4.5rem] md:gap-x-[6.75rem] h-[45.375rem] md:h-[51.6875rem] items-center pt-[4.25rem] relative  md:mb-[13.44rem] mb-[20.25rem]">
      <Image
        src={`${
          width <= 767 ? "/images/bg-banner-mb.png" : "/images/bg-bannerr.png"
        }`}
        width={747}
        height={714}
        alt="Banner Logo"
        className=" flex-shrink-0 w-screen h-auto bg-cover bg-center absolute top-0"
        priority={true}
      />
       <Image
        src={`/icons/bg-layoutBlur.svg`}
        width={747}
        height={714}
        alt="Banner Logo"
        className=" flex-shrink-0 md:w-[35.6875rem] w-[22.9375rem] md:h-[41.5625rem] h-[22.375rem] bg-no-repeat md:scale-x-[-1] absolute top-[-3rem]  md:right-0 left-[-3rem] md:left-auto"
      />
      {/* banner-Text */}
      <div
        className="md:ml-[5.63rem] ml-[1.5rem] "
        data-aos-once
        data-aos="fade-up"
      >
        <h1 className="text-banner md:w-[40.125rem] w-[18.1875rem]">
          TheKey Wine - Biểu tượng của sự xa hoa và đẳng cấp
        </h1>
        <div className="md:mt-[3.75rem] mt-8">
          <ul className="grid md:grid-cols-4 grid-cols-2 gap-y-[1.75rem]">
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Khách hàng
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  TheKey Wine
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Dịch vụ
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  UI/UX Design
                </span>
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Development
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Thời gian
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  11/09/2021
                </span>
              </div>
            </li>
            <li
              className="flex flex-col space-y-[0.5rem] "
              data-aos-once
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h4 className="text-white md:text-base text-sm not-italic font-medium leading-6 uppercase opacity-70">
                Thành viên
              </h4>
              <div className="flex flex-col space-y-[0.5rem] ">
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Trang Nguyễn
                </span>
                <span className="text-white md:text-lg text-base not-italic font-semibold leading-6">
                  Hai DN
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* banner logo */}
      <div
        data-aos-once
        data-aos="fade-right"
        className="relative "
      >
        <Image
          src="/images/logoBanner.png"
          width={747}
          height={714}
          alt="Banner Logo"
          className="md:w-[46.6875rem] w-[23.1875rem] flex-shrink-0 h-auto translate-x-[0.63rem] bg-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Banner;
