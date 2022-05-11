export const isRequired = (value) => ({
    hasPassed: !!value,
    message: "Пожалуйста, заполните поле",
})

export const charLimit = (limit) => (value) => ({
    hasPassed: value.length <= limit,
    message: "Вы превысели лимит",
})

export const emailValidation = (value) => ({
    hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
    message: "Неверный имейл",
})

export const passValidation = (value) => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(value),
    message: "Пароль должен содержать минимум восемь символов, минимум одну букву, одну цифру и один специальный символ",
})