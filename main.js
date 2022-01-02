let url = "https://geo.ipify.org/api/v1?apiKey=at_iICwMs66LaPdvgKPPrvjmD7zSZEEF";

var AJAXCall = new XMLHttpRequest();
AJAXCall.open('GET', url);
AJAXCall.send();
AJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    changeTheDom(data);
});

function changeTheDom(input) {
    let apiData = JSON.parse(input);
    let IP = apiData.ip;
    let dom1 = document.querySelector('.ip');
    dom1.innerHTML = IP;
    let ISP = apiData.isp;
    let dom2 = document.querySelector('.isp');
    dom2.innerHTML = ISP;
    let dom3 = document.querySelector('.location');
    dom3.innerHTML = apiData.location.city + ' , ' + apiData.location.region + ' , ' + apiData.location.country;
}
