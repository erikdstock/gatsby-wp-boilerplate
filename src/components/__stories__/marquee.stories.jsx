import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Marquee from '../Marquee';

storiesOf('Button', module)
  .add('with text', () => (
    <Marquee>We Will Win</Marquee>
  ))
  .add('with some emoji', () => (
    <Marquee>🎩☠💸 We 😎 Got 🌈 This 🌹 💅🏻 🚀</Marquee>
  ));