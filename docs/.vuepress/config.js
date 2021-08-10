// 侧边栏
module.exports = {
    title: 'Jenkins Plus',
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: "/images/jenkins-plus.png"}]
    ],
    themeConfig: {
        nav: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "使用",
                link: "/use/",
            },
            {
                text: "讨论区",
                link: "/team/",
                // items: [{ text: "代码生成器", link: "/" }],
            },
        ],
        sidebar: [
            {
                title: '目录',
                collapsable: false,
                path: '/SUMMARY.md'
            }, {
                title: '持续集成',
                collapsable: false,
                children: [
                    '/CICD/started',
                    '/CICD/introduction',
                ]
            }
        ]
    }
}
