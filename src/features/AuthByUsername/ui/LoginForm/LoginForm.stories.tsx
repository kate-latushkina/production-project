import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

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
Light.decorators = [StoreDecorator({
  loginForm: { username: "admin", password: "qwe" }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({
  loginForm: { username: "admin", password: "qwe" }
}),
ThemeDecorator(Theme.DARK)];

export const withEroor = Template.bind({});
withEroor.args = {};
withEroor.decorators = [StoreDecorator({
  loginForm: { username: "admin", password: "qwe", error: "ERROR" }
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { username: "admin", password: "qwe", isLoading: true }
})];
