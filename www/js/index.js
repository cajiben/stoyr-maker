var storage = window.localStorage;

// Setup
var idCurrent = storage.getItem('page') ? storage.getItem('page') : 0;
storage.setItem('page', idCurrent);

updateView();

function updateView()
{ 
  var currentPage = story[idCurrent];
  var pageNumber = $('#pageNumber');
  var pageText = $('#pageText');
  var pageOptions = $('#pageOptions');
  
  pageNumber.text(storage.getItem('page'));
  pageText.text(currentPage.text);

  pageOptions.text('');
  for(var id in currentPage.options ){
    pageOptions.append(
      '<button onclick="changePage(' + currentPage.options[id].nextPage + ')" class="btn btn-primary">' + currentPage.options[id].text + '</button>'
    );
  }
}

function changePage(id)
{
  // Go to next page
  idCurrent = id;
  storage.setItem('page', idCurrent);
  updateView();
}