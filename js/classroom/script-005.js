class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log(`E-mail enviado para ${this.name} no endereço ${this.email}`)
  }
}

const user = new User("José", "jose@email.com")
user.sendEmail()