# Tailwind CSS Coolhue gradients

Nobody _needs_ 60 rad gradients right inside their Tailwind CSS. But it doesn't hurt! [Coolhue](https://webkul.github.io/coolhue/)'s gradients rule and I'm tired of copy/pasting them when a project needs an quick dash of _awesome_.

```
npm install tailwindcss-coolhue
```

Then over in `tailwind.config.js`:

```js
// tailwind.config.js
const coolhue = require("tailwindcss-coolhue");

module.exports = {
  // ... all other config
  plugins: [coolhue],
};
```

Now you have 60 gradients from `.bg-coolhue-1` to `.bg-coolhue-60`.

- [Coolhue](https://webkul.github.io/coolhue/)
- [Demo on Tailwind CSS Play](https://play.tailwindcss.com/plJICXQGJA?file=config)
- By [Simeon Griggs](https://simeongriggs.dev/)
