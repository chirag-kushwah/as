import React from 'react'

function GiftPartersBelowSection() {

    const offers = [
    {
      id: 1,
      logo: "/amazonSmartDevices.jpg",
    },
    {
      id: 2,
      logo: "/banner2.jpg",
    },
    {
      id: 3,
     logo: "/amazonSmartDevices.jpg",
    },
  ];

  return (
    <div className=" px-4 ">
  <div className="container flex gap-4 m-auto  ">
  {offers.map((offer) => (
    <div key={offer.id} className="flex-1">
      <img
        src={offer.logo}
        alt="offer"
        className="w-full h-[300px] object-cover rounded-2xl"
      />
    </div>
  ))}
</div>

</div>
  )
}

export default GiftPartersBelowSection
