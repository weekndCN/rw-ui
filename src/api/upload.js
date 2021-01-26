export const limitdesc = {
    name: '上传限制:',
    limit: [
    {
        id: 1,
        name: '上传大小',
        value: '130M',
    },
    {
        id: 2,
        name: '上传目录',
        value: '/',
    },
    {
        id: 3,
        name: 'Protocol',
        value: 'https',
    }],
    items: [
        {
            id: 1,
            desc: '如果存在相同的目录，则在旧目录继续添加文件，同名文件覆盖。',
        }, {
            id: 2,
            desc: '上传目录限制层级为一层，即/demo合法。/demo/files/不合法：',
        }, {
            id: 3,
            desc: '上传总大小限制150M；',
        }, {
            id: 4,
            desc: '禁止文件名存在空格；',
        }, {
            id: 5,
            desc: '默认zip文件在云端自动解压。如果需要禁止，请上方按钮disabled。',
        }, {
            id: 6,
            desc: '默认为http方式，支持https回源。'
        }
    ]
}