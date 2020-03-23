const classifiers = [
    // przedmioty plaskie
    {
        classifier: "まい",
        meaning: "Przedmioty płaskie",
        counters: [
            "いちまい",
            "にまい",
            "さんまい",
            "よんまい",
            "ごまい",
            "ろくまい",
            "ななまい",
            "はちまい",
            "きゅうまい",
            "じゅうまい",
            "なんまい？",
        ]
    },
    // maszyny/urzadzenia/duze meble
    {
        classifier: "だい",
        meaning: "Maszyny, urządzenia, duże meble",
        counters: [
            "いちだい",
            "にだい",
            "さんだい",
            "よんだい",
            "ごだい",
            "ろくだい",
            "ななだい",
            "はちだい",
            "きゅうだい",
            "じゅうだい",
            "なんまい？",
        ]
    },
    // podluzne/dlugie i cienkie
    {
        classifier: "ほん",
        meaning: "Przedmioty podłużne, długie i cienkie",
        counters: [
            "*いっぽん",
            "にほん",
            "*さんぼん",
            "よんほん",
            "ごほん",
            "*ろっぽん",
            "ななほん",
            "*はっぽん",
            "きゅうほん",
            "*じゅっぽん",
            "*なんぼん？",
        ]
    },
];

module.exports.classifiers = classifiers;