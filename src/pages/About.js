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
          Bem-vindo à Car App, o destino principal para aluguel de carros de luxo. Se você procura impressionar em um evento corporativo ou apenas deseja desfrutar de um fim de semana com estilo, nós podemos atender suas necessidades.
        </Typography>
        <Typography variant="p">
          Na Car App, não apenas alugamos carros, nós fornecemos uma experiência que é tão inesquecível quanto luxuosa. Obrigado por nos escolher para tornar suas jornadas notáveis.
        </Typography>
      </Container>
    </Paper>
  );
}

export default About;
