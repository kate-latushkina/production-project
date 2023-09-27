import "app/styles/index.scss";
import { type Story } from "@storybook/react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const StyleDecorator = (story: () => Story) => story();
