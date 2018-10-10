import "babel-polyfill";
import "../styles/main.scss";

// function addListeners(link) {
// 	let hovered = false;

// 	const hoverClass = "link--hover";
// 	const classList = link.classList;

// 	const mouseOverHandler = event => {
// 		if (!hovered) {
// 			classList.add(hoverClass);
// 			hovered = true;
// 		}
// 	};

// 	const mouseOutHandler = event => {
// 		setTimeout(() => {
// 			classList.remove(hoverClass);

// 			link.addEventListener(
// 				"transitionend",
// 				() => {
// 					hovered = false;
// 				},
// 				{ passive: true, once: true }
// 			);
// 		}, 1000);
// 	};

// 	link.addEventListener("mouseover", mouseOverHandler);
// 	link.addEventListener("mouseout", mouseOutHandler);
// 	// link.addEventListener("transitionend", transitionEndHandler);
// }

// [...document.querySelectorAll(".link")].forEach(link => addListeners(link));

// const hoverEventHandler = event => {
// 	const classList = event.target.classList;
// 	const hoverClass = "link--hover";

// 	classList.add(hoverClass);
// 	setTimeout(() => {
// 		classList.remove(hoverClass);
// 	}, 500);
// };

// link.addEventListener("mouseover", hoverEventHandler);
