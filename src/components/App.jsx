import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout';
import { Section } from './section/Section';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0, total: 0, positivePercentage: 0 };

  handleClickOnGood = () =>
    this.setState(prevState => ({
      good: (prevState.good += 1),
      total: (prevState.total =
        prevState.good + prevState.neutral + prevState.bad),
      positivePercentage: (prevState.positivePercentage = Math.ceil(
        (prevState.good / prevState.total) * 100
      )),
    }));

  handleClickOnNeutral = () =>
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
      total: (prevState.total =
        prevState.good + prevState.neutral + prevState.bad),
      positivePercentage: (prevState.positivePercentage = Math.ceil(
        (prevState.good / prevState.total) * 100
      )),
    }));

  handleClickOnBad = () =>
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
      total: (prevState.total =
        prevState.good + prevState.neutral + prevState.bad),
      positivePercentage: (prevState.positivePercentage = Math.ceil(
        (prevState.good / prevState.total) * 100
      )),
    }));

  render() {
    return (
      <Layout>
        <Section
          state={this.state}
          title="Please leave feedback"
          onGood={this.handleClickOnGood}
          onNeutral={this.handleClickOnNeutral}
          onBad={this.handleClickOnBad}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
