const Footer = () => {
  return (
    <>
      <h2 className="text-white text-4xl font-semibold text-center pb-5">
        Let&apos;s create awesome products!
      </h2>
      <h3 className="text-#bedbfe text-2xl font-light text-center px-4">
        From enhancing your online presence to tackling UX/UI design challenges,
        I&apos;m here to discuss and elevate your project.
      </h3>
      <div className="grid place-items-center my-12">
        <a href="mailto:gk445891@gmail.com">
          <button className="bg-blue-600 hover:bg-blue-900 py-3 px-12 rounded text-xl font-medium ">
            Say Hello
          </button>
        </a>
      </div>

      <div className="flex justify-around items-center text-xl text-#bedbfe">
        <div>Stalk me here</div>
        {/* <div>&gt;</div> */}
        <hr className="border-1 border-blue-950 w-3/5" />
        <div>
          <a
            href="https://github.com/Gauravkumario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon aria-hidden="true" name="logo-github" />
          </a>
          <a
            href="https://linkedin.com/in/gk2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon aria-hidden="true" name="logo-linkedin" />
          </a>
          <a
            href="https://twitter.com/gkgaurv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon aria-hidden="true" name="logo-twitter" />
          </a>
        </div>
      </div>
      <p className="text-center tracking-widest">
        &copy; {new Date().getFullYear()} GAURAV KUMAR
      </p>
    </>
  );
};

export default Footer;
