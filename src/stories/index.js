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
    template: `
        <div>
            <HelloButton label="Hey world!!" />
            <HelloButton label="こんにちは" />
            <HelloButton label="🙋🙋🙋" />
        </div>
    `,
  }));
