console.log("Let's get this party started!");

const $giphys = $('.giphys');
const $searchVal = $("#text"); // selecting giphy ul and user input

function createGiphy(val){
    let $LI = $("<li>"); // create LI with each submit
    if (val) {
        let $newImage = $("<img>", {
            src: val,
            class: "imgs" // defining img src and class
          });
        $LI.append($newImage); // append img to LI
        $('ul').append($LI); // append LI to ul
    }
}

$(function() { // have DOM load
    $('form').on('submit', async function(event){ // add event listener on form when submitted
        event.preventDefault();
        const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{api_key: 'DR1Y5ROHrJSsw7HsUaHzClYNvmRHhaCb', q: `${$searchVal.val()}`}}); // await promise!
        let randNum = Math.floor(Math.random() * response.data.data.length);
        createGiphy(response.data.data[randNum].images.original.url); // pick random image url
        $searchVal.val(""); // reset search value
    })

    $('#resImg').on('click', function(event){
        $giphys.empty(); // empty ul with reset button
    });
});