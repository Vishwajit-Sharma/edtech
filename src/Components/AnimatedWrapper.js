import React from 'react';
import 'animate.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimatedWrapper = ({ children, location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="animate__fade"
        timeout={500}
      >
        <div className="animate__animated animate__fadeInUp">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
  

export default AnimatedWrapper