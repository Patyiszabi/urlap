const selectEl = document.getElementById("city-select");
const selectOutput = document.getElementById("select-output");

function normalizeLabel(text) {
  return text.replace(/\s+/g, " ").trim();
}

selectEl.addEventListener("change", () => {
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  const label = selectedOption && selectedOption.value
    ? normalizeLabel(selectedOption.textContent)
    : "";

  selectOutput.textContent = label
    ? `Kiválasztott érték: ${label}`
    : "Kiválasztott érték: -";
});

const checkboxForm = document.getElementById("checkbox-form");
const checkboxOutput = document.getElementById("checkbox-output");

function updateCheckboxOutput() {
  const checked = Array.from(
    checkboxForm.querySelectorAll("input[name='hobby']:checked")
  ).map((el) => normalizeLabel(el.parentElement.textContent));

  checkboxOutput.textContent = checked.length
    ? `Kiválasztottak: ${checked.join(", ")}`
    : "Kiválasztottak: -";
}

checkboxForm.addEventListener("change", updateCheckboxOutput);

const textarea = document.getElementById("message");
const checkLengthBtn = document.getElementById("check-length");
const textareaOutput = document.getElementById("textarea-output");
const minLength = 20;

function checkTextareaLength() {
  const length = textarea.value.trim().length;
  if (length >= minLength) {
    textareaOutput.textContent = "A szöveg elég hosszú.";
  } else {
    textareaOutput.textContent = "A szöveg nem elég hosszú.";
  }
}

checkLengthBtn.addEventListener("click", checkTextareaLength);

const radioForm = document.getElementById("radio-form");
const radioOutput = document.getElementById("radio-output");

radioForm.addEventListener("change", () => {
  const checked = radioForm.querySelector("input[name='color']:checked");
  const label = checked ? normalizeLabel(checked.parentElement.textContent) : "";
  radioOutput.textContent = label
    ? `Kiválasztott érték: ${label}`
    : "Kiválasztott érték: -";
});
