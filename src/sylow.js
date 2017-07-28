alert()
let Sylow = {
  constructor () {
    this.domain = null;
    this.isConnected = false;
  },

  Connection (options) {
    this.isConnected = true;
    this.domain = options.domain ? options.domain : null;
  },

  listEntities () {
    
  }
}

