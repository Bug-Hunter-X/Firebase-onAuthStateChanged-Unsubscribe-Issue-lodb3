# Firebase onAuthStateChanged Unsubscribe Issue
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: improper unsubscription leading to memory leaks.  The initial code demonstrates the problem, while the solution shows how to correctly unsubscribe when the component unmounts using React's `useEffect` hook.  This ensures that the listener is detached, preventing memory leaks and unexpected behavior.  The solution uses a cleanup function in `useEffect` to unsubscribe before the component is removed from the DOM.