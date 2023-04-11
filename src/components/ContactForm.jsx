import React from 'react'
import contactPhoto from '../assets/contacts.jpg'
import styles from './ContactForm.module.css'

export default function Contact() {



    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };



    return (
        <div className={styles.contactsForm}>
            <div className="page-center py-120">
                <h2 className={styles.contactsForm__title}>Я буду рада ответить на ваши вопросы</h2>
                <div className={styles.contactsForm__container}>
                    <div className={styles.contactsForm__form} >
                        <form onSubmit={handleSubmit}>
                            <input placeholder="Имя" required type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                            <input placeholder="E-mail" required type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <textarea placeholder="Сообщение" type='text' name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            <input type="submit" value="Отправить"/>
                        </form>
                    </div>
                    <img className={styles.contactsForm__img} src={contactPhoto} alt="contact form" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
