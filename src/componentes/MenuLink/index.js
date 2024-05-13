import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

// o "to" na linha 13 tem a função do href

function MenuLink({children, to}) {
    const localizacao = useLocation();

    return(
        <Link className={`
            ${styles.link} 
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}> 
            {children}
        </Link>
    )
}

export default MenuLink;