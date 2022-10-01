import { user, topics } from "../fakeApi/index";

export const initialState = {
  user,
  topics,
  screenMode: 0,
  loading: true,
  selectedTopic: "architecture",
};
