import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <Container>
      <Button onClick={onGood}>Good</Button>
      <Button onClick={onNeutral}>Neutral</Button>
      <Button onClick={onBad}>Bad</Button>
    </Container>
  );
};

export { FeedbackOptions };

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
