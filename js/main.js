import Translator from "./translator.js";
 
(function() {
  "use strict";
   var translator = new Translator({
    persist: true,
    languages: ["tr","en"]
  });
  
  translator.load();

  function handleFormClick(evt) {
    var input = evt.target;

    if (input.tagName === "INPUT" && input.name === "lang") {
      translator.load(input.value);

      localStorage.setItem("language", input.value);
    }
  }

  document.querySelector('[data-action="form"]').addEventListener("click", handleFormClick); 

})();