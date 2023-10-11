import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "shared/Modal",
  component: Modal,

  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate dicta cum nobis ad numquam quam voluptatibus aliquid, magni error eveniet iure, facilis perspiciatis nam doloremque ea excepturi mollitia tempore."
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate dicta cum nobis ad numquam quam voluptatibus aliquid, magni error eveniet iure, facilis perspiciatis nam doloremque ea excepturi mollitia tempore."
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
