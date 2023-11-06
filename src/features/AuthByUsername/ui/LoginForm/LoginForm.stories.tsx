import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "features/LoginForm",
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
