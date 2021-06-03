let ReadConfigResponseModel =  function (status, content) {
    let validate = function (value) {
        return !(value === '' || value === null || value === undefined || (typeof value) !== 'string');
    }
    let setDevMode = function (devMode) {
        if(validate(devMode)){
            return devMode === "true";
        } else {
            return true;
        }
    }
    let setLocations = function (locations) {
        let locationArray = [];
        for (const location of locations) {
            let country = location.country;
            if(validate(country)) {
                let array = [];
                array.push(country)
                for (const city of location.cities) {
                    if (validate(city)) {
                        array.push(city)
                    }
                }
                locationArray.push(array)
            }
        }
        return locationArray;
    }
    this.status = status;
    if(status) this.devMode = setDevMode(content.devMode);
    if(status) this.locations = setLocations(content.locations);
}
module.exports = ReadConfigResponseModel;