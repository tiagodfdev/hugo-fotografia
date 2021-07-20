import { withRouter } from 'next/router';
import Link from 'next/link';
import { Children, cloneElement } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let className = child.props.className || '';
  if ((router.pathname === props.href || props.href === router.pathname.slice(0,router.pathname.indexOf('/',1))||((props.itemName=='Trabalhos') && router.pathname.includes("trabalhos"))) && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{cloneElement(child, { className })}</Link>;
};

export default withRouter(ActiveLink);
