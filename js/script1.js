
function search(){
  if(document.getElementById("search").style.display=="none"){
    document.getElementById("search").style.display="flex";
    document.getElementById("search_container").style.width="100%";
    document.addEventListener('click', function handleClickOutsideBox(event) {
      const box = document.getElementById("search");
      const box1=document.getElementById("searchbtn");
      if ((!box.contains(event.target))&&(!box1.contains(event.target))) {
        box.style.display = "none";
      }
    });
  }
  else{
    document.getElementById("search").style.display="none";
  }
}



