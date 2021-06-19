const curlconverter = require("curlconverter");

const convert = {
    nodefetch: {title: "Fetch (Node)", method: curlconverter.toNodeFetch},
    browserfetch: {title: "Fetch (Browser)", method: curlconverter.toBrowser},
    dart: {title: "Dart", method: curlconverter.toDart},
    go: {title: "Go", method: curlconverter.toGo},
    json: {title: "JSON", method: curlconverter.toJsonString},
    noderequest: {title: "Request (Node)", method: curlconverter.toNodeRequest},
    php: {title: "PHP", method:curlconverter.toPhp},
    python: {title: "Python 3 (requests)", method: curlconverter.toPython},
    java: {title: "Java", method: curlconverter.toJava},
}
export default convert;