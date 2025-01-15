<template>
  <div class="t-tree-node">
    <div class="t-tree-node__content" @click="handleClickNode($event, node)">
      <div
        class="t-icon icon-arrow-right-filling"
        :style="{
          visibility: node.children && node.children.length ? 'visible' : 'hidden',
          transform: showChild ? 'rotateZ(90deg)' : '',
        }"
        @click.stop="showChild = !showChild"
      ></div>
      <span
        :class="`p-tree-node__checkbox ${getCheckType}`"
        v-if="props.showCheckbox"
        @click.stop="changeCheckStatus(node)"
      ></span>
      <span class="t-tree-node__label">{{ node.label }}</span>
    </div>
    <!-- children -->
    <div class="t-tree-node__children" v-show="showChild">
      <t-tree-node
        v-for="child in node.children"
        :key="child[props.nodeKey]"
        :node="child"
        :node-key="props.nodeKey"
        :showCheckbox="showCheckbox"
        @handleClickNode="emit('handleClickNode', $event)"
        @changeCheckStatus="emit('changeCheckStatus', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { TreeNodeProps, TreeNodeEmits } from "./tree-node";
import { ref, computed } from "vue";

const props = defineProps(TreeNodeProps);
const emit = defineEmits(TreeNodeEmits);

defineOptions({
  name: "t-tree-node",
});

const showChild = ref(props.defaultExpandAll);

const handleClickNode = (e, node) => {
  emit("handleClickNode", {
    ...node,
    $event: e, // 这边是携带上原生的事件对象，方便外部使用
  });
};

const getCheckType = computed(() => {
  let checkType = "";
  if (props.node.isChecked) {
    checkType = "all";
  } else if (props.node.children && props.node.children.every((item) => item.isChecked === true)) {
    checkType = "all";
  } else if (props.node.children && props.node.children.some((item) => item.isChecked === true)) {
    checkType = "some";
  } else {
    checkType = "none";
  }
  return checkType;
});

const changeCheckStatus = (node) => {
  emit("changeCheckStatus", node);
};
</script>
