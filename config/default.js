module.exports = {
  server_chan: {
    endpoint: 'https://sc.ftqq.com',
    key: '',
  },
  courses: [
    {
      name: '大学生心理健康',
      cron: '0 0 19 * * 3',
    },
  ],
  message: {
    title: '上课啦',
    content: ({ course }) => `${course.name}开始上课啦!`,
  },
}
