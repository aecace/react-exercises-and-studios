let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  return (props.rating < 6 && (props.rating > 0) ? <h3>{stars[props.raintg - 1]}</h3> : null);
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
