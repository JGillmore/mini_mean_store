var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/miniMeanStore');

require('../models/items');
require('../models/users');
require('../models/orders');
