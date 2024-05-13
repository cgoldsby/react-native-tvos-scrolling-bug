/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useState} from 'react';
import React, {
  StyleSheet,
  SafeAreaView,
  Text,
  LogBox,
  TVTextScrollView,
  View,
  Pressable,
  PressableProps,
} from 'react-native';

LogBox.ignoreLogs([
  'Sending `appearanceChanged` with no listeners registered.',
]);

import {FunctionComponent} from 'react';
import {transformer} from './metro.config';

const Button: FunctionComponent<PressableProps & {text: string}> = props => {
  return (
    <Pressable tvParallaxProperties={{enabled: false}} onPress={props.onPress}>
      {({pressed, focused}) => (
        <View style={[styles.button, focused && {backgroundColor: '#EF233C'}]}>
          <Text style={[styles.buttonText, focused && {color: '#EDF2F4'}]}>
            {props.text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const App = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [longTextEnabled, setLongTextEnabled] = useState(false);
  const [horizontalContent, setHorizontalContent] = useState(false);

  const onEnableScrolling = () => {
    setScrollEnabled(!scrollEnabled);
  };

  const onEnableLongText = () => {
    setLongTextEnabled(!longTextEnabled);
  };

  const onEnableHorizontalContent = () => {
    setHorizontalContent(!horizontalContent);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <Button
          text={(scrollEnabled ? '' : 'Not ') + 'Scrollable'}
          onPress={onEnableScrolling}
        />
        <Button
          text={longTextEnabled ? 'Long' : 'Short'}
          onPress={onEnableLongText}
        />
        <Button
          text={horizontalContent ? 'Horizontal' : 'Vertical'}
          onPress={onEnableHorizontalContent}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textHeader]}>
          {'Scrolling ' +
            (scrollEnabled ? 'enabled' : 'disabled') +
            ' / ' +
            (longTextEnabled ? 'Long' : 'Short') +
            ' text / ' +
            (horizontalContent ? 'Horizontal' : 'Vertical') +
            ' content'}
        </Text>
        <TVTextScrollView
          scrollEnabled={scrollEnabled}
          horizontal={horizontalContent}>
          <Text style={styles.text}>
            {longText.slice(0, longTextEnabled ? longText.length : 400) +
              '\n\nThe end.'}
          </Text>
        </TVTextScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2D42',
    flexDirection: 'row',
  },
  text: {
    color: '#EDF2F4',
    fontSize: 28,
  },
  listContainer: {
    width: '25%',
    margin: 10,
    gap: 50,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  button: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#8D99AE',
  },
  buttonText: {
    color: '#2B2D42',
    fontSize: 38,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 38,
  },
  buttonPressed: {
    backgroundColor: '#8D99AE',
  },
});

export default App;

const longText = `
"You see, Watson," he explained in the early hours of the morning as we sat over a glass of whisky and soda in Baker Street, "it was perfectly obvious from the first that the only possible object of this rather fantastic business of the advertisement of the League, and the copying of the 'Encyclopaedia,' must be to get this not over-bright pawnbroker out of the way for a number of hours every day. It was a curious way of managing it, but, really, it would be difficult to suggest a better. The method was no doubt suggested to Clay's ingenious mind by the colour of his accomplice's hair. The 4 pounds a week was a lure which must draw him, and what was it to them, who were playing for thousands? They put in the advertisement, one rogue has the temporary office, the other rogue incites the man to apply for it, and together they manage to secure his absence every morning in the week. From the time that I heard of the assistant having come for half wages, it was obvious to me that he had some strong motive for securing the situation."

"But how could you guess what the motive was?"

"Had there been women in the house, I should have suspected a mere vulgar intrigue. That, however, was out of the question. The man's business was a small one, and there was nothing in his house which could account for such elaborate preparations, and such an expenditure as they were at. It must, then, be something out of the house. What could it be? I thought of the assistant's fondness for photography, and his trick of vanishing into the cellar. The cellar! There was the end of this tangled clue. Then I made inquiries as to this mysterious assistant and found that I had to deal with one of the coolest and most daring criminals in London. He was doing something in the cellar--something which took many hours a day for months on end. What could it be, once more? I could think of nothing save that he was running a tunnel to some other building.

"So far I had got when we went to visit the scene of action. I surprised you by beating upon the pavement with my stick. I was ascertaining whether the cellar stretched out in front or behind. It was not in front. Then I rang the bell, and, as I hoped, the assistant answered it. We have had some skirmishes, but we had never set eyes upon each other before. I hardly looked at his face. His knees were what I wished to see. You must yourself have remarked how worn, wrinkled, and stained they were. They spoke of those hours of burrowing. The only remaining point was what they were burrowing for. I walked round the corner, saw the City and Suburban Bank abutted on our friend's premises, and felt that I had solved my problem. When you drove home after the concert I called upon Scotland Yard and upon the chairman of the bank directors, with the result that you have seen."`;
