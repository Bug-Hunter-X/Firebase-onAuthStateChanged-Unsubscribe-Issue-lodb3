const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log('user is signed in', uid);
  } else {
    // User is signed out
    console.log('user is signed out');
  }
});

useEffect(() => {
  // Cleanup function to unsubscribe
  return () => {
    unsubscribe();
  };
}, []);