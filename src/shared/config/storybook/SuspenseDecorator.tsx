import { type Story } from "@storybook/react";
import "app/styles/index.scss";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
