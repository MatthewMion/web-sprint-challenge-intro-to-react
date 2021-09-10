import React from "react";
import styled from "styled-components";



const WrapperCharacter=styled.div`
`
// Write your Character component here
const Character = (props) =>{
    const {swPeopleList} = props;
    console.log(swPeopleList)
    return (
        <WrapperCharacter>
            {swPeopleList.map(person =>{
                return (
                <div>
                    <h2>{person.name}</h2>
                    <span>{person.birth_year}</span>
                </div>
                )
            })}
        </WrapperCharacter>




    )
}



export default Character;