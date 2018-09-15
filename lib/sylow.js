import request from 'request';

const Sylow = class {
  /**
   * Connection to the domaine
   */
  Connection(_config) {
    this.authHeader = { auth: { bearer: _config.authToken } };
    this.api = `http://${_config.domain}/api`;
    this.entities = `${this.api}/entities`;

    return this;
  }

  /**
   * Returns a list of the entities
   */
  listEntities(_in, callback) {
    request.get(this.entities, this.authHeader, (error, response, body) => {
      if (error) {
        callback(error);
      }
      callback(JSON.parse(body));
    });
  }
};

export default Sylow;
