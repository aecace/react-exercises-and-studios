function ClickedButton() {
  function handleClick() {
    alert("You are saving this pin!");
  }
  return (
    <button class="a" id="clickedButton" onClick={handleClick}>
      Save
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
