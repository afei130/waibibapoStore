<template>
    <div>
        <van-sticky>
            <van-search v-model="search.value" placeholder="请输入搜索关键词" readonly @click="$universal.ToView('GoodsSearch')" />
        </van-sticky>
        <van-tree-select :height="grid.tree.height" :items="grid.tree.sort" :main-active-index.sync="grid.tree.active">
            <template #content>
                <van-grid :column-num="grid.columnNum" :border="grid.border">
                    <van-grid-item v-for="(item,index) in grid.tree.sort[grid.tree.active].items" :key="index">
                        <span :style="grid.tree.css">
                            <img class="img" v-lazy="item.icon">
                        </span>
                        <div>{{item.text}}</div>
                    </van-grid-item>
                </van-grid>
            </template>
        </van-tree-select>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: {
                value: "",
            },
            grid: {
                columnNum: 3,
                border: false,
                tree: {
                    css:
                        "width:50px;height:50px;borderRadius:50%;overflow: hidden;",
                    height: "",
                    active: 0,
                    sort: [
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 2",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类3",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类4",
                                },
                            ],
                        },
                        {
                            text: "分组 12",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                        {
                            text: "分组 1",
                            items: [
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-1.jpg",
                                    text: "子类1",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                                {
                                    icon:
                                        "https://img01.yzcdn.cn/vant/apple-2.jpg",
                                    text: "子类2",
                                },
                            ],
                        },
                    ],
                },
            },
        };
    },
    mounted() {
        //获取屏幕高度，定义分类选择器的高度使其左右可以独立y轴滑动
        let height = window.screen.height;
        let topHeight = 54; //顶部搜索框高度
        let bottomHeight = 50; //底部导航栏高度
        this.grid.tree.height = height - topHeight - bottomHeight;
    },
};
</script>

<style scoped>
</style>