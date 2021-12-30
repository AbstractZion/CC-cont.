function addUser(){
    user_name=document.getElementById("cat_name").value;
    localStorage.setItem("cat_name",cat_name);
    window.location="cat_chat_room.html"
}