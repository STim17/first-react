import React from 'react'
import { Card } from '../card/card'
import './card-list.style.css'

export const CardList = (props) => {

    return (
        <div className='card-list'>

            {/*1st {props.children} */}

            {props.usersM.map(m => (
                <Card key={m.id} m={m} />
            )

                // <h1 key={m.id}>{m.name}</h1>)
            )}

            {/*2nd {props.usersM.map(m =>
            <h1 key={m.id}>{m.name}</h1>
        )} */}

            {/* {props.usersM.map(m =>
            <Card key={m.id} m={m} />
        )} */}

        </div>
    )
}