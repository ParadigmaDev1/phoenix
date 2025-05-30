const wrappers = document.querySelectorAll(".marquee__group");
if (wrappers.length) {
  wrappers.forEach((wrapper) => {
    wrapper.innerHTML += wrapper.innerHTML;
  });
}
