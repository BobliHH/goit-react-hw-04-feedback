const FeedbackOptions = ({ addFeedback }) => {
  const data = [
    { id: 1, value: 'good', text: 'Good' },
    { id: 2, value: 'neutral', text: 'Neutral' },
    { id: 3, value: 'bad', text: 'Bad' },
  ];

  const addValue = e => {
    const value = e.target.value;
    addFeedback(value);
  };
  return (
    <div>
      {data.map(btn => {
        const { id, value, text } = btn;
        return (
          <button key={id} value={value} onClick={addValue}>
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
