let getall = async () => {
  let username = document.getElementById("userinput").value;
  if (username) username += "/";
  let response = await fetch(
    `http://movie-database-rest.herokuapp.com/${username}`
  );
  let movies = await response.json();
  console.log("Response: ", JSON.stringify(movies));
  movies = movies.filter((e) => e.user);

  let count = 0;
  let table = `
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Director
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Year
              </th>
    
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Watched
              </th>
              
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Favourite
              </th>
    

              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Watchlist
              </th>
              
            </tr>

          </thead>
          <tbody>
    `;

  movies.forEach((movie) => {
    count++;
  table += `
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${count}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.name}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.director}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.year}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.is_watched}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.is_favourite}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              ${movie.on_watchlist}
              </td>
            </tr>
`;
  });

  table += `
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  `;

  // Display result
  document.getElementById("user-movies-show").innerHTML = table;
};
