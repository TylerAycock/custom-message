import { useState } from "react";
import classes from "./MessageGenerator.module.css";

const dummyMessages = [
  {
    id: "anyone",
    messages: [
      "For a guy that can crack the toughest nuts.",
      "They know everything.Call it off",
      "Love is a many splintered thing. Handle with care.",
    ],
  },
  {
    id: "squeeze",
    messages: [
      "Marry me. JK",
      "If I were to make a marble statue of you I'd include your head and all your arms and legs.",
      "Are you asthma, high altitudes, or any form of mild exercise? Because you take my breath away.",
    ],
  },
  {
    id: "bro",
    messages: [
      "You are the Kirk to my Spock, the Starsky to my Hutch.",
      "There are many types of love worth celebrating: Brotherly love is one. Passionate love of food is another.",
      "I've been thinking we should quit our jobs and make that funk-rock record.  You in?",
    ],
  },
];

function MessageGenerator() {
  const [message, setMessage] = useState("");
  const [dropdown, setDropdown] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    let filter = dummyMessages.filter((obj) => {
      if (obj.id === dropdown) {
        return obj;
      }
    });
    let messages = filter[0].messages;

    setMessage(() => messages[Math.floor(Math.random() * messages.length)]);
  }

  return (
    <div>
      <textarea
        name=""
        id=""
        cols="100"
        rows="10"
        value={message}
        placeholder="Write your gift note here. Stumped? Click below for suggestions"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <form onSubmit={submitHandler}>
        <select name="" id="" onChange={(e) => setDropdown(e.target.value)}>
          <option value="blank"> </option>
          <option value="anyone">Litterally Anyone</option>
          <option value="squeeze">My Main Squeeze</option>
          <option value="bro">My Bro</option>
        </select>
        <button>Suggest A Note</button>
      </form>
    </div>
  );
}

export default MessageGenerator;
