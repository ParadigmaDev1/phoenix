export const observeClassChanges = (parentElement, callback) => {
  const config = {
    attributes: true,
    attributeFilter: ["class"],
    subtree: true,
  };

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        callback({
          target: mutation.target,
          oldValue: mutation.oldValue,
          newValue: mutation.target.className,
        });
      }
    });
  });

  observer.observe(parentElement, config);

  return observer;
};
