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
      mask: Date,
      min: new Date(1900, 0, 1),
      max: new Date(2050, 0, 1),
    });
  });
};
