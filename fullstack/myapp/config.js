var config ={}

config.puerto = 3000
config.db = "azumi"
config.passwordbd = ""

config.EnabledCors = true
config.origins = ['http://localhost:4200',
                   'https://google.com'

]

module.exports.config = config