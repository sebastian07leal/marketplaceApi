module.exports = {
    // Establece el ancho de línea máximo según tu preferencia
    printWidth: 80,

    // Usa comillas simples en lugar de comillas dobles
    singleQuote: true,

    // Usa punto y coma al final de cada declaración
    semi: true,

    // Usa espaciado en blanco dentro de las llaves de los objetos
    bracketSpacing: true,

    // Establece el espaciado o tamaño de la tabulación según tu preferencia
    tabWidth: 4,

    // Evita el espaciado automático de Prettier
    // y confía en ESLint para manejar el espaciado
    eslintIntegration: true,

    // Configura Prettier para que respete las reglas de ESLint
    overrides: [
        {
            files: ['*.js', '*.cjs'],
            options: {
                rules: {
                    // Agrega reglas específicas de ESLint si es necesario
                },
            },
        },
    ],
};
