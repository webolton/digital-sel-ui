import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardBodyStyle from 'assets/javascripts/components/cardBodyStyle';

function CardBody({ ...props }) {
  const {
    classes, className, children, ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

CardBody.defaultProps = {
  className: undefined,
};

export default withStyles(cardBodyStyle)(CardBody);
