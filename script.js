document.getElementById("ver_me").addEventListener("input", (event) => {
    if (!event.target.checkValidity()) event.target.value = event.target.value.slice(0, -1)
})

let M_dict = {
    "C": 12,
    "O": 16,
    "H": 1
}
let MC = 12
let MO = 16
let MH = 1
//ver_calculate()

function gather_inputs(html_div, edit_str = "", replace_str = "") {
    let inputs_list = html_div.getElementsByTagName("input")
    let inputs_dict = {}
    let inputs_names = []
    for (element in inputs_list) {
        if (!isNaN(element)) {
            var_name = inputs_list[element].id.replace(edit_str, replace_str)
            inputs_dict[var_name] = inputs_list[element].value
            inputs_names.push(var_name)
        }
    }
    console.log(inputs_names, inputs_dict)
    return [inputs_names, inputs_dict]
}

function ver_calculate() {

    let html_ver_field = document.getElementById("verhaltnisformel_field")
    let [names, inputs] = gather_inputs(html_ver_field, "ver_")
    
    let mc = inputs[names[1]]
    let mh = 2 * MH * inputs[names[5]] / (2 * MH + MO)
    let mo = inputs[names[0]] - mc - mh
    console.log(mc, mh, mo)

    let nc = mc / MC
    let nh = mh / MH
    let no = mo / MO

    let min_n = Math.min(nc, nh, no)
    console.log(nc, nh, no, min_n)

    nc = nc / min_n
    nh = nh / min_n
    no = no / min_n
    console.log(nc, nh, no)

    let html_results = document.getElementById("result")
    let html_verformel = document.getElementById("sum_preparation")
    let html_verformel_label = html_verformel.getElementsByTagName("label")[0]
    let html_sumprep_inputs = html_verformel.getElementsByTagName("input")
    if (isNaN(nc) || isNaN(nh) || isNaN(no)) {
        html_results.innerHTML = "Couldn't calculate the result."
    } else {
        counter = 1
        allow_offset = 0.4
        while ((Math.abs(nc-Math.round(nc)) > allow_offset || Math.abs(nh-Math.round(nh)) > allow_offset || Math.abs(no-Math.round(no)) > allow_offset) && counter < 100) {
            nc = nc * (counter+1)/counter
            nh = nh * (counter+1)/counter
            no = no * (counter+1)/counter
            counter += 1
            console.log(nc, nh, no)
        }
        nc = Math.round(nc)
        nh = Math.round(nh)
        no = Math.round(no)
        ver_formel = "C<sub>" + nc + "</sub>H<sub>" + nh + "</sub>O<sub>" + no + "</sub>"
        html_results.innerHTML = ver_formel


        html_verformel_label.innerHTML = ver_formel
        for (let element of html_sumprep_inputs) {
            element.readOnly = true
        }
    }

}

function sum_calculate() {
    let R = 8.3145

    let density = document.getElementById("sum_density").value
    let pressure = document.getElementById("sum_pressure").value
    let temperature = document.getElementById("sum_temperature").value
    console.log(density, pressure, temperature)

    let molar_e = R * density * temperature / pressure
    let ver_label = document.getElementById("sum_preparation").getElementsByTagName("label")[0]
    let stoffmengen_index = ver_label.innerText.match(/[A-Z][0-9]/g)
    let stoffmengen_dict = {}
    let molar_ver = 0
    for (let element of stoffmengen_index) {
        if (!(element[1] == 0)) {
            molar_ver += M_dict[element[0]] * element[1]
            stoffmengen_dict[element[0]] = Number(element[1])
        }
    }
    console.log(stoffmengen_dict)

    let koefficient = Math.round(molar_e / molar_ver)
    console.log(molar_e, molar_ver, koefficient)
    for (let element in stoffmengen_dict) {
        console.log(element)
        stoffmengen_dict[element] = stoffmengen_dict[element] * koefficient;

    }
    console.log(stoffmengen_dict)
}