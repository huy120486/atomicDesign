import React from 'react';
import { MiniStat } from '../../react-velonic';

const [statIcon, stat, subtitle, statType] = [
  'settingsIcon',
  '4',
  'EmploymentHero',
  'star',
];

const MiniStatComponent = () => (
  <MiniStat
    statIcon={statIcon}
    stat={stat}
    subtitle={subtitle}
    statType={statType}
  />
);

export default MiniStatComponent;
