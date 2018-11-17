import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardStyle from 'assets/javascripts/components/cardStyle';

function Card({ ...props }) {
  const {
    classes, className, children, plain, carousel, ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardCarousel]: carousel,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  className: '',
  plain: false,
  carousel: false,
};

Card.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
};

export default withStyles(cardStyle)(Card);
