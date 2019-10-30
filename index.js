require('dotenv').config();
const Slack = require('slack-node');
const { promisify } = require('util');
const slack = new Slack();
const { URL } = process.env;
const request = promisify(slack.webhook);

const colors = [
  '#dee2e6',
  '#ffa8a8',
  '#faa2c1',
  '#e599f7',
  '#b197fc',
  '#91a7ff',
  '#74c0fc',
  '#66d9e8',
  '#63e6be',
  '#8ce99a',
  '#c0eb75',
  '#ffe066',
  '#ffc078',
];

slack.setWebhook(URL);

const send = async () => {
  const colorLength = colors.length;
  const random = Math.floor(Math.random() * colorLength);
  const color = colors[random];
  const text = '건강 요정이에요~!';
  const attachments = [
    {
      color,
      fields: [
        {
          fallback: '허리피3',
          title: '[허리 피세요]',
          value: '안필시 주말출근',
          short: false,
        },
        {
          fallback: '목 넣으3',
          title: '[목 뒤로 넣으세요]',
          value: '안할시 넥슬라이스',
          short: false,
        },
        {
          fallback: '어깨 피3',
          title: '[어깨 피세요]',
          value: '안할시 괴롭힘',
          short: false,
        },
      ],
    },
  ];

  return request({ text, attachments });
};

module.exports = {
  main: send,
};
