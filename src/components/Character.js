import React from "react";
import styled from "styled-components";
import theme from "../theme";


const WrapperCharacter=styled.div`
display:flex;
flex-direction:column;
width:100%;
text-align:center;
/* border: 3px solid red; */
align-items: center;
div{
    display:flex;
    width: 75%;
    padding:2% 5%;
    margin:2%;
    border:3px solid ${theme.primaryColor};
    border-radius:15% 25% 15% 25%;
    align-items:center;
    justify-content: space-between
}
h2{
    color:${theme.secondaryColor}
}
span{
    color:${theme.secondaryColor};
    background-color:${theme.tertiaryColor};
    font-weight: bold;
    padding:1%;
    border-radius: 15% 35% 15% 35%;
}
`
// Write your Character component here
const Character = (props) =>{
    const {swPeopleList} = props;
    // console.log(swPeopleList)
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