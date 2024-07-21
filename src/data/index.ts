import Mock from 'mockjs'
import { IClass } from '../types'

const classDataRaw: { list: IClass[]; totalWeek: number } = /*Mock.mock(*/ {
    list: [
        {
            name: '大学体育1',
            teacher: '教师1',
            detailTimeAndPlace: [
                {
                    places: '风华运动场1',

                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18,
                    ],
                    day: 1,
                    time: [3, 4],
                },
            ],
            compulsory: true,
        },
        {
            name: '数据结构',
            teacher: 'dxy',
            detailTimeAndPlace: [
                {
                    places: '3502',

                    week: [1, 2, 3, 4, 5, 6],
                    day: 4,
                    time: [3, 4],
                },
                {
                    places: '3502',

                    week: [8, 9, 10, 11, 12, 13, 14, 15, 16],
                    day: 4,
                    time: [3, 4],
                },
            ],
            compulsory: true,
        },
        {
            name: '高等数学A(下)',
            teacher: 'ssy',
            detailTimeAndPlace: [
                {
                    places: '3504',

                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 1,
                    time: [9, 10],
                },
                {
                    places: '3504',

                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 3,
                    time: [7, 8],
                },
                {
                    places: '3504',

                    week: [1, 2, 3, 4, 5, 6],
                    day: 5,
                    time: [1, 2],
                },
                {
                    places: '3504',

                    week: [8, 9, 10, 11, 12, 13, 14, 15, 16],
                    day: 5,
                    time: [1, 2],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学物理B(上)',
            teacher: 'dgq',
            detailTimeAndPlace: [
                {
                    places: '2115',

                    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                    day: 2,
                    time: [7, 8],
                },
                {
                    places: '2115',

                    week: [1, 2, 3, 4, 5, 6],
                    day: 4,
                    time: [7, 8],
                },
                {
                    places: '2115',

                    week: [8, 9, 10, 11, 12, 13, 14],
                    day: 4,
                    time: [7, 8],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学生心理健康教育(1)',
            teacher: 'gyq',
            detailTimeAndPlace: [
                {
                    places: '3207',

                    week: [1, 2, 3, 4, 5, 6, 7, 8],
                    day: 3,
                    time: [3, 4],
                },
            ],
            compulsory: true,
        },
        {
            name: '数字与逻辑电路基础',
            teacher: 'cw',
            detailTimeAndPlace: [
                {
                    places: '3205',

                    week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    day: 2,
                    time: [1, 2],
                },
                {
                    places: '3205',

                    week: [1, 2, 3, 4, 5, 6],
                    day: 4,
                    time: [9, 10],
                },
                {
                    places: '3205',

                    week: [8, 9, 10, 11, 12],
                    day: 4,
                    time: [9, 10],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学英语3',
            teacher: 'wy',
            detailTimeAndPlace: [
                {
                    places: '4401',

                    week: [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    ],
                    day: 2,
                    time: [3, 4],
                },
                {
                    places: '4401',

                    week: [2, 4, 6, 8, 10, 12, 14, 16],
                    day: 4,
                    time: [5, 6],
                },
                {
                    places: '网络教室1',
                    week: [1, 3, 5, 7, 9, 11, 13, 15],
                    day: 4,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '改革开放简史',
            teacher: 'lhj',
            detailTimeAndPlace: [
                {
                    places: '3204',
                    week: [1, 2, 3, 4, 5, 6, 7, 8],
                    day: 2,
                    time: [9, 10],
                },
            ],
            compulsory: false,
        },
        {
            name: 'ICT产品创新开发',
            teacher: 'gp',
            detailTimeAndPlace: [
                {
                    places: '3106',
                    week: [1, 2],
                    day: 2,
                    time: [11, 12],
                },
                {
                    places: '3106',
                    week: [9, 10, 11, 12, 13],
                    day: 2,
                    time: [11, 12],
                },
                {
                    places: '3106',
                    week: [4, 5, 6, 7],
                    day: 2,
                    time: [11, 12],
                },
                {
                    places: '3106',
                    week: [15, 16, 17, 18],
                    day: 2,
                    time: [11, 12],
                },
            ],
            compulsory: false,
        },
        {
            name: '思想政治理论课实践教学',
            teacher: 'xj',
            detailTimeAndPlace: [
                {
                    places: '3210',
                    week: [2],
                    day: 2,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '数字电路与逻辑设计实验A',
            teacher: 'dzb',
            detailTimeAndPlace: [
                {
                    places: 'B209/B210',
                    week: [6],
                    day: 2,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [8, 9],
                    day: 2,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [11, 12, 13, 14],
                    day: 2,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [16],
                    day: 2,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [6],
                    day: 5,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [8, 9],
                    day: 5,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [11, 12, 13, 14],
                    day: 5,
                    time: [5, 6],
                },
                {
                    places: 'B209/B210',
                    week: [16],
                    day: 5,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '大学物理实验A(上)',
            teacher: 'czm',
            detailTimeAndPlace: [
                {
                    places: 'C205',
                    week: [11],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C310/C311',
                    week: [9],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C310/C311',
                    week: [13],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C209/C210',
                    week: [8],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C201/C202',
                    week: [4],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C314/C315/C316',
                    week: [3],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C203/C204',
                    week: [1],
                    day: 1,
                    time: [5, 6],
                },
                {
                    places: 'C203/C204',
                    week: [5],
                    day: 1,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
        {
            name: '数据结构(实验)',
            teacher: 'lr',
            detailTimeAndPlace: [
                {
                    places: 'B515',
                    week: [7, 8, 9, 10, 11, 12, 13, 14],
                    day: 3,
                    time: [5, 6],
                },
            ],
            compulsory: true,
        },
    ],
    totalWeek: 18,
} /*)*/

export const classData = Mock.mock('//class/data/', 'get', classDataRaw)
