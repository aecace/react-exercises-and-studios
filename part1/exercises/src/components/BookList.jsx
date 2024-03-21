export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71sst0-sdEL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61k1WeKBsJL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Pride and Prejudice" />
         <img src={book2} alt="Howl's Moving Castle" />
         <img src={book3} alt="Rita Hayworth and Shawshank Redemption" />
      </div>      
   );
}