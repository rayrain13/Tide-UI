<template>
  <div>
    <!-- button -->
    <h2>按钮</h2>
    <h3>Button</h3>
    <div>
      <t-button>default</t-button>
      <t-button type="primary">primary</t-button>
      <t-button type="success">success</t-button>
      <t-button type="info">info</t-button>
      <t-button type="warning">warning</t-button>
      <t-button type="danger">danger</t-button>
    </div>
    <h3>Button size</h3>
    <div style="margin-bottom: 10px">
      <t-button type="primary" size="small">primary</t-button>
      <t-button type="success" size="small">success</t-button>
      <t-button type="info" size="small">info</t-button>
      <t-button type="warning" size="small">warning</t-button>
      <t-button type="danger" size="small">danger</t-button>
    </div>
    <div>
      <t-button type="primary" size="mini">primary</t-button>
      <t-button type="success" size="mini">success</t-button>
      <t-button type="info" size="mini">info</t-button>
      <t-button type="warning" size="mini">warning</t-button>
      <t-button type="danger" size="mini">danger</t-button>
    </div>
    <h3>Button round</h3>
    <div style="margin-bottom: 10px">
      <t-button round>default</t-button>
      <t-button type="primary" round>primary</t-button>
      <t-button type="success" round>success</t-button>
      <t-button type="info" round>info</t-button>
      <t-button type="warning" round>warning</t-button>
      <t-button type="danger" round>danger</t-button>
    </div>

    <h3>Button disabled</h3>
    <div>
      <t-button type="primary" disabled>primary</t-button>
      <t-button type="success" disabled>success</t-button>
      <t-button type="info" disabled>info</t-button>
      <t-button type="warning" disabled>warning</t-button>
      <t-button type="danger" disabled>danger</t-button>
    </div>

    <h3>Button icon</h3>

    <div>
      <t-button type="primary" icon="chart-bar">primary</t-button>
      <t-button type="success" icon="calendar">success</t-button>
      <t-button type="info" icon="data-view"></t-button>
      <t-button type="primary" icon="download"></t-button>
    </div>

    <h3>Button loading</h3>

    <div>
      <t-button type="primary" :loading="loading">加载中</t-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


const loading = ref(true);
const treeRef = ref(null);
const active = ref(0);
const treeData = [
  {
    id: "1",
    label: "Level one 1",
    children: [
      {
        id: "1-1",
        label: "Level two 1-1",
        children: [
          {
            id: "1-1-1",
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Level one 2",
    children: [
      {
        id: "2-1",
        label: "Level two 2-1",
        children: [
          {
            id: "2-1-1",
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        id: "2-2",
        label: "Level two 2-2",
        children: [
          {
            id: "2-2-1",
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Level one 3",
    children: [
      {
        id: "3-1",
        label: "Level two 3-1",
        children: [
          {
            id: "3-1-1",
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        id: "3-2",
        label: "Level two 3-2",
        children: [
          {
            id: "3-2-1",
            label: "Level three 3-2-1",
          },
        ],
      },
      {
        id: "3-3",
        label: "Level two 3-3",
      },
    ],
  },
];

setTimeout(() => {
  loading.value = false;
}, 3000);

const handleMessage = (type, showClose, time) => {
  TMessage({
    type,
    message: type,
    showClose,
    duration: time,
  });
};

const handleClickNode = (node) => {
  console.log(node);
};

const getCheckedNodes = () => {
  const keys = treeRef.value?.getCheckedNodes();
  console.log("keys: ", keys);
};

const setCheckedNodes = () => {
  treeRef.value?.setCheckedNodes(["1-1", "3-3"]);
};

const handleNextStep = () => {
  active.value += 1;
  if (active.value > 4) {
    active.value = 0;
  }
};
</script>

<style scoped></style>
