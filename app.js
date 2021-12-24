const apiKey = 'b96372cf79412524431c2617cba5889d';
const apiImgKey = '24959807-d780943c1baf05341cfd3aacd';

async function getImages(weather) {
	const response = await fetch(`https://pixabay.com/api/?key=${apiImgKey}&q=weather ${weather}&image_type=photo&pretty=true`);
	const data = await response.json();
	showImage(data.hits.slice(0, 3));
}

async function getResults() {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&APPID=${apiKey}`);
	const data = await response.json();
	showResults(data);
}

async function getSearchData() {
	const searchValue = document.querySelector('#search').value;
	if (searchValue.length > 0) {
		try {
			const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=${apiKey}`);
			const data = await response.json();
			showSearchResults(data);
		} catch (error) {
			showSearchResults(null);
		}
	} else {
		getResults();
	}
}

const convertTime = (time) => {
	const date = new Date(time * 1000);
	const timeStamp = date.toLocaleTimeString();
	return timeStamp;
};

const showImage = (image) => {
	document.getElementById('allImages').style.display = 'flex';
	const length = image.length;
	if (length > 0) {
		const parent = document.getElementById('allImages');
		parent.innerHTML = '';
		for (let i = 0; i < length; i++) {
			const img = image[i].webformatURL;
			const create = document.createElement('div');
			create.classList.add('col-md-4');
			create.classList.add('mb-4');
			create.innerHTML += `<div class="card"">
                <img src=${img} class="card-img-top" alt=${''}>
              </div>`;
			parent.appendChild(create);
		}
	}
};

function showSearchResults(data) {
	if (data) {
		const parent = document.getElementById('allSearchWeather');
		parent.innerHTML = '';
		const weather = data.weather[0].main;
		getImages(data.weather[0].main);
		const description = data.weather[0].description;
		const base = data.base;
		const temp = data.main.temp;
		const feelsLike = data.main.feels_like;
		const tempMin = data.main.temp_min;
		const tempMax = data.main.temp_max;
		const visibility = data.visibility;
		const clouds = data.clouds.all;
		const humidity = data.main.humidity;
		const dateTime = convertTime(data.dt);
		const windSpeed = data.wind.speed;
		const country = data.sys.country;
		const sunrise = convertTime(data.sys.sunrise);
		const sunset = convertTime(data.sys.sunset);
		const name = data.name;
		const timezone = data.timezone;
		const create = document.createElement('div');
		create.innerHTML += `
			  				<div class="card">
								<div class="card-header">
									Weather for ${name} City
								</div>
								<div class="card-body">
									<h5 class="card-title">Weather : ${weather}</h5>
									</br>
									<div class="row">
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Description :</strong> ${description}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Base :</strong> ${base}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Temperature :</strong> ${temp} &deg;C</p>
											<p class="card-text mb-1"><strong>Feels Like :</strong> ${feelsLike} &deg;C</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Minimum Temperature :</strong> ${tempMin} &deg;C</p>
											<p class="card-text mb-1"><strong>Maximum Temperature :</strong> ${tempMax} &deg;C</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Humidity :</strong> ${humidity}</p>
											<p class="card-text mb-1"><strong>Visibility :</strong> ${visibility}</p>
											<p class="card-text mb-1"><strong>Clouds :</strong> ${clouds}</p>
											<p class="card-text mb-1"><strong>Wind Speed :</strong> ${windSpeed}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>DateTime :</strong> ${dateTime}</p>
											<p class="card-text mb-1"><strong>Sunrise :</strong> ${sunrise}</p>
											<p class="card-text mb-1"><strong>Sunset :</strong> ${sunset}</p>
											<p class="card-text mb-1"><strong>Timezone :</strong> UTC + ${timezone / (60 * 60)}</p>
										</div>
									</div>
									</br>
									<a href="/" class="btn btn-primary">Go Home</a>
								</div>
							</div>`;
		parent.appendChild(create);
	} else {
		const parent = document.getElementById('allSearchWeather');
		document.getElementById('allImages').style.display = 'none';
		const create = document.createElement('div');
		parent.innerHTML = '';
		create.innerHTML += `<div>No Data Found</div>`;
		parent.appendChild(create);
	}
}

function showResults(data) {
	if (data) {
		const parent = document.getElementById('allSearchWeather');
		parent.innerHTML = '';
		const weather = data.weather[0].main;
		getImages(data.weather[0].main);
		const description = data.weather[0].description;
		const base = data.base;
		const temp = data.main.temp;
		const feelsLike = data.main.feels_like;
		const tempMin = data.main.temp_min;
		const tempMax = data.main.temp_max;
		const visibility = data.visibility;
		const clouds = data.clouds.all;
		const humidity = data.main.humidity;
		const dateTime = convertTime(data.dt);
		const windSpeed = data.wind.speed;
		const country = data.sys.country;
		const sunrise = convertTime(data.sys.sunrise);
		const sunset = convertTime(data.sys.sunset);
		const name = data.name;
		const timezone = data.timezone;
		const img = document.createElement('div');
		img.innerHTML += `
							<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-4"></div>
							<div className="col-md-4"></div>
							</div>
							`;
		parent.appendChild(img);
		const create = document.createElement('div');
		create.innerHTML += `
			  				<div class="card">
								<div class="card-header">
									Weather for ${name} City
								</div>
								<div class="card-body">
									<h5 class="card-title">Weather : ${weather}</h5>
									</br>
									<div class="row">
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Description :</strong> ${description}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Base :</strong> ${base}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Temperature :</strong> ${temp} &deg;C</p>
											<p class="card-text mb-1"><strong>Feels Like :</strong> ${feelsLike} &deg;C</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Minimum Temperature :</strong> ${tempMin} &deg;C</p>
											<p class="card-text mb-1"><strong>Maximum Temperature :</strong> ${tempMax} &deg;C</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>Humidity :</strong> ${humidity}</p>
											<p class="card-text mb-1"><strong>Visibility :</strong> ${visibility}</p>
											<p class="card-text mb-1"><strong>Clouds :</strong> ${clouds}</p>
											<p class="card-text mb-1"><strong>Wind Speed :</strong> ${windSpeed}</p>
										</div>
										<div class="col-md-6">
											<p class="card-text mb-1"><strong>DateTime :</strong> ${dateTime}</p>
											<p class="card-text mb-1"><strong>Sunrise :</strong> ${sunrise}</p>
											<p class="card-text mb-1"><strong>Sunset :</strong> ${sunset}</p>
											<p class="card-text mb-1"><strong>Timezone :</strong> UTC + ${timezone / (60 * 60)}</p>
										</div>
									</div>
									</br>
									<a href="/" class="btn btn-primary">Go Home</a>
								</div>
							</div>`;
		parent.appendChild(create);
	} else {
		const parent = document.getElementById('allSearchWeather');
		document.getElementById('allImages').style.display = 'none';
		const create = document.createElement('div');
		parent.innerHTML = '';
		create.innerHTML += `<div>No Data Found</div>`;
		parent.appendChild(create);
	}
}

getResults();