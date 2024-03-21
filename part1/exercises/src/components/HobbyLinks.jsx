export default function HobbyLinks() {
    let pageTitle = "My Hobbies"
    let hobbyLinks = ["https://www.louiseharnbyproofreader.com/podcast.html", "https://www.etsy.com/"];
     
    return (
       <div>
          <h3>{pageTitle}</h3>
          <article><a href = {hobbyLinks[0]}>Podcasts...</a></article>
          <article><a href = {hobbyLinks[1]}>Vintage clothes shopping...</a></article>
       </div>      
    );
 }