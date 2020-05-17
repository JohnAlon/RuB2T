// Копировать IP
function copyip(){
var copyText = '173.212.241.233:25565';
(serverip).select();
document.execCommand("copy");

document.getElementById("ipbtn").innerHTML = "Скопировано";
setTimeout(resetbtn, 1000);
}
function resetbtn(){
    document.getElementById("ipbtn").innerHTML = "Скопировать";
}

// Якоря
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

