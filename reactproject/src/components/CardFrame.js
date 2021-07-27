import React, { Component } from 'react';
import CardService from './CardService';
import { Container, Row, Col } from 'reactstrap';
import Toggle from 'react-toggle'


class CardFrame extends Component {
    state = {
        vaga: [
            { categoria: "Vaga de voluntariado", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "2-6", subText: "Vagas Disponíveis", cidade: "Natal, RN", button: "Participar" },
            { categoria: "Doação de Materiais", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "36", subText: "Itens Disponíveis", cidade: "Natal, RN", button: "Doar" },
            { categoria: "Vaga de voluntariado", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "2-6", subText: "Vagas Disponíveis", cidade: "Natal, RN", button: "Participar" },
            { categoria: "Doação de Materiais", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "36", subText: "Itens Disponíveis", cidade: "Natal, RN", button: "Doar" },
            { categoria: "Vaga de voluntariado", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "2-6", subText: "Vagas Disponíveis", cidade: "Natal, RN", button: "Participar" },
            { categoria: "Doação de Materiais", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "36", subText: "Itens Disponíveis", cidade: "Natal, RN", button: "Doar" },
            { categoria: "Vaga de voluntariado", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "2-6", subText: "Vagas Disponíveis", cidade: "Natal, RN", button: "Participar" },
            { categoria: "Doação de Materiais", nomedavaga: "Arrecadação de Alimentos para Moradores de Rua", image: "", empresa: "SP Invisível", number: "36", subText: "Itens Disponíveis", cidade: "Natal, RN", button: "Doar" },
        ]
    }

    render() {

        let details = this.state.vaga.map(singleVaga => {
            return (
                <Col>
                    <CardService details={singleVaga} />
                </Col>
            )
        })
        return (
            <div>
                <Container>
                    <label className="geoloc">
                        <span>Geolocalização Ativa </span>
                        <Toggle
                            defaultChecked={this.state.tofuIsReady}
                            icons={false}
                            onChange={this.handleTofuChange} />
                    </label>
                    <Row>
                        <header className="App-title">Oportunidades em destaque</header>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        {details}
                    </Row>
                </Container>
                <button className={"button-secondary"}>Ver mais Oportunidades</button>
            </div>
        )
    }
}

export default CardFrame;