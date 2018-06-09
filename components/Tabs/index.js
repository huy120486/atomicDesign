import React from 'react';
import { Tabs, TabContent } from '../../react-velonic';

const TabsComponent = () => (
  <div>
    <p>Horizontal Table</p>
    <Tabs labels={['Home', 'Profile']} >
      <TabContent>
        <p>
          Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in.
          Would day nor ask walls known. But preserved advantage are but and certainty earnestly
          enjoyment. Passage weather as up am exposed. And natural related man subject.
        </p>
      </TabContent>
      <TabContent>
        <p>
          Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour
          as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful
          six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter
          change six did all.
        </p>
      </TabContent>
    </Tabs>

    <p>Vertical Table</p>
    <Tabs labels={['Home', 'Profile']} vertical >
      <TabContent>
        <p>
          Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in.
          Would day nor ask walls known. But preserved advantage are but and certainty earnestly
          enjoyment. Passage weather as up am exposed. And natural related man subject.
        </p>
      </TabContent>
      <TabContent>
        <p>
          Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour
          as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful
          six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter
          change six did all.
        </p>
      </TabContent>
    </Tabs>
  </div>
);

export default TabsComponent;
