import { useState } from 'react';
import Section from './Section/Section';
import Notifications from './Notifications/Notifications';
import './App.css';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statisticsx/Statistics';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleButtonClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const { good, neutral, bad } = state;
  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  let feedbackContent;

  if (totalFeedback === 0) {
    feedbackContent = <Notifications message="There is no feedback" />;
  } else {
    feedbackContent = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}
      />
    );
  }

  return (
    <div className="AppContainer">
      <Section title="Review Widget ">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">{feedbackContent}</Section>
    </div>
  );
};

export default App;
