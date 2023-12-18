import React from 'react'
import { Person } from './Person';
import Ali from "../assets/avatar-ali.png";
import Anisha from "../assets/avatar-anisha.png";
import Richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";


export const Persons = () => {
  return (
    <div className='flex flex-wrap'>
        <Person image={Ali} name={"Ali Bravo"} description={"Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."} />
        <Person image={Anisha} name={"Anisha Li"} description={"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."} />
        <Person image={Richard} name={"Richard Watts"} description={"Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!"} />
        <Person image={shanai} name={"Anisha Li"} description={"Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."} />

    </div>
  )
}
