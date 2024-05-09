/// try

try {
    XMLDocument.toString();
} catch (xato) {
    if (xato instanceof ReferenceError)
        alert(`${xato.name}: E'lon qilinmagan`);
    else alert(xato.message);
}
finally {
    console.log("Satrga o'girildi.");
}

/////////////////////////////////////////////////////

console.log("//////////////\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////

/// throw

let nuqson = new Error("nozik kamchilik yuz berdi");
nuqson.name = "qaltisNuqson";

try {
    throw(nuqson);
} catch(xato) {
    console.log(xato);
    //alert(xato.name);
}

/////////////////////////////////////////////////////

console.log("//////////////\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////

/// async - await

function biremas() {
    return new Promise((buyruq, bekor) => {
        const val = Math.round(Math.random());
        val ? buyruq('Buyruq bajarildi.')
            : bekor('Bekor qilindi!!!');
    });
}

async function bajar() {
    try {
        const b = await biremas();
        console.log(b);
    } catch (x) {
        console.log(x);
    }
}

bajar();
bajar();
bajar();

// setTimeout(alert, 1000, 22);
// console.log(11); 

let vada1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "Ilk va'da");
});

let vada2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "Keyingi va'da");
});

Promise.race([vada1, vada2]);

function vada(vaqt, qiymat) {
    return new Promise((bajar, bekor) => {
        if(qiymat > 1000) bekor();
        setTimeout(bajar, vaqt, qiymat);
    });
}

let v = vada(700, 1060);
v.catch(
    function(e) {
        console.log(e);
        return false;
    }
).then(
    function(e) {
        if (e) alert(e);
    }
);

/////////////////////////////////////////////////////

console.log("//////////////\\\\\\\\\\\\\\");

/////////////////////////////////////////////////////

/// console obyekti

let jadval = [
    {"Ism": "Ali", "So'z": "Olgan"},
    {"Ism": "Vali", "So'z": "qarzing"},
    {"Ism": "G'ani", "So'z": "qani"},
]

console.table(jadval, "Ism");