import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardHeader, CardFooter
} from 'reactstrap';
import 'typeface-rubik'
import icons from './icons/IconArrecadacao.PNG';

const CardService = (props) => {

  return (
    <div>
      <Card className="card">
        <CardHeader className="headerCard">{props.details.categoria}</CardHeader>
        <CardBody>
          <CardTitle className="titleCard">{props.details.nomedavaga}</CardTitle>
          <img className="image" src={icons} alt="icone Arrecadacao" />
          <CardText className="subtitleCard">{props.details.empresa}</CardText>
          <CardText className="textCardNumber">{props.details.number}</CardText>
          <CardText className="textCardSubText">{props.details.subText}</CardText>
          <button className={"button-primary"}>{props.details.button}</button>
        </CardBody>
        <CardFooter className="footerCard">{props.details.cidade}</CardFooter>
      </Card>
    </div>
  );
};

export default CardService;