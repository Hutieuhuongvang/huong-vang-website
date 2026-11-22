// Menu di động
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Hiệu ứng hiện dần khi cuộn
document.querySelectorAll('.card, .panel, .sw, .goal, .price, .step, .kpi, .stat, .flow div')
  .forEach(el => el.classList.add('rv'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.rv, [data-bars]').forEach(el => io.observe(el));

// Đếm số ở khu vực thống kê
function fmt(n, plain) {
  return plain ? String(n) : n.toLocaleString('vi-VN');
}
const counter = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const end = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const plain = el.dataset.plain === '1';
    const t0 = performance.now(), dur = 1400;
    (function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = fmt(v, plain) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
    counter.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => counter.observe(el));
