import { storiesOf } from "@storybook/vue";

// Component
import HelloButton from "../components/HelloButton";

// Story
storiesOf("HelloButton", module)
  // default
  .add("default", () => ({
    components: { HelloButton },
    template: `<HelloButton>default</HelloButton>`,
  }))
  // label
  .add("label", () => ({
    components: { HelloButton },
    // ここのtemplateの要素はVueの<template>タグと一緒で1つの要素しか表示してくれないので<div>で囲むんやで
    template: `
        <div>
            <HelloButton label="Hey world!!" />
            <HelloButton label="こんにちは" />
            <HelloButton label="🙋🙋🙋" />
        </div>
    `,
  }));
