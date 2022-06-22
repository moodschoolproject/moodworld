const btn = document.getElementById("submit");
const input = document.getElementById("code");
const res = document.getElementById("res");

const codes = ["POgov22","LOPEZi78","dDd89"];

btn.addEventListener("click", () => {
	let text = input.value;
	console.log(text);
	if (codes.includes(text)) {
		res.innerHTML = '<a target="_blank" rel="noopener noreferrer"  href="https://sites.google.com/learn.pearlriver.org/moodworldpremium/home">Click here!</a>'
	} else {
		alert("Invalid code");
	}
});
