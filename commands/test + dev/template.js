module.exports = class test {
    constructor(){
            this.name = 'foo',
            this.alias = ['foo'],
            this.usage = 'test command'
    }
 
    async run(client,message,args,mysql,con,id) {
        message.reply('test worked!')
    }
}