export function showToast(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'success') {
  const existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.className = `fixed bottom-6 right-6 px-6 py-4 rounded shadow-lg text-white z-50
    ${type === 'success' ? 'bg-green-600' : ''}
    ${type === 'error' ? 'bg-red-600' : ''}
    ${type === 'info' ? 'bg-blue-600' : ''}
    ${type === 'warning' ? 'bg-yellow-500 text-black' : ''}
    animate-fade-in`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
}
