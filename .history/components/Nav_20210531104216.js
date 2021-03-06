import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 key={key} className="cursor-pointer transition duration-700 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
