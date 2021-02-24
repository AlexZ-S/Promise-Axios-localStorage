<template>
    <div id="BOX">
        <button @click="postMsg">post获取信息</button>
        <button @click="getMsg2">get获取信息</button>
        <button @click="showData">测试数据</button>
        <button @click="myEcharts">生成图表</button>
        <div id="myChart" :style="{width: '600px', height: '600px'}"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listData: []
            };
        },
        mounted() {
            // this.myEcharts();
        },
        methods: {
            // post方式获取数据
            postMsg() {
                var that = this;
                that.$api.postNum('bebcbb5b8facb541cc017e018622c5e0', '陕西')
                    .then(res => {
                        let arr1 = [];
                        for (const index in res.newslist[0]) {
                            arr1.push(res.newslist[0][index])
                        }
                        that.listData = [...arr1.slice(0, 1), ...arr1.slice(1, 6).map(Number)];
                        console.log(this.listData);
                        // 以JSON格式将数组存入缓存
                        sessionStorage.setItem('user', JSON.stringify(this.listData));
                    })
                    .catch(res => {
                        console.log(res)
                    })
            },
            // get方式获取数据
            getMsg2() {
                var that = this;
                that.$api.getNum('bebcbb5b8facb541cc017e018622c5e0', '陕西')
                    .then(res => {
                        console.log(res);
                    })
                    .catch(res => {
                        console.log(res)
                    })
            },
            myEcharts() {
                if (!sessionStorage.getItem('user')) {
                    alert('请先获取数据')
                } else {

                    // 基于准备好的dom，初始化echarts实例
                    let myChart = this.$echarts.init(document.getElementById('myChart'));

                    // 指定图表的配置项和数据
                    myChart.setOption({
                        legend: {},
                        tooltip: {},
                        dataset: {
                            source: [
                                ['product', '0号柴油', '89号汽油', '92号汽油', '95号汽油', '98号汽油'],
                                JSON.parse(sessionStorage.getItem('user'))
                            ]
                        },
                        xAxis: {
                            type: 'category'
                        },
                        yAxis: {},
                        series: [{
                                type: 'bar',
                                label: {
                                    show: true
                                }
                            },
                            {
                                type: 'bar',
                                label: {
                                    show: true
                                }
                            },
                            {
                                type: 'bar',
                                label: {
                                    show: true
                                }
                            },
                            {
                                type: 'bar',
                                label: {
                                    show: true
                                }
                            },
                            {
                                type: 'bar',
                                label: {
                                    show: true
                                }
                            }
                        ]
                    });
                }
            },
            showData() {
                console.log(JSON.parse(sessionStorage.getItem('user')));
            }

        },
    }
</script>

<style lang='less'>
    #BOX {
        width: 100%;
        height: 400px;
        font-size: 20px;
    }

    button {
        width: 120px;
        height: 80px;
        font-size: 18px;
    }
</style>