import propertyForSaleArr from '/properties/propertyForSaleArr.js'
import placeholderPropertyObj from '/properties/placeholderPropertyObj.js'

//make the placeholderPropertyObj the default parameter for propertyArr
function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    //use map to iterate propertyArr and destructure it and 
    //set it to the value of the current element in the propertyArr
    return propertyArr.map(property => {
        const {
            propertyLocation,
            priceGBP,
            roomsM2,
            comment,
            image
        } = property
        //do the calculation for square meteres using reduce on the roomsM2 array
        const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current)
        //return the HTML we want to set up
        return `
            <section class="card">
                <img src="/images/${image}">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoomSizeM2} m&sup2;</h3>
                </div>
            </section>` 
            //use join to turn back into a string and eliminate the delimiters
    }).join('')
}

document.getElementById('container').innerHTML = getPropertyHtml()