import bgImg from "../../../assets/home/chef-service.jpg";
const SinglePoster = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`bg-cover bg-center bg-no-repeat mb-10`}
    >
      <div className="md:p-20 p-10 ">
        <div className="bg-base-100 md:py-16 px-10 py-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl uppercase">Bistro Boss</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            aperiam obcaecati veniam autem ullam sequi ipsa quibusdam, doloribus
            magni tempore tempora voluptates architecto aliquam at hic earum
            impedit, provident pariatur!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePoster;
