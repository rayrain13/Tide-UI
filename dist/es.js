import { openBlock, createElementBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, getCurrentInstance, toDisplayString, h, render } from 'vue';

const BUTTON_TYPE = ["default", "primary", "success", "warning", "info", "danger"];
const BUTTON_SIZE = ["", "small", "mini"];

const ButtonProps = {
  // 类型
  type: {
    type: String,
    default: "default",
    validator(value) {
      return BUTTON_TYPE.includes(value);
    },
  },
  // 尺寸
  size: {
    type: String,
    default: "",
    validator(value) {
      return BUTTON_SIZE.includes(value);
    },
  },
  plain: {
    type: Boolean,
    default: false,
  },
  // 圆角
  round: {
    type: Boolean,
    default: false,
  },
  // 图标
  icon: {
    type: String,
    default: "",
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 加载
  loading: {
    type: Boolean,
    default: false,
  },
};

const _hoisted_1$1 = ["disabled"];
const _hoisted_2 = { class: "t-button__inner" };
const _hoisted_3 = {
  key: 0,
  class: "t-icon icon-loading"
};
const _hoisted_4 = { key: 2 };


var script$1 = /*#__PURE__*/Object.assign({
  name: "t-button",
}, {
  __name: 'button',
  props: ButtonProps,
  setup(__props) {





return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(["t-button", [
      `${_ctx.size && 't-button--' + _ctx.size}`,
      `t-button__${_ctx.type}`,
      { 't-button--icon': _ctx.icon },
      { 'is-plain': _ctx.plain },
      { 'is-disabled': _ctx.disabled || _ctx.loading },
      { 'is-round': _ctx.round },
    ]]),
    disabled: _ctx.disabled || _ctx.loading
  }, [
    createElementVNode("div", _hoisted_2, [
      (_ctx.loading)
        ? (openBlock(), createElementBlock("i", _hoisted_3))
        : createCommentVNode("v-if", true),
      (_ctx.icon)
        ? (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass(['t-icon', `icon-${_ctx.icon}`])
          }, null, 2 /* CLASS */))
        : createCommentVNode("v-if", true),
      (_ctx.$slots.default)
        ? (openBlock(), createElementBlock("span", _hoisted_4, [
            renderSlot(_ctx.$slots, "default")
          ]))
        : createCommentVNode("v-if", true)
    ])
  ], 10 /* CLASS, PROPS */, _hoisted_1$1))
}
}

});

script$1.__file = "packages/components/button/src/button.vue";

const withInstall = (comp) => {
  comp.install = (app) => {
    app.component(comp.name, comp);
  };
  return comp
};

const TButton = withInstall(script$1);

const MESSAGE_TYPE = ["success", "info", "warning", "error"];

const Props = {
  type: {
    type: String,
    default: "",
    validator(value) {
      return MESSAGE_TYPE.includes(value);
    },
  },
  message: {
    type: String,
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
};

const _hoisted_1 = { class: "t-message__text" };


var script = {
  __name: 'message',
  props: Props,
  emits: ["close"],
  setup(__props, { emit: __emit }) {



const emit = __emit;

const MESSAGE_ICON_NAME = {
  success: "success-filling",
  info: "prompt-filling",
  warning: "warning-filling",
  error: "delete-filling",
};

const instance = getCurrentInstance();

const close = () => {
  emit("close", instance.vnode.el.parentElement);
};

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["t-message", `t-message__${_ctx.type}`])
  }, [
    createElementVNode("i", {
      class: normalizeClass(`t-icon icon-${MESSAGE_ICON_NAME[_ctx.type]}`)
    }, null, 2 /* CLASS */),
    createElementVNode("span", _hoisted_1, toDisplayString(_ctx.message), 1 /* TEXT */),
    (_ctx.showClose)
      ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "t-icon icon-close-bold t-message_close_icon",
          onClick: close
        }))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}
}

};

script.__file = "packages/components/message/src/message.vue";

let messageInstaceList = [];

const MESSAGE_START_TOP = 56; // 起始的高度
const MESSAGE_HEIGHT = 44; // 组件高度
const MESSAGE_GAP = 16; // 间隔高度

const setDestoryClock = (element, time = 3000) => {
  setTimeout(() => {
    destoryMessageElement(element);
  }, time);
};

const destoryMessageElement = (element) => {
  if (!element.parentElement?.contains(element)) return;
  element.parentElement?.removeChild(element);
  messageInstaceList = messageInstaceList.filter((item) => item !== element);
  messageInstaceList.forEach((item, index) => {
    item.style.top =
      MESSAGE_START_TOP + index * (MESSAGE_HEIGHT + MESSAGE_GAP) + "px";
  });
};

const TMessage$1 = (config) => {
  const VNode = h(script, {
    ...config,
    onClose(element) {
      destoryMessageElement(element);
    },
  });
  const container = document.createElement("div");
  container.setAttribute("class", "t-message-container");
  document.body.append(container);
  messageInstaceList.push(container);
  container.style.top =
    MESSAGE_START_TOP +
    (messageInstaceList.length - 1) * (MESSAGE_HEIGHT + MESSAGE_GAP) +
    "px";
  render(VNode, container);
  setDestoryClock(container, config.duration);
};

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TButton: TButton,
  TMessage: TMessage$1
});

const FUNCTION_COMP = ["TMessage"];

var index = {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMP.includes(key))
        app.component(key, value);
    });
  }
};

const TMessage = TMessage$1;

export { TMessage, index as default };
