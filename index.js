const SUPPORT_EMAIL = "nguyenvantuyen98nd@gmail.com";

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
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      showToast("Da sao chep email ho tro");
    } catch {
      showToast("Khong the sao chep. Vui long copy thu cong");
    }
  });
}
