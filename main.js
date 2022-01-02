fetch('https://geo.ipify.org/api/v1?apiKey=at_iICwMs66LaPdvgKPPrvjmD7zSZEEF')
  .then(response => response.json())
  .then(data => changeTheDom(data));

function changeTheDom(data) {
    let IP = data.ip;
    let dom1 = document.querySelector('.ip');
    dom1.innerHTML = IP;
    let ISP = data.isp;
    let dom2 = document.querySelector('.isp');
    dom2.innerHTML = ISP;
    let dom3 = document.querySelector('.location');
    dom3.innerHTML = data.location.city + ' , ' + data.location.region + ' , ' + data.location.country;
}
