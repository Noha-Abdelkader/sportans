// import React from "react";
// import Typed from "typed.js";

// type Props = {
//   selectedText: string[];
// };

// export default function TextTyping({ selectedText }:Props) {
//   // Create reference to store the DOM element containing the animation
//   const el = React.useRef(null);

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: selectedText,
//       typeSpeed: 50,
//       smartBackspace: true,
//       shuffle: false,
//     });

//     return () => {
//       // Destroy Typed instance during cleanup to stop animation
//       typed.destroy();
//     };
//   }, []);

//   return <p ref={el}></p>;
// }
