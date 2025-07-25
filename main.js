function losujKolor(){
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const kolor = `rgb(${r}, ${g}, ${b})`;
	document.body.style.backgroundColor = kolor;
}

document.getElementById("mojPrzycisk1").addEventListener("click", losujKolor);