export const carddatas = [{
    name: '短链接',
    icon: "mdi-send",
    status: 'up',
    pv: 1000,
    uv: 200,
}, {
    name: '上传',
    icon: "mdi-progress-upload",
    status: 'down',
    pv: 2000,
    uv: 300,
}, {
    name: '备份',
    icon: "mdi-backup-restore",
    status: 'down',
    pv: 3000,
    uv: 400,
}, {
    name: '邮件',
    icon: "mdi-email-edit",
    status: 'up',
    pv: 4000,
    uv: 500,
}, {
    name: '定时任务',
    icon: "mdi-calendar-check",
    status: 'up',
    pv: 5000,
    uv: 600,
}]



export const headers = [
    {
        text: 'ID',
        align: 'start',
        sortable: false,
        value: 'id',
    },
    { text: 'Apps', value: 'name' },
    { text: 'Date', value: 'date' },
    { text: 'Status', value: 'status' },
    { text: 'Actions', value: 'actions' },
]

export const desserts = [
    {
        id: 1,
        name: '短链接',
        pv: 50,
        uv: 24,
        date: '25 Jan 2021',
        status: "Open",
        icon: "mdi-send",
    },
    {
        id: 2,
        name: '上传/下载',
        pv: 50,
        uv: 24,
        date: '25 Jan 2021',
        status: "InActive",
        icon: "mdi-progress-upload",
    },
    {
        id: 3,
        name: '备份',
        pv: 50,
        uv: 24,
        date: '25 Jan 2021',
        status: "InActive",
        icon: "mdi-backup-restore",
    },
    {
        id: 4,
        name: '邮件',
        pv: 50,
        uv: 24,
        date: '25 Jan 2021',
        status: "InActive",
        icon: "mdi-email-edit",
    },
    {
        id: 5,
        name: '定时任务',
        pv: 50,
        uv: 24,
        date: '25 Jan 2021',
        status: "InActive",
        icon: "mdi-calendar-check",
    }
]