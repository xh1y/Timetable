import Mock from 'mockjs'
import { IClassLists } from '../types'

const classDataRaw: IClassLists = /*Mock.mock(*/ {
    list: [
        {
            name: '大学体育2',
            teacher: 'zyh',
            detailTimeAndPlace: [
                {
                    places: '太极运动场3',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18,
                    ],
                    day: 5,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '面向对象程序设计-Java',
            teacher: 'gx',
            detailTimeAndPlace: [
                {
                    places: '2415',
                    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                    day: 3,
                    time: [9, 10],
                },
            ],
            compulsory: true,
        },
        {
            name: '计算机科学导论',
            teacher: 'wmd',
            detailTimeAndPlace: [
                {
                    places: '2508',
                    week: [
                        3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                    ],
                    day: 2,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '大数据导论',
            teacher: 'dxy',
            detailTimeAndPlace: [
                {
                    places: '2302',
                    week: [3, 4, 5, 6, 7, 8, 9, 10],
                    day: 1,
                    time: [9, 10],
                },
            ],
            compulsory: true,
        },
        {
            name: '马克思主义基本原理',
            teacher: 'fct',
            detailTimeAndPlace: [
                {
                    places: '2301',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 3,
                    time: [5, 6, 7],
                },
            ],
            compulsory: true,
        },
        {
            name: '概率论与数理统计',
            teacher: 'lr',
            detailTimeAndPlace: [
                {
                    places: '2116',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: '2116',
                    week: [1, 3, 5, 7, 9, 11, 13, 15],
                    day: 4,
                    time: [1, 2],
                },
            ],
            compulsory: true,
        },
        {
            name: '离散数学A',
            teacher: 'cwd',
            detailTimeAndPlace: [
                {
                    places: '2116',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 2,
                    time: [1, 2],
                },
                {
                    places: '2116',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 4,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学物理C（下）',
            teacher: 'hxk',
            detailTimeAndPlace: [
                {
                    places: '2310',
                    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    day: 2,
                    time: [7, 8],
                },
                {
                    places: '2310',
                    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    day: 4,
                    time: [7, 8],
                },
            ],
            compulsory: true,
        },
        {
            name: '数据结构A (Maybe No)',
            teacher: 'hb',
            detailTimeAndPlace: [
                {
                    places: '2310',
                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 3,
                    time: [1, 2],
                },
                {
                    places: '2310',
                    week: [1, 3, 5, 7, 9, 11, 13, 15],
                    day: 5,
                    time: [7, 8],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学物理实验B（下）',
            teacher: 'tx',
            detailTimeAndPlace: [
                {
                    places: 'C308 / C309',
                    week: [13],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C304 / C305',
                    week: [10],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C209 / C210',
                    week: [9],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C203 / C204',
                    week: [8],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C201 / C202',
                    week: [7],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C314 / C315 / C316',
                    week: [4],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C312 / C313',
                    week: [2],
                    day: 3,
                    time: [3, 4],
                },
                {
                    places: 'C310 / C311',
                    week: [1],
                    day: 3,
                    time: [3, 4],
                },
            ],
            compulsory: true,
        },
        {
            name: '面向对象程序设计-Java（实验）',
            teacher: 'txj',
            detailTimeAndPlace: [
                {
                    places: 'B415 / B416',
                    week: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    day: 1,
                    time: [1, 2],
                },
            ],
            compulsory: false,
        },
        {
            name: '数据结构A (Maybe No)',
            teacher: 'lr',
            detailTimeAndPlace: [
                {
                    places: 'B516 / B517',
                    week: [7, 8, 9, 10, 11, 12, 13, 14],
                    day: 1,
                    time: [3, 4],
                },
            ],
            compulsory: true,
        },
        {
            name: '机器学习基础实践',
            teacher: 'skw',
            detailTimeAndPlace: [
                {
                    places: 'B501 / B502',
                    week: [18, 19],
                    day: 1,
                    time: [5, 6, 7, 8, 9, 10, 11, 12],
                },
                {
                    places: 'B501 / B502',
                    week: [18, 19],
                    day: 2,
                    time: [5, 6, 7, 8, 9, 10, 11, 12],
                },
                {
                    places: 'B501 / B502',
                    week: [18, 19],
                    day: 3,
                    time: [5, 6, 7, 8, 9, 10, 11, 12],
                },
                {
                    places: 'B501 / B502',
                    week: [18, 19],
                    day: 4,
                    time: [5, 6, 7, 8, 9, 10, 11, 12],
                },
                {
                    places: 'B501 / B502',
                    week: [18, 19],
                    day: 5,
                    time: [5, 6, 7, 8, 9, 10, 11, 12],
                },
            ],
            compulsory: true,
        },
    ],
    totalWeek: 21,
}

export const classData = Mock.mock('/class/data/', 'get', classDataRaw)
