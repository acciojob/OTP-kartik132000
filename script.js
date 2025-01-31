//your JS code here. If required.
const inputs = document.querySelectorAll(".code");
        inputs.forEach((input, index) => {
            input.addEventListener("input", (e) => {
                if (e.target.value.match(/\d/)) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                } else {
                    e.target.value = "";
                }
            });
            input.addEventListener("keydown", (e) => {
                if (e.key === "Backspace" && !e.target.value && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });