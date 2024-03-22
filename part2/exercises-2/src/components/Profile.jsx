import './styles.css';
import Button from './Button';
import oceans from './oceans.json'


function Profile() {
   const listItem = oceans.map(oceans =>
      <div className={`${oceans.fishCheck === "true" ? "isAFish" : "profile"}`} key={oceans.id}>
         <h1>{oceans.name}</h1>
         <img className='img' src={oceans.image} alt={oceans.name} />
         <h2>Fun Facts:</h2>
         <ul>
            <li>{oceans.fact1}</li>
            <li>{oceans.fact2}</li>
            <li>{oceans.fact3}</li>
         </ul>
         <Button />
      </div>
   );

   return(
      <ul>
         {listItem}
      </ul>
   );
}

export default Profile;