import Message from "./src/message.vue";
import { h, render } from "vue";

export const TMessage = (config) => {
  const VNode = h(Message, {
    ...config,
  });
  const container = document.createElement("div");
  container.setAttribute("class", "t-message-container");
  document.body.append(container);
  container.style.top = "50px";
  render(VNode, container);
};

export default TMessage;
