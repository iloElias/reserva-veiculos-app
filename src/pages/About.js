import { Paper, Typography, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Paper className="page-container" square elevation={5} style={{ backgroundColor: "#223742", color: "white", padding: "20px" }}>
      <Container maxWidth="md">
        <Typography variant="h5" component="h1" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography variant="p" paragraph>
          Bem-vindo à LuxeCar Rental, o destino principal para aluguel de carros de luxo. Se você procura impressionar em um evento corporativo ou apenas deseja desfrutar de um fim de semana com estilo, nós podemos atender suas necessidades.
        </Typography>
        <Typography variant="p" paragraph>
          Fundada em 2010, a LuxeCar Rental cresceu de uma pequena startup para uma das principais serviços de aluguel de carros de luxo. Com uma frota de mais de 100 carros de alta gama e com adições regulares, nosso compromisso é oferecer uma experiência incomparável tanto em termos de serviço quanto de qualidade.
        </Typography>
        <Typography variant="p" paragraph>
          Nossa equipe é apaixonada por carros e atendimento ao cliente. Entendemos a importância de cada ocasião e nos esforçamos para garantir que sua experiência seja impecável do início ao fim. Escolha entre nossa ampla seleção de marcas de ponta, incluindo Ferrari, Porsche e Tesla, todas mantidas com os mais altos padrões de desempenho e limpeza.
        </Typography>
        <Typography variant="p">
          Na LuxeCar Rental, não apenas alugamos carros, nós fornecemos uma experiência que é tão inesquecível quanto luxuosa. Obrigado por nos escolher para tornar suas jornadas notáveis.
        </Typography>
      </Container>
    </Paper>
  );
}

export default About;
