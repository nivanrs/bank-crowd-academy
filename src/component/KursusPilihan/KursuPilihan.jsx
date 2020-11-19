import { CardDeck } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function KursusPilihan(props) {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Investasi untuk Pemula</Card.Title>
          <Card.Text>
            Kursus Investasi untuk pemula. Anda akan mendapatkan cuan banyak jika mengikuti kursus ini.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Perencanaan Keuangan untuk Pemula</Card.Title>
          <Card.Text>
            Kursus perencanaan keuangan agar anda dapat mengatur keuangan dengan baik.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Paham Laporan Keuangan</Card.Title>
          <Card.Text>
            Memhami Laporan Keuangan Kuartalan untuk investasi jangka panjang.
          </Card.Text>
        </Card.Body>
      </Card>      
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Belajar Akuntansi dengan Mudah</Card.Title>
          <Card.Text>
            Kursus akuntansi untuk persiapan sertifikasi akuntanssi.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
}
