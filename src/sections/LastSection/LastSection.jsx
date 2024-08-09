import Image from "next/image";
import Quote from "../../../public/images/Group.svg";
import useWindowSize from "@/hooks/useScreenSize";

const LastSection = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;
  return (
    <section className="md:mt-[6.81rem] mt-[3.88rem] pb-[30.31rem] relative w-screen z-10">
      <div className="md:mx-[6.25rem] mx-[0.62rem] flex md:flex-row flex-col md:space-x-[7.38rem] md:items-center items-start relative z-20">
        {/* text LastSection */}
        <div className=" md:max-w-[37rem] max-w-[20.9375rem] flex flex-col space-y-[2rem]">
          <div className="flex flex-col md:space-y-[2rem] space-y-[1rem]">
            <Image
              src={Quote}
              width={61}
              height={47}
              alt="Research imgae"
              className="md:w-[3.79113rem] w-[2.41988rem] bg-cover flex-1"
            />
            <p
              className="md:text-[2rem] w-[20.9375rem] md:w-[37rem] text-[1rem] md:ml-[1.88rem] ml-0 not-italic font-semibold md:leading-[3rem] leading-6"
              data-aos-once
              data-aos="fade-up"
            >
              {isMobile
                ? "Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. Amber Capital thực sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà OkHub mang lại cho chúng tôi. "
                : "Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OkHub. PSD thực sự ấn tượng với thiết kế đẹp mắt và tính năng dễ sử dụng mà OkHub mang lại cho chúng tôi."}
            </p>
          </div>
          <div
            className="flex flex-col space-y-[0.62rem] md:ml-[1.88rem] ml-0"
            data-aos-once
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-left md:text-2xl text-[1.125rem] not-italic font-bold leading-[1.875rem]">
              CEO Huyền Trang
            </span>
            <span className="text-left md:text-xl text-base not-italic font-normal leading-6">
              Giám đốc TheKey Wine
            </span>
          </div>
        </div>

        {/* image LastSection */}
        <div data-aos-once data-aos="fade-right">
          <Image
            src="/images/lastSection.jpg"
            width={660}
            height={515}
            alt="Research imgae"
            className="md:w-[41.25rem] w-[21.5rem] bg-cover flex-1 mt-[1.5rem] md:mt-0"
          />
        </div>
      </div>
      <Image
        src={"/images/bg-last.png"}
        width={1600}
        height={722}
        alt="Research imgae"
        className="md:w-screen md:h-auto h-[17.3125rem] z-10  absolute top-[8.3rem] md:top-0 bg-cover bg-no-repeat translate-y-[-3.75rem]"
      />
    </section>
  );
};

export default LastSection;
