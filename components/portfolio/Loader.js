import React from 'react';

export default function Loader(props) {
  return (
    <div className="text-center loader py-2" style={{ ...props.customStyle }}>
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
