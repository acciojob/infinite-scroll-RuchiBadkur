//your code here!

const list = document.getElementById("infi-list");
const main = document.querySelector("main");
let i = 1, n = 10; 

const createLi = (i) => {
	const li = document.createElement("li");
	li.innerText = `item ${i}`;
	list.append(li);
}

for(i = 1; i <= n; i++){
	createLi(i);
}

const addNewLi = () => {
	n += 2;
	for(i = i; i <= n; i++){
		createLi(i);
	}
}

list.addEventListener("scrollend", addNewLi);
