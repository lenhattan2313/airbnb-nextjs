import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Company</h5>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
        <p>Airbnb</p>
      </div>
    </div>
  );
};

export default Footer;
