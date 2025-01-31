//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
            const inputs = document.querySelectorAll(".code");

            inputs.forEach((input, index) => {
                input.addEventListener("input", (e) => {
                    if (e.target.value.match(/[^0-9]/)) {
                        e.target.value = "";
                        return;
                    }
                    if (e.target.value && index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                });

                input.addEventListener("keydown", (e) => {
                    if (e.key === "Backspace" && !input.value && index > 0) {
                        inputs[index - 1].focus();
                    }
                });
            });
        });