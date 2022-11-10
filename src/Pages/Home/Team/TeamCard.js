import React from 'react';

const TeamCard = ({team}) => {
    const { role, img, name } = team;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure >
            <img className="p-5 " src={img} alt="" />
          </figure>
          <div className="card-body text-center">
            <h2 className="font-bold text-3xl">{name}</h2>
            <p className="text-xl font-semibold"> {role}</p>
          </div>
        </div>
      );
};

export default TeamCard;