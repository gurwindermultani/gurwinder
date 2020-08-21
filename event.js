var modal = document.getElementById('content'); 
window.onclick = function(event) { 
    if (event.target == modal) { 
      modal.style.display = "none"; 
    } 
} 
function process(id){
    let content=document.getElementById('content');
    content.style.display='block';
    let image=document.getElementById(id);
    document.getElementById('imgview').innerHTML=image.innerHTML;
}   