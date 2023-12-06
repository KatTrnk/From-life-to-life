import Link from 'next/link';
import Image from 'next/image';
import './footer.css';
import Github from './github.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="name name-left">
        <p>Darja Krjuková</p>
        <p className="github1">
          <Link href="https://github.com/DarjaCodes">
            <Image src={Github} alt="logoGH" width={20} height={20}></Image>
          </Link>
        </p>
      </div>
      <div className="name name-right">
        <p>Kateřina Trnková</p>
        <p className="github1">
          <Link href="https://github.com/KatTrnk">
            <Image src={Github} alt="logoGH" width={20} height={20}></Image>
          </Link>
        </p>
      </div>
    </footer>
  );
};
