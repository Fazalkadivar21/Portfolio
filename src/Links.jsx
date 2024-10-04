import React from "react";

function Buttons({ data }) {
  return (
    <div className="px-7 | space-y-6">
      <h2>Find me on</h2>
      {Object.entries(data).map(([key, value]) => (
        <ul className="px-6 | mb-1" key={key}>
          <li className="flex | justify-between | items-center | w-3/6">
            <span className="font-medium | text-gray-400">{key}</span>
            <span>
              <a href={value}>@{value.split("/").slice(-1)[0]}</a>
            </span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Buttons;
