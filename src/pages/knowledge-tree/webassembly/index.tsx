import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    title="404"
    subTitle="Saaa does not exist."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
