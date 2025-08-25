export default function TransparentEffect(setIsClicked) {
  setIsClicked(true);
  setTimeout(() => {
    setIsClicked(false);
  }, 100); // Duration of the effect in milliseconds
}

// File: src/scripts/transparent-effect.js
// End of file
