import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description= "Order Online for Touchless Delivery "
            backgroundImg="https://www.topgear.com/sites/default/files/2022/02/2-Tesla-Model-S.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model Y"
            description= "Order Online for Touchless Delivery "
            backgroundImg="https://i.gaw.to/content/photos/57/09/570977-un-tesla-model-y-a-propulsion-arrive-et-recoit-12-000-de-rabais.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model 3"
            description= "Order Online for Touchless Delivery "
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model X"
            description= "Order Online for Touchless Delivery "
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
        />
        <Section
            title= "Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg= "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title= "Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg= "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
            leftBtnText="Shop now"
        />
        </Container>
  )
}

export default Home

const Container=styled.div`
    height:100vh;
    `