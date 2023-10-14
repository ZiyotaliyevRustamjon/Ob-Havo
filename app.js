const btn = document.querySelector('.btn');
const show = document.querySelector('.show');

btn.addEventListener('click', () => {
    const inputText = document.querySelector('.inputText').value;
    const apiKey = '02ee08e416fd2bca24124048c8d5feaf';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => show.innerHTML = `
            <br><h1>name: ${data.name}</h1><br>
            <h1>country: ${data.sys.country}</h1>
            <h2>sky: ${data.weather[0].main}</h2>
            <h2>description: ${data.weather[0].description}</h2>
            <h2>speed: ${data.wind.speed}</h2>
        `)
})