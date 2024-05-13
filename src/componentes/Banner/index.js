import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha-foto.jpeg'

function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>Meu nome é Fabio Barbosa! E estou fazendo esse site em React juntamente com a Alura para aprimorar meus conhecimentos em Front-End!</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto desse cara"/>
            </div>
        </div>
    )
}

export default Banner;