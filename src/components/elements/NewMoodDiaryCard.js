import { Card, theme } from 'galio-framework';
import * as React from "react";
import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('screen');

export class NewMoodDiaryCard extends React.Component {
  render() {
    return (
      <Card
        borderless={true}
        shadow
        style={styles.card}
        title="Add entry"
        avatar="https://i.imgur.com/PEW86rb.png"
      />
    )
  }
}

const styles = StyleSheet.create({
  cards: {
    width,
    backgroundColor: theme.COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    width: width - theme.SIZES.BASE * 2,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: theme.SIZES.BASE * 0.875,
    elevation: theme.SIZES.BASE / 2,
  },
  cardImage: {
    width: width,
    height: 100,
  },
  full: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  noRadius: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  rounded: {
    borderRadius: theme.SIZES.BASE * 0.1875,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: theme.SIZES.BASE * 0.5,
    borderBottomLeftRadius: theme.SIZES.BASE * 0.5,
  },
});

export default NewMoodDiaryCard;

