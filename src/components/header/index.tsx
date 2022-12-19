import { changeItemNavColor } from 'helpers'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()

  useEffect(() => changeItemNavColor(location.pathname), [location.pathname])

  return (
    <header>
      <nav className="flex justify-between p-4 font-bold text-[#CCC]">
        <Link id="shopping-cart" to="/shopping-cart">
          SACOLA
        </Link>
        <Link id="payment" to="/payment">
          PAGAMENTO
        </Link>
        <Link id="post-purchase" to="/post-purchase">
          CONFIRMAÇÃO
        </Link>
      </nav>
    </header>
  )
}

export default Header
