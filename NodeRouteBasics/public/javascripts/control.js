
const encodeParam = (url, param) => {

	const encodeUri = encodeURIComponent;
	return url + '?' + Object.keys(param)
		.map(key => encodeUri(key) + 
		'=' + encodeUri(param[key])).join('&');

};

function getParam(miles){
	const param = {
		"miles": miles
	};
	return {miles, param};
}

function getRadius(radius){
	const param = {
		"radius": radius
	};
	return {radius, param};
}

const getUnit = function() {
	const displayArea = document.getElementById('displayArea');
	fetch('/unit')
		.then((result) => result.json())
		.then((returnValue) => {
			displayArea.innerHTML = "Feet in One Mile:\n"+JSON.stringify(returnValue);
		})
		.catch((error) => {console.log(error); })
};

const getMiles = function(){
	const displayArea = document.getElementById('displayArea');
	const feet = document.getElementById('userInput').value;
	const url = encodeParam('/convert',getParam(feet));
	fetch(url)
		.then((checkCall) => {
			return checkCall.json();
		})
		.then((data) => {
			displayArea.innerHTML = "Feet from Mile: \n"+JSON.stringify(data);
		})
		.catch((error) => {
			console.log(error);
		})
};

const postCircumference = function() {
	const displayArea = document.getElementById('displayArea');
	const radius = document.getElementById('userInput').value;
	const param = getRadius(radius);
	fetch('/circumference',{
		method: "POST",
		headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
		},
		body: JSON.stringify(param)
	})
	.then((result) => {
		return result.json();
	})
	.then((result) => {
		displayArea.innerHTML = "Circumference:\n" + JSON.stringify(result);
	})
	.catch((error) => {
		console.log(error);
	})
};

window.onload = function() {
	'use strict';
	document.getElementById('getFeetInMile').onclick = getUnit;
	document.getElementById('calculateFeetFromMiles').onclick = getMiles;
	document.getElementById('calculateCircumference').onclick = postCircumference;
};
