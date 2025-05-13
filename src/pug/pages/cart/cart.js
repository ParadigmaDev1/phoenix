try {
	const btn = document.querySelector(".cart__actions .more-actions");
	const plate = document.querySelector(".cart__actions .more-actions-hidden");

	btn.addEventListener("click", function () {
		plate.classList.toggle("active");
	});

	document.body.addEventListener("click", function (e) {
		const target = e.target;
		if (!target.classList.contains("more-actions-hidden") && !target.closest(".more-actions-hidden") && target !== btn && target.closest('button') !== btn) {
			plate.classList.remove("active")
		}
	})
} catch (e) {
	console.log(e);
}