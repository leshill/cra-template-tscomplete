import React from "react";
import { storiesOf } from "@storybook/react";
import configureStore from "redux-mock-store";

import StoryProvider from "stories-helpers/StoryProvider";

import Network from "components/Network";

const mockStore = configureStore();

function makeStore(status: boolean) {
  return mockStore({
    network: {
      online: status,
    },
  });
}

const onlineStore = makeStore(true);
const offlineStore = makeStore(false);

storiesOf("Network", module)
  .addDecorator((story) => <StoryProvider store={onlineStore} story={story} />)
  .add("is online", () => <Network />);

storiesOf("Network", module)
  .addDecorator((story) => <StoryProvider store={offlineStore} story={story} />)
  .add("is offline", () => <Network />);
