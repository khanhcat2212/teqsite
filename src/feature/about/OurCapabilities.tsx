import GridList from "@src/components/cardlist/GridList";
import Subject from "@src/components/subject/Subject";
import { capabilities } from "@src/constants/capabilities";

const OurCapabilities: React.FC = () => {
  return (
    <div className="flex flex-col lg:justify-between px-8 gap-10 lg:px-44 pt-20 pb-34">
      <Subject title="OUR CAPABILITIES" />

      <GridList cards={capabilities} variant="capability" />
    </div>
  );
};

export default OurCapabilities;
