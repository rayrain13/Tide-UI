(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TestUI = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

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
    return (vue.openBlock(), vue.createElementBlock("button", {
      class: vue.normalizeClass(["t-button", [
        `${_ctx.size && 't-button--' + _ctx.size}`,
        `t-button__${_ctx.type}`,
        { 't-button--icon': _ctx.icon },
        { 'is-plain': _ctx.plain },
        { 'is-disabled': _ctx.disabled || _ctx.loading },
        { 'is-round': _ctx.round },
      ]]),
      disabled: _ctx.disabled || _ctx.loading
    }, [
      vue.createElementVNode("div", _hoisted_2, [
        (_ctx.loading)
          ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_3))
          : vue.createCommentVNode("v-if", true),
        (_ctx.icon)
          ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 1,
              class: vue.normalizeClass(['t-icon', `icon-${_ctx.icon}`])
            }, null, 2 /* CLASS */))
          : vue.createCommentVNode("v-if", true),
        (_ctx.$slots.default)
          ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "default")
            ]))
          : vue.createCommentVNode("v-if", true)
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

  const instance = vue.getCurrentInstance();

  const close = () => {
    emit("close", instance.vnode.el.parentElement);
  };

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["t-message", `t-message__${_ctx.type}`])
    }, [
      vue.createElementVNode("i", {
        class: vue.normalizeClass(`t-icon icon-${MESSAGE_ICON_NAME[_ctx.type]}`)
      }, null, 2 /* CLASS */),
      vue.createElementVNode("span", _hoisted_1, vue.toDisplayString(_ctx.message), 1 /* TEXT */),
      (_ctx.showClose)
        ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: "t-icon icon-close-bold t-message_close_icon",
            onClick: close
          }))
        : vue.createCommentVNode("v-if", true)
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
    const VNode = vue.h(script, {
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
    vue.render(VNode, container);
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

  exports.TMessage = TMessage;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
