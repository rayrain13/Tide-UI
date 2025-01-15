export const TreeNodeProps = {
  node: {
    type: Object,
    default: () => (
      {
        id: "",
        label: "",
        showChild: false,
        children: [],
      }
    ),
  },
  // 是否显示可选择
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  // 节点的唯一标识
  nodeKey: {
    type: String,
    default: 'id',
  },
  // 是否默认展开
  defaultExpandAll: {
    type: Boolean,
    default: false,
  }
};


export const TreeNodeEmits = ['handleClickNode', 'changeCheckStatus']