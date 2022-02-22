var popupS = require('popups');

var alert = {
    getAlert: function(req, res) {
        popupS.alert({
            content: 'Hello!'
        })
    }
}

module.exports = alert;