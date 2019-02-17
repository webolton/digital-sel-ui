import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import cardHeaderStyle from 'assets/javascripts/components/cardHeaderStyle';

function CardHeader({ ...props }) {
  const {
    classes, className, children, color, plain, ...rest
  } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['warning', 'success', 'danger', 'info', 'primary', 'green']),
  plain: PropTypes.bool,
};

CardHeader.defaultProps = {
  color: 'primary',
  plain: true,
  className: undefined,
};

export default withStyles(cardHeaderStyle)(CardHeader);
