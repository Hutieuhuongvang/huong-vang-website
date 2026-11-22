// ===== Chuyển ngôn ngữ EN / VI =====
// Mọi nội dung có class="en" hoặc class="vi". Ngôn ngữ được lưu trong localStorage.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = saved || ((navigator.language || '').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en');

  function apply(l) {
    lang = l;
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.textContent = l === 'en' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English';
    });
    // đổi tiêu đề tab nếu trang có data-title-en / data-title-vi
    var t = document.body.getAttribute('data-title-' + l);
    if (t) document.title = t;
  }
  apply(lang);

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { apply(lang === 'en' ? 'vi' : 'en'); });
  });
})();

// ===== Menu di động =====
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', function () { menu.classList.toggle('open'); });
}

// ===== Hiệu ứng hiện dần khi cuộn =====
document.querySelectorAll('.card, .panel, .figure, .step, .stat, .post').forEach(function (el) { el.classList.add('rv'); });
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
}
// Dự phòng: không bao giờ để nội dung bị ẩn
setTimeout(function () { document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); }); }, 2500);
