const track = document.querySelector('.track');
const visible = 4;
const originalCount = track.children.length;   // 8

// 1. Birinchi 4 ta kartani nusxalab, oxiriga qo'shamiz
Array.from(track.children).slice(0, visible).forEach(card => {
  track.appendChild(card.cloneNode(true));
});
// Endi: 1 2 3 4 5 6 7 8 | 1 2 3 4  (12 ta)

let index = 0;

// 2. Har 3 soniyada oldinga suramiz
setInterval(() => {
  index += 1    ;
  track.style.transition = 'transform 1.2s ease';
  track.style.transform = `translateX(-${index * 25}%)`;
}, 5000);

// 3. Surilish tugagach, nusxaga yetgan bo'lsak, sezdirmay boshiga o'tamiz
track.addEventListener('transitionend', () => {
  if (index >= originalCount) {      // index = 8 (nusxalar ko'rinib turibdi)
    track.style.transition = 'none'; // animatsiyani o'chiramiz
    index = 0;
    track.style.transform = 'translateX(0)';
    track.offsetHeight;              // brauzerni o'zgarishni qo'llashga majburlaydi
  }
});