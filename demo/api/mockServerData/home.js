// mock数据模拟
import Mock from 'mockjs'

// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        //Mock.Random.float 产生随机数100到8000之间 保留小数 最小0位 最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    课程1: Mock.Random.float(100, 8000, 0, 0),
                    课程2: Mock.Random.float(100, 8000, 0, 0),
                    课程3: Mock.Random.float(100, 8000, 0, 0),
                    课程4: Mock.Random.float(100, 8000, 0, 0),
                    课程5: Mock.Random.float(100, 8000, 0, 0),
                    课程6: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: '课程1',
                        value: 2999
                    },
                    {
                        name: '课程2',
                        value: 5999
                    },
                    {
                        name: '课程3',
                        value: 1500
                    },
                    {
                        name: '课程4',
                        value: 1999
                    },
                    {
                        name: '课程5',
                        value: 2200
                    },
                    {
                        name: '课程6',
                        value: 4500
                    }
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        date: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        date: '周三',
                        new: 12,
                        active: 550
                    },
                    {
                        date: '周四',
                        new: 60,
                        active: 800
                    },
                    {
                        date: '周五',
                        new: 65,
                        active: 550
                    },
                    {
                        date: '周六',
                        new: 53,
                        active: 770
                    },
                    {
                        date: '周日',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: '课程1',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: '课程2',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000
                    },
                    {
                        name: '课程3',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy: 65000
                    },
                    {
                        name: '课程4',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy: 45000
                    },
                    {
                        name: '课程5',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 34000
                    },
                    {
                        name: '课程6',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy: 22000
                    }
                ]
            }
        }
    }
}