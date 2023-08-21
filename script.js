let M_dict = {
    "H": 1.01, "He": 4,
    "Li": 6.94, "Be": 9.01, "B": 10.81, "C": 12, "N": 14.01, "O": 16, "F": 19, "Ne": 20.18,
    "Na": 22.99, "Mg": 24.31, "Al": 26.98, "Si": 28.09, "P": 30.97, "S": 32.07, "Cl": 35.45, "Ar": 39.95,
    "K": 39.1, "Ca": 40.08, "Sc": 44.96, "Ti": 47.88, "V": 50.94, "Cr": 52, "Mn": 54.94, "Fe": 55.85, "Co": 58.93, "Ni": 58.69, "Cu": 63.55, "Zn": 65.39, "Ga": 69.72, "Ge": 72.61, "As": 74.92, "Se": 78.96, "Br": 79.9, "Kr": 83.8,
    "Rb": 85.47, "Sr": 87.62, "Y": 88.91, "Zr": 91.22, "Nb": 92.91, "Mo": 95.94, "Tc": 98, "Ru": 101.07, "Rh": 102.91, "Pd": 106.42, "Ag": 107.87, "Cd": 112.41, "In": 114.82, "Sn": 118.71, "Sb": 121.76, "Te": 127.6, "I": 126.9, "Xe": 131.29,
    "Cs": 132.91, "Ba": 137.33, "La": 138.91,
    "Ce": 140.12, "Pr": 140.91, "Nd": 144.24, "Pm": 145, "Sm": 150.36, "Eu": 151.97, "Gd": 157.25, "Tb": 158.93, "Dy": 162.5, "Ho": 164.93, "Er": 167.26, "Tm": 168.93, "Yb": 173.04, "Lu": 174.97,
    "Hf": 178.49, "Ta": 180.95, "W": 183.84, "Re": 186.21, "Os": 190.23, "Ir": 192.22, "Pt": 195.08, "Au": 196.97, "Hg": 200.59, "Tl": 204.38, "Pb": 207.2, "Bi": 208.98, "Po": 209, "At": 210, "Rn": 222,
    "Fr": 223, "Ra": 226, "Ac": 227,
    "Th": 232.04, "Pa": 231.04, "U": 238.03, "Np": 237, "Pu": 244, "Am": 243, "Cm": 247, "Bk": 247, "Cf": 251, "Es": 252, "Fm": 257, "Md": 258, "No": 259, "Lr": 262,
    "Rf": 261, "Db": 262, "Sg": 266, "Bh": 264, "Hs": 267, "Mt": 268, "Ds": 271, "Rg": 272, "Cn": 272,
    "R": 8.3145
}

let elem_names = {
    "Hydrogen": "H", "Helium": "He",
    "Lithium": "Li", "Beryllium": "Be", "Boron": "B", "Carbon": "C", "Nitrogen": "N", "Oxygen": "O", "Fluorine": "F", "Neon": "Ne",
    "Sodium": "Na", "Magnesium": "Mg", "Aluminium": "Al", "Silicon": "Si", "Phosphorus": "P", "Sulfur": "S", "Chlorine": "Cl", "Argon": "Ar",
    "Potassium": "K", "Calcium": "Ca", "Scandium": "Sc", "Titanium": "Ti", "Vanadium": "V", "Chromium": "Cr", "Manganese": "Mn", "Iron": "Fe", "Cobalt": "Co", "Nickel": "Ni", "Copper": "Cu", "Zinc": "Zn", "Gallium": "Ga", "Germanium": "Ge", "Arsenic": "As", "Selenium": "Se", "Bromine": "Br", "Krypton": "Kr",
    "Rubidium": "Rb", "Strontium": "Sr", "Yttrium": "Y", "Zirconium": "Zr", "Niobium": "Nb", "Molybdenum": "Mo", "Technetium": "Tc", "Ruthenium": "Ru", "Rhodium": "Rh", "Palladium": "Pd", "Silver": "Ag", "Cadmium": "Cd", "Indium": "In", "Tin": "Sn", "Antimony": "Sb", "Tellurium": "Te", "Iodine": "I", "Xenon": "Xe",
    "Caesium": "Cs", "Barium": "Ba", "Lanthanum": "La",
    "Cerium": "Ce", "Praseodymium": "Pr", "Neodymium": "Nd", "Promethium": "Pm", "Samarium": "Sm", "Europium": "Eu", "Gadolinium": "Gd", "Terbium": "Tb", "Dysprosium": "Dy", "Holmium": "Ho", "Erbium": "Er", "Thulium": "Tm", "Ytterbium": "Yb", "Lutetium": "Lu",
    "Hafnium": "Hf", "Tantalum": "Ta", "Tungsten": "W", "Rhenium": "Re", "Osmium": "Os", "Iridium": "Ir", "Platinum": "Pt", "Gold": "Au", "Mercury": "Hg", "Thallium": "Tl", "Lead": "Pb", "Bismuth": "Bi", "Polonium": "Po", "Astatine": "At", "Radon": "Rn",
    "Francium": "Fr", "Radium": "Ra", "Actinium": "Ac",
    "Thorium": "Th", "Protactinium": "Pa", "Uranium": "U", "Neptunium": "Np", "Plutonium": "Pu", "Americium": "Am", "Curium": "Cm", "Berkelium": "Bk", "Californium": "Cf", "Einsteinium": "Es", "Fermium": "Fm", "Mendelevium": "Md", "Nobelium": "No", "Lawrencium": "Lr",
    "Rutherforium": "Rf", "Dubnium": "Db", "Seaborgium": "Sg", "Bohrium": "Bh", "Hassium": "Hs", "Meitnerium": "Mt", "Darmstadtium": "Ds", "Roentgenium": "Rg", "Copernicium": "Cn"
}

