const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
    base: '/docs/',
    title: '阅读文档',
    description: 'YueDu VuePress docs',
    head: [
        ['meta', { name: 'author', content: 'olixina' }],
        ['meta', { name: 'keywords', content: 'vuepress' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    return moment(timestamp).format('YYYY-MM-DD hh:mm:ss');
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '上次更新',
        search: false,
        nav: [
            // {text: '主页', link: '/'},
            // {text: '关于', link: '/about/'},
            // {
            //     text: 'Languages',
            //     items: [
            //         {
            //             text: 'Group1', items: [
            //                 {text: '主页', link: '/'},
            //                 {text: '关于', link: '/about/'},
            //             ]
            //         },
            //         {
            //             text: 'Group2', items: [
            //                 {text: '主页', link: '/'},
            //                 {text: '关于', link: '/about/'},
            //             ]
            //         }
            //     ]
            // },
            {text: 'GitHub', link: 'https://github.com/olixina'},
        ],
        sidebar: {
            '/css/': [
                'c-aaa',
                'c-bbb',
                'c-ccc'
            ],
            '/yuedu/':[
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '',
                        '教程',
                    ]
                },
                {
                    title: '说明',
                    collapsable: false,
                    children: [
                        '个人备份说明',
                        '备份文件说明',
                    ]
                },
                {
                    title: '资源',
                    collapsable: false,
                    children: [
                        '资源共享',
                    ]
                },
                {
                    title: '工具',
                    collapsable: false,
                    children: [
                        '关耳美化发现工具',
                        '书源校验工具',
                    ]
                }
            ],
            '/javascript/': [
                'j-aaa',
                'j-bbb',
                'j-ccc'
            ],
        },
        sidebarDepth: 2
    }
}