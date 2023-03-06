import './Nav.css'


export default function Nav() {
    return (
      <div className='navbar'>
        <ul className='navPages'>
          <li className='page'> <a href="https://docs.google.com/document/d/1LkSNiWahTK8MuaZYEpOMsxoDSB9KIYfV7P2yp5mpn74/edit?usp=sharing"> Resume </a>  </li>
          <li className='page'> <a href="https://github.com/jozkan30"> Github</a> </li>
          <li className='page'> <a href="https://www.linkedin.com/in/justin-ozkan/"> LinkedIn</a></li> 
        </ul>
      </div>
    )
  }