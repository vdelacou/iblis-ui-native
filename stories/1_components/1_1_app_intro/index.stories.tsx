import { RenderFunction, storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { action } from 'storybook__addon-actions';
import { AppIntro, Intro } from '../../../src';
import { injectTheme } from '../../decorators';

const facebook = (
  <Intro
    key={'Facebook'}
    backgroundColor={'#00c57f'}
    content={'Facebook is an American online social media and social networking service company based in Menlo Park, California'}
    imgSrc={require('./facebook.png')}
    header={'Facebook'}
  />
);

const twitter = (
  <Intro
    key={'Twitter'}
    backgroundColor={'#007ca0'}
    content={'Twitter is an online news and social networking service on which users post and interact with messages known as "tweets"'}
    imgSrc={require('./twitter.png')}
    header={'Twitter'}
  />
);

const instagram = (
  <Intro
    key={'Instagram'}
    backgroundColor={'#df524e'}
    content={'Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger'}
    imgSrc={require('./instagram.png')}
    header={'Instagram'}
  />
);

export default storiesOf('1.1 App Intro', module)
  .addDecorator((story: RenderFunction) => {
    return (
      injectTheme(story)
    );
  })
  //
  .add('AppIntro', () => {
    return (
      <AppIntro
        views={[facebook, twitter, instagram]}
        doneButtonAction={action('Done action clicked')}
      />
    );
  });