let UNIT_dict = {

}

start()

function start() {
    let html_ver_field = document.getElementById("verhaltnisformel")
    let ver_inputs = gatherInputs(html_ver_field, "ver_")
    alternatingInputs([ver_inputs["mco2"]], [ver_inputs["vco2"], ver_inputs["pressure"], ver_inputs["temperature"]])

    let html_sum_section = document.getElementById("summenformel")
    let sum_inputs = gatherInputs(html_sum_section, "sum_")
    alternatingInputs([sum_inputs["density"]], [sum_inputs["mass"], sum_inputs["volume"]])

    setupInputs(document)
    setupPrepFormel()
}

function setupPrepFormel() {
    /*Old Version:
    //const trigger_event = document.createEvent("Event")
    //trigger_event.initEvent("input", true, true)
    currElement.dispatchEvent(trigger_event)*/

    const event_trigger = new Event("input")
    let html_prepformel = document.getElementById("prepformel")
    let html_prep_inputs = gatherInputs(html_prepformel, "prep_n")
    for (let key in html_prep_inputs) {
        currElement = html_prep_inputs[key]
        currElement.addEventListener("input", refreshPrepFormel)
        currElement.dispatchEvent(event_trigger)

    }

}

function refreshPrepFormel(event) {
    let html_prepformel = event.target.parentElement.parentElement
    let html_prep_inputs = gatherInputs(html_prepformel, "prep_n")
    let html_prep_label = html_prepformel.getElementsByTagName("label")[0]
    let str_prepformel = ""
    for (let key in html_prep_inputs) {
        n_value = html_prep_inputs[key].value
        if (n_value == "") n_value = "0"
        str_prepformel += key.toUpperCase() + "<sub>" + n_value + "</sub>"
    }

    html_prep_label.innerHTML = str_prepformel

}

function setupInputs(html_div) {
    html_inputs = html_div.getElementsByTagName("input")
    for (let index in html_inputs) {
        input = html_inputs[index]
        if (input.type == "text") input.addEventListener("input", checkInput)
    }
}
function checkInput(event) {
    if (!event.target.checkValidity()) event.target.value = event.target.value.slice(0, -1)
}

function alternatingInputs(first_input, second_input) {
    addEvents(first_input, "input", (event) => alternatingInputsLogic(event.target, second_input, first_input))
    alternatingInputsLogic(second_input[0], second_input, first_input)
    addEvents(second_input, "input", (event) => alternatingInputsLogic(event.target, first_input, second_input))
    alternatingInputsLogic(first_input[0], first_input, second_input)
}

function alternatingInputsLogic(triggered_elem, first_input, second_input) {
    if (!triggered_elem.checkValidity()) return
    currState = false
    for (elem in second_input) {
        if (second_input[elem].value != "") currState = true
    }
    setReadOnly(first_input, currState)

}


function addEvents(element_list, event_type, set_function) {
    for (let index in element_list) {
        element = element_list[index]
        element.addEventListener(event_type, set_function)
    }
}

