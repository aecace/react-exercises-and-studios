import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.simplyrecipes.com/recipes/banana_bread/";
    let authorPhoto = "https://www.simplyrecipes.com/thmb/BmLdsbTN8CZ0UGXJ4SvBeYS_qmM=/120x180/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SRHeadshots-EliseBauer-5c36c598a88d4ba3bff66260a792ea47.jpg";
    let authorName = "Elise Bauer";

    return(
        <div className="styles.recipeAuthorBlock">
            <img className={styles.imageUpdates} src={authorPhoto} alt="photo of author"/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>My Favorite Recipe</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;