import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import MainPage from "./MainPage";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "pages/MainPage",
  component: MainPage,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
