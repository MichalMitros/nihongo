const kanji = [
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
    {part: 3, kanji: "", on:[], kun: []},
];

const activeSets = [1, 2, 3, 4, 5];

module.exports.kanji = kanji;
module.exports.activeSets = activeSets;