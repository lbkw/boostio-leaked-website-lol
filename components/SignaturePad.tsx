import React from 'react';

const SignatureVideo: React.FC = () => {
  return (
    <div style={{ margin: '20px 0' }}>
      <h2 style={{ color: '#FF8DCA' }}>Signature Video</h2>
      <video width="600" controls style={{ maxWidth: '100%' }}>
        <source src="../public/Signature.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SignatureVideo;
