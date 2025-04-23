export const inputsMask = () => {
  document.querySelectorAll(".input__valid-phone").forEach((el) => {
    IMask(el, {
      mask: "+0 (000) 000-00-00",
    });
  });
  document.querySelectorAll(".input__valid-inn").forEach((el) => {
    IMask(el, {
      mask: "0000000000",
    });
  });
};
