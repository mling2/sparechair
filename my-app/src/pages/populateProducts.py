import json

prods = 'products.json'

def fieldsToProd(name, imgFile, condition, price):
    return { "name" : name, "imgFile" : imgFile, "condition" : condition, "price" : price }

def addProduct(newProduct, filename=prods):
    with open(filename, 'r+') as file:
        fileData = json.load(file)
        fileData['products'].append(newProduct)
        file.seek(0)
        json.dump(fileData, file, indent = 4)

# maxPrice, minPrice, zipCode, condition, startDate, endDate

# addProduct(fieldsToProd("Black Couch", "../images/blackCouch.jpeg", "GentlyUsed", 100))
addProduct(fieldsToProd("Green Couch", "../images/greenCouch.jpeg", "GentlyUsed", 100))
addProduct(fieldsToProd("Grey Couch", "../images/greyCouch.jpg", "LikeNew", 150))