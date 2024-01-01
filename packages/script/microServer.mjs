// micro-server.js
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import config from './config.mjs';
const app = express();
const { port, host } = config;

// 打印请求日志
app.use(morgan('dev'));

app.use(express.static(path.join('views', 'micro')));

// 启动 Node 服务
app.listen(port.micro, host);
console.log(`server start at http://${host}:${port.main}/`);
