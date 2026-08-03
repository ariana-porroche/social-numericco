import './Home.css';
import Button from '../../components/Button/Button';

export default function Home() {
  return (
    <div className="home-page">
      <h1 className='title'>TITLE</h1>
      <p className='subtitle'>Subtitle</p>
      <Button
        variant="primary"
        onClick={null}
      >
        See more
      </Button>
    </div>
  );
}
