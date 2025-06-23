import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "My notes": "My notes",
        "Create new task:": "Create new task:",
        "Create": "Create",
        "task name": "task name",
        "description": "description",
        "greeting!": "Greeting!",
        "myInfo": "Planning your daily routine is key to productivity. For your convenience, I suggest following 3 simple rules when creating tasks: Keep descriptions short, Make them easily achievable, Ensure they sound logical and clear, for understanding.",
        "gl": "if your task is green click it to see image!",
        "myName": "Sharipov Karim",
        "userName": "name:",
        "userPaswrd": "password:",
        "Register": "Register",
        "edit": "edit",
        "img": "image",
      }
    },
    ru: {
      translation: {
        "My notes": "Мои заметки",
        "Create new task:": "Создать новую задачу:",
        "Create": "Создать",
        "task name": "название задачи",
        "description": "описание",
        "greeting!": "Приветствую!",
        "myInfo": "Ведение заметок это ключ повышению продуктивности, для удобства советую использовать моё правило \"3-ёx Л\": Лаконизм, легкость, логика.",
        "gl": "Если ваша заметка зелёная кликните на неё, чтобы увидеть картинку!",
        "myName": "Шарипов Карим",
        "userName": "имя:",
        "userPaswrd": "пароль:",
        "Register": "Регистрация",
        "edit": "редактировать",
        "img": "изображение",
      }
    }
  },
  lng: 'en', // язык по умолчанию
  fallbackLng: 'en'
})

export default i18n

// Напоминалка
// <h1>{t('welcome')}</h1>
// <button onClick={() => i18n.changeLanguage('ru')}>