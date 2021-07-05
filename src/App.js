import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const reactions = {
  neutral: ".........",
  happy: "Yeaaaay !!!",
  sad: "I want to cry ",
  confused: "What was that ???",
};

const emotionOptions = [
  { label: "Neutral", value: "neutral" },
  { label: "Happy", value: "happy" },
  { label: "Sad", value: "sad" },
  { label: "Confused", value: "confused" },
];

const emotionReactionOptions = [
  { emotionLabel: "Neutral", reactionLabel: "........." },
  { emotionLabel: "Happy", reactionLabel: "Yeaaaay !!!" },
  { emotionLabel: "Sad", reactionLabel: "I want to cry" },
  { emotionLabel: "Confused", reactionLabel: "What was that ???" }
];

const Label = ({ labelID, content }) => (
  <label htmlFor={labelID} className="mt-2 mb-2">
    {content}
  </label>
);

// const Selection = ({ selectionID, options, emotion, onSelectionChange }) => {
//   return (
//     <select
//       className="form-select"
//       id={selectionID}
//       value={emotion}
//       onChange={onSelectionChange}
//     >
//       {options?.map((e, i) => (
//         <option key={i} value={e.value}>
//           {e.label}
//         </option>
//       ))}
//     </select>
//   );
// };

const Selection = ({ selectionID, options, emotion, onSelectionChange }) => {
  return (
    <select
      className="form-select"
      id={selectionID}
      value={emotion}
      onChange={onSelectionChange}
    >
      {options?.map((e, i) => (
        <option key={i} value={e.reactionLabel}>
          {e.emotionLabel}
        </option>
      ))}
    </select>
  );
};

const Input = ({ inputID, defaultValue }) => {
  return (
    <input
      id={inputID}
      disabled
      className="form-control"
      value={defaultValue}
      // defaultValue={defaultValue}
    />
  );
};

// const Form = () => {
//   const [emotion, setEmotion] = useState(emotionOptions[0].value);
//   console.log(emotion);
//   const handleChange = (e) => {
//     if (e.target) {
//       setEmotion(e.target.value);
//     }
//   };
//   return (
//     <form>
//       <Label labelID="emotion" content="Select emotions" />
//       <Selection
//         selectionID="emotion"
//         options={emotionOptions}
//         value={emotion}
//         onSelectionChange={handleChange}
//       />
//       <Label labelID="reaction" content="Reaction" />
//       <Input
//         // key={emotion}
//         inputID="reaction"
//         defaultValue={reactions[emotion]}
//       />
//     </form>
//   );
// };

const Form = () => {
  // const [emotion, setEmotion] = useState(emotionOptions[0].value);
  // const [emotion, setEmotion] = useState(emotionReactionOptions[0].emotionLabel);
  const [reactionState, setReactionState] = useState(emotionReactionOptions[0].reactionLabel);
  // console.log(emotionReactionOptions[1].reactionLabel);
  const handleChange = (e) => {
    if (e.target) {
      // setEmotion(e.target.value);
      // setEmotion(e.target.value);
      setReactionState(e.target.value);
      // console.log(e.target);
    }
  };
  return (
    <form>
      <Label labelID="emotion" content="Select emotions" />
      <Selection
        selectionID="emotion"
        options={emotionReactionOptions}
        value={reactionState}
        onSelectionChange={handleChange}
      />
      <Label labelID="reaction" content="Reaction" />
      <Input
        // key={emotion}
        inputID="reaction"
        defaultValue={reactionState}
      />
    </form>
  );
};

function App() {
  
  return (
    <div className="container pt-2">
      <Form />
      
    </div>
  );
}


export default App;
