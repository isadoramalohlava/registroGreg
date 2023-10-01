import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Photo } from '../components/Photo';

export function Register() {
    function validateEmail(email) {
        if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
            const err = new Error('Email invalido.')
            err.input = 'email'
            throw err
        }
    }

    const userInputs = {
        name: document.querySelector('#name'),
        email: document.querySelector('#email'),
    }

    const form = document.querySelector('form')

    form.addEventListener('submit', (ev) => {
        ev.preventDefault()

        try {
            userInputs.name.classList.add('sucess')
            validateEmail(userInputs.email.value)
            userInputs.email.classList.add('sucess')
        } catch (err) {
            userInputs[err.input].classList.add('error')
            document.querySelector(`#${err.input}-error`).textContent = err.message
        }
    })



    return (
        <div id={styles.WelcomeDiv}>
            <div>
                    <div id={styles.TopContainerWelcome}>
                        <h1>Seus Detalhes</h1>
                        <span>Por favor, nos diga seu nome e email</span>
                    
                    </div>
                    <div id={styles.AutoLoginDiv}>
                            
                            <div className={styles.wrapperLogoGoogle}>
                                <FcGoogle size={24} />
                            </div>

                            <input className={styles.wrapperAutoLogin} type="button" value="Continue com Google"  />
                            
                            <div className={styles.wrapperLogoFace}>
                                <FaFacebook size={24} />
                            </div>

                            <input className={styles.wrapperAutoLogin} type="button" value="Continue com Facebook" />

                            <div className={styles.wrapperLogoApple}>
                                <BsApple size={24} />
                            </div>

                            <input className={styles.wrapperAutoLogin} type="button" value="Continue com Apple" />

                            
                            <div id={styles.Or}>
                                <p>OU</p>
                            </div>
                    
                    </div>
                    <div className={styles.registerInputs}>
                        <form action="">
                            <p className={styles.name}>Primeiro Nome</p>
                            <input type="name" name="" id={styles.name} placeholder="Coloque seu Primeiro Nome" className={styles.wrapperInputs}/>
                            <span id={styles.name-error}></span>

                            <p className={styles.name}>Sobrenome</p>
                            <input type="name" name="" id={styles.surName} placeholder="Coloque seu Sobrenome" className={styles.wrapperInputs}/>
                            <span id={styles.surName-error}></span>

                            <p className={styles.name}>Email</p>
                            <input type="email" name="" id={styles.email} placeholder="Coloque seu Email" className={styles.wrapperInputs}/>
                            <span id={styles.email-error}></span>

                            <Link to="/password"><input type="button" value="Continue" id={styles.buttonContinue}/> </Link>
                        </form>
                    </div>

                        <div id={styles.divProgress}>
                            <span id={styles.actualProgress} className={styles.progress}></span>
                            <span className={styles.progress}></span>
                            <span className={styles.progress}></span>
                        </div>
                </div>
                <div className={styles.photo}>
                    <Photo/>
                </div>
        </div>
    )
}