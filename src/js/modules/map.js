export const map = () => {
  const contactsMap = document.querySelector(".contacts-map");
  if (contactsMap) {
    const mapObj = document.querySelector("#map");
    const phone = contactsMap.querySelector(".phone.info-item");
    if (mapObj) {
      const addressSelector = document.querySelector(".address-selector");
      const addressSelectorInputs = addressSelector.querySelectorAll(
        ".selector-content input"
      );
      const textBtn = addressSelector.querySelector(".selector-title");

      const pins = mapObj.querySelectorAll(".pin");
      if (mapObj.dataset.center) {
        let center = mapObj.dataset.center.split(" ").map(Number);
        function init() {
          let map = new ymaps.Map(mapObj, {
            center: center,
            zoom: 13,
          });

          if (map) {
            // let placemark = new ymaps.Placemark(
            //   center,
            //   {},
            //   {
            //     iconLayout: "default#image",
            //     iconImageHref: "/local/templates/s1/img/pin.png",
            //     iconImageSize: [72, 41],
            //     iconImageOffset: [-38, -42],
            //   }
            // );
            // map.geoObjects.add(placemark);
            map.controls.remove("geolocationControl"); // удаляем геолокацию
            map.controls.remove("searchControl"); // удаляем поиск
            map.controls.remove("typeSelector"); // удаляем тип
            map.controls.remove("rulerControl"); // удаляем контрол правил
            map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
            if (window.innerWidth <= 630) {
              map.controls.remove("trafficControl"); // удаляем контроль трафика
              map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
              map.controls.remove("zoomControl"); // удаляем контрол зуммирования
              map.behaviors.disable(["drag"]);
            }
            if (pins) {
              pins.forEach((pin) => {
                const placemark = new ymaps.Placemark(
                  pin.dataset.coords.split(" ").map(Number),
                  {
                    id: pin.dataset.id,
                  },
                  {
                    iconLayout: "default#image",
                    iconImageHref: "../img/pin.png",
                    iconImageSize: [48, 48],
                    iconImageOffset: [-38, -42],
                  }
                );
                map.geoObjects.each((item, index) => {
                  if (index === 0) {
                    item.options.set({
                      iconImageHref: "../img/pin-active.png",
                    });
                    return;
                  }
                });
                placemark.events.add("click", (e) => {
                  map.geoObjects.each((item) => {
                    item.options.set({
                      iconImageHref: "../img/pin.png",
                    });
                  });
                  if (pin.dataset.id === placemark.properties.get("id")) {
                    const currentInput = Array.from(addressSelectorInputs).find(
                      (input) => {
                        return input.value == placemark.properties.get("id");
                      }
                    );
                    if (currentInput) {
                      currentInput.checked = true;
                      phone.href = `tel:${pin.dataset.phone}`;
                      phone.querySelector("p").innerText = pin.dataset.phone;
                      textBtn.innerHTML = currentInput.parentElement.innerHTML;
                    }
                    placemark.options.set({
                      iconImageHref: "../img/pin-active.png",
                    });
                  }
                });
                map.geoObjects.add(placemark);
              });
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (
                    mutation.type === "childList" ||
                    mutation.type === "characterData"
                  ) {
                    const currentPin = Array.from(pins).find((pin) => {
                      return (
                        pin.dataset.id ==
                        mutation.target.querySelector("input").value
                      );
                    });
                    if (currentPin) {
                      phone.href = `tel:${currentPin.dataset.phone}`;
                      phone.querySelector("p").innerText =
                        currentPin.dataset.phone;
                    }
                    pins.forEach((pin) => {
                      map.geoObjects.each((item, index) => {
                        item.options.set({
                          iconImageHref: "../img/pin.png",
                        });
                      });
                    });
                    pins.forEach((pin) => {
                      map.geoObjects.each((item, index) => {
                        if (
                          index == mutation.target.querySelector("input").value
                        ) {
                          item.options.set({
                            iconImageHref: "../img/pin-active.png",
                          });
                          return;
                        }
                      });
                    });
                  }
                });
              });

              observer.observe(addressSelector, {
                childList: true,
                characterData: true,
                subtree: true,
              });
            }
          }
        }
        ymaps.ready(init);
      }
    }
  }
};
