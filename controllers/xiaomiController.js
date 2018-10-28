'use strict';

const y = require("yeelight-awesome");
const discover = new y.Discover({port: 1982, debug: true});
const {success, error} = require('../tools');
const lightPort = "55443";

class XiaomiLight {

    //localhost:8080/api/v1/xiaomiLight/toggle/192.168.0.32
    toggleLight(req, res) {
        let yeelight = new y.Yeelight({lightIp: req.params.lightIp, lightPort: lightPort});
        yeelight.connect().then((l) => {
            l.toggle().then(() => {
                l.disconnect();
                return res.status(200).json(success("Toggle command successful"));
            });
        }).catch((e) => {
            return res.status(404).json(error(e.message));
        });
    }

    // Doesn't work
    scan(req, res) {
        discover.scanByIp(100, 110)
            .then(x => console.log("scan finished: ", x))
            .catch(e => console.log(e.message));
    };

    // effect = { "smooth", "sudden", }
    // duration = specifies the total time of the gradual changing. The unit is milliseconds.
    //localhost:8080/api/v1/xiaomiLight/setColor/192.168.0.32/6/36/135/smooth/3000
    setColor(req, res) {
        let yeelight = new y.Yeelight({lightIp: req.params.lightIp, lightPort: lightPort});
        yeelight.connect().then((l) => {
            l.setRGB(new y.Color(req.params.red, req.params.green, req.params.blue), req.params.effect, req.params.duration).then(() => {
                l.disconnect();
                return res.status(200).send(success("Set Color command successful"));
            });
        }).catch((e) => {
            return res.status(404).send(error(e.message));
        });
    }

    // brightness = 0 to 100
    // effect = {"smooth", "sudden"}
    // duration = specifies the total time of the gradual changing. The unit is milliseconds.
    //localhost:8080/api/v1/xiaomiLight/setBrightness/192.168.0.32/100/smooth/3000
    setBrightness(req, res) {
        let yeelight = new y.Yeelight({lightIp: req.params.lightIp, lightPort: lightPort});
        yeelight.connect().then((l) => {
            l.setBright(req.params.brightness, req.params.effect, req.params.duration).then(() => {
                l.disconnect();
                return res.status(200).send(success("Set Brightness command successful"));
            });
        }).catch((e) => {
            return res.status(404).send(error(e.message));
        });
    }
}

module.exports = new XiaomiLight;