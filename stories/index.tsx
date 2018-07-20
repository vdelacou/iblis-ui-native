import { action } from '@storybook/addon-actions';
import storiesOf from '@storybook/react-native';
import * as React from 'react';
import { Button, Text } from 'react-native';

storiesOf('Welcome', module).add('hello', () => {
  return (
    <Button onPress={action('clicked-emoji')} title={'Hello'} >
      <Text>😀 😎 👍 💯</Text>
    </Button>
  );
});
