export const mapComponent = () => {
  const mapObj = document.querySelector("#map");

  if (mapObj) {
    const center = mapObj.dataset.center.split(",").map(Number);
    const zoom = +mapObj.dataset.zoom;
    const pins = mapObj.dataset.pins.split(";").map((str) => {
      const parts = str.split(",");
      return [parseFloat(parts[0]), parseFloat(parts[1])];
    });
    const pinImg = mapObj.dataset.pinImg;
    const mainPin = mapObj.dataset.mainPin;
    function init() {
      let map = new ymaps.Map(mapObj, {
        center: center,
        zoom: zoom ? zoom : 13,
      });

      if (map) {
        pins.forEach((center) => {
          let placemark = new ymaps.Placemark(
            center,
            {},
            {
              iconLayout: "default#image",
              iconImageHref: pinImg,
              iconImageSize: [28, 30],
              iconImageOffset: [-14, -42],
            }
          );
          map.geoObjects.add(placemark);
        });
        if (mainPin) {
          let mainPlacemark = new ymaps.Placemark(
            mainPin.split(",").map(Number),
            {},
            {
              iconLayout: "default#image",
              iconImageHref: pinImg,
              iconImageSize: [48, 52],
              iconImageOffset: [-26, -68],
            }
          );
          map.geoObjects.add(mainPlacemark);
        }

        map.controls.remove("geolocationControl"); // удаляем геолокацию
        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("typeSelector"); // удаляем тип
        map.controls.remove("rulerControl"); // удаляем контрол правил
        map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
      }
    }
    ymaps.ready(init);
  }
};