function setReadOnly(element_list, value) {
    for (let index in element_list) {
        element_list[index].readOnly = value
    }
    if (value) element_list[0].parentElement.parentElement.classList.add("readOnly")
    else element_list[0].parentElement.parentElement.classList.remove("readOnly")
}

function gatherInputs(html_div, edit_str = "", replace_str = "") {
    let inputs_list = html_div.getElementsByTagName("input")
    let inputs_dict = {}
    let counter = 1
    for (let index in inputs_list) {
        if (isNaN(index)) continue
        var_name = inputs_list[index].id.replace(edit_str, replace_str)
        inputs_dict[var_name] = inputs_list[index]
    }
    return inputs_dict
}

function elemDatalist(id) {
    let html_string = "<datalist id=" + id + "_list" + ">"
    for (key in elem_names) {
        html_string += "<option value=" + key + "></option>"
    }
    html_string += "</datalist>"
    return html_string
}

function addElem(id_value, title, placeholder) {
    trigger_elem = document.getElementById(id_value)
    id_value = id_value.split("_")[0]
    id_value = id_value + "_addElem-inputs"
    wrapper = document.createElement("div")
    wrapper.classList.add("horizontal-div")
    uid = Date.now().toString().substring(3)
    wrapper.innerHTML = '<div class="wrap-input"> \
                            <label for="' + uid + '_name"' + ' class="input-label">Name</label> \
                            <br> \
                            <input id="' + uid + '_name"' + ' list="' + uid + '_list"' + ' type="text" pattern="[A-Za-z]+" value="" \
                            placeholder="Enter a element">'
        + elemDatalist(uid) +
        '</div> \
                        <div class="spacing"></div> \
                        <div class="wrap-input"> \
                            <label for="' + uid + '_amount"' + 'class="input-label">' + title + '</label> \
                            <br> \
                            <input id="' + uid + '_amount"' + 'type="text" pattern="[0-9]+([.][0-9]*)?" value="" \
                            placeholder="' + placeholder + '"> \
                        </div>'
    setupInputs(wrapper)
    container = document.getElementById(id_value)
    container.appendChild(wrapper)


}

function verCalculate() {

    let html_ver_field = document.getElementById("verhaltnisformel")
    let html_ver_inputs = gatherInputs(html_ver_field, "ver_")

    console.log("html_ver_inputs", html_ver_inputs)
    let mass_dict = {}

    calcMassC(mass_dict, html_ver_inputs)
    calcMassH(mass_dict, html_ver_inputs)

    console.log(mass_dict)

    InputstoDict(mass_dict, html_ver_inputs)
    connectKeyValue(mass_dict)

    console.log(mass_dict)

    calcNDict(mass_dict)

    console.log(mass_dict)

    removeEmptyEntrys(mass_dict)

    calcMassO(mass_dict, html_ver_inputs)

    min_n = getMinValue(mass_dict)

    for (let key in mass_dict) {
        mass_dict[key] /= min_n
    }
    console.log("mass_dict_normed", mass_dict)

    mass_dict = roundVerFormula(mass_dict, 0.4, 100)

    let html_ver_results = document.getElementById("ver_result")
    html_ver_results.innerHTML = convertToFormula(mass_dict)
}

function getMinValue(dict) {
    var values = Object.keys(dict).map(function (key) {
        return dict[key]
    })
    let min_value = Math.min(...values)
    return min_value
}

function calcNDict(mass_dict) {
    for (let key in mass_dict) {
        if (Object.keys(M_dict).includes(key)) mass_dict[key] /= M_dict[key]
        else if (Object.keys(elem_names).includes(key)) {
            mass_dict[elem_names[key]] = mass_dict[key] / M_dict[elem_names[key]]
            delete mass_dict[key]
        }
        else mass_dict[key] = 0
    }
}

function removeEmptyEntrys(dict) {
    for (let key in dict) {
        if (dict[key] == 0) delete dict[key]
    }
}

function calcMassO(n_dict, inputs) {
    delete n_dict["me"]
    if ((!Object.keys(n_dict).includes("O")) && inputs["me"].value != 0) {
        me = inputs["me"].value
        for (let key in n_dict) {
            me -= n_dict[key] * M_dict[key]
        }
        if (me < 0) me = 0
        n_dict["O"] = me / M_dict["O"]
    }
}

function connectKeyValue(dict) {
    for (let key in dict) {
        let shortkey = key.split("_")[0]
        if (isNaN(shortkey)) continue
        new_key = dict[shortkey.toString() + "_name"]
        dict[new_key] = dict[shortkey.toString() + "_amount"]
        delete dict[shortkey.toString() + "_name"]
        delete dict[shortkey.toString() + "_amount"]
    }
}

