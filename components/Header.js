import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href='/'>
      <a syle={linkStyle}>Home </a>
    </Link>
    <Link href='/about'>
      <a syle={linkStyle}>About </a>
    </Link>
  </div>
)

export default Header