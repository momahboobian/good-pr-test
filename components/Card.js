const Card = ({ title, description }) => {
  return (
    <div className=" flex justify-center border-b border-gray-300 bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200lg:dark:bg-zinc-800/30 p-24">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
