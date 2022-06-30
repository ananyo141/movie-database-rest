let getall = async () => {
  let username = document.getElementById("userinput").value;
  if (username) 
    username += "/";
  let response = await fetch(`http://127.0.0.1:8000/${username}`);
  let movies = await response.json();
  console.log("Response: ", JSON.stringify(movies));
  movies = movies.filter((e) => e.user);

  let li = `<table><tr class="bg-gray-200 p-8"><th>Name</th><th>Year</th></tr>`;

  // Loop through each data and add a table row
  movies.forEach((movie) => {
    li += `<tr>
                <td>${movie.name} </td>
                <td>${movie.director}</td>        
                <td>${movie.year}</td>        
                <td>${movie.is_watched}</td>        
                <td>${movie.is_favourite}</td>        
                <td>${movie.on_watchlist}</td>        
            </tr>`;
  });
  li += `</table>`;

  // Display result
  document.getElementById("user-movies-show").innerHTML = li;
};
