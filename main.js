var url = "https://geo.ipify.org/api/v1?apiKey=at_iICwMs66LaPdvgKPPrvjmD7zSZEEF";

var AJAXCall = new XMLHttpRequest();
AJAXCall.open('GET', url);
AJAXCall.send();
AJAXCall.addEventListener('load', function(e) {
    var data = e.target.response;
    changeTheDom(data);
});

function changeTheDom(input) {
    var apiData = JSON.parse(input);
    var IP = apiData.ip;
    var dom1 = document.querySelector('.ip');
    dom1.innerHTML = IP;
    var ISP = apiData.isp;
    var dom2 = document.querySelector('.isp');
    dom2.innerHTML = ISP;
    var dom3 = document.querySelector('.location');
    dom3.innerHTML = apiData.location.city + ' , ' + apiData.location.region + ' , ' + apiData.location.country;
}