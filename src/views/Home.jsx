import NavbarComponent from "../components/NavbarComponent";
import { useContext, useEffect } from "react";
import { StickerContext } from "../context/StickerContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const { stickers, setStickers } = useContext(StickerContext);
const navigate = useNavigate();



  return (
    <div>
      <NavbarComponent />
      <h1 className="text-center">Estos son nuestros stickers:</h1>
      <div className="d-flex gap-3">
        {stickers.map((sticker, i) => {
          return (
            <div key={i}>
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={sticker.img} />
                <Card.Body>
                  <Card.Title>{sticker.name}</Card.Title>
                  <Button variant="primary" onClick={() => navigate(`/sticker/${sticker.id}`)}>Ver en detalle</Button>
                  <Button variant="danger">Agregar 1</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
