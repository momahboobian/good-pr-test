const TeamOverview = () => {
  return (
    <div className="flex w-full p-6">
      <h1 className="font-bold ">Team Overview</h1>
      <p className="font-light text-xs text-gray-600 pt-2">
        Track your projects, tasks & team activity here
      </p>
      <div className="flex flex-col gap-6 pt-10">
        <div className="flex flex-col justify-between p-4">
          <h1 className="font-bold text-sm">Project</h1>
          <button className="bg-[#37BCBA] text-black rounded-lg p-2 pl-6 pr-6">
            See All Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamOverview;
