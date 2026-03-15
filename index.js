const SUPPORT_EMAIL = "ben.nguyenvn18@gmail.com";

const yearNode = document.getElementById("current-year");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

const toast = document.getElementById("toast");
const copyButton = document.querySelector("[data-copy-email]");

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
};

if (copyButton) {
  const successMessage = copyButton.getAttribute("data-copy-success") || "Email copied";
  const failMessage = copyButton.getAttribute("data-copy-fail") || "Cannot copy email. Please copy manually.";

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      showToast(successMessage);
    } catch {
      showToast(failMessage);
    }
  });
}
