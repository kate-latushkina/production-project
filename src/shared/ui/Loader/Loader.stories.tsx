import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "shared/Loader",
  component: Loader,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