function InputstoDict(mass_dict, inputs) {
    for (let key in inputs) {
        currValue = inputs[key].value
        if (!isNaN(currValue)) mass_dict[key] = Number(currValue)
        else {
            mass_dict[key] = currValue
        }
    }
}

function calcMassC(mass_dict, inputs) {
    if (inputs["mco2"].value != 0) {
        mass_dict["C"] = Number(inputs["mco2"].value)
    } else {
        mass_dict["C"] = Number(inputs["vco2"].value) * Number(inputs["pressure"].value) * M_dict["C"] / (Number(inputs["temperature"].value) * M_dict["R"])
    }
    delete inputs["mco2"]
    delete inputs["vco2"]
    delete inputs["pressure"]
    delete inputs["temperature"]
}

function calcMassH(mass_dict, inputs) {
    mass_dict["H"] = 2 * M_dict["H"] * Number(inputs["mh2o"].value) / (2 * M_dict["H"] + M_dict["O"])
    delete inputs["mh2o"]
}

function roundVerFormula(n_dict, allow_offset, maxCount) {
    counter = 1
    condition = false
    for (let key in n_dict) {
        n_value = n_dict[key]
        condition = Math.abs(n_value - Math.round(n_value)) > allow_offset || condition
    }
    while (condition && counter < maxCount) {
        condition = false
        for (let key in n_dict) {
            n_dict[key] *= (counter + 1) / counter
            n_value = mass_dict[key]
            condition = Math.abs(n_value - Math.round(n_value)) > allow_offset || condition

        }
        counter += 1
    }

    return roundSumFormula(n_dict)
}

function roundSumFormula(n_dict) {
    for (let key in n_dict) {
        n_dict[key] = Math.round(n_dict[key])
    }
    return n_dict
}

function convertToFormula(n_dict) {
    formula = ""
    for (let key in n_dict) {
        formula += key + "<sub>" + n_dict[key] + "</sub>"
    }
    return formula
}

function transferVerFormel() {
    let html_ver_results = document.getElementById("ver_result")
    let html_sum_verformel = document.getElementById("prepformel")
    let html_sum_prep_inputs = gatherInputs(html_sum_verformel, "prep_n")

    let stoffmengen_list = html_ver_results.innerText.match(/[A-Z][0-9]/g)
    let stoffmengen_dict = {}
    let molar_ver = 0
    for (let element of stoffmengen_list) {
        if (!(element[1] == 0)) {
            molar_ver += M_dict[element[0]] * element[1]
            stoffmengen_dict[element[0]] = Number(element[1])
        }
    }

    for (let key in stoffmengen_dict) {
        const event_trigger = new Event("input")
        currElement = html_sum_prep_inputs[key.toLowerCase()]
        currElement.value = stoffmengen_dict[key]
        currElement.dispatchEvent(event_trigger)
    }

}

function calcMolarMass(inputs) {
    if (inputs["density"].value != 0) density = inputs["density"].value
    else density = inputs["mass"].value / inputs["volume"].value
    let molar_e = M_dict["R"] * density * inputs["temperature"].value / inputs["pressure"].value
    return molar_e
}

function prepMolarMass(list_formula) {
    let n_dict = {}
    let molar_mass = 0
    for (let element of list_formula) {
        molar_mass += M_dict[element[0]] * element[1]
        n_dict[element[0]] = Number(element[1])
    }
    return [molar_mass, n_dict] 
}

function sumCalculate() {
    let html_sum_section = document.getElementById("summenformel_calc")
    let html_sum_inputs = gatherInputs(html_sum_section, "sum_")

    molar_e = calcMolarMass(html_sum_inputs)

    let prep_label = document.getElementById("prepformel").getElementsByTagName("label")[0]
    let prep_n_list = prep_label.innerText.match(/[A-Z][0-9]/g)
    let [molar_prep, prep_n_dict] = prepMolarMass(prep_n_list)
    removeEmptyEntrys(prep_n_dict)

    let koefficent = Math.round(molar_e / molar_prep)
    for (let key in prep_n_dict) prep_n_dict[key] *= koefficent
    sum_formel = convertToFormula(prep_n_dict)
    let html_sum_results = document.getElementById("sum_result")
    html_sum_results.innerHTML = sum_formel


}