import PropTypes from 'prop-types';

function Pre({ load }: { load: boolean }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;
