export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
export const pills = (items) => items.map(item => `<span class="pill">${escapeHtml(item)}</span>`).join("");
