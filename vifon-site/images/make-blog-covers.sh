#!/bin/sh
# Tạo 5 ảnh bìa blog (SVG). Chạy: sh images/make-blog-covers.sh
# Bạn có thể thay các file blog-1.svg ... blog-5.svg bằng ảnh thật (.jpg) rồi sửa đường dẫn trong blog.html
cd "$(dirname "$0")"
mk() { # file color1 color2 emoji title
cat > "$1" <<EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="$2"/><stop offset="1" stop-color="$3"/></linearGradient></defs>
<rect width="800" height="450" fill="url(#g)"/>
<circle cx="680" cy="80" r="150" fill="#fff" opacity=".08"/><circle cx="90" cy="400" r="130" fill="#fff" opacity=".08"/>
<text x="400" y="240" text-anchor="middle" font-size="150">$4</text>
<text x="400" y="360" text-anchor="middle" font-family="Oswald,Arial,sans-serif" font-size="34" font-weight="700" fill="#fff" letter-spacing="2">$5</text>
</svg>
EOF
}
mk blog-1.svg "#b0000f" "#e0402e" "🍜" "HU TIEU HUONG VANG"
mk blog-2.svg "#1f5a2e" "#4a9a5f" "🌾" "FROM RICE TO BOWL"
mk blog-3.svg "#1f6fb0" "#4aa3d8" "🚢" "SEA FREIGHT TO AU"
mk blog-4.svg "#8a5a00" "#e0a030" "📋" "AUSTRALIA RULES"
mk blog-5.svg "#5a2a7a" "#a05ac0" "📱" "SCAN &amp; TRACE"
