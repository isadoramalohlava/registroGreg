import styles from './Password.module.css';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { Photo } from '../components/Photo';
import { Link } from "react-router-dom";

export function Password() {
    return (
        <div id={styles.WelcomeDiv}>
            <div>
                <div id={styles.TopContainerWelcome}>
                    <h1>Escolha uma senha</h1>
                    <span>Ela deve ter no mínimo 8 caracteres</span>
                
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
                    <p className={styles.password}>Senha*</p>
                    <input type="password" name="" id="" minlength="8" required placeholder="Coloque sua Senha" className={styles.wrapperInputs}/>

                    <div className={styles.passawordRequired}>
                        <p>X Mínimo de 8 caracteres</p>
                        <p>X 1 Caracter especial (@!?/&%$...)</p>
                                            
                    </div>

                    <div className={styles.passawordRequired}>
                        <p>X 1 Número</p>
                        <p>X 1 Caracter Maiúsculo</p>
                    </div>

                    
                    <p className={styles.password}> Repita a Senha* </p>
                    <input type="password" name="" id="" minlength="8" required placeholder="Repita sua Senha..." className={styles.wrapperInputs}/>

                    <input type="button" value="Continue" id={styles.buttonContinue}/>

                    <div id={styles.divProgress}>
                        <span  className={styles.progress}></span>
                        <span id={styles.actualProgress} className={styles.progress}></span>
                        <span className={styles.progress}></span>
                    </div>
                </div>
                <Photo />
        </div>
    )
}
export default Password
