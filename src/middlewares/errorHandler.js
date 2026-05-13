export const errorHandler = (error, req, res, next) => {
    console.log(error.message)
    console.log(error.name)

    if (error?.message?.includes("in JSON at position")) {
        return res.status(400).json({
            message: "Erro de sintaxe no JSON. Por favor verifique o formato do JSON enviado."
        })
    }

    res.status(500).json({
        message: "Erro no servidor. Por faovr tente novamente mais tarde."
    })
}