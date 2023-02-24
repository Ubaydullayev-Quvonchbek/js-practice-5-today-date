setInterval(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    day < 10 ? document.querySelector('.day').innerHTML = `0${day}` : document.querySelector('.day').innerHTML = day
    month < 10 ? document.querySelector('.month').innerHTML = `0${month}` : document.querySelector('.month').innerHTML = month
    year < 10 ? document.querySelector('.year').innerHTML = `0${year}` : document.querySelector('.year').innerHTML = year
    hours < 10 ? document.querySelector('.hours').innerHTML = `0${hours}` : document.querySelector('.hours').innerHTML = hours
    minutes < 10 ? document.querySelector('.minutes').innerHTML = `0${minutes}` : document.querySelector('.minutes').innerHTML = minutes
    seconds < 10 ? document.querySelector('.seconds').innerHTML = `0${seconds}` : document.querySelector('.seconds').innerHTML = seconds
}, 0);

setInterval(() => {
    let dark = document.querySelector('.dark');
    let light = document.querySelector('.light');
    light.onclick = () => {
        document.querySelector('body').style.backgroundColor = '#DADCD5';
        document.querySelector('.date').style.borderColor = '#153243';
        document.querySelector('.day').style.color = '#153243';
        document.querySelector('.month').style.color = '#153243';
        document.querySelector('.year').style.color = '#153243';
        document.querySelector('.one1').style.color = '#153243';
        document.querySelector('.one2').style.color = '#153243';
        document.querySelector('.date-box').style.borderColor = '#153243';
        document.querySelector(".hours").style.color = '#153243';
        document.querySelector(".minutes").style.color = '#153243';
        document.querySelector(".seconds").style.color = '#153243';
        document.querySelector(".dark-light").style.color = '#153243';
        document.querySelector('.two1').style.color = '#153243';
        document.querySelector('.two2').style.color = '#153243';
        document.querySelector('.btn-style').style.backgroundColor = '#153243';
        light.style.display = 'none';
        dark.style.display = 'block';
    }
    dark.onclick = () => {
        document.querySelector('body').style.backgroundColor = '#153243';
        document.querySelector('.date').style.borderColor = '#fff';
        document.querySelector('.day').style.color = '#fff';
        document.querySelector('.month').style.color = '#fff';
        document.querySelector('.year').style.color = '#fff';
        document.querySelector('.one1').style.color = '#fff';
        document.querySelector('.one2').style.color = '#fff';
        document.querySelector('.date-box').style.borderColor = '#fff';
        document.querySelector(".hours").style.color = '#fff';
        document.querySelector(".minutes").style.color = '#fff';
        document.querySelector(".seconds").style.color = '#fff';
        document.querySelector(".dark-light").style.color = '#fff';
        document.querySelector('.two1').style.color = '#fff';
        document.querySelector('.two2').style.color = '#fff';
        document.querySelector('.btn-style').style.backgroundColor = '#fff';
        light.style.display = 'block';
        dark.style.display = 'none';
    }
}, 0);