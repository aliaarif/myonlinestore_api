import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) { }

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready

    // console.log = function (msg, ...options) {
    //   const ignore = '.returning() is not supported by mysql and will not have any effect.'
    //   if (msg.indexOf(ignore) === -1) {
    //     console.info(msg, ...options)
    //   }
    // }

  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
