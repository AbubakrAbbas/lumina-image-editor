# LUMINA — Browser Image Editor

> A real-time, non-destructive image editor that runs entirely in your browser. No uploads. No servers. No frameworks.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Canvas API](https://img.shields.io/badge/Canvas_API-000000?style=for-the-badge&logo=html5&logoColor=white)

---

## 🔗 Live Demo

👉 **[Try it here](https://abubakrabbas.github.io/lumina-image-editor)**

---

## ✨ Features

- 🎨 **9 real-time filters** — Brightness, Contrast, Saturation, Hue Rotation, Blur, Grayscale, Sepia, Opacity, Invert
- ⚡ **Instant preview** — changes reflect on canvas in real time as you drag sliders
- 💾 **Export** — download your edited image as a PNG
- 🔄 **Reset** — restore all filters to their default values in one click
- 📱 **Responsive** — works on both desktop and mobile
- 🚫 **Zero dependencies** — no libraries, no frameworks, pure vanilla JavaScript

---

## 🛠️ Built With

| Technology         | Purpose                                       |
| ------------------ | --------------------------------------------- |
| HTML5              | Structure & Canvas element                    |
| CSS3               | Styling, layout, custom range sliders         |
| Vanilla JavaScript | Filter logic, DOM manipulation                |
| Canvas API         | Image rendering & filter application          |
| File API           | Local image loading via `URL.createObjectURL` |

---

## 🚀 Getting Started

No installation needed. Just clone and open.

```bash
git clone https://github.com/AbubakrAbbas/lumina-image-editor.git
cd lumina-image-editor
```

Then open `index.html` in your browser — that's it.

---

## 📁 Project Structure

```
lumina-image-editor/
├── index.html      # Markup & layout
├── style.css       # All styling & animations
├── app.js          # Filter logic & Canvas API
└── README.md
```

---

## 🎛️ How It Works

1. User uploads an image via the file input
2. The image is drawn onto an HTML5 `<canvas>` element
3. Each slider controls a CSS filter value stored in a JavaScript object
4. On every slider change, the canvas is cleared and redrawn with the updated `CanvasRenderingContext2D.filter` string
5. The export button converts the canvas to a PNG using `canvas.toDataURL()`

---

## 👨‍💻 Author

**Abubakr Abbas**

- GitHub: [@AbubakrAbbas](https://github.com/AbubakrAbbas)
- LinkedIn: [linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
