import AirDatepicker from "air-datepicker";

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
  document.querySelectorAll(".date-picker").forEach((input) => {
    new AirDatepicker(input);
    IMask(input, {
      mask: "00.00.0000",
    });
  });
};
