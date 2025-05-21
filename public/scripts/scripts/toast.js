export function showToast(message, type) {
    const container = document.getElementById("toast-container");
    if (!container)
        return;
    const bgColor = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-blue-600'
    };
    const div = document.createElement("div");
    div.className = `${bgColor[type]} text-white px-4 py-2 rounded shadow animate-fade-in-out`;
    div.textContent = message;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}
