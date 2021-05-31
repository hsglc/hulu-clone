import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-0 hover:text-white "
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
