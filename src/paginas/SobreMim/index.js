import PostModelo from "componentes/PostModelo"
import styles from './SobreMim.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from "assets/sobre-mim-foto.jpeg"

function SobreMim() {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim"> 
            <h3 className={styles.subtitulo}>Olá, eu sou Fabio!</h3>
            <img src={fotoSobreMim} alt="Foto do cara sorrindo" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>Olá! Tudo certo? Meu nome é Fabio e sou aluno da Alura, a maior escola de programação do Brasil. Por meio desse site, estou refinando meus conhecimentos em React para ser um grande desenvolvedor de sistemas em breve..</p>
            <p className={styles.paragrafo}>Além de fazer cursos de programação na Alura, sou estudante de Análise e Desenvolvimento de Sistemas na Fatec Ourinhos, cujo curso comecei no primeiro semestre de 2023.</p>
            <p className={styles.paragrafo}>Minha paixão é por Front-End e Design, porém tenho um gosto especial por Inteligência Artificial e Back-End.</p>
            <p className={styles.paragrafo}>Espero que tenha gostado do resultado final de mais esse site!</p>
        </PostModelo>
    )
}

export default SobreMim;