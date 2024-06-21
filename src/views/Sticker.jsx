import NavbarComponent from '../components/NavbarComponent'
import { useParams } from 'react-router-dom'
import { StickerContext } from '../context/StickerContext'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';

export default function Sticker() {
  const {stickers} = useContext(StickerContext)
  const { id } = useParams()
  let arrStickers = stickers
  console.log(arrStickers)

    return (
      <div>
          <NavbarComponent></NavbarComponent>
          <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{}</Card.Title>
          <Card.Text>
            Texto de ejemplo de descripcion
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      </div>
    )
  }

