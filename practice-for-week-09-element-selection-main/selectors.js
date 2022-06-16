const select = () => {
	/* Write queries for each of the following */

	/* Section 1 */
	// 1. Get all seeded fruit elements
	const seededFruit = document.querySelectorAll(".seed");
	// console.log(seededFruit);

	// 2. Get all seedless fruit elements
	const seedlessFruit = document.querySelectorAll(".seedless");
	// console.log(seedlessFruit);

	// 3. Get first seedless fruit element
	const firstSeedless = document.querySelector(".seedless");
	// console.log(firstSeedless);

	/* Section 2 */
	// 4. Get inner span with text "you"
	const innerSpan = document.querySelector("span");
	console.log(innerSpan);

	// 5. Get all children of element "wrapper"
	const wrapperChildren = document.querySelector("#wrapper").children;

	console.log(wrapperChildren);

	// 6. Get all odd number list items in the list
	const li = [...document.querySelectorAll("li")];

	oddList = li.filter((element, index) => {
		if (index % 2 !== 0) {
			return true;
		}
	});
	// console.log(oddList);

	// 7. Get all even number list items in the list
	const li2 = [...document.querySelectorAll("li")];

	evenList = li2.filter((element, index) => {
		if (index % 2 === 0) {
			return true;
		}
	});
	console.log(evenList);

	/* Section 3 */
	// 8. Get all tech companies without a class name
	const anchors = [...document.querySelectorAll("a")];
	const innerTest = anchors.map((el) => {
		return el.innerText;
	});
	console.log(innerTest);
	// 9. Get "Amazon" list element
	const amazon = anchors.reduce((prevValue, currentValue) => {
		if (currentValue.innerText === "Amazon") return currentValue;
	}, "");

	console.log(amazon);

	// 10. Get all unicorn list elements (not the image element)
	const unicornClass = [...document.querySelectorAll(".unicorn")];
	let unicornParents = unicornClass.map((ele) => {
		return ele.parentElement;
	});
	console.log(unicornParents);
};

window.onload = select;
