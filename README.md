# Chen's UI Components (@chen/ui-components)

A set of modern, accessible UI components built for **block-based modular content management systems (CMS)**, powered by React and **ParkUI** (PandaCSS + ArkUI). Includes ready-to-use templates for TinaCMS visual editing. Perfect for building content-driven applications with consistent, maintainable interfaces.

---

## ✨ Features

- **CMS-Optimized**: Designed for block-based architecture with modular content modeling
- **TinaCMS Integration**: Pre-built templates and blocks for visual content editing
- **Modern Components**: Accessible UI elements with built-in responsive behavior
- **PandaCSS Foundation**: Utility-first styling with design token system
- **Visual Editing**: Drag-and-drop templates for TinaCMS dashboard
- **ARK UI Core**: Accessible component primitives with headless options
- **Type-Safe**: Full TypeScript support for components and templates

---

## 📚 Documentation

- [Chen's Design System](https://design-system.chen.software)
- [UI Components API Reference](https://ui-components.chen.software/docs)
- [Block Architecture](https://ui-components.chen.software/docs/block-system)

---

## 🌟 Why CMS Focused?

- **Modular Content**: Components designed as independent content blocks
- **Visual Editing**: In-context previews for TinaCMS editors
- **Field Validation**: Integrated content validation rules
- **Preset Themes**: CMS-friendly color modes and layout variations
- **Content Portability**: Easy content migration between environments

---

## 📦 Installation

```bash
npm install @chen/ui-components @tinacms/cli
# or
yarn add @chen/ui-components @tinacms/cli
```

---

## 🚀 Quick Start

### 1. Base Configuration

Follow the initial [PandaCSS setup](#-quick-start) from previous instructions

### 2. TinaCMS Setup

Create a `tina.config.ts`:

```ts
import { defineConfig } from "@tinacms";
import {
  button,
  toggleGroup,
  dialog,
  heading,
  paragraph,
  text,
  stack,
} from "@chen/ui-components/templates";

export default defineConfig({
  // ... your existing config
  templates: [button, toggleGroup, dialog, heading, paragraph, text, stack],
});
```

### 3. Use CMS Components

```tsx
import {
  Button,
  Dialog,
  Heading,
  Text,
  Paragraph,
  Stack,
} from "@chen/ui-components/cms";

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <Box data-tina-field={tinaField(data.page, "body")}>
      {content?.map((block, index) => {
        switch (block?.__typename) {
          case "PageBodyDialog":
            return <Dialog key={`${index}-${block?.__typename}`} {...block} />;
          case "PageBodyHeading":
            return <Heading key={`${index}-${block?.__typename}`} {...block} />;
          case "PageBodyText":
            return <Text key={`${index}-${block?.__typename}`} {...block} />;
          case "PageBodyParagraph":
            return (
              <Paragraph key={`${index}-${block?.__typename}`} {...block} />
            );
          case "PageBodyButton":
            return <Button key={`${index}-${block?.__typename}`} {...block} />;
          case "PageBodyToggleGroup":
            return (
              <ToggleGroup key={`${index}-${block?.__typename}`} {...block} />
            );
          case "PageBodyStack":
            return <Stack key={`${index}-${block?.__typename}`} {...block} />;
        }
      })}
    </Box>
  );
}
```
