import AddQuest from './AddQuest';
import './index.css'
import React, { useState } from 'react';
function App() {


  const [quests, setQuests] = useState([])

  function saveAddQuest(title) {
    let auxQuests = quests;
    let id = 0;
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length - 1].id;
    }
    id++;

    const createdQuest = {
      id: id,
      title: title,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString(),
    };
    auxQuests.push(createdQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")));
  }
  return (
    <div className="flex h-screen justify-center items-center bg-slate-700">
      <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-lg rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <p className="text-4xl font-work font-bold w-fit text-center text-white">
          Quests To Do
        </p>
        <AddQuest saveAddQuest={saveAddQuest}></AddQuest>

      </div>
    </div>
  );
}


export default App;
