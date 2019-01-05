import { container } from 'assets/javascripts/digital-sel-ui';
import background from 'assets/images/background.jpg';

const appStyles = {
  container: {
    ...container,
  },
  mainRaised: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 'auto',
    minHeight: '800px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
};

export default appStyles;
