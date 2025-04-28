import AirDatepicker from "air-datepicker";
import IMask from "imask";

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
  document.querySelectorAll(".input__valid-kpp").forEach((el) => {
    IMask(el, {
      mask: "000000000",
    });
  });
  document.querySelectorAll(".input__valid-ogrn").forEach((el) => {
    IMask(el, {
      mask: "0000000000000",
    });
  });
  document.querySelectorAll(".input__valid-number").forEach((el) => {
    IMask(el, {
      mask: "0000000000",
    });
  });
  document.querySelectorAll(".date-picker").forEach((input) => {
    new AirDatepicker(input);
    IMask(input, {
      mask: Date,
      min: new Date(1900, 0, 1),
      max: new Date(2050, 0, 1),
    });
  });
};
