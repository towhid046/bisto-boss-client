const SectionButton = ({ url, buttonTitle }) => {
  return (
    <div className="flex justify-center mt-8">
      <button className="uppercase border-b-2 py-3 px-6 rounded-xl transition hover:bg-black hover:text-base-200 border-neutral duration-500 ease-in-out">
        {" "}
        {buttonTitle}
      </button>
    </div>
  );
};

export default SectionButton;
