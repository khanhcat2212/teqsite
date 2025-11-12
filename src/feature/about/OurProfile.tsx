import Subject from "@src/components/subject/Subject";

const OurProfile = () => {
  return (
    <div className="flex flex-col lg:justify-between px-8 gap-10 lg:px-44 pt-20 pb-34 bg-[url('/about_us/profile_bg.svg')] bg-cover bg-center bg-no-repeat">
      <Subject title="OUR CAPABILITIES" />

      <div className="w-full mx-auto rounded-md overflow-hidden bg-grey-950">
        <table className="w-full text-[14px] lg:text-[16px] text-left table-fixed">
          <tbody>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                {" "}
                Company Name
              </th>
              <td className="py-4 px-6 ">Teqnological Asia Ltd.</td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Representative
              </th>
              <td className="py-4 px-6">Le Hoai Nam</td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Head Office
              </th>
              <td className="py-4 px-6">
                No. 301, Floor 3, Block B, Waseco Plaza, 10 Pho Quang, Ward 2,
                Tan Binh, Ho Chi Minh City, Vietnam
              </td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Phone Number
              </th>
              <td className="py-4 px-6">(+84) 335 3335 88</td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Email
              </th>
              <td className="py-4 px-6">contact@teqnological.asia</td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Established
              </th>
              <td className="py-4 px-6">October 26, 2017</td>
            </tr>
            <tr className="border-b-2 border-white">
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Capital
              </th>
              <td className="py-4 px-6">$100,000</td>
            </tr>
            <tr>
              <th className="py-4 px-6 font-semibold w-1/5 border-r-2 border-white">
                Employees (2023)
              </th>
              <td className="py-4 px-6">83</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurProfile;
