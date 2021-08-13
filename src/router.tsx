import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import Index from '~/views/index/index';

export default () => (
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Index /></Route>
      </Switch>
    </BrowserRouter>
  </ConfigProvider>
)