import * as React from 'react';
import Badge from '../images/badge';
import Thumbnail from '../images/thumbnail';

import './external.css';

const Icon = ({ data }) => {
  return (
    <a className="badge-external noLint" href={data.link} title={data.type}>
      <p
        className="badge-external-icon"
        style={{
          backgroundColor: data.image.background || '#FFFFFF',
        }}
      >
        <Thumbnail className="badge-external-icon-image" src={data.image.src} />
      </p>
      <p className="badge-external-text">
        <h6><span>{data.type}</span></h6>
        <span>{data.external_id}</span>
      </p>
    </a>
  );
};

const Small = ({ data }) => (
  <a
    className="badge badge-external-small"
    style={{
      backgroundColor: data.image.background || '#FFFFFF',
    }}
    href={data.link}
    title={data.type}
  >
    <Badge className="badge-external-small-image" src={data.image.src} />
    <span className="badge-external-small-id">{data.external_id}</span>
  </a>
);

export { Small, Icon };
