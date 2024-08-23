function showmsg(){
    var msg = document.getElementById('msg')
    
    if (msg.style.display === 'none' || msg.style.display === ''){
        msg.style.display = 'flex'
        msg.style.opacity = 1;
    }
}