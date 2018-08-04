import { RenderFunction, storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Intro } from '../../../src';
import { injectTheme } from '../../decorators';

export default storiesOf('1.2 Intro', module)
  .addDecorator((story: RenderFunction) => {
    return (
      injectTheme(story)
    );
  })
  //
  .add('Intro', () => {
    return (
      <Intro
        backgroundColor={'#00c57f'}
        content={'Facebook is an American online social media and social networking service company based in Menlo Park, California'}
        imgSrc={require('./facebook.png')}
        header={'Facebook'}
      />
    );
  });
