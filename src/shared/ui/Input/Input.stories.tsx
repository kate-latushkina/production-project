import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "shared/Input",
  component: Input,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
  placeholder: "Primary text",
  value: "123"
};

export const Dark = Template.bind({});
Dark.args = {
  placeholder: "Primary text",
  value: "123"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
