export function validateForm() {
  const forms = document.querySelectorAll(".form");

  const toggleClass = (element, addClass, removeClass) => {
    element.classList.add(addClass);
    element.classList.remove(removeClass);
  };

  const setFeedback = (input, isValid, message = "") => {
    const inputRow = input.closest(".input__row");
    const feedbackElement = inputRow.querySelector(".input__item-small");
    feedbackElement.style.display = "block";
    feedbackElement.textContent = message;
    if (!message.length) {
      feedbackElement.style.display = "none";
    }
    toggleClass(
      inputRow,
      isValid ? "success" : "error",
      isValid ? "error" : "success"
    );

    return isValid;
  };

  const validators = {
    name: (value) => /^[А-Яа-яA-Za-zёЁ \-]+$/.test(value),
    phone: (value) => value.length >= 18,
    password: (value) => value.length > 0,
    inn: (value) => value.length === 10,
    organization: (value) => value.length > 0,
    count: (value) => /^[0-9]+$/.test(value),
    time: (value) => /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value),
    date: (value) =>
      /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.[1-2][0-9]{3}$/.test(
        value
      ),
  };

  const validateInput = (input, type, errorMessage) => {
    const value = input?.value.trim();
    const isValid = value && validators[type](value);
    return setFeedback(input, isValid, isValid ? "" : errorMessage);
  };

  const validateFormFields = (form, isExtended) => {
    let isValid = true;

    const inputs = [
      {
        inputList: form.querySelectorAll(".input__valid-name"),
        type: "name",
        error: "Введите имя",
      },
      {
        inputList: form.querySelectorAll(".input__valid-lastname"),
        type: "name",
        error: "Введите фамилию",
      },
      {
        inputList: form.querySelectorAll(".input__valid-phone"),
        type: "phone",
        error: "Введите номер телефона",
      },
      {
        inputList: form.querySelectorAll(".input__valid-password"),
        type: "password",
        error: "Введите пароль",
      },
      {
        inputList: form.querySelectorAll(".input__valid-email"),
        type: "email",
        error: "Заполните поле",
      },
      {
        inputList: form.querySelectorAll(".input__valid-organization"),
        type: "organization",
        error: "Введите название организации",
      },
      {
        inputList: form.querySelectorAll(".input__valid-inn"),
        type: "inn",
        error: "Введите ИНН",
      },
    ];

    if (isExtended) {
      inputs.push(
        {
          inputList: form.querySelectorAll(".input__valid-positive-number"),
          type: "count",
          error: "Введите положительное число",
        },
        {
          inputList: form.querySelectorAll(".input__valid-time"),
          type: "time",
          error: "Введите корректное время",
        },
        {
          inputList: form.querySelectorAll(".input__valid-date"),
          type: "date",
          error: "Введите корректную дату",
        }
      );
    }
    // inputs.forEach(({ input, type, error }) => {
    //   if (input && !validateInput(input, type, error)) {
    //     isValid = false;
    //   }
    // });
    inputs.forEach(({ inputList, type, error }) => {
      if (inputList.length) {
        inputList.forEach((input) => {
          if (input && !validateInput(input, type, error)) {
            isValid = false;
          }
        });
      }
    });
    return isValid;
  };

  // const showSuccessMessage = () => {
  //   document.querySelector(".success-modal").classList.add("active");
  //   document
  //     .querySelectorAll(".modal")
  //     .forEach((modal) => modal.classList.remove("active"));
  // };

  const passwordInput = document.querySelectorAll(".input__valid-password");
  if (passwordInput.length) {
    passwordInput.forEach((input) => {
      const showBtn = input.parentElement.querySelector(".show-password");
      const openEye = `<svg width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_8288_114922" fill="white">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2306 0C18.8648 0 23.7373 3.26175 26.0627 8C23.7373 12.7382 18.8648 16 13.2306 16C7.59627 16 2.72381 12.7382 0.398438 8C2.72381 3.26175 7.59627 0 13.2306 0Z"/>
        </mask>
        <path d="M26.0627 8L26.9604 8.44057L27.1766 8L26.9604 7.55943L26.0627 8ZM0.398438 8L-0.49928 7.55943L-0.715498 8L-0.499281 8.44057L0.398438 8ZM26.9604 7.55943C24.4734 2.4919 19.2607 -1 13.2306 -1V1C18.469 1 23.0012 4.0316 25.165 8.44057L26.9604 7.55943ZM25.165 7.55943C23.0012 11.9684 18.469 15 13.2306 15V17C19.2607 17 24.4734 13.5081 26.9604 8.44057L25.165 7.55943ZM13.2306 15C7.99215 15 3.45993 11.9684 1.29616 7.55943L-0.499281 8.44057C1.9877 13.5081 7.2004 17 13.2306 17V15ZM13.2306 -1C7.2004 -1 1.9877 2.4919 -0.49928 7.55943L1.29616 8.44057C3.45993 4.0316 7.99215 1 13.2306 1V-1Z" fill="#333435" mask="url(#path-1-inside-1_8288_114922)"/>
        <circle cx="13" cy="8" r="4.5" stroke="#333435"/>
        </svg>
      `;
      const closeEye = `<svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_8288_112990)">
          <path d="M27.8597 11.6917C26.6291 14.0573 24.77 16.0377 22.4868 17.4153C20.2037 18.7928 17.5848 19.5141 14.9183 19.4998C12.2518 19.4855 9.6409 18.7362 7.37264 17.3342C5.10438 15.9323 3.26664 13.932 2.06148 11.5533" stroke="#A8A9B0"/>
          <path d="M14.9961 19L14.9961 23" stroke="#A8A9B0"/>
          <path d="M20.7148 18.1152L22.5101 21.6898" stroke="#A8A9B0"/>
          <path d="M24.875 15.1123L27.6937 17.9505" stroke="#A8A9B0"/>
          <path d="M4.8125 15.1123L1.99383 17.9505" stroke="#A8A9B0"/>
          <path d="M9.625 18.1763L7.60472 21.6286" stroke="#A8A9B0"/>
          </g>
          <defs>
          <clipPath id="clip0_8288_112990">
          <rect width="30.1538" height="28" fill="white" transform="translate(-0.00390625)"/>
          </clipPath>
          </defs>
      </svg>
    `;
      showBtn.addEventListener("click", () => {
        if (input.type === "text") {
          input.type = "password";
          showBtn.innerHTML = closeEye;
        } else {
          input.type = "text";
          showBtn.innerHTML = openEye;
        }
      });
    });
  }

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isExtended = form.classList.contains("form-extended");

      const isValid = validateFormFields(form, isExtended);

      if (isValid) {
        console.log("Валидация пройдена");
        // showSuccessMessage();
      } else {
        console.log("Валидация не пройдена");
      }
    });
  });
}
