export const injectStyles = () => {
	const style = document.createElement("style");

	style.textContent = `@layer reset, base, tokens, recipes, utilities;

@layer reset{
  html,:host {
    --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-tab-size: 4;
    tab-size: 4;
    -webkit-tap-highlight-color: transparent;
    line-height: 1.5;
    font-family: var(--global-font-body, var(--font-fallback));
}

  *,::before,::after,::backdrop,::file-selector-button {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    border-width: 0px;
    border-style: solid;
    border-color: var(--global-color-border, currentColor);
}

  hr {
    height: 0px;
    color: inherit;
    border-top-width: 1px;
}

  body {
    height: 100%;
    line-height: inherit;
}

  img {
    border-style: none;
}

  img,svg,video,canvas,audio,iframe,embed,object {
    display: block;
    vertical-align: middle;
}

  img,video {
    max-width: 100%;
    height: auto;
}

  h1,h2,h3,h4,h5,h6 {
    text-wrap: balance;
    font-size: inherit;
    font-weight: inherit;
}

  p,h1,h2,h3,h4,h5,h6 {
    overflow-wrap: break-word;
}

  ol,ul,menu {
    list-style: none;
}

  button,input:where([type='button'], [type='reset'], [type='submit']),::file-selector-button {
    appearance: button;
    -webkit-appearance: button;
}

  button,input,optgroup,select,textarea,::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    background: var(--colors-transparent);
}

  ::placeholder {
    opacity: 1;
    --placeholder-fallback: color-mix(in srgb, currentColor 50%, transparent);
    color: var(--global-color-placeholder, var(--placeholder-fallback));
}

  textarea {
    resize: vertical;
}

  table {
    text-indent: 0px;
    border-collapse: collapse;
    border-color: inherit;
}

  summary {
    display: list-item;
}

  small {
    font-size: 80%;
}

  sub,sup {
    position: relative;
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
}

  sub {
    bottom: -0.25em;
}

  sup {
    top: -0.5em;
}

  dialog {
    padding: 0px;
}

  a {
    color: inherit;
    text-decoration: inherit;
}

  abbr:where([title]) {
    text-decoration: underline dotted;
}

  b,strong {
    font-weight: bolder;
}

  code,kbd,samp,pre {
    --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
    font-feature-settings: normal;
    font-variation-settings: normal;
    font-family: var(--global-font-mono, var(--font-mono-fallback));
    font-size: 1em;
}

  progress {
    vertical-align: baseline;
}

  ::-webkit-search-decoration,::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

  ::-webkit-inner-spin-button,::-webkit-outer-spin-button {
    height: auto;
}

  :-moz-ui-invalid {
    box-shadow: none;
}

  :-moz-focusring {
    outline: auto;
}

  [hidden]:where(:not([hidden='until-found'])) {
    display: none !important;
}
}

@layer base{
  :root {
    --made-with-panda: '🐼';
}

  body {
    background: var(--colors-bg-canvas);
    color: var(--colors-fg-default);
}

  .dark body {
    color-scheme: dark;
}

  *,*::before,*::after {
    box-sizing: border-box;
    border-color: var(--colors-border-subtle);
    border-style: solid;
}

  *::placeholder {
    opacity: 1;
    color: var(--colors-fg-subtle);
}

  *::selection {
    background: accent.a4;
}

  html {
    --colors-color-palette-light-1: var(--colors-cyan-light-1);
    --colors-color-palette-light-2: var(--colors-cyan-light-2);
    --colors-color-palette-light-3: var(--colors-cyan-light-3);
    --colors-color-palette-light-4: var(--colors-cyan-light-4);
    --colors-color-palette-light-5: var(--colors-cyan-light-5);
    --colors-color-palette-light-6: var(--colors-cyan-light-6);
    --colors-color-palette-light-7: var(--colors-cyan-light-7);
    --colors-color-palette-light-8: var(--colors-cyan-light-8);
    --colors-color-palette-light-9: var(--colors-cyan-light-9);
    --colors-color-palette-light-10: var(--colors-cyan-light-10);
    --colors-color-palette-light-11: var(--colors-cyan-light-11);
    --colors-color-palette-light-12: var(--colors-cyan-light-12);
    --colors-color-palette-light-a1: var(--colors-cyan-light-a1);
    --colors-color-palette-light-a2: var(--colors-cyan-light-a2);
    --colors-color-palette-light-a3: var(--colors-cyan-light-a3);
    --colors-color-palette-light-a4: var(--colors-cyan-light-a4);
    --colors-color-palette-light-a5: var(--colors-cyan-light-a5);
    --colors-color-palette-light-a6: var(--colors-cyan-light-a6);
    --colors-color-palette-light-a7: var(--colors-cyan-light-a7);
    --colors-color-palette-light-a8: var(--colors-cyan-light-a8);
    --colors-color-palette-light-a9: var(--colors-cyan-light-a9);
    --colors-color-palette-light-a10: var(--colors-cyan-light-a10);
    --colors-color-palette-light-a11: var(--colors-cyan-light-a11);
    --colors-color-palette-light-a12: var(--colors-cyan-light-a12);
    --colors-color-palette-dark-1: var(--colors-cyan-dark-1);
    --colors-color-palette-dark-2: var(--colors-cyan-dark-2);
    --colors-color-palette-dark-3: var(--colors-cyan-dark-3);
    --colors-color-palette-dark-4: var(--colors-cyan-dark-4);
    --colors-color-palette-dark-5: var(--colors-cyan-dark-5);
    --colors-color-palette-dark-6: var(--colors-cyan-dark-6);
    --colors-color-palette-dark-7: var(--colors-cyan-dark-7);
    --colors-color-palette-dark-8: var(--colors-cyan-dark-8);
    --colors-color-palette-dark-9: var(--colors-cyan-dark-9);
    --colors-color-palette-dark-10: var(--colors-cyan-dark-10);
    --colors-color-palette-dark-11: var(--colors-cyan-dark-11);
    --colors-color-palette-dark-12: var(--colors-cyan-dark-12);
    --colors-color-palette-dark-a1: var(--colors-cyan-dark-a1);
    --colors-color-palette-dark-a2: var(--colors-cyan-dark-a2);
    --colors-color-palette-dark-a3: var(--colors-cyan-dark-a3);
    --colors-color-palette-dark-a4: var(--colors-cyan-dark-a4);
    --colors-color-palette-dark-a5: var(--colors-cyan-dark-a5);
    --colors-color-palette-dark-a6: var(--colors-cyan-dark-a6);
    --colors-color-palette-dark-a7: var(--colors-cyan-dark-a7);
    --colors-color-palette-dark-a8: var(--colors-cyan-dark-a8);
    --colors-color-palette-dark-a9: var(--colors-cyan-dark-a9);
    --colors-color-palette-dark-a10: var(--colors-cyan-dark-a10);
    --colors-color-palette-dark-a11: var(--colors-cyan-dark-a11);
    --colors-color-palette-dark-a12: var(--colors-cyan-dark-a12);
    --colors-color-palette-1: var(--colors-cyan-1);
    --colors-color-palette-2: var(--colors-cyan-2);
    --colors-color-palette-3: var(--colors-cyan-3);
    --colors-color-palette-4: var(--colors-cyan-4);
    --colors-color-palette-5: var(--colors-cyan-5);
    --colors-color-palette-6: var(--colors-cyan-6);
    --colors-color-palette-7: var(--colors-cyan-7);
    --colors-color-palette-8: var(--colors-cyan-8);
    --colors-color-palette-9: var(--colors-cyan-9);
    --colors-color-palette-10: var(--colors-cyan-10);
    --colors-color-palette-11: var(--colors-cyan-11);
    --colors-color-palette-12: var(--colors-cyan-12);
    --colors-color-palette-a1: var(--colors-cyan-a1);
    --colors-color-palette-a2: var(--colors-cyan-a2);
    --colors-color-palette-a3: var(--colors-cyan-a3);
    --colors-color-palette-a4: var(--colors-cyan-a4);
    --colors-color-palette-a5: var(--colors-cyan-a5);
    --colors-color-palette-a6: var(--colors-cyan-a6);
    --colors-color-palette-a7: var(--colors-cyan-a7);
    --colors-color-palette-a8: var(--colors-cyan-a8);
    --colors-color-palette-a9: var(--colors-cyan-a9);
    --colors-color-palette-a10: var(--colors-cyan-a10);
    --colors-color-palette-a11: var(--colors-cyan-a11);
    --colors-color-palette-a12: var(--colors-cyan-a12);
    --colors-color-palette-default: var(--colors-cyan-default);
    --colors-color-palette-emphasized: var(--colors-cyan-emphasized);
    --colors-color-palette-fg: var(--colors-cyan-fg);
    --colors-color-palette-text: var(--colors-cyan-text);
}

  *,::before,::after,::backdrop {
    --blur: /*-*/ /*-*/;
    --brightness: /*-*/ /*-*/;
    --contrast: /*-*/ /*-*/;
    --grayscale: /*-*/ /*-*/;
    --hue-rotate: /*-*/ /*-*/;
    --invert: /*-*/ /*-*/;
    --saturate: /*-*/ /*-*/;
    --sepia: /*-*/ /*-*/;
    --drop-shadow: /*-*/ /*-*/;
    --backdrop-blur: /*-*/ /*-*/;
    --backdrop-brightness: /*-*/ /*-*/;
    --backdrop-contrast: /*-*/ /*-*/;
    --backdrop-grayscale: /*-*/ /*-*/;
    --backdrop-hue-rotate: /*-*/ /*-*/;
    --backdrop-invert: /*-*/ /*-*/;
    --backdrop-opacity: /*-*/ /*-*/;
    --backdrop-saturate: /*-*/ /*-*/;
    --backdrop-sepia: /*-*/ /*-*/;
    --gradient-from-position: /*-*/ /*-*/;
    --gradient-to-position: /*-*/ /*-*/;
    --gradient-via-position: /*-*/ /*-*/;
    --scroll-snap-strictness: proximity;
    --border-spacing-x: 0;
    --border-spacing-y: 0;
    --translate-x: 0;
    --translate-y: 0;
    --rotate: 0;
    --rotate-x: 0;
    --rotate-y: 0;
    --skew-x: 0;
    --skew-y: 0;
    --scale-x: 1;
    --scale-y: 1;
}
}

@layer tokens{
  :where(:root, :host) {
    --animations-backdrop-in: fade-in 250ms var(--easings-emphasized-in);
    --animations-backdrop-out: fade-out 200ms var(--easings-emphasized-out);
    --animations-dialog-in: slide-in 400ms var(--easings-emphasized-in);
    --animations-dialog-out: slide-out 200ms var(--easings-emphasized-out);
    --animations-drawer-in-left: slide-in-left 400ms var(--easings-emphasized-in);
    --animations-drawer-out-left: slide-out-left 200ms var(--easings-emphasized-out);
    --animations-drawer-in-right: slide-in-right 400ms var(--easings-emphasized-in);
    --animations-drawer-out-right: slide-out-right 200ms var(--easings-emphasized-out);
    --animations-skeleton-pulse: skeleton-pulse 2s var(--easings-pulse) infinite;
    --animations-fade-in: fade-in 400ms var(--easings-emphasized-in);
    --animations-collapse-in: collapse-in 250ms var(--easings-emphasized-in);
    --animations-collapse-out: collapse-out 200ms var(--easings-emphasized-out);
    --animations-spin: spin 1s linear infinite;
    --blurs-sm: 4px;
    --blurs-base: 8px;
    --blurs-md: 12px;
    --blurs-lg: 16px;
    --blurs-xl: 24px;
    --blurs-2xl: 40px;
    --blurs-3xl: 64px;
    --borders-none: none;
    --colors-current: currentColor;
    --colors-black: #000000;
    --colors-black-a1: rgba(0, 0, 0, 0.05);
    --colors-black-a2: rgba(0, 0, 0, 0.1);
    --colors-black-a3: rgba(0, 0, 0, 0.15);
    --colors-black-a4: rgba(0, 0, 0, 0.2);
    --colors-black-a5: rgba(0, 0, 0, 0.3);
    --colors-black-a6: rgba(0, 0, 0, 0.4);
    --colors-black-a7: rgba(0, 0, 0, 0.5);
    --colors-black-a8: rgba(0, 0, 0, 0.6);
    --colors-black-a9: rgba(0, 0, 0, 0.7);
    --colors-black-a10: rgba(0, 0, 0, 0.8);
    --colors-black-a11: rgba(0, 0, 0, 0.9);
    --colors-black-a12: rgba(0, 0, 0, 0.95);
    --colors-white: #ffffff;
    --colors-white-a1: rgba(255, 255, 255, 0.05);
    --colors-white-a2: rgba(255, 255, 255, 0.1);
    --colors-white-a3: rgba(255, 255, 255, 0.15);
    --colors-white-a4: rgba(255, 255, 255, 0.2);
    --colors-white-a5: rgba(255, 255, 255, 0.3);
    --colors-white-a6: rgba(255, 255, 255, 0.4);
    --colors-white-a7: rgba(255, 255, 255, 0.5);
    --colors-white-a8: rgba(255, 255, 255, 0.6);
    --colors-white-a9: rgba(255, 255, 255, 0.7);
    --colors-white-a10: rgba(255, 255, 255, 0.8);
    --colors-white-a11: rgba(255, 255, 255, 0.9);
    --colors-white-a12: rgba(255, 255, 255, 0.95);
    --colors-transparent: rgb(0 0 0 / 0);
    --colors-red-light-1: #fffcfc;
    --colors-red-light-2: #fff7f7;
    --colors-red-light-3: #feebec;
    --colors-red-light-4: #ffdbdc;
    --colors-red-light-5: #ffcdce;
    --colors-red-light-6: #fdbdbe;
    --colors-red-light-7: #f4a9aa;
    --colors-red-light-8: #eb8e90;
    --colors-red-light-9: #e5484d;
    --colors-red-light-10: #dc3e42;
    --colors-red-light-11: #ce2c31;
    --colors-red-light-12: #641723;
    --colors-red-light-a1: #ff000003;
    --colors-red-light-a2: #ff000008;
    --colors-red-light-a3: #f3000d14;
    --colors-red-light-a4: #ff000824;
    --colors-red-light-a5: #ff000632;
    --colors-red-light-a6: #f8000442;
    --colors-red-light-a7: #df000356;
    --colors-red-light-a8: #d2000571;
    --colors-red-light-a9: #db0007b7;
    --colors-red-light-a10: #d10005c1;
    --colors-red-light-a11: #c40006d3;
    --colors-red-light-a12: #55000de8;
    --colors-red-dark-1: #191111;
    --colors-red-dark-2: #201314;
    --colors-red-dark-3: #3b1219;
    --colors-red-dark-4: #500f1c;
    --colors-red-dark-5: #611623;
    --colors-red-dark-6: #72232d;
    --colors-red-dark-7: #8c333a;
    --colors-red-dark-8: #b54548;
    --colors-red-dark-9: #e5484d;
    --colors-red-dark-10: #ec5d5e;
    --colors-red-dark-11: #ff9592;
    --colors-red-dark-12: #ffd1d9;
    --colors-red-dark-a1: #f4121209;
    --colors-red-dark-a2: #f22f3e11;
    --colors-red-dark-a3: #ff173f2d;
    --colors-red-dark-a4: #fe0a3b44;
    --colors-red-dark-a5: #ff204756;
    --colors-red-dark-a6: #ff3e5668;
    --colors-red-dark-a7: #ff536184;
    --colors-red-dark-a8: #ff5d61b0;
    --colors-red-dark-a9: #fe4e54e4;
    --colors-red-dark-a10: #ff6465eb;
    --colors-red-dark-a11: #ff9592;
    --colors-red-dark-a12: #ffd1d9;
    --colors-gray-light-1: #fcfcfc;
    --colors-gray-light-2: #f9f9f9;
    --colors-gray-light-3: #f0f0f0;
    --colors-gray-light-4: #e8e8e8;
    --colors-gray-light-5: #e0e0e0;
    --colors-gray-light-6: #d9d9d9;
    --colors-gray-light-7: #cecece;
    --colors-gray-light-8: #bbbbbb;
    --colors-gray-light-9: #8d8d8d;
    --colors-gray-light-10: #838383;
    --colors-gray-light-11: #646464;
    --colors-gray-light-12: #202020;
    --colors-gray-light-a1: #00000003;
    --colors-gray-light-a2: #00000006;
    --colors-gray-light-a3: #0000000f;
    --colors-gray-light-a4: #00000017;
    --colors-gray-light-a5: #0000001f;
    --colors-gray-light-a6: #00000026;
    --colors-gray-light-a7: #00000031;
    --colors-gray-light-a8: #00000044;
    --colors-gray-light-a9: #00000072;
    --colors-gray-light-a10: #0000007c;
    --colors-gray-light-a11: #0000009b;
    --colors-gray-light-a12: #000000df;
    --colors-gray-dark-1: #111111;
    --colors-gray-dark-2: #191919;
    --colors-gray-dark-3: #222222;
    --colors-gray-dark-4: #2a2a2a;
    --colors-gray-dark-5: #313131;
    --colors-gray-dark-6: #3a3a3a;
    --colors-gray-dark-7: #484848;
    --colors-gray-dark-8: #606060;
    --colors-gray-dark-9: #6e6e6e;
    --colors-gray-dark-10: #7b7b7b;
    --colors-gray-dark-11: #b4b4b4;
    --colors-gray-dark-12: #eeeeee;
    --colors-gray-dark-a1: #00000000;
    --colors-gray-dark-a2: #ffffff09;
    --colors-gray-dark-a3: #ffffff12;
    --colors-gray-dark-a4: #ffffff1b;
    --colors-gray-dark-a5: #ffffff22;
    --colors-gray-dark-a6: #ffffff2c;
    --colors-gray-dark-a7: #ffffff3b;
    --colors-gray-dark-a8: #ffffff55;
    --colors-gray-dark-a9: #ffffff64;
    --colors-gray-dark-a10: #ffffff72;
    --colors-gray-dark-a11: #ffffffaf;
    --colors-gray-dark-a12: #ffffffed;
    --colors-cyan-light-1: #fafdfe;
    --colors-cyan-light-2: #f2fafb;
    --colors-cyan-light-3: #def7f9;
    --colors-cyan-light-4: #caf1f6;
    --colors-cyan-light-5: #b5e9f0;
    --colors-cyan-light-6: #9ddde7;
    --colors-cyan-light-7: #7dcedc;
    --colors-cyan-light-8: #3db9cf;
    --colors-cyan-light-9: #00a2c7;
    --colors-cyan-light-10: #0797b9;
    --colors-cyan-light-11: #107d98;
    --colors-cyan-light-12: #0d3c48;
    --colors-cyan-light-a1: #0099cc05;
    --colors-cyan-light-a2: #009db10d;
    --colors-cyan-light-a3: #00c2d121;
    --colors-cyan-light-a4: #00bcd435;
    --colors-cyan-light-a5: #01b4cc4a;
    --colors-cyan-light-a6: #00a7c162;
    --colors-cyan-light-a7: #009fbb82;
    --colors-cyan-light-a8: #00a3c0c2;
    --colors-cyan-light-a9: #00a2c7;
    --colors-cyan-light-a10: #0094b7f8;
    --colors-cyan-light-a11: #007491ef;
    --colors-cyan-light-a12: #00323ef2;
    --colors-cyan-dark-1: #0b161a;
    --colors-cyan-dark-2: #101b20;
    --colors-cyan-dark-3: #082c36;
    --colors-cyan-dark-4: #003848;
    --colors-cyan-dark-5: #004558;
    --colors-cyan-dark-6: #045468;
    --colors-cyan-dark-7: #12677e;
    --colors-cyan-dark-8: #11809c;
    --colors-cyan-dark-9: #00a2c7;
    --colors-cyan-dark-10: #23afd0;
    --colors-cyan-dark-11: #4ccce6;
    --colors-cyan-dark-12: #b6ecf7;
    --colors-cyan-dark-a1: #0091f70a;
    --colors-cyan-dark-a2: #02a7f211;
    --colors-cyan-dark-a3: #00befd28;
    --colors-cyan-dark-a4: #00baff3b;
    --colors-cyan-dark-a5: #00befd4d;
    --colors-cyan-dark-a6: #00c7fd5e;
    --colors-cyan-dark-a7: #14cdff75;
    --colors-cyan-dark-a8: #11cfff95;
    --colors-cyan-dark-a9: #00cfffc3;
    --colors-cyan-dark-a10: #28d6ffcd;
    --colors-cyan-dark-a11: #52e1fee5;
    --colors-cyan-dark-a12: #bbf3fef7;
    --durations-fastest: 50ms;
    --durations-faster: 100ms;
    --durations-fast: 150ms;
    --durations-normal: 200ms;
    --durations-slow: 300ms;
    --durations-slower: 400ms;
    --durations-slowest: 500ms;
    --easings-pulse: cubic-bezier(0.4, 0.0, 0.6, 1.0);
    --easings-default: cubic-bezier(0.2, 0.0, 0, 1.0);
    --easings-emphasized-in: cubic-bezier(0.05, 0.7, 0.1, 1.0);
    --easings-emphasized-out: cubic-bezier(0.3, 0.0, 0.8, 0.15);
    --fonts-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --fonts-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --fonts-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --font-sizes-2xs: 0.5rem;
    --font-sizes-xs: 0.75rem;
    --font-sizes-sm: 0.875rem;
    --font-sizes-md: 1rem;
    --font-sizes-lg: 1.125rem;
    --font-sizes-xl: 1.25rem;
    --font-sizes-2xl: 1.5rem;
    --font-sizes-3xl: 1.875rem;
    --font-sizes-4xl: 2.25rem;
    --font-sizes-5xl: 3rem;
    --font-sizes-6xl: 3.75rem;
    --font-sizes-7xl: 4.5rem;
    --font-sizes-8xl: 6rem;
    --font-sizes-9xl: 8rem;
    --font-weights-thin: 100;
    --font-weights-extralight: 200;
    --font-weights-light: 300;
    --font-weights-normal: 400;
    --font-weights-medium: 500;
    --font-weights-semibold: 600;
    --font-weights-bold: 700;
    --font-weights-extrabold: 800;
    --font-weights-black: 900;
    --letter-spacings-tighter: -0.05em;
    --letter-spacings-tight: -0.025em;
    --letter-spacings-normal: 0em;
    --letter-spacings-wide: 0.025em;
    --letter-spacings-wider: 0.05em;
    --letter-spacings-widest: 0.1em;
    --line-heights-none: 1;
    --line-heights-tight: 1.25;
    --line-heights-normal: 1.5;
    --line-heights-relaxed: 1.75;
    --line-heights-loose: 2;
    --radii-none: 0;
    --radii-2xs: 0.0625rem;
    --radii-xs: 0.125rem;
    --radii-sm: 0.25rem;
    --radii-md: 0.375rem;
    --radii-lg: 0.5rem;
    --radii-xl: 0.75rem;
    --radii-2xl: 1rem;
    --radii-3xl: 1.5rem;
    --radii-full: 9999px;
    --sizes-0: 0rem;
    --sizes-1: 0.25rem;
    --sizes-2: 0.5rem;
    --sizes-3: 0.75rem;
    --sizes-4: 1rem;
    --sizes-5: 1.25rem;
    --sizes-6: 1.5rem;
    --sizes-7: 1.75rem;
    --sizes-8: 2rem;
    --sizes-9: 2.25rem;
    --sizes-10: 2.5rem;
    --sizes-11: 2.75rem;
    --sizes-12: 3rem;
    --sizes-14: 3.5rem;
    --sizes-16: 4rem;
    --sizes-20: 5rem;
    --sizes-24: 6rem;
    --sizes-28: 7rem;
    --sizes-32: 8rem;
    --sizes-36: 9rem;
    --sizes-40: 10rem;
    --sizes-44: 11rem;
    --sizes-48: 12rem;
    --sizes-52: 13rem;
    --sizes-56: 14rem;
    --sizes-60: 15rem;
    --sizes-64: 16rem;
    --sizes-72: 18rem;
    --sizes-80: 20rem;
    --sizes-96: 24rem;
    --sizes-0\.5: 0.125rem;
    --sizes-1\.5: 0.375rem;
    --sizes-2\.5: 0.625rem;
    --sizes-3\.5: 0.875rem;
    --sizes-4\.5: 1.125rem;
    --sizes-2xs: 16rem;
    --sizes-xs: 20rem;
    --sizes-sm: 24rem;
    --sizes-md: 28rem;
    --sizes-lg: 32rem;
    --sizes-xl: 36rem;
    --sizes-2xl: 42rem;
    --sizes-3xl: 48rem;
    --sizes-4xl: 56rem;
    --sizes-5xl: 64rem;
    --sizes-6xl: 72rem;
    --sizes-7xl: 80rem;
    --sizes-8xl: 90rem;
    --sizes-full: 100%;
    --sizes-min: min-content;
    --sizes-max: max-content;
    --sizes-fit: fit-content;
    --sizes-breakpoint-sm: 640px;
    --sizes-breakpoint-md: 768px;
    --sizes-breakpoint-lg: 1024px;
    --sizes-breakpoint-xl: 1280px;
    --sizes-breakpoint-2xl: 1536px;
    --spacing-0: 0rem;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-11: 2.75rem;
    --spacing-12: 3rem;
    --spacing-14: 3.5rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-28: 7rem;
    --spacing-32: 8rem;
    --spacing-36: 9rem;
    --spacing-40: 10rem;
    --spacing-44: 11rem;
    --spacing-48: 12rem;
    --spacing-52: 13rem;
    --spacing-56: 14rem;
    --spacing-60: 15rem;
    --spacing-64: 16rem;
    --spacing-72: 18rem;
    --spacing-80: 20rem;
    --spacing-96: 24rem;
    --spacing-0\.5: 0.125rem;
    --spacing-1\.5: 0.375rem;
    --spacing-2\.5: 0.625rem;
    --spacing-3\.5: 0.875rem;
    --spacing-4\.5: 1.125rem;
    --z-index-hide: -1;
    --z-index-base: 0;
    --z-index-docked: 10;
    --z-index-dropdown: 1000;
    --z-index-sticky: 1100;
    --z-index-banner: 1200;
    --z-index-overlay: 1300;
    --z-index-modal: 1400;
    --z-index-popover: 1500;
    --z-index-skip-link: 1600;
    --z-index-toast: 1700;
    --z-index-tooltip: 1800;
    --breakpoints-sm: 640px;
    --breakpoints-md: 768px;
    --breakpoints-lg: 1024px;
    --breakpoints-xl: 1280px;
    --breakpoints-2xl: 1536px;
    --radii-l1: var(--radii-xs);
    --radii-l2: var(--radii-sm);
    --radii-l3: var(--radii-md);
}

  :where(:root, .light) {
    --colors-bg-canvas: var(--colors-gray-1);
    --colors-bg-default: white;
    --colors-bg-subtle: var(--colors-gray-2);
    --colors-bg-muted: var(--colors-gray-3);
    --colors-bg-emphasized: var(--colors-gray-4);
    --colors-bg-disabled: var(--colors-gray-5);
    --colors-fg-default: var(--colors-gray-12);
    --colors-fg-muted: var(--colors-gray-11);
    --colors-fg-subtle: var(--colors-gray-10);
    --colors-fg-disabled: var(--colors-gray-9);
    --colors-fg-error: var(--colors-red-9);
    --colors-border-default: var(--colors-gray-7);
    --colors-border-muted: var(--colors-gray-6);
    --colors-border-subtle: var(--colors-gray-4);
    --colors-border-disabled: var(--colors-gray-5);
    --colors-border-outline: var(--colors-gray-a9);
    --colors-border-error: var(--colors-red-9);
    --colors-red-1: var(--colors-red-light-1);
    --colors-red-2: var(--colors-red-light-2);
    --colors-red-3: var(--colors-red-light-3);
    --colors-red-4: var(--colors-red-light-4);
    --colors-red-5: var(--colors-red-light-5);
    --colors-red-6: var(--colors-red-light-6);
    --colors-red-7: var(--colors-red-light-7);
    --colors-red-8: var(--colors-red-light-8);
    --colors-red-9: var(--colors-red-light-9);
    --colors-red-10: var(--colors-red-light-10);
    --colors-red-11: var(--colors-red-light-11);
    --colors-red-12: var(--colors-red-light-12);
    --colors-red-a1: var(--colors-red-light-a1);
    --colors-red-a2: var(--colors-red-light-a2);
    --colors-red-a3: var(--colors-red-light-a3);
    --colors-red-a4: var(--colors-red-light-a4);
    --colors-red-a5: var(--colors-red-light-a5);
    --colors-red-a6: var(--colors-red-light-a6);
    --colors-red-a7: var(--colors-red-light-a7);
    --colors-red-a8: var(--colors-red-light-a8);
    --colors-red-a9: var(--colors-red-light-a9);
    --colors-red-a10: var(--colors-red-light-a10);
    --colors-red-a11: var(--colors-red-light-a11);
    --colors-red-a12: var(--colors-red-light-a12);
    --colors-red-default: var(--colors-red-light-9);
    --colors-red-emphasized: var(--colors-red-light-10);
    --colors-red-fg: white;
    --colors-red-text: var(--colors-red-light-a11);
    --colors-gray-1: var(--colors-gray-light-1);
    --colors-gray-2: var(--colors-gray-light-2);
    --colors-gray-3: var(--colors-gray-light-3);
    --colors-gray-4: var(--colors-gray-light-4);
    --colors-gray-5: var(--colors-gray-light-5);
    --colors-gray-6: var(--colors-gray-light-6);
    --colors-gray-7: var(--colors-gray-light-7);
    --colors-gray-8: var(--colors-gray-light-8);
    --colors-gray-9: var(--colors-gray-light-9);
    --colors-gray-10: var(--colors-gray-light-10);
    --colors-gray-11: var(--colors-gray-light-11);
    --colors-gray-12: var(--colors-gray-light-12);
    --colors-gray-a1: var(--colors-gray-light-a1);
    --colors-gray-a2: var(--colors-gray-light-a2);
    --colors-gray-a3: var(--colors-gray-light-a3);
    --colors-gray-a4: var(--colors-gray-light-a4);
    --colors-gray-a5: var(--colors-gray-light-a5);
    --colors-gray-a6: var(--colors-gray-light-a6);
    --colors-gray-a7: var(--colors-gray-light-a7);
    --colors-gray-a8: var(--colors-gray-light-a8);
    --colors-gray-a9: var(--colors-gray-light-a9);
    --colors-gray-a10: var(--colors-gray-light-a10);
    --colors-gray-a11: var(--colors-gray-light-a11);
    --colors-gray-a12: var(--colors-gray-light-a12);
    --colors-gray-default: black;
    --colors-gray-emphasized: var(--colors-gray-12);
    --colors-gray-fg: white;
    --colors-gray-text: black;
    --colors-cyan-1: var(--colors-cyan-light-1);
    --colors-cyan-2: var(--colors-cyan-light-2);
    --colors-cyan-3: var(--colors-cyan-light-3);
    --colors-cyan-4: var(--colors-cyan-light-4);
    --colors-cyan-5: var(--colors-cyan-light-5);
    --colors-cyan-6: var(--colors-cyan-light-6);
    --colors-cyan-7: var(--colors-cyan-light-7);
    --colors-cyan-8: var(--colors-cyan-light-8);
    --colors-cyan-9: var(--colors-cyan-light-9);
    --colors-cyan-10: var(--colors-cyan-light-10);
    --colors-cyan-11: var(--colors-cyan-light-11);
    --colors-cyan-12: var(--colors-cyan-light-12);
    --colors-cyan-a1: var(--colors-cyan-light-a1);
    --colors-cyan-a2: var(--colors-cyan-light-a2);
    --colors-cyan-a3: var(--colors-cyan-light-a3);
    --colors-cyan-a4: var(--colors-cyan-light-a4);
    --colors-cyan-a5: var(--colors-cyan-light-a5);
    --colors-cyan-a6: var(--colors-cyan-light-a6);
    --colors-cyan-a7: var(--colors-cyan-light-a7);
    --colors-cyan-a8: var(--colors-cyan-light-a8);
    --colors-cyan-a9: var(--colors-cyan-light-a9);
    --colors-cyan-a10: var(--colors-cyan-light-a10);
    --colors-cyan-a11: var(--colors-cyan-light-a11);
    --colors-cyan-a12: var(--colors-cyan-light-a12);
    --colors-cyan-default: var(--colors-cyan-light-9);
    --colors-cyan-emphasized: var(--colors-cyan-light-10);
    --colors-cyan-fg: white;
    --colors-cyan-text: var(--colors-cyan-light-a11);
    --shadows-xs: 0px 1px 2px var(--colors-gray-a5), 0px 0px 1px var(--colors-gray-a7);
    --shadows-sm: 0px 2px 4px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-md: 0px 4px 8px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-lg: 0px 8px 16px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-xl: 0px 16px 24px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-2xl: 0px 24px 40px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7)
}

  .dark {
    --colors-bg-canvas: var(--colors-gray-1);
    --colors-bg-default: var(--colors-gray-2);
    --colors-bg-subtle: var(--colors-gray-3);
    --colors-bg-muted: var(--colors-gray-4);
    --colors-bg-emphasized: var(--colors-gray-5);
    --colors-bg-disabled: var(--colors-gray-6);
    --colors-fg-default: var(--colors-gray-12);
    --colors-fg-muted: var(--colors-gray-11);
    --colors-fg-subtle: var(--colors-gray-10);
    --colors-fg-disabled: var(--colors-gray-9);
    --colors-fg-error: var(--colors-red-9);
    --colors-border-default: var(--colors-gray-7);
    --colors-border-muted: var(--colors-gray-6);
    --colors-border-subtle: var(--colors-gray-4);
    --colors-border-disabled: var(--colors-gray-5);
    --colors-border-outline: var(--colors-gray-a9);
    --colors-border-error: var(--colors-red-9);
    --colors-red-1: var(--colors-red-dark-1);
    --colors-red-2: var(--colors-red-dark-2);
    --colors-red-3: var(--colors-red-dark-3);
    --colors-red-4: var(--colors-red-dark-4);
    --colors-red-5: var(--colors-red-dark-5);
    --colors-red-6: var(--colors-red-dark-6);
    --colors-red-7: var(--colors-red-dark-7);
    --colors-red-8: var(--colors-red-dark-8);
    --colors-red-9: var(--colors-red-dark-9);
    --colors-red-10: var(--colors-red-dark-10);
    --colors-red-11: var(--colors-red-dark-11);
    --colors-red-12: var(--colors-red-dark-12);
    --colors-red-a1: var(--colors-red-dark-a1);
    --colors-red-a2: var(--colors-red-dark-a2);
    --colors-red-a3: var(--colors-red-dark-a3);
    --colors-red-a4: var(--colors-red-dark-a4);
    --colors-red-a5: var(--colors-red-dark-a5);
    --colors-red-a6: var(--colors-red-dark-a6);
    --colors-red-a7: var(--colors-red-dark-a7);
    --colors-red-a8: var(--colors-red-dark-a8);
    --colors-red-a9: var(--colors-red-dark-a9);
    --colors-red-a10: var(--colors-red-dark-a10);
    --colors-red-a11: var(--colors-red-dark-a11);
    --colors-red-a12: var(--colors-red-dark-a12);
    --colors-red-default: var(--colors-red-dark-9);
    --colors-red-emphasized: var(--colors-red-dark-10);
    --colors-red-fg: white;
    --colors-red-text: var(--colors-red-dark-a11);
    --colors-gray-1: var(--colors-gray-dark-1);
    --colors-gray-2: var(--colors-gray-dark-2);
    --colors-gray-3: var(--colors-gray-dark-3);
    --colors-gray-4: var(--colors-gray-dark-4);
    --colors-gray-5: var(--colors-gray-dark-5);
    --colors-gray-6: var(--colors-gray-dark-6);
    --colors-gray-7: var(--colors-gray-dark-7);
    --colors-gray-8: var(--colors-gray-dark-8);
    --colors-gray-9: var(--colors-gray-dark-9);
    --colors-gray-10: var(--colors-gray-dark-10);
    --colors-gray-11: var(--colors-gray-dark-11);
    --colors-gray-12: var(--colors-gray-dark-12);
    --colors-gray-a1: var(--colors-gray-dark-a1);
    --colors-gray-a2: var(--colors-gray-dark-a2);
    --colors-gray-a3: var(--colors-gray-dark-a3);
    --colors-gray-a4: var(--colors-gray-dark-a4);
    --colors-gray-a5: var(--colors-gray-dark-a5);
    --colors-gray-a6: var(--colors-gray-dark-a6);
    --colors-gray-a7: var(--colors-gray-dark-a7);
    --colors-gray-a8: var(--colors-gray-dark-a8);
    --colors-gray-a9: var(--colors-gray-dark-a9);
    --colors-gray-a10: var(--colors-gray-dark-a10);
    --colors-gray-a11: var(--colors-gray-dark-a11);
    --colors-gray-a12: var(--colors-gray-dark-a12);
    --colors-gray-default: white;
    --colors-gray-emphasized: var(--colors-gray-12);
    --colors-gray-fg: black;
    --colors-gray-text: white;
    --colors-cyan-1: var(--colors-cyan-dark-1);
    --colors-cyan-2: var(--colors-cyan-dark-2);
    --colors-cyan-3: var(--colors-cyan-dark-3);
    --colors-cyan-4: var(--colors-cyan-dark-4);
    --colors-cyan-5: var(--colors-cyan-dark-5);
    --colors-cyan-6: var(--colors-cyan-dark-6);
    --colors-cyan-7: var(--colors-cyan-dark-7);
    --colors-cyan-8: var(--colors-cyan-dark-8);
    --colors-cyan-9: var(--colors-cyan-dark-9);
    --colors-cyan-10: var(--colors-cyan-dark-10);
    --colors-cyan-11: var(--colors-cyan-dark-11);
    --colors-cyan-12: var(--colors-cyan-dark-12);
    --colors-cyan-a1: var(--colors-cyan-dark-a1);
    --colors-cyan-a2: var(--colors-cyan-dark-a2);
    --colors-cyan-a3: var(--colors-cyan-dark-a3);
    --colors-cyan-a4: var(--colors-cyan-dark-a4);
    --colors-cyan-a5: var(--colors-cyan-dark-a5);
    --colors-cyan-a6: var(--colors-cyan-dark-a6);
    --colors-cyan-a7: var(--colors-cyan-dark-a7);
    --colors-cyan-a8: var(--colors-cyan-dark-a8);
    --colors-cyan-a9: var(--colors-cyan-dark-a9);
    --colors-cyan-a10: var(--colors-cyan-dark-a10);
    --colors-cyan-a11: var(--colors-cyan-dark-a11);
    --colors-cyan-a12: var(--colors-cyan-dark-a12);
    --colors-cyan-default: var(--colors-cyan-dark-9);
    --colors-cyan-emphasized: var(--colors-cyan-dark-10);
    --colors-cyan-fg: white;
    --colors-cyan-text: var(--colors-cyan-dark-a11);
    --shadows-xs: 0px 1px 1px var(--colors-black-a12), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-sm: 0px 2px 4px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-md: 0px 4px 8px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-lg: 0px 8px 16px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-xl: 0px 16px 24px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-2xl: 0px 24px 40px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7)
}

  @keyframes fade-in {
    from {
      opacity: 0;
}

    to {
      opacity: 1;
}
}

  @keyframes fade-out {
    from {
      opacity: 1;
}

    to {
      opacity: 0;
}
}

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(64px);
}

    100% {
      opacity: 1;
      transform: translateY(0);
}
}

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateY(0);
}

    100% {
      opacity: 0;
      transform: translateY(64px);
}
}

  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
}

    100% {
      transform: translateX(0%);
}
}

  @keyframes slide-out-left {
    0% {
      transform: translateX(0%);
}

    100% {
      transform: translateX(-100%);
}
}

  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
}

    100% {
      transform: translateX(0%);
}
}

  @keyframes slide-out-right {
    0% {
      transform: translateX(0%);
}

    100% {
      transform: translateX(100%);
}
}

  @keyframes collapse-in {
    0% {
      height: var(--sizes-0);
}

    100% {
      height: var(--height);
}
}

  @keyframes collapse-out {
    0% {
      height: var(--height);
}

    100% {
      height: var(--sizes-0);
}
}

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-4px);
}

    100% {
      opacity: 1;
      transform: translateY(0);
}
}

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
}

    100% {
      opacity: 0;
      transform: translateY(-4px);
}
}

  @keyframes skeleton-pulse {
    50% {
      opacity: 0.5;
}
}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
}

    100% {
      transform: rotate(360deg);
}
}
}

@layer recipes.slots{
  @layer _base{
    .toggleGroup__root {
      display: flex;
      overflow: hidden;
      position: relative;
}

    .toggleGroup__root[data-orientation=vertical] {
      flex-direction: column;
}

    .toggleGroup__item {
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      color: var(--colors-fg-subtle);
      display: inline-flex;
      min-width: var(--sizes-0);
      outline: var(--borders-none);
      position: relative;
      -webkit-user-select: none;
      user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      align-items: center;
      font-weight: var(--font-weights-semibold);
      justify-content: center;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: background, border-color, color, box-shadow;
      transition-property: background, border-color, color, box-shadow;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .toggleGroup__item:is([data-state="on"]) {
      background: var(--colors-gray-a3);
      color: var(--colors-fg-default);
}

    .toggleGroup__item:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      cursor: not-allowed;
      border-color: var(--colors-border-disabled);
}

    @media (hover: hover) and (pointer: fine) {
      .toggleGroup__item:is(:hover, [data-hover]) {
        background: var(--colors-gray-a2);
}

      .toggleGroup__item:is(:hover, [data-hover]):is([data-state="on"]) {
        background: var(--colors-gray-a3);
}

      .toggleGroup__item:is(:hover, [data-hover]):is(:disabled, [disabled], [data-disabled]) {
        background: var(--colors-transparent);
        color: var(--colors-fg-disabled);
        border-color: var(--colors-border-disabled);
}
}
}

  .toggleGroup__item--size_md {
    height: var(--sizes-10);
    min-width: var(--sizes-10);
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
    gap: var(--spacing-2);
}

  .toggleGroup__item--size_md svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .toggleGroup__root--variant_outline {
    border-radius: var(--radii-l2);
    border-width: 1px;
    border-color: var(--colors-border-default);
}

  .toggleGroup__root--variant_outline[data-orientation=horizontal] > :not([hidden]) ~ :not([hidden]) {
    border-inline-start-width: 1px;
    border-inline-end-width: 0px;
}

  .toggleGroup__root--variant_outline[data-orientation=vertical] > :not([hidden]) ~ :not([hidden]) {
    border-top-width: 1px;
    border-bottom-width: 0px;
}

  .toggleGroup__item--variant_outline {
    border-color: var(--colors-border-default);
}

  .toggleGroup__item--variant_outline:is(:focus-visible, [data-focus-visible]) {
    color: var(--colors-fg-default);
    background: var(--colors-gray-a3);
}
}

@layer utilities{
  .p_4 {
    padding: var(--spacing-4);
}

  .td_var\(--text-decoration\) {
    text-decoration: var(--text-decoration);
}
}`;
	document.head.append(style);
};
