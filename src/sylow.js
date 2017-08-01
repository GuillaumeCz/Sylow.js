alert()
let Sylow = {


  /**
   *
   * Idée de classes :
   *  - Faire une classe Générale dont hérite 
   *  Entity, Client, ... et mettre des méthodes generiques utilisable de la même façon partout
   *
   * Un peu comme ListActions de admin//app.ctrl de sylow
   */
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

  listClients () {
  
  }
}

