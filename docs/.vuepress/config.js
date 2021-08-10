// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: {
            '/持续集成/': [
                '',     /* /foo/ */
                '概念介绍',  /* /foo/one.html */
                '快速开始'   /* /foo/two.html */
            ],
            // fallback
            '/': [
                '',        /* / */
                'contact', /* /contact.html */
                'about'    /* /about.html */
            ]
        }
    }
}