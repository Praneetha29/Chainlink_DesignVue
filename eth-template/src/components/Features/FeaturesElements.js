import styled from 'styled-components'

export const FeaturesContainer= styled.div`
height:80vh;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
background:#010606;

@media screen and (max-width:768px) {
    height:1100px;
}

@media screen and (max-width:480px) {
    height:1300px;
}
`

export const FeaturesWrapper= styled.div`
max-width: 80%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
height:60%;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
 export const FeaturesCard = styled.div`
 background: #fff;
 display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
height: 80%;
padding: 30px;
gap:5%;


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
 `

 export const FeaturesIcon = styled.img`
 height: 160px;
 width: 160px;
 margin-bottom: 10px;
 `

 export const FeaturesH1 = styled.h1`
 font-size:3rem;
 color:#fff;
 margin-bottom: 64px;
 text-align:center;


 @media screen and (max-width: 480px){
    font-size:2.5rem;
 }
 `

 export const FeaturesH2 = styled.h2`
 font-size:1.2rem;
 margin-bottom: 10px; 
 text-align:center;
 `
 export const FeaturesP = styled.p`
 font-size:1.2rem;
 text-align:center;
 line-height: 1.8rem;
 `