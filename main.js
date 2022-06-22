const btn = document.getElementById("submit");
const input = document.getElementById("code");

const codes = ["POgov22"];

btn.addEventListener("click", () => {
	let text = input.value;
	console.log(text);
	if (codes.includes(text)) {
		window.location.href =
			"https://sites.google.com/learn.pearlriver.org/moodworldpremium/home";
	} else {
		alert("Invalid code");
	}
});
