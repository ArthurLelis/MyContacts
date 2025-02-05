import PropTypes from 'prop-types';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

import { Overlay } from './styles';

import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef: overleyRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay $isLeaving={!isLoading} ref={overleyRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
