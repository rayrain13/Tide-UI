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
    <!-- message -->
    <h2>消息</h2>
    <h3>Message</h3>
    <t-button type="success" @click="handleMessage('success')">success</t-button>
    <t-button type="info" @click="handleMessage('info')">info</t-button>
    <t-button type="warning" @click="handleMessage('warning')">warning</t-button>
    <t-button type="danger" @click="handleMessage('error')">danger</t-button>
    <h3>Message close</h3>
    <t-button type="success" @click="handleMessage('success', true)">success</t-button>
    <t-button type="info" @click="handleMessage('info', true)">info</t-button>
    <t-button type="warning" @click="handleMessage('warning', true)">warning</t-button>
    <t-button type="danger" @click="handleMessage('error', true)">danger</t-button>
    <h3>Message time</h3>
    <t-button type="success" @click="handleMessage('success', true, 1000)">1s</t-button>
    <t-button type="success" @click="handleMessage('success', true, 5000)">5s</t-button>
    <!-- tree -->
    <h2>树</h2>
    <h3>Tree</h3>
    <h3>基础树</h3>
    <t-tree :data="JSON.parse(JSON.stringify(treeData))" node-key="id" />
    <h3>默认展开</h3>
    <t-tree :data="JSON.parse(JSON.stringify(treeData))" node-key="id" :default-expand-all="true" />
    <h3>可选择</h3>
    <t-tree
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :showCheckbox="true"
      :default-expand-all="true"
      @handleClickNode="handleClickNode"
    />
    <h3>获取选中节点/设置选中节点</h3>
    <t-button type="primary" @click="getCheckedNodes">获取选中的key</t-button>
    <t-button type="primary" @click="setCheckedNodes">设置选中的key</t-button>
    <t-tree
      ref="treeRef"
      :data="JSON.parse(JSON.stringify(treeData))"
      node-key="id"
      :showCheckbox="true"
      @handleClickNode="handleClickNode"
    />
    <h2>步骤条 Steps</h2>
    <h3>基础使用</h3>
    <div style="margin-bottom: 10px">
      <t-button type="primary" @click="handleNextStep">下一步</t-button> 当前节点{{ active }}
    </div>
    <t-steps :active="active">
      <t-step title="第一步" description="打开微信扫一扫" />
      <t-step title="第二步" description="添加好友" />
      <t-step title="第三步" description="选择我的头像" />
      <t-step title="第四步" description="转款1000万" />
    </t-steps>
    <h3>居中的步骤条</h3>
    <t-steps :active="active" align="center">
      <t-step title="第一步" description="打开微信扫一扫" />
      <t-step title="第二步" description="添加好友" />
      <t-step title="第三步" description="选择我的头像" />
      <t-step title="第四步" description="转款1000万" />
    </t-steps>
    <h3>自定义图标1</h3>
    <t-steps :active="active">
      <t-step title="起床" icon="notification" />
      <t-step title="炒股" icon="data-view" />
      <t-step title="加仓" icon="good" />
      <t-step title="亏大了" icon="cry" />
    </t-steps>
    <h3>自定义图标2</h3>
    <t-steps :active="active" align="center">
      <t-step title="起床">
        <template #icon> &#127774; </template>
      </t-step>
      <t-step title="又亏了">
        <template #icon> &#128201;</template>
      </t-step>
      <t-step title="继续加仓">
        <template #icon> + </template>
      </t-step>
      <t-step title="亏成狗">
        <template #icon> &#128021; </template>
      </t-step>
    </t-steps>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TMessage } from "@test-ui/components";

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
