import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Team = () => {
    const [teams, setTeams] = useState([])

    useEffect( ()=> {
        fetch('http://localhost:5000/team')
        .then(res=> res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-5xl py-5'>Our Team</h1>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
                {
                    teams.map(team => 
                    <TeamCard
                     key={team._id} team={team}>
                    </TeamCard>)
                }
            </div>
            
        </div>
    );
};

export default Team;