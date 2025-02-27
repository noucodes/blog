import Logo from "../assets/Logo.jpg";

const Sidemenu = () => {
  return (
    <div className="aside flex flex-col px-0 md:px-0">
      <img src={Logo} alt="Logo" className="w-25 h-25 mb-4 rounded-full" />
      <h3 className="Name font-bold mb-3">Elton John Escudero</h3>
      <p className="Description font-light mb-2">
        Junior Web Developer and Computer Engineering student with experience in
        full-stack development, automation, and databases. Passionate about
        software development, Linux, Vim, and remote servers, with a strong
        problem-solving mindset.
      </p>
      <div className="social-media flex gap-4 font-light text-gray-500 mb-7">
        <a href="">
          <p className="social hover:border-b-2 border-gray-300">Github</p>
        </a>
        <a href="">
          <p className="social hover:border-b-2 border-gray-300">Reddit</p>
        </a>
        <a href="">
          <p className="social hover:border-b-2 border-gray-300">Discord</p>
        </a>
        <a href="">
          <p className="social hover:border-b-2 border-gray-300">@</p>
        </a>
      </div>
      <div className="side-menu">
        <ul>
          <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
            <a href="">Articles</a>
          </li>
          <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
            <a href="">Notes</a>
          </li>
          <li className="social font-bold py-2 px-1 hover:border-l-2 border-gray-200">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidemenu;
