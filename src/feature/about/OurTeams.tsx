import GridList from "@src/components/cardlist/GridList";
import Subject from "@src/components/subject/Subject";
import { teams } from "@src/constants/teams";

const OurTeams = () => {
  return (
    <div className="flex flex-col lg:justify-between px-8 gap-10 lg:px-44 pt-20 pb-34 bg-grey-50">
      <Subject title="OUR TEAMS" />

      <GridList cards={teams} variant="team" />
    </div>
  );
};

export default OurTeams;
