import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "widgets/Navbar",
  component: Navbar,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

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
