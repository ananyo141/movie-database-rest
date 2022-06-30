let getall = async () => {
  let response = await fetch("http://127.0.0.1:8000/");
  let movies = await response.json();
  console.log("Response: ", JSON.stringify(movies));
    movies = movies.filter(e => e.user)

  //       `

  // <div class="flex flex-col">
  //   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  //     <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
  //       <div class="overflow-hidden">
  //         <table class="min-w-full">
  //           <thead class="border-b">
  //             <tr>
  //               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  //                 #
  //               </th>
  //               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  //                 First
  //               </th>
  //               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  //                 Last
  //               </th>
  //               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
  //                 Handle
  //               </th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr class="border-b">
  //               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Mark
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Otto
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 @mdo
  //               </td>
  //             </tr>
  //             <tr class="bg-white border-b">
  //               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Jacob
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Thornton
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 @fat
  //               </td>
  //             </tr>
  //             <tr class="bg-white border-b">
  //               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Larry
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 Wild
  //               </td>
  //               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //                 @twitter
  //               </td>
  //             </tr>
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // </div>

  //       `
  let li = `<table><tr class="bg-gray-200 p-8"><th>Name</th><th>Year</th></tr>`;
  let username = document.getElementById("userinput").value;

  // Loop through each data and add a table row
  movies.forEach((movie) => {
    li += `<tr>
                <td>${movie.name} </td>
                <td>${movie.year}</td>        
            </tr>`;
  });
  li += `</table>`;

  // Display result
  document.getElementById("user-movies-show").innerHTML = li;
};
