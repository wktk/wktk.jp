import React from 'react';

export default class AdSense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-3703878768228760'
          data-ad-slot='2985375000'
          data-ad-format='auto'
          data-full-width-responsive='true'
        />
    );
  }
}
