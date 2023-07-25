// Calculate the start and end dates for the progress line
const calculateProgressDates = (repo) => {
  const currentDate = new Date();
  const startDate = new Date(repo.created_at);
  const endDate = new Date(startDate.getTime() + 4 * 7 * 24 * 60 * 60 * 1000); // 4 weeks in milliseconds
  return { startDate, endDate, currentDate };
};

export default function ProgressBar({ repo, pr }) {
  const trainees = (pr && pr.filter((el) => el.total_count !== 0)) || [];

  const { startDate, endDate, currentDate } = calculateProgressDates(repo);

  // Calculate the total number of days
  const totalDays = Math.round(
    (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="bg-[#1A1E1F] rounded-2xl w-full min-w-max">
      <div className="flex flex-col justify-between max-w-xs mx-auto md:max-w-md lg:max-w-lg p-6 space-y-10 w-full">
        <div className="flex items-center mt-4">
          <div
            className="bg-yellow-500 h-2 rounded-l-full flex-grow-1 relative"
            style={{
              width: `${((totalDays / 28) * 100).toFixed(2)}%`,
            }}
          >
            <div className="absolute top-0 -right-2 w-2 h-2 bg-[#1A1E1F] transform rotate-45 translate-x-1/2"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-500 transform rotate-45 translate-x-1/2"></div>
            <div className="absolute top-[-18px] text-[#606467] text-xs rounded-full">
              {totalDays} days
            </div>
          </div>

          <div className="bg-gray-300 h-2 flex-grow ml-2 rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
}
