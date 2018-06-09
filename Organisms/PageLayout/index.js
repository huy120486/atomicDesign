import React from 'react';
import { Grid, Row, Col, ClearFix } from '../../react-velonic';


const PageLayout = () => (
  <div>
    <Grid>
      <Row>
        <Col
          lg={3} md={4} sm={6} style={{
            background: 'red',
          }}
        >
          1
        </Col>
        <Col
          lg={3} md={4} sm={6} style={{
            background: 'green',
          }}
        >
          2
        </Col>
      </Row>
    </Grid>

    <Grid fluid>
      <Row noGutter>
        <Col
          lg={3} md={4} sm={6} style={{
            background: 'red',
          }}
        >
          1
        </Col>
        <Col
          lg={3} md={4} sm={6} style={{
            background: 'green',
          }}
        >
          2
        </Col>
      </Row>
    </Grid>

    <Row>
      <ClearFix>
        <Col lgHidden lg={12} md={12} sm={12}>
          Large hidden
        </Col>
      </ClearFix>
    </Row>
  </div>
);

export default PageLayout;
