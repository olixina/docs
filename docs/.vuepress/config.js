module.exports = {
    theme: "antdocs",
    title: '阅读',
    description: 'olixina 的学习记录',
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    {
                        text: '前端',
                        items: [
                            {
                                text: 'Vue',
                                link: '/vue/'
                            }
                        ]
                    },
                    {
                        text: '后端',
                        items: [
                            {
                                text: 'Java',
                                link: '/java/'
                            },
                            {
                                text: 'Python',
                                link: '/python/'
                            }
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            {
                                text: '杂项',
                                link: '/other/'
                            }
                        ]
                    }
                ]
            },
            {text: 'GitHub', link: 'https://github.com/olixina'},
        ],
        sidebar: {
            '/java/': [
                {
                    title: 'Java 基础知识',
                    collapsable: false,
                    children: [
                        '',
                        '00-Introduction'
                    ]
                },
                {
                    title: 'Java 进阶知识',
                    collapsable: false,
                    children: [
                        '',
                        '00-Preface'
                    ]
                }
            ],
            '/yuedu/': [
                {
                    title: '我的阅读APP数据备份',
                    collapsable: false,
                    children: [
                        '',
                        '软件下载',
                        '个人备份说明',
                        '备份文件说明',
                        '阅读使用教程',
                        '资源共享',
                        '关耳美化发现工具',
                        '书源校验工具'
                    ]
                }
            ]
        }
    }
}