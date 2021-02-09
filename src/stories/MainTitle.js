import { storiesOf } from "@storybook/vue";

// Component
import MainTitle from "../components/MainTitle";

// Story
storiesOf("MainTitle", module)
  // default
  .add("default", () => ({
    components: { MainTitle },
    template: `<MainTitle>Default</MainTitle>`,
  }))
  .add("size", () => ({
    components: { MainTitle },
    template: `
    <div>
        <MainTitle size="small">Small size title</MainTitle>
        <MainTitle size="">Normal size title</MainTitle>
        <MainTitle size="big">Big size title</MainTitle>
    </div>`,
  }));
