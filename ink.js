var Store = {
    asa: {
        name: 'Asa',
        age: 24
    }
};

var Jack = {
    config: {
      0: {
        storage: 'memory',
        life: 5000
      },
      1: {
        storage: 'session',
        life: 20000
      }
    },
    get: function(key) {
        return Store[key];
    },
    set: function(key, value, type) {
      type = type || 0;
      var config = this.config[type];
      Store[key] = value;
      setTimeout(function() {
        delete Store[key];
      }, config.life);
    }
};
