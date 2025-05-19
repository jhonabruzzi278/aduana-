export function showToast(message: string, type: 'success' | 'error' | 'info') {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const bgColor = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600'
  };

  const toast = document.createElement("div");
  toast.className = `text-white px-4 py-2 rounded shadow ${bgColor[type]} animate-fade-in-out`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}
