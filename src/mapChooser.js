function mapChooser(locationName) {
    if(!locationName ){
        locationName = 'default'
    }
    let imageName = locationName + '.png'
    return imageName;
}

export default mapChooser;