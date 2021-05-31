import requests from "../utils/requests";

function Nav() {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <button key={key} className="cursor-pointertransition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110">{title}</button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
