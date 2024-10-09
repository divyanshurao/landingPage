const CardHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div className="w-20 md:w-28 h-20 md:h-28 relative mx-auto">
      <img className="" src="/logo.jpeg" alt="speaker"/>
      </div>
      <div className="text-center mb-4 lg:mb-6 space-y-4 lg:space-y-6">
        <h1 className="text-4xl md:text-[45px] font-semibold leading-none md:leading-tight text-[#000000]">
          {title}
        </h1>
        <p className="text-lg md:text-[26px] font-normal text-[#175279]/90">
          Join the waitlist to get Gramo!
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
