const Footer = () => {
  return (
    <div className="bg-black text-gray-300">
      <footer className="footer p-10 container mx-auto">
      <div>
        <span className="">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="">Newsletter</span>
        <div className="form-control w-80">
          <div className="relative">
            <input
              type="text"
              placeholder="user@email.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn bg-orange-600 border-0 absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
