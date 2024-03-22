import styles from './Description.module.css';

export default function RecipePhoto() {
    return(
        <div>
            <img className={styles.imageUpdates} src="https://www.simplyrecipes.com/thmb/6NhQKyjhBOmu4y0RXXHipugv0Q8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-66837beab63c495292d89743c6767171.jpg" alt="recipe photo"/>
        </div>
    );
}