var Store = {
  asa: {
      name: 'Asa',
      age: 24
  }
};

var Removers = {};

var Jack = {
    config: {
      0: {
        storage: 'memory',
        life: 1000
      },
      1: {
        storage: 'session',
        life: 5000
      }
    },
    get: function(key) {
        return Store[key];
    },
    set: function(key, value, type) {
      type = type || 0;
      var config = this.config[type];
      Store[key] = value;
      this.setupCleanup(key, config);
    },
    setupCleanup: function(key, config) {
      if(Removers[key]) {
        clearTimeout(Removers[key].id);
      }
      var remove = function() {
        delete Store[key];
        delete Removers[key];
      };
      var id = setTimeout(remove, config.life);
      Removers[key] = {
        id: id,
        callback: remove
      };
    }
};
