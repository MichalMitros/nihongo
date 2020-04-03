/*
    Kanji element's template:
    {
        part: number, (optional)
        kanji: string,
        on: Array<string>,
        kun: Array<string>
    }
    
    Kanji compound element's template:
    {
        part: number, (optional)
        kanji: string,
        kana: string,
        value: string (translation)
    }
*/

const kanji = [
    [
        {part: 1, kanji: "人", on: ["ジン", "ニン klasyfikator osób"], kun: ["ひと człowiek"]},
        {part: 1, kanji: "本", on: ["ホン książka, kl. długich przedmiotów"], kun: ["もと podstawa"]},
        {part: 1, kanji: "日", on: ["ニ", "ニチ", "ジツ"], kun: ["ひ dzień"]},
        {part: 1, kanji: "月", on: ["ゲツ", "ガツ"], kun: ["つき księżyc, miesiąc"]},
        {part: 1, kanji: "火", on: ["カ"], kun: ["ひ ogień"]},
        {part: 1, kanji: "水", on: ["スイ"], kun: ["みず woda"]},
        {part: 1, kanji: "木", on:["テク"], kun: ["き drzewo, drewno"]},
        {part: 1, kanji: "金", on:["キン"], kun: ["かね pieniądze"]},
        {part: 1, kanji: "土", on:["ド"], kun: ["つち ziemia"]},
        {part: 1, kanji: "山", on:["サン"], kun: ["やま góra"]},
        {part: 1, kanji: "川", on:["＊セン"], kun: ["かわ rzeka"]},
        {part: 1, kanji: "田", on:["＊デン"], kun: ["た pole ryżowe"]},
    ],
    [
        {part: 2, kanji: "一", on:["イチ jeden"], kun: ["ひと・つ jeden"]},
        {part: 2, kanji: "二", on:["ニ dwa"], kun: ["ふた・つ dwa"]},
        {part: 2, kanji: "三", on:["サン trzy"], kun: ["みっ・つ trzy"]},
        {part: 2, kanji: "四", on:["シ cztery"], kun: ["よん cztery", "よっ・つ cztery"]},
        {part: 2, kanji: "五", on:["ゴ pięć"], kun: ["いっ・つ pięć"]},
        {part: 2, kanji: "六", on:["ロク sześć"], kun: ["むっ・つ sześć"]},
        {part: 2, kanji: "七", on:["シチ siedem"], kun: ["なな siedem", "なな・つ siedem"]},
        {part: 2, kanji: "八", on:["ハチ osiem"], kun: ["よっ・つ osiem"]},
        {part: 2, kanji: "九", on:["ク dziewięć", "キュウ"], kun: ["ここの・つ dziewięć"]},
        {part: 2, kanji: "十", on:["ジュウ dziesięć"], kun: ["とお dziesięć"]},
    ],
    [
        {part: 3, kanji: "百", on:["ヒャク sto"], kun: []},
        {part: 3, kanji: "千", on:["セン tysiąc"], kun: []},
        {part: 3, kanji: "万", on:["マン dziesięć tys.", "*バン"], kun: []},
        {part: 3, kanji: "円", on:["エン jen"], kun: ["まる・い okrągły"]},
        {part: 3, kanji: "年", on:["ネン rok"], kun: ["とし rok, wiek"]},
        {part: 3, kanji: "時", on:["ジ godzina"], kun: ["とき czas"]},
        {part: 3, kanji: "分", on:["フン minuta", "ブン część"], kun: ["わ・かる rozumieć"]},
        {part: 3, kanji: "半", on:["ハン"], kun: ["なか・ば połowa"]},
        {part: 3, kanji: "週", on:["シュウ tydzień"], kun: []},
        {part: 3, kanji: "間", on:["カン", "ゲン"], kun: ["あいだ pomiędzy"]},
    ],
    [
        {part: 4, kanji: "上", on:["ジュウ"], kun: ["うえ wierzch, góra", "あ・がる podnosić się, wchodzić", "あ・げる podnosić", "のぼ・る wchodzić (np. po schodach)"]},
        {part: 4, kanji: "下", on:["*カ", "*ゲ"], kun: ["した dół, spód", "さ・がる obniżać się", "さ・げる obniżać, opuszczać", "お・りる schodzić"]},
        {part: 4, kanji: "中", on:["チュウ", "ジュウ"], kun: ["なか środek, wnętrze"]},
        {part: 4, kanji: "外", on:["ガイ"], kun: ["そと na zewnątrz"]},
        {part: 4, kanji: "前", on:["ゼン"], kun: ["まえ przód, przed"]},
        {part: 4, kanji: "後", on:["ゴ", "コウ"], kun: ["あと po", "うし・ろ tył, z tyłu"]},
        {part: 4, kanji: "右", on:["*ユウ", "*ウ"], kun: ["みぎ prawo"]},
        {part: 4, kanji: "左", on:["*サ"], kun: ["ひだり lewo"]},
        {part: 4, kanji: "東", on:["トウ"], kun: ["ひがし wschód"]},
        {part: 4, kanji: "西", on:["*セイ", "*サイ"], kun: ["にし zachód"]},
        {part: 4, kanji: "北", on:["*ホク、ボク"], kun: ["きた północ"]},
        {part: 4, kanji: "南", on:["ナン"], kun: ["みなみ południe"]},
        {part: 4, kanji: "午", on:["ゴ"], kun: ["(południe)"]},
    ],
    [
        {part: 5, kanji: "口", on:["コウ"], kun: ["くち usta"]},
        {part: 5, kanji: "目", on:["*モク"], kun: ["め oko"]},
        {part: 5, kanji: "耳", on:["*ジ"], kun: ["みみ ucho"]},
        {part: 5, kanji: "手", on:["*ジュ"], kun: ["て ręka"]},
        {part: 5, kanji: "足", on:["ソク klasyfikator par (np. butów)"], kun: ["あし noga", "た・りる wystarczać", "た・す dodawać"]},
        {part: 5, kanji: "女", on:["ジョ"], kun: ["おんな kobieta"]},
        {part: 5, kanji: "男", on:["ダン", "*ナン"], kun: ["おとこ mężczyzna"]},
        {part: 5, kanji: "子", on:["*シ"], kun: ["こ dziecko"]},
        {part: 5, kanji: "力", on:["リョク", "*リキ"], kun: ["ちから siła"]},
        {part: 5, kanji: "今", on:["コン"], kun: ["いま teraz"]},
    ],
    [
        {part: 6, kanji: "父", on:["*フ"], kun: ["ちち tata"]},
        {part: 6, kanji: "母", on:["*ボ"], kun: ["はは mama"]},
        {part: 6, kanji: "兄", on:["キョウ"], kun: ["あに starszy brat"]},
        {part: 6, kanji: "弟", on:["ダイ、*デ"], kun: ["おとうと młodszy brat"]},
        {part: 6, kanji: "先", on:["セン"], kun: ["さき przód, przed, wcześniej"]},
        {part: 6, kanji: "生", on:["セイ", "ショウ"], kun: ["い・きる żyć", "う・まれる urodzić się"]},
        {part: 6, kanji: "学", on:["ガク"], kun: ["まな・ぶ uczyć się"]},
        {part: 6, kanji: "校", on:["コウ"], kun: ["(szkoła)"]},
        {part: 6, kanji: "友", on:["ユウ"], kun: ["とも przyjaciel"]},
        {part: 6, kanji: "名", on:["*メイ"], kun: ["な imię"]},
    ]
];

