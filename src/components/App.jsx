import { Component } from "react";
import FeedbackOptions from "./feedbackOptions/feedbackOptions";
import Statistics from "./statistics/statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const feedbackCount = this.total();
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <FeedbackOptions addFeedback={this.addFeedback} />
        </section>
        <section>
          {feedbackCount === 0 && <h4> There is no feedback.</h4>}
          {feedbackCount !== 0 && <h4> Statistics</h4>}
          {feedbackCount !== 0 && (
            <Statistics {...this.state} total={feedbackCount} />
          )}
        </section>
      </>
    );
  }

  addFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  total = () => {
    const feedbackCount = this.state.good + this.state.neutral + this.state.bad;
    return feedbackCount;
  };
}




