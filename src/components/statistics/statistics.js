
const Statistics = ({ good, neutral, bad, total }) => {
  const countPositiveFeedbackPercentage = () => {
    const positivPercentage = Math.round((good / total) * 100);
    return positivPercentage || 0;
  };
  const data = [
    { id: 1, text: 'Good: ', value: good },
    { id: 2, text: 'Neutral: ', value: neutral },
    { id: 3, text: 'Bad: ', value: bad },
    { id: 4, text: 'Total: ', value: total },
    {
      id: 5,
      text: 'Positiv feedback: ',
      value: countPositiveFeedbackPercentage(),
      percentage: '%',
    },
  ];

  return (
    <div>
      <div>
        {data.map(item => {
          return (
            <p key={item.id}>
              {item.text}
              {item.value}
              {item.percentage}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Statistics;
