function getAdmins(map) {
    let admins = [];
    for (let [key, value] of map) {

        if (value == "admin") {
            admins.push(key);
        }

    }

    return admins;

}

const users = new Map();

users.set("Luiz", "admin");
users.set("Stephany", "admin");
users.set("Ricardo", "user");
users.set("luisa", "user");
users.set("Bianca", "user");
users.set("Rafael", "admin");

console.log(getAdmins(users));