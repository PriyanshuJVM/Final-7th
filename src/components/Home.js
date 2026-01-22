// // import React, { useContext } from "react";
// // import { StateContext } from "../context/contextProvider";

// // const Home = () => {
// //   const { setState } = useContext(StateContext);

// //   return (
// //     <div>
// //       <h1>Welcome to Vook</h1>
// //       <p>Your personal book recommendation app.</p>
// //       <button onClick={() => setState("ADD_BOOK")}>Add Book</button>
// //       <button onClick={() => setState("UPDATE_BOOK")}>Update Book</button>
// //       <button onClick={() => setState("REMOVE_BOOK")}>Remove Book</button>
// //     </div>
// //   );
// // };

// // export default Home;


// import React, { useContext } from "react";
// import { StateContext } from "../context/contextProvider";
// import "./Home.css"; 

// const Home = () => {
//   const { setState } = useContext(StateContext);

//   return (
//     <div className="home-container">
//       <header className="home-header">

//         <h1>Welcome to <span>Vook</span></h1>

//         <p>Your personal book recommendation app.</p>

//       </header>
      
//       <div className="button-group">

//         <button className="btn btn-add" onClick={() => setState("ADD_BOOK")}>
//           <span className="icon">+</span> Add Book
//         </button>

//         <button className="btn btn-update" onClick={() => setState("UPDATE_BOOK")}>
//           <span className="icon">↺</span> Update Book
//         </button>

//         <button className="btn btn-remove" onClick={() => setState("REMOVE_BOOK")}>
//           <span className="icon">×</span> Remove Book
//         </button>

//             <button className="btn btn-remove" onClick={() => setState("DATABASE")}>
//           <span className="icon">👁️</span> View Database
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import { StateContext } from "../context/contextProvider";
import "./Home.css"; 

const Home = () => {
  const { setState } = useContext(StateContext);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to <span>Vook</span></h1>
        <p>Your personal book Management App</p>
      </header>
      
      <div className="button-group">
        <button className="btn btn-add" onClick={() => setState("ADD_BOOK")}>
          <span className="icon">+</span> Add Book
        </button>

        <button className="btn btn-update" onClick={() => setState("UPDATE_BOOK")}>
          <span className="icon">↺</span> Update Book
        </button>

        <button className="btn btn-remove" onClick={() => setState("REMOVE_BOOK")}>
          <span className="icon">×</span> Remove Book
        </button>

        <button className="btn btn-database" onClick={() => setState("DATABASE")}>
          <span className="icon">👁️</span> View Database
        </button>

        <button className="btn btn-read-ebook" onClick={() => setState("READ_EBOOK")}>
          <span className="icon">📚</span> Read e-Book
        </button>
      </div>
    </div>
  );
};

export default Home;