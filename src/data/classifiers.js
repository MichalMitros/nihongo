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
        classifier: "ほん(本)",
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
    // Porcje napojow, miseczki zupy/ryzu
    {
        classifier: "はい",
        meaning: "Porcje napojów, miseczki zupy, ryżu",
        counters: [
            "*いっぱい",
            "にはい",
            "*さんぱい",
            "よんはい",
            "ごはい",
            "*ろっぱい",
            "ななはい",
            "*はっぱい",
            "きゅうはい",
            "*じゅっぱい",
            "*なんばい？",
        ]
    },
    // male zwierzeta
    {
        classifier: "ひき",
        meaning: "Małe zwierzęta",
        counters: [
            "*いっぴき",
            "にひき",
            "*さんびき",
            "よんひき",
            "ごひき",
            "*ろっぴき",
            "ななひき",
            "*はっぴき",
            "きゅうひき",
            "*じゅっぴき",
            "*なんびき？",
        ]
    },
    // ksiazki
    {
        classifier: "さつ",
        meaning: "Książki",
        counters: [
            "*いっさつ",
            "にさつ",
            "さんさつ",
            "よんさつ",
            "ごさつ",
            "ろくさつ",
            "ななさつ",
            "*はっさつ",
            "きゅうさつ",
            "*じゅっさつ",
            "なんさつ？",
        ]
    },
    // male przedmioty
    {
        classifier: "こ",
        meaning: "Małe przedmioty",
        counters: [
            "*いっこ",
            "にこ",
            "さんこ",
            "よんこ",
            "ごこ",
            "*ろっこ",
            "ななこ",
            "*はっこ",
            "きゅうこ",
            "*じゅっこ",
            "なんこ？",
        ]
    },
    // pietra
    {
        classifier: "かい",
        meaning: "Piętra",
        counters: [
            "*いっかい",
            "にかい",
            "*さんがい",
            "よんかい",
            "ごかい",
            "*ろっかい",
            "ななかい",
            "*はっかい",
            "きゅうかい",
            "*じゅっかい",
            "*なんがい？",
        ]
    },
    // razy
    {
        classifier: "かい",
        meaning: "Razy",
        counters: [
            "*いっかい",
            "にかい",
            "さんかい",
            "よんかい",
            "ごかい",
            "*ろっかい",
            "ななかい",
            "*はっかい",
            "きゅうかい",
            "*じゅっかい",
            "なんかい？",
        ]
    },
    // duze zwierzeta
    {
        classifier: "とう",
        meaning: "Duże zwierzęta",
        counters: [
            "*いっとう",
            "にとう",
            "さんとう",
            "よんとう",
            "ごとう",
            "ろくとう",
            "ななとう",
            "*はっとう",
            "きゅうとう",
            "*じゅっとう",
            "なんとう？",
        ]
    },
    // ludzie
    {
        classifier: "にん (人)",
        meaning: "Ludzie",
        counters: [
            "*ひとり",
            "*ふたり",
            "さんにん",
            "*よにん",
            "ごにん",
            "ろくにん",
            "ななにん",
            "はちにん",
            "きゅうにん",
            "じゅうにん",
            "なんにん？",
        ]
    },
    // pary
    {
        classifier: "そく (足)",
        meaning: "Pary, np. butów",
        counters: [
            "*brak odmiany",
        ]
    },
    // ogolne pojecia
    {
        classifier: "つ",
        meaning: "Ogólne pojęcia",
        counters: [
            "ひとつ",
            "ふたつ",
            "みっつ",
            "よっつ",
            "いつつ",
            "むっつ",
            "ななつ",
            "やっつ",
            "ここのつ",
            "とう",
            "いくつ？",
        ]
    },
];

module.exports.classifiers = classifiers;