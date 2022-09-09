//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}



function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // Make container
  const firsDiv = document.createElement('div');
  firsDiv.classList.add('container')

  // Make Row For CSS
  const row = document.createElement('div');
  row.classList.add('row')


  episodeList.forEach((episode) => {
    //console.log(episode);

    const movies = `${episode.name} - S0${episode.season}E0${episode.number}`;
    console.log(movies);

    const image = episode.image.medium;
    console.log(image);

    // remove the <p></p> tags inside the text using regex from summary

    const delP = episode.summary.replace(/(<([^>]+)>)/gi, "");
    console.log(delP);

    const template = `<div class="col-12 sm-col-6 md-col-4 lg-col-3">
    <div class="episodeDiv">
                <div class="title">
                    <h5>${movies}</h5>
                </div>
                <div class="images">
                    <img src=${image}>
                </div>
                <div class="delP">
                    <p>${delP}</p>
                </div>
            </div> 
            </div>`;
    row.innerHTML = row.innerHTML + template;
    //console.log(rowElm.innerHTML);
  });
  // show on the Screen
  rootElem.appendChild(firsDiv) // first Div
  rootElem.appendChild(row) // Second Div called Row
}

window.onload = setup;
