<template>
  <div class="t-tree">
    <t-tree-node
      v-for="node in treeData"
      :key="node[props.nodeKey]"
      :node="node"
      v-bind="$attrs"
      @handleClickNode="emit('handleClickNode', $event)"
      @changeCheckStatus="changeCheckStatus"
    />
  </div>
</template>

<script setup>
import { TreeProps, TreeNodeEmits } from "./tree";
import tTreeNode from "./tree-node.vue";
import { ref, watch } from "vue";

const props = defineProps(TreeProps);
const emit = defineEmits(TreeNodeEmits);

defineOptions({
  name: "t-tree",
});

const treeData = ref([]);

watch(
  () => props.data,
  (newValue) => {
    treeData.value = newValue;
  },
  { immediate: true }
);

const changeAllCheckStatus = (node) => {
  node.isChecked = !node.isChecked;
  if (node.children && node.children.length) {
    changeChildCheckStatus(node.children, node.isChecked); // 更改子级所有节点状态
  }
  changeParentCheckStatus(treeData.value, node[props.nodeKey]); // 更改父级所有节点状态
};

// 修改子级的选中状态
const changeChildCheckStatus = (children, isChecked) => {
  children.forEach((node) => {
    node.isChecked = isChecked;
    if (node.children && node.children.length) changeChildCheckStatus(node.children, isChecked);
  });
};

// 修改父级的选中状态
const changeParentCheckStatus = (children, id, parent) => {
  for (let item of children) {
    if (item[props.nodeKey] === id) {
      // 是否当前节点的所有子节点都选中
      const result = children.every((item) => item.isChecked === true);
      if (parent && parent.isChecked === result) {
        // 如果父级跟需要改变的结果一致，则不需要再往上找了
        break;
      } else if (parent && parent.isChecked !== result) {
        parent.isChecked = result;
        parent && changeParentCheckStatus(treeData.value, parent[props.nodeKey]);
      }
    } else if (item.children && item.children.length) {
      changeParentCheckStatus(item.children, id, item);
    }
  }
};

const changeCheckStatus = (node) => {
  findNode(treeData.value, node[props.nodeKey], changeAllCheckStatus);
};

const findNode = (data, id, handleFun) => {
  let obj = null;
  for (let item of data) {
    if (item[props.nodeKey] === id) {
      obj = item;
      handleFun(item);
      break;
    } else if (item.children && item.children.length) {
      const res = findNode(item.children, id, handleFun);
      if (res) obj = res;
    }
  }
  return obj;
};

const getCheckedNodes = () => {
  const checkedNodes = [];
  getChecked(treeData.value, checkedNodes);
  return checkedNodes.map((item) => item[props.nodeKey]);
};

const getChecked = (data, checkedNodes) => {
  for (let item of data) {
    if (item.isChecked) {
      checkedNodes.push(item);
    }
    if (item.children && item.children.length) {
      getChecked(item.children, checkedNodes);
    }
  }
};

const setCheckedNodes = (keys) => {
  setChecked(treeData.value, keys);
  keys.forEach((key) => {
    changeParentCheckStatus(treeData.value, key); // 更改父级所有节点状态
  });
};

const setChecked = (data, keys) => {
  for (let item of data) {
    if (keys.includes(item[props.nodeKey])) {
      item.isChecked = true;
    }
    if (item.children && item.children.length) {
      setChecked(item.children, keys);
    }
  }
};

defineExpose({
  getCheckedNodes,
  setCheckedNodes,
});
</script>
