export const TreeProps = {
  // 数据
  data: {
    type: Array,
    default: () => [],
  },
  // 节点的唯一标识
  nodeKey: {
    type: String,
    default: 'id',
  },
};


export const TreeNodeEmits = ['handleClickNode']