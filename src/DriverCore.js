const EventEmitter = require('events');

class DriverCore extends EventEmitter {
  /**
  * Constructor
  * @param  {string} IP
  * @return {void}
  */
  constructor(id, name, type, version, client) {
    super();

    this._id      = id;
    this._name    = name;
    this._type    = type;
    this._version = version;
    this._client  = client;

    this._client.on('*', (topic, data) => {
      this.emit(topic, data);
    });

    this.state = {};
  }

  /**
  * Get instance of the client
  * @return {Client} Client instance
  */
  get client() {
    return this._client;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get version() {
    return this._version;
  }
}

module.exports = DriverCore;