const activeSets = [1, 2, 3, 4, 5];

const compounds = [
    // Kanji 1
    [],
    // Kanji 2
    [],
    // Kanji 3
    [],
    // Kanji 4
    [],
    // Kanji 5
    [
        {part: 5, kanji: "東口", kana: "ひがしぐち", value: "Wschodnie wyjście"},
        {part: 5, kanji: "西口", kana: "にしぐち", value: "Zachodnie wyjście"},
        {part: 5, kanji: "北口", kana: "きたぐち", value: "Północne wyjście"},
        {part: 5, kanji: "南口", kana: "みなみぐち", value: "Południowe wyjście"},
        {part: 5, kanji: "人口", kana: "じんこう", value: "Ludność, populacja"},
        {part: 5, kanji: "一人目", kana: "ひたりめ", value: "Pierwszy (o osobie)"},
        {part: 5, kanji: "一つ目", kana: "ひたつめ", value: "Pierwszy"},
        {part: 5, kanji: "上手な", kana: "じょうずな", value: "Dobry w czymś"},
        {part: 5, kanji: "下手な", kana: "へたな", value: "Słaby w czymś"},
        {part: 5, kanji: "一足", kana: "いっそく", value: "Jedna para (np. butów)"},
        {part: 5, kanji: "二足", kana: "にそく", value: "Dwie pary (np. butów)"},
        {part: 5, kanji: "三足", kana: "さんぞく", value: "Trzy pary (np. butów)"},
        {part: 5, kanji: "女の人", kana: "おんなのひと", value: "Kobieta"},
        {part: 5, kanji: "女の子", kana: "おんなのに", value: "Dziewczynka"},
        {part: 5, kanji: "女子", kana: "じょし", value: "Kobieta, dziewczyna"},
        {part: 5, kanji: "男の人", kana: "おとこのひと", value: "Mężczyzna"},
        {part: 5, kanji: "男の子", kana: "おとこのに", value: "Chłopiec"},
        {part: 5, kanji: "男子", kana: "だんし", value: "Mężczyzna, chłopiec"},
        {part: 5, kanji: "男女", kana: "だんじょ", value: "Mężczyźni i kobiety"},
        {part: 5, kanji: "子供、子ども", kana: "こども", value: "Dziecko"},
        {part: 5, kanji: "今日", kana: "きょう", value: "Dzisiaj"},
        {part: 5, kanji: "今週", kana: "こんしゅう", value: "W tym tygodniu"},
        {part: 5, kanji: "今月", kana: "こんげつ", value: "W tym miesiącu"},
        {part: 5, kanji: "今年", kana: "ことし", value: "W tym roku"},
    ],
    // Kanji 6
    [
        {part: 6, kanji: "お父さん", kana: "おとうさん", value: "Tata"},
        {part: 6, kanji: "お母さん", kana: "おかあさん", value: "Mama"},
        {part: 6, kanji: "お兄さん", kana: "おにいさん", value: "Starszy brat"},
        {part: 6, kanji: "弟さん", kana: "おとうとさん", value: "Młodszy brat"},
        {part: 6, kanji: "兄弟", kana: "きょうだい", value: "Rodzeństwo, bracia"},
        {part: 6, kanji: "先生", kana: "せんせい", value: "Nauczyciel"},
        {part: 6, kanji: "先週", kana: "せんしゅう", value: "Zeszły tydzień"},
        {part: 6, kanji: "先月", kana: "せんげつ", value: "Zeszły miesiąc"},
        {part: 6, kanji: "学生", kana: "がくせい", value: "Student"},
        {part: 6, kanji: "中学生", kana: "ちゅうがくせい", value: "Gimnazjalista"},
        {part: 6, kanji: "一年生", kana: "いちねんせい", value: "Student pierwszego roku"},
        {part: 6, kanji: "一生", kana: "いっしょう", value: "Całe życie"},
        {part: 6, kanji: "人生", kana: "じんせい", value: "Życie"},
        {part: 6, kanji: "学校", kana: "がっこう", value: "SZkoła"},
        {part: 6, kanji: "中学校", kana: "ちゅうがっこう", value: "Gimnazjum"},
        {part: 6, kanji: "友達、友だち", kana: "ともだち", value: "Kolega, koleżanka"},
        {part: 6, kanji: "友人", kana: "ゆうじん", value: "Przyjaciel, przyjaciółka"},
        {part: 6, kanji: "名前", kana: "なまえ", value: "Imię"},
    ]
];

module.exports.kanji = kanji;
module.exports.compounds = compounds;
module.exports.activeSets = activeSets;
