class HelloController {
    hello(name: string) {
        return `👋🏻 Hello, ${name}!`
    }
}

export default new HelloController()