const express = require("express")
const app = express()
const PORT = 8000

const threads = {
    "3713":{
        "Floss name": "Salmon Very Light",
        "Hex Code": "#FFE2E2",
        "RGB Value": "(255, 226, 226)"
    },
    "761":{
        "Floss name": "Salmon Light",
        "Hex Code": "#FFC9C9",
        "RGB Value": "(255, 201, 201)"
    },
    "760": {
        "Floss name": "Salmon",
        "Hex Code": "#F5ADAD",
        "RGB Value": "(245, 173, 173)"
    },
    "3712": {
        "Floss name": "Salmon Medium",
        "Hex Code": "#F18787",
        "RGB Value": "(241, 135, 135)"
    },
    "3328": {
        "Floss name": "Salmon Dark",
        "Hex Code": "#E36D6D",
        "RGB Value": "(227, 109, 109)"
    },
    "347": {
        "Floss name": "Salmon Very Dark",
        "Hex Code": "#BF2D2D",
        "RGB Value": "(191, 45, 45)"
    },
    "353": {
        "Floss name": "Peach",
        "Hex Code": "#FED7CC",
        "RGB Value": "(254, 215, 204)"
    },
    "352": {
        "Floss name": "Coral Light",
        "Hex Code": "#FD9C97",
        "RGB Value": "(253, 156, 151)"
    },
    "351": {
        "Floss name": "Coral",
        "Hex Code": "#E96A67",
        "RGB Value": "(233, 106, 103)"
    },
    "350": {
        "Floss name": "Coral Medium",
        "Hex Code": "#E04848",
        "RGB Value": "(224, 72, 72)"
    },
    "349": {
        "Floss name": "Coral Dark",
        "Hex Code": "#D21035",
        "RGB Value": "(210, 16, 53)"
    },
    "817": {
        "Floss name": "Coral Red Very Dark",
        "Hex Code": "#BB051F",
        "RGB Value": "(187, 5, 31)"
    },
    "3708": {
        "Floss name": "Melon Light",
        "Hex Code": "#FFCBD5",
        "RGB Value": "(255, 203, 213)"
    },
    "3706": {
        "Floss name": "Melon Medium",
        "Hex Code": "#FFADBC",
        "RGB Value": "(255, 173, 188)"
    },
    "3705": {
        "Floss name": "Melon Dark",
        "Hex Code": "#FF7992",
        "RGB Value": "(255, 121, 146)"
    },
    "3801": {
        "Floss name": "Melon Very Dark",
        "Hex Code": "#E74967",
        "RGB Value": "(231, 73, 103)"
    },
    "666": {
        "Floss name": "Bright Red",
        "Hex Code": "#E31D42",
        "RGB Value": "(227, 29, 66)"
    },
    "321": {
        "Floss name": "Red",
        "Hex Code": "#C72B3B",
        "RGB Value": "(199, 43, 59)"
    },
    "304": {
        "Floss name": "Red Medium",
        "Hex Code": "#B71F33",
        "RGB Value": "(183, 31, 51)"
    },
    "498": {
        "Floss name": "Red Dark",
        "Hex Code": "#A7132B",
        "RGB Value": "(167, 19, 43)"
    },
    "816": {
        "Floss name": "Garnet",
        "Hex Code": "#970B23",
        "RGB Value": "(151, 11, 35)"
    },
    "815": {
        "Floss name": "Garnet Medium",
        "Hex Code": "#87071F",
        "RGB Value": "(135, 7, 31)"
    },
    "814": {
        "Floss name": "Garnet Dark",
        "Hex Code": "#7B001B",
        "RGB Value": "(123, 0, 27)"
    },
    "894": {
        "Floss name": "Carnation Very Light",
        "Hex Code": "#FFB2BB",
        "RGB Value": "(255, 178, 187)"
    },
    "893": {
        "Floss name": "Carnation Light",
        "Hex Code": "#FC90A2",
        "RGB Value": "(252, 144, 162)"
    },
    "892": {
        "Floss name": "Carnation Medium",
        "Hex Code": "##FF798C",
        "RGB Value": "(255, 121, 140)"
    },
    "891": {
        "Floss name": "Carnation Dark",
        "Hex Code": "#FF5773",
        "RGB Value": "(255, 87, 115)"
    },
    "818": {
        "Floss name": "Baby Pink",
        "Hex Code": "#FFDFD9",
        "RGB Value": "(255, 223, 217)"
    },
    "957": {
        "Floss name": "Geranium Pale",
        "Hex Code": "#FDB5B5",
        "RGB Value": "(253, 181, 181)"
    },
    "956": {
        "Floss name": "Geranium",
        "Hex Code": "#FF9191",
        "RGB Value": "(255, 145, 145)"
    },
    "309": {
        "Floss name": "Rose Dark",
        "Hex Code": "#BA4A4A",
        "RGB Value": "(86, 74, 74)"
    },
    "963": {
        "Floss name": "Dusty Rose Ultra Very Light",
        "Hex Code": "#FFD7D7",
        "RGB Value": "(255, 215, 215)"
    },
    "3716": {
        "Floss name": "Dusty Rose Medium Very Light",
        "Hex Code": "#FFBDBD",
        "RGB Value": "(255, 189, 189)"
    },
    "962": {
        "Floss name": "Dusty Rose Medium",
        "Hex Code": "#E68A8A",
        "RGB Value": "(230, 138, 138)"
    },
    "961": {
        "Floss name": "Dusty Rose Dark",
        "Hex Code": "#CF7373",
        "RGB Value": "(207, 115, 115)"
    },
    "3833": {
        "Floss name": "Raspberry Light",
        "Hex Code": "#EA8699",
        "RGB Value": "(234, 134, 153)"
    },
    "3832": {
        "Floss name": "Raspberry Medium",
        "Hex Code": "#DB556E",
        "RGB Value": "(219, 85, 110)"
    },
    "3831": {
        "Floss name": "Raspberry Dark",
        "Hex Code": "#B32F48",
        "RGB Value": "(179, 47, 72)"
    },
    "777": {
        "Floss name": "Raspberry Very Dark",
        "Hex Code": "#913546",
        "RGB Value": "(145, 53, 70)"
    },
    "819": {
        "Floss name": "Baby Pink Light",
        "Hex Code": "#FFEEEB",
        "RGB Value": "(255, 238, 235)"
    },
    "3326": {
        "Floss name": "Rose Light",
        "Hex Code": "#FBADB4",
        "RGB Value": "(251, 173, 180)"
    },
    "776": {
        "Floss name": "Pink Medium",
        "Hex Code": "#FCB0B9",
        "RGB Value": "(252, 176, 185)"
    },
    "899": {
        "Floss name": "Rose Medium",
        "Hex Code": "#F27688",
        "RGB Value": "(242, 118, 136)"
    },
    "335": {
        "Floss name": "Rose",
        "Hex Code": "#EE546E",
        "RGB Value": "(238, 84, 110)"
    },
    "326": {
        "Floss name": "Rose Very Dark",
        "Hex Code": "#B33B4B",
        "RGB Value": "(179, 59, 75)"
    },
    "151": {
        "Floss name": "Dusty Rose Very Light",
        "Hex Code": "#F0CED4",
        "RGB Value": "(240, 206, 212)"
    },
    "3354": {
        "Floss name": "Dusty Rose Light",
        "Hex Code": "#E4A6AC",
        "RGB Value": "(228, 166, 172)"
    },
    "3733": {
        "Floss name": "Dusty Rose",
        "Hex Code": "#E8879B",
        "RGB Value": "(232, 135, 155)"
    },
    "3731": {
        "Floss name": "Dusty Rose Very Dark",
        "Hex Code": "#DA6783",
        "RGB Value": "(218, 103, 131)"
    },
    "3350": {
        "Floss name": "Dusty Rose Ultra Dark",
        "Hex Code": "#BC4365",
        "RGB Value": "(188, 67, 101)"
    },
    "150": {
        "Floss name": "Dusty Rose Ultra Very Dark",
        "Hex Code": "#AB0249",
        "RGB Value": "(171, 2, 73)"
    },
    "3689": {
        "Floss name": "Mauve Light",
        "Hex Code": "#FBBFC2",
        "RGB Value": "(251, 191, 194)"
    },
    "3688": {
        "Floss name": "Mauve Medium",
        "Hex Code": "#E7A9AC",
        "RGB Value": "(231, 169, 172)"
    },
    "3687": {
        "Floss name": "Mauve",
        "Hex Code": "#C96B70",
        "RGB Value": "(201, 107, 112)"
    },
    "3803": {
        "Floss name": "Mauve Dark",
        "Hex Code": "#AB3357",
        "RGB Value": "(171, 51, 87)"
    },
    "3685": {
        "Floss name": "Mauve Very Dark",
        "Hex Code": "#881531",
        "RGB Value": "(136, 21, 49)"
    },
    "605": {
        "Floss name": "Cranberry Very Light",
        "Hex Code": "#FFC0CD",
        "RGB Value": "(255, 192, 205)"
    },
    "604": {
        "Floss name": "Cranberry Light",
        "Hex Code": "#FFB0BE",
        "RGB Value": "(255, 176, 190)"
    },
    "603": {
        "Floss name": "Cranberry",
        "Hex Code": "#FFA4BE",
        "RGB Value": "(255, 164, 190)"
    },
    "602": {
        "Floss name": "Cranberry Medium",
        "Hex Code": "#E24874",
        "RGB Value": "(226, 72, 116)"
    },
    "601": {
        "Floss name": "Cranberry Dark",
        "Hex Code": "#D1286A",
        "RGB Value": "(209, 40, 106)"
    },
    "600": {
        "Floss name": "Cranberry Very Dark",
        "Hex Code": "#CD2F63",
        "RGB Value": "(205, 47, 99)"
    },
    "3806": {
        "Floss name": "Cyclamen Pink Light",
        "Hex Code": "#FF8CAE",
        "RGB Value": "(25, 140, 174)"
    },
    "3805": {
        "Floss name": "Cyclamen Pink",
        "Hex Code": "#F3478B",
        "RGB Value": "(243, 71, 139)"
    },
    "3804": {
        "Floss name": "Cyclamen Pink Dark",
        "Hex Code": "#E02876",
        "RGB Value": "(224, 40, 118)"
    },
    "3609": {
        "Floss name": "Plum Ultra Light",
        "Hex Code": "#F4AED7",
        "RGB Value": "(244, 174, 213)"
    },
    "3608": {
        "Floss name": "Plum Very Light",
        "Hex Code": "#EA9CC4",
        "RGB Value": "(234, 156, 196)"
    },
    "3607": {
        "Floss name": "Plum Light",
        "Hex Code": "#C54989",
        "RGB Value": "(197, 73, 137)"
    },
    "718": {
        "Floss name": "Plum",
        "Hex Code": "#9C2462",
        "RGB Value": "(156, 36, 98)"
    },
    "917": {
        "Floss name": "Plum Medium",
        "Hex Code": "#9B1359",
        "RGB Value": "(155, 19, 89)"
    },
    "915": {
        "Floss name": "Plum Dark",
        "Hex Code": "#820043",
        "RGB Value": "(130, 0, 67)"
    },
    "225": {
        "Floss name": "Shell Pink Ultra Very Light",
        "Hex Code": "#FFDFD7",
        "RGB Value": "(255, 223, 213)"
    },
    "224": {
        "Floss name": "Shell Pink Very Light",
        "Hex Code": "#EBB7AF",
        "RGB Value": "(235, 183, 175)"
    },
    "152": {
        "Floss name": "Shell Pink Medium Light",
        "Hex Code": "#E2A099",
        "RGB Value": "(226, 160, 153)"
    },
    "223": {
        "Floss name": "Shell Pink Light",
        "Hex Code": "#CC847C",
        "RGB Value": "(204, 132, 124)"
    },
    "3722": {
        "Floss name": "Shell Pink Medium",
        "Hex Code": "#BC6C64",
        "RGB Value": "(188, 108, 100)"
    },
    "3721": {
        "Floss name": "Shell Pink Dark",
        "Hex Code": "#A14B51",
        "RGB Value": "(161, 75, 81)"
    },
    "221": {
        "Floss name": "Shell Pink Very Dark",
        "Hex Code": "#883E43",
        "RGB Value": "(136, 62, 67)"
    },
    "778": {
        "Floss name": "Antique Mauve Very Light",
        "Hex Code": "#DFB3BB",
        "RGB Value": "(223, 179, 187)"
    },
    "3727": {
        "Floss name": "Antique Mauve Light",
        "Hex Code": "#DBA9B2",
        "RGB Value": "(219, 169, 178)"
    },
    "316": {
        "Floss name": "Antique Mauve Medium",
        "Hex Code": "#B7737F",
        "RGB Value": "(183, 115, 127)"
    },
    "3726": {
        "Floss name":"Antique Mauve Dark",
        "Hex Code": "#9B5B66",
        "RGB Value": "(155, 91, 102)"
    },
    "315": {
        "Floss name": "Antique Mauve Medium Dark",
        "Hex Code": "#814952",
        "RGB Value": "(129, 73, 82)"
    },
    "3802": {
        "Floss name": "Antique Mauve Very Dark",
        "Hex Code": "#714149",
        "RGB Value": "(113, 65, 73)"
    },
    "902": {
        "Floss name": "Garnet Very Dark",
        "Hex Code": "#822637",
        "RGB Value": "(130, 38, 55)"
    },
    "3743": {
        "Floss name": "Antique Violet Very Light",
        "Hex Code": "#D7CBD3",
        "RGB Value": "(215, 203, 211)"
    },
    "3042": {
        "Floss name": "Antique Violet Light",
        "Hex Code": "#B79DA7",
        "RGB Value": "(183, 157, 167)"
    },
    "3041": {
        "Floss name": "Antique Violet Medium",
        "Hex Code": "#956F7C",
        "RGB Value": "(149, 111, 124)"
    },
    "3740": {
        "Floss name": "Antique Violet Dark",
        "Hex Code": "#785762",
        "RGB Value": "(120, 87, 98)"
    },
    "3836": {
        "Floss name": "Grape Light",
        "Hex Code": "#BA91AA",
        "RGB Value": "(186, 145, 170)"
    },
    "3835": {
        "Floss name": "Grape Medium",
        "Hex Code": "#946083",
        "RGB Value": "(148, 96, 131)"
    },
    "3834": {
        "Floss name": "Grape Dark",
        "Hex Code": "#72375D",
        "RGB Value": "(114, 55, 93)"
    },
    "154": {
        "Floss name": "Grape Very Dark",
        "Hex Code": "#572433",
        "RGB Value": "(87, 36, 51)"
    },
    "211": {
        "Floss name": "Lavender Light",
        "Hex Code": "#E3CBE3",
        "RGB Value": "(227, 203, 227)"
    },
    "210": {
        "Floss name": "Lavender Medium",
        "Hex Code": "#D29FC3",
        "RGB Value": "(195, 159, 195)"
    },		
    "209": {
        "Floss name": "Lavender Dark",
        "Hex Code": "#A37BA7",
        "RGB Value": "(163, 123, 167)"
    },
    "208": {
        "Floss name": "Lavender Very Dark",
        "Hex Code": "#835B8B",
        "RGB Value": "(131, 91, 139)"
    },
    "3837": {
        "Floss name": "Lavender Ultra Dark",
        "Hex Code": "#6C3A6E",
        "RGB Value": "(108, 58, 110)"
    },	
    "327": {
        "Floss name": "Violet Dark",
        "Hex Code": "#633666",
        "RGB Value": "(99, 54, 102)"
    },
    "153": {
        "Floss name": "Violet Very Light",
        "Hex Code": "#E6CCD9",
        "RGB Value": "(230, 204, 217)"
    },
    "554": {
        "Floss name": "Violet Light",
        "Hex Code": "#DBB3CB",
        "RGB Value": "(219, 179, 203)"
    },	
    "553": {
        "Floss name": "Violet",
        "Hex Code": "#A3638B",
        "RGB Value": "(163, 99, 139)"
    },
    "552": {
        "Floss name": "Violet Medium",
        "Hex Code": "#803A6B",
        "RGB Value": "(128, 58, 107)"
    },		
    "550": {
        "Floss name": "Violet Very Dark",
        "Hex Code": "#5C184E",
        "RGB Value": "(92, 24, 78)"
    },	
    "3747": {
        "Floss name": "Blue Violet Very Light",
        "Hex Code": "#D3D7ED",
        "RGB Value": "(211, 215, 237)"
    },	
    "341": {
        "Floss name": "Blue Violet Light",
        "Hex Code": "#B7BFDD",
        "RGB Value": "(183, 191, 221)"
    },	
    "156": {
        "Floss name": "Blue Violet Medium Light",
        "Hex Code": "#A3AED1",
        "RGB Value": "(163, 174, 209)"
    },	
    "340": {
        "Floss name": "Blue Violet Medium",
        "Hex Code": "#ADA7C7",
        "RGB Value": "(173, 167, 199)"
    },	
    "155": {
        "Floss name": "Blue Violet Medium Dark",
        "Hex Code": "#9891B6",
        "RGB Value": "(152, 145, 182)"
    },
    "3746": {
        "Floss name": "Blue Violet Dark",
        "Hex Code": "#776B98",
        "RGB Value": "(119, 107, 152)"
    },	
    "333": {
        "Floss name": "Blue Violet Very Dark",
        "Hex Code": "#5C5478",
        "RGB Value": "(92, 84, 120)"
    },
    "157": {
        "Floss name": "Cornflower Blue Very Light",
        "Hex Code": "#BBC3D9",
        "RGB Value": "(187, 195, 217)"
    },
    "794": {
        "Floss name": "Cornflower Blue Light",
        "Hex Code": "#8F9CC1",
        "RGB Value": "(143, 156, 193)"
    },
    "793": {
        "Floss name": "Cornflower Blue Medium",
        "Hex Code": "#707DA2",
        "RGB Value": "(11, 125, 162)"
    },
    "3807": {
        "Floss name": "Cornflower Blue",
        "Hex Code": "#60678C",
        "RGB Value": "(96, 103, 140)"
    },	
    "792": {
        "Floss name": "Cornflower Blue Dark",
        "Hex Code": "#555B7B",
        "RGB Value": "(85, 91, 123)"
    },	
    "158": {
        "Floss name": "Cornflower Blue Very Dark",
        "Hex Code": "#4C526E",
        "RGB Value": "(76, 82, 110)"
    },
    "791": {
        "Floss name": "Cornflower Blue Very Dark",
        "Hex Code": "#464563",
        "RGB Value": "(70, 69, 99)"
    },
    "3840": {
        "Floss name": "Lavender Blue Light",
        "Hex Code": "#B0C0DA",
        "RGB Value": "(176, 192, 218)"
    },
    "3839": {
        "Floss name": "Lavender Blue Medium",
        "Hex Code": "#7B8EAB",
        "RGB Value": "(123, 142, 171)"
    },
    "3838": {
        "Floss name": "Lavender Blue Dark",
        "Hex Code": "#5C7294",
        "RGB Value": "(92, 114, 148)"
    },
    "800": {
        "Floss name": "Delft Blue Pale",
        "Hex Code": "#C0CCDE",
        "RGB Value": "(192, 204, 222)"
    },	
    "809": {
        "Floss name": "Delft Blue",
        "Hex Code": "#94A8C6",
        "RGB Value": "(148, 168, 198)"
    },
    "799": {
        "Floss name": "Delft Blue Medium",
        "Hex Code": "#748EB6",
        "RGB Value": "(116, 142, 182)"
    },	
    "798": {
        "Floss name": "Delft Blue Dark",
        "Hex Code": "#466A8E",
        "RGB Value": "(70, 106, 142)"
    },	
    "797": {
        "Floss name": "Royal Blue",
        "Hex Code": "#13477D",
        "RGB Value": "(19, 71, 125)"
    },	
    "796": {
        "Floss name": "Royal Blue Dark",
        "Hex Code": "#11416D",
        "RGB Value": "(17, 65, 109)"
    },
    "820": {
        "Floss name": "Royal Blue Very Dark",
        "Hex Code": "#0E365C",
        "RGB Value": "(14, 54, 92)"
    },
    "162": {
        "Floss name": "Blue Ultra Very Light",
        "Hex Code": "#DBECF5",
        "RGB Value": "(219, 236, 245)"
    },
    "827": {
        "Floss name": "Blue Very Light",
        "Hex Code": "#BDDDED",
        "RGB Value": "(189, 221, 237)"
    },	
    "813": {
        "Floss name": "Blue Light",
        "Hex Code": "#A1C2D7",
        "RGB Value": "(161, 194, 215)"
    },	
    "826": {
        "Floss name": "Blue Medium",
        "Hex Code": "#6B9EBF",
        "RGB Value": "(107, 158, 191)"
    },		
    "825": {
        "Floss name": "Blue Dark",
        "Hex Code": "#4781A5",
        "RGB Value": "(71, 129, 165)"
    },	
    "824": {
        "Floss name": "Blue Very Dark",
        "Hex Code": "#396987",
        "RGB Value": "(57, 105, 135)"
    },
    "996": {
        "Floss name": "Electric Blue Medium",
        "Hex Code": "#30C2EC",
        "RGB Value": "(48, 194, 236)"
    },
    "3843": {
        "Floss name": "Electric Blue",
        "Hex Code": "#14AAD0",
        "RGB Value": "(20, 170, 208)"
    },
    "995": {
        "Floss name": "Electric Blue Dark",
        "Hex Code": "#2696B6",
        "RGB Value": "(38, 150, 182)"
    },
    "3846": {
        "Floss name": "Turquoise Bright Light",
        "Hex Code": "#06E3E6",
        "RGB Value": "(6, 227, 230)"
    },
    "3845": {
        "Floss name": "Turquoise Bright Medium",
        "Hex Code": "#04C4CA",
        "RGB Value": "(4, 196, 202)"
    },
    "3844": {
        "Floss name": "Turquoise Bright Dark",
        "Hex Code": "#12AEBA",
        "RGB Value": "(18, 174, 186)"
    },
    "159": {
        "Floss name": "Blue Gray Light",
        "Hex Code": "#C7CAD7",
        "RGB Value": "(199, 202, 215)"
    },	
    "160": {
        "Floss name": "Blue Gray Medium",
        "Hex Code": "#999FB7",
        "RGB Value": "(153, 159, 183)"
    },	
    "161": {
        "Floss name": "Blue Gray",
        "Hex Code": "#7880A4",
        "RGB Value": "(120, 128, 164)"
    },
    "3756": {
        "Floss name": "Baby Blue Ultra Very Light",
        "Hex Code": "#EEFCFC",
        "RGB Value": "(238, 252, 252)"
    },	
    "775": {
        "Floss name": "Baby Blue Very Light",
        "Hex Code": "#D9EBF1",
        "RGB Value": "(217, 235, 241)"
    },
    "3841": {
        "Floss name": "Baby Blue Pale",
        "Hex Code": "#CDDFED",
        "RGB Value": "(205, 223, 237)"
    },
    "3325": {
        "Floss name": "Baby Blue Light",
        "Hex Code": "#B8D2E6",
        "RGB Value": "(184, 210, 230)"
    },
    "3755": {
        "Floss name": "Baby Blue",
        "Hex Code": "#92B4CE",
        "RGB Value": "(147, 180, 206)"
    },	
    "334": {
        "Floss name": "Baby Blue Medium",
        "Hex Code": "#739FC1",
        "RGB Value": "(115, 159, 193)"
    },		
    "322": {
        "Floss name": "Baby Blue Dark",
        "Hex Code": "#5A8FB8",
        "RGB Value": "(90, 143, 184)"
    },
    "312": {
        "Floss name": "Baby Blue Very Dark",
        "Hex Code": "#35668B",
        "RGB Value": "(5, 102, 139)"
    },	
    "803": {
        "Floss name": "Baby Blue Ultra Very Dark",
        "Hex Code": "#2C597C",
        "RGB Value": "(4, 89, 124)"
    },
    "336": {
        "Floss name": "Navy Blue",
        "Hex Code": "#253B73",
        "RGB Value": "(37, 59, 115)"
    },
    "823": {
        "Floss name": "Navy Blue Dark",
        "Hex Code": "#213063",
        "RGB Value": "(33, 48, 99)"
    },
    "939": {
        "Floss name": "Navy Blue Very Dark",
        "Hex Code": "#1B2853",
        "RGB Value": "(27, 40, 83)"
    },
    "3753": {
        "Floss name": "Antique Blue Ultra Very Light",
        "Hex Code": "#DBE2E9",
        "RGB Value": "(219, 226, 233)"
    },
    "3752": {
        "Floss name": "Antique Blue Very Light",
        "Hex Code": "#C7D1DB",
        "RGB Value": "(199, 209, 219)"
    },
    "932": {
        "Floss name": "Antique Blue Light",
        "Hex Code": "#A2B5C6",
        "RGB Value": "(162, 181, 198)"
    },
    "931": {
        "Floss name": "Antique Blue Medium",
        "Hex Code": "#6A859E",
        "RGB Value": "(106, 133, 158)"
    },
    "930": {
        "Floss name": "Antique Blue Dark",
        "Hex Code": "#455C71",
        "RGB Value": "(69, 92, 113)"
    },
    "3750": {
        "Floss name": "Antique Blue Very Dark",
        "Hex Code": "#384C5E",
        "RGB Value": "(56, 76, 94)"
    },
    "828": {
        "Floss name": "Sky Blue Very Light",
        "Hex Code": "#C5E8ED",
        "RGB Value": "(197, 232, 237)"
    },	
    "3761": {
        "Floss name": "Sky Blue Light",
        "Hex Code": "#ACD8E2",
        "RGB Value": "(172, 216, 226)"
    },	
    "519": {
        "Floss name": "Sky Blue",
        "Hex Code": "#7EB1C8",
        "RGB Value": "(126, 177, 200)"
    },
    "518": {
        "Floss name": "Wedgewood Light",
        "Hex Code": "#4F93A7",
        "RGB Value": "(79, 147, 167)"
    },
    "3760": {
        "Floss name": "Wedgewood Medium",
        "Hex Code": "#3E85A2",
        "RGB Value": "(62, 133, 162)"
    },		
    "517": {
        "Floss name": "Wedgewood Dark",
        "Hex Code": "#3B768F",
        "RGB Value": "(59, 118, 143)"
    },
    "3842": {
        "Floss name": "Wedgewood Very Dark",
        "Hex Code": "#32667C",
        "RGB Value": "(50, 102, 124)"
    },
    "311": {
        "Floss name": "Wedgewood Ultra Very Dark",
        "Hex Code": "#1C5066",
        "RGB Value": "(28, 80, 102)"
    },	
    "747": {
        "Floss name": "Peacock Blue Very Light",
        "Hex Code": "#E5FCFD",
        "RGB Value": "(229, 252, 253)"
    },
    "3766": {
        "Floss name": "Peacock Blue Light",
        "Hex Code": "#99CFD9",
        "RGB Value": "(153, 207, 217)"
    },
    "807": {
        "Floss name": "Peacock Blue",
        "Hex Code": "#64ABBA",
        "RGB Value": "(100, 171, 186)"
    },
    "806": {
        "Floss name": "Peacock Blue Dark",
        "Hex Code": "#3D95A5",
        "RGB Value": "(61, 149, 165)"
    },	
    "3765": {
        "Floss name": "Peacock Blue Very Dark",
        "Hex Code": "#347F8C",
        "RGB Value": "(52, 127, 140)"
    },
    "3811": {
        "Floss name": "Turquoise Very Light",
        "Hex Code": "#BCE3E6",
        "RGB Value": "(188, 227, 230)"
    },
    "598": {
        "Floss name": "Turquoise Light",
        "Hex Code": "#90C3CC",
        "RGB Value": "(144, 195, 204)"
    },	
    "597": {
        "Floss name": "Turquoise",
        "Hex Code": "#5BA3B3",
        "RGB Value": "(9, 163, 179)"
    },
    "3810": {
        "Floss name": "Turquoise Dark",
        "Hex Code": "#488E9A",
        "RGB Value": "(72, 142, 154)"
    },	
    "3809": {
        "Floss name": "Turquoise Very Dark",
        "Hex Code": "#3F7C85",
        "RGB Value": "(63, 124, 133)"
    },
    "3808": {
        "Floss name": "Turquoise Ultra Very Dark",
        "Hex Code": "#366970",
        "RGB Value": "(54, 105, 112)"
    },	
    "928": { 
        "Floss name": "Gray Green Very Light",
        "Hex Code": "#DDE3E3",
        "RGB Value": "(221, 227, 227)"
    },	
    "927": {
        "Floss name": "Gray Green Light",
        "Hex Code": "#BDCBCB",
        "RGB Value": "(189, 203, 203)"
    },	
    "926": {
        "Floss name": "Gray Green Medium",
        "Hex Code": "#98AEAE",
        "RGB Value": "(152, 174, 174)"
    },
    "3768": {
        "Floss name": "Gray Green Dark",
        "Hex Code": "#657F7F",
        "RGB Value": "(101, 127, 127)"
    },	
    "924": {
        "Floss name": "Gray Green Very Dark",
        "Hex Code": "#566A6A",
        "RGB Value": "(86, 106, 106)"
    },	
    "3849": {
        "Floss name": "Teal Green Light",
        "Hex Code": "#52B3AE",
        "RGB Value": "(82, 179, 164)"
    },	
    "3848": {
        "Floss name": "Teal Green Medium",
        "Hex Code": "#419392",
        "RGB Value": "(85, 147, 146)"
    },	
    "3847": {
        "Floss name": "Teal Green Dark",
        "Hex Code": "#347D75",
        "RGB Value": "(52, 125, 117)"
    },	
    "964": {
        "Floss name": "Sea Green Light",
        "Hex Code": "#A9E2D8",
        "RGB Value": "(169, 226, 216)"
    },	
    "959": {
        "Floss name": "Sea Green Medium",
        "Hex Code": "#59C7B4",
        "RGB Value": "(89, 199, 180)"
    },	
    "958": {
        "Floss name": "Sea Green Dark",
        "Hex Code": "#3EB6A1",
        "RGB Value": "(62, 182, 161)"
    },
    "3812": {
        "Floss name": "Sea Green Very Dark",
        "Hex Code": "#2F8C84",
        "RGB Value": "(47, 140, 132)"
    },	
    "3851": {
        "Floss name": "Green Bright Light",
        "Hex Code": "#49B3A1",
        "RGB Value": "(73, 179, 161)"
    },
    "943": {
        "Floss name": "Green Bright Medium",
        "Hex Code": "#3D9384",
        "RGB Value": "(61, 147, 132)"
    },
    "3850": {
        "Floss name": "Green Bright Dark",
        "Hex Code": "#378477",
        "RGB Value": "(55, 132, 119)"
    },
			
    "993": {
        "Floss name": "Aquamarine Very Light",
        "Hex Code": "#90C0B4",
        "RGB Value": "(144, 192, 180)"
    },		
    "992": {
        "Floss name": "Aquamarine Light",
        "Hex Code": "#6FAE9F",
        "RGB Value": "(111, 174, 159)"
    },			
    "3814": {
        "Floss name": "Aquamarine",
        "Hex Code": "#508B7D",
        "RGB Value": "(80, 139, 125)"
    },	
    "991": {
        "Floss name": "Aquamarine Dark",
        "Hex Code": "#477B6E",
        "RGB Value": "(71, 123, 110)"
    },		
    "966": {
        "Floss name": "Jade Ultra Very Light",
        "Hex Code": "#B9D7C0",
        "RGB Value": "(185, 215, 192)"
    },
    "564": {
        "Floss name": "Jade Very Light",
        "Hex Code": "#A7CDAF",
        "RGB Value": "(167, 205, 175)"
    },	
    "563": {
        "Floss name": "Jade Light",
        "Hex Code": "#8FC098",
        "RGB Value": "(143, 192, 152)"
    },			
    "562": {
        "Floss name": "Jade Medium",
        "Hex Code": "#53976A",
        "RGB Value": "(83, 151, 106)"
    },		
    "505": {
        "Floss name": "Jade Green",
        "Hex Code": "#338362",
        "RGB Value": "(51, 131, 98)"
    },	
    "3817": {
        "Floss name": "Celadon Green Light",
        "Hex Code": "#99C3AA",
        "RGB Value": "(153, 195, 170)"
    },	
    "3816": {
        "Floss name": "Celadon Green",
        "Hex Code": "#65A57D",
        "RGB Value": "(101, 165, 125)"
    },	
    "163": {
        "Floss name": "Celadon Green Medium",
        "Hex Code": "#4D8361",
        "RGB Value": "(77, 131, 97)"
    },	
    "3815": {
        "Floss name": "Celadon Green Dark",
        "Hex Code": "#477759",
        "RGB Value": "(71, 119, 89)"
    },	
    "561": {
        "Floss name": "Celadon Green VD",
        "Hex Code": "#2C6A45",
        "RGB Value": "(44, 106, 69)"
    },	
    "504": {
        "Floss name": "Blue Green Very Light",
        "Hex Code": "#C4DECC",
        "RGB Value": "(196, 222, 204)"
    },
			
    "3813": {
        "Floss name": "Blue Green Light",
        "Hex Code": "#B2D4BD",
        "RGB Value": "(178, 212, 189)"
    },	
    "503": {
        "Floss name": "Blue Green Medium",
        "Hex Code": "#7BAC94",
        "RGB Value": "(123, 172, 148)"
    },	
    "502": {
        "Floss name": "Blue Green",
        "Hex Code": "#5B9071",
        "RGB Value": "(91, 144, 113)"
    },	
    "501": {
        "Floss name": "Blue Green Dark",
        "Hex Code": "#396F52",
        "RGB Value": "(57, 111, 82)"
    },	
    "500": {
        "Floss name": "Blue Green Very Dark",
        "Hex Code": "#044D33",
        "RGB Value": "(4, 77, 51)"
    },
    "955": {
        "Floss name": "Nile Green Light",
        "Hex Code": "#A2D6AD",
        "RGB Value": "(162, 214, 173)"
    },	
    "954": {
        "Floss name": "Nile Green",
        "Hex Code": "#88BA91",
        "RGB Value": "(136, 186, 145)"
    },		
    "913": {
        "Floss name": "Nile Green Medium",
        "Hex Code": "#6DAB77",
        "RGB Value": "(109, 171, 119)"
    },			
    "912": {
        "Floss name": "Emerald Green Light",
        "Hex Code": "#1B9D6B",
        "RGB Value": "(27, 157, 107)"
    },		
    "911": {
        "Floss name": "Emerald Green Medium",
        "Hex Code": "#189065",
        "RGB Value": "(24, 144, 101)"
    },		
    "910": {
        "Floss name": "Emerald Green Dark",
        "Hex Code": "#187E56",
        "RGB Value": "(24, 126, 86)"
    },			
    "909": {
        "Floss name": "Emerald Green Very Dark",
        "Hex Code": "#156F49",
        "RGB Value": "(21, 111, 73)"
    },		
    "3818": {
        "Floss name": "Emerald Green Ultra Very Dark",
        "Hex Code": "#115A3B",
        "RGB Value": "(17, 90, 59)"
    },		
    "369": {
        "Floss name": "Pistachio Green Very Light",
        "Hex Code": "#D7EDCC",
        "RGB Value": "(215, 237, 204)"
    },		
    "368": {
        "Floss name": "Pistachio Green Light",
        "Hex Code": "#A6C298",
        "RGB Value": "(166, 194, 152)"
    },		
    "320": {
        "Floss name": "Pistachio Green Medium",
        "Hex Code": "#69885A",
        "RGB Value": "(105, 136, 90)"
    },	
    "367": {
        "Floss name": "Pistachio Green Dark",
        "Hex Code": "#617A52",
        "RGB Value": "(97, 122, 82)"
    },		
    "319": {
        "Floss name": "Pistachio Green Very Dark",
        "Hex Code": "#205F2E",
        "RGB Value": "(32, 95, 46)"
    },	
    "890": {
        "Floss name": "Pistachio Green Ultra Very Dark",
        "Hex Code": "#184923",
        "RGB Value": "(23, 73, 35)"
    },
    "164": {
        "Floss name": "Forest Green Light",
        "Hex Code": "#C8D8B8",
        "RGB Value": "(200, 216, 184)"
    },		
    "989": {
        "Floss name": "Forest Green",
        "Hex Code": "#8DA675",
        "RGB Value": "(141, 166, 117)"
    },		
    "988": {
        "Floss name": "Forest Green Medium",
        "Hex Code": "#738B5B",
        "RGB Value": "(115, 139, 91)"
    },			
    "987": {
        "Floss name": "Forest Green Dark",
        "Hex Code": "#587141",
        "RGB Value": "(88, 113, 65)"
    },			
    "986": {
        "Floss name": "Forest Green Very Dark",
        "Hex Code": "#405230",
        "RGB Value": "(64, 82, 48)"
    },			
    "772": {
        "Floss name": "Yellow Green Very Light",
        "Hex Code": "#E4ECD4",
        "RGB Value": "(228, 236, 212)"
    },			
    "3348": {
        "Floss name": "Yellow Green Light",
        "Hex Code": "#CCD9B1",
        "RGB Value": "(204, 217, 177)"
    },	
    "3347": {
        "Floss name": "Yellow Green Medium",
        "Hex Code": "#71935C",
        "RGB Value": "(113, 147, 92)"
    },		
    "3346": {
        "Floss name": "Hunter Green",
        "Hex Code": "#406A3A",
        "RGB Value": "(64, 106, 58)"
    },		
    "3345": {
        "Floss name": "Hunter Green Dark",
        "Hex Code": "#1B5915",
        "RGB Value": "(27, 89, 21)"
    },			
    "895": {
        "Floss name": "Hunter Green Very Dark",
        "Hex Code": "#1B5300",
        "RGB Value": "(27, 83, 0)"
    },			
    "704": {
        "Floss name": "Chartreuse Bright",
        "Hex Code": "#9ECF34",
        "RGB Value": "(158, 207, 52)"
    },			
    "703": {
        "Floss name": "Chartreuse",
        "Hex Code": "#7BB547",
        "RGB Value": "(123, 181, 71)"
    },			
    "702": {
        "Floss name": "Kelly Green",
        "Hex Code": "#47A72F",
        "RGB Value": "(71, 167, 47)"
    },			
    "701": {
        "Floss name": "Green Light",
        "Hex Code": "#3F8F29",
        "RGB Value": "(63, 143, 41)"
    },			
    "700": {
        "Floss name": "Green Bright",
        "Hex Code": "#07731B",
        "RGB Value": "(7, 115, 27)"
    },	
    "699": {
        "Floss name": "Green",
        "Hex Code": "#056517",
        "RGB Value": "(5, 101, 23)"
    },		
    "907": {
        "Floss name": "Parrot Green Light",
        "Hex Code": "#C7E666",
        "RGB Value": "(199, 230, 102)"
    },		
    "906": {
        "Floss name": "Parrot Green Medium",
        "Hex Code": "#7FB335",
        "RGB Value": "(127, 179, 53)"
    },		
    "905": {
        "Floss name": "Parrot Green Dark",
        "Hex Code": "#628A28",
        "RGB Value": "(98, 138, 40)"
    },		
    "904": {
        "Floss name": "Parrot Green Very Dark",
        "Hex Code": "#557822",
        "RGB Value": "(85, 120, 34)"
    },		
    "472": {
        "Floss name": "Avocado Green Ultra Light",
        "Hex Code": "#D8E498",
        "RGB Value": "(216, 228, 152)"
    },		
    "471": {
        "Floss name": "Avocado Green Very Light",
        "Hex Code": "#AEBF79",
        "RGB Value": "(174, 191, 121)"
    },		
    "470": {
        "Floss name": "Avocado Green Light",
        "Hex Code": "#94AB4F",
        "RGB Value": "(148, 171, 79)"
    },		
    "469": {
        "Floss name": "Avocado Green",
        "Hex Code": "#72843C",
        "RGB Value": "(114, 132, 60)"
    },		
    "937": {
        "Floss name": "Avocado Green Medium",
        "Hex Code": "#627133",
        "RGB Value": "(98, 113, 51)"
    },		
    "936": {
        "Floss name": "Avocado Green Very Dark",
        "Hex Code": "#4C5826",
        "RGB Value": "(76, 88, 38)"
    },		
    "935": {
        "Floss name": "Avocado Green Dark",
        "Hex Code": "#424D21",
        "RGB Value": "(66, 77, 33)"
    },		
    "934": {
        "Floss name": "Avocado Green Black",
        "Hex Code": "#313919",
        "RGB Value": "(49, 57, 25)"
    },		
    "523": {
        "Floss name": "Fern Green Light",
        "Hex Code": "#ABB197",
        "RGB Value": "(171, 177, 151)"
    },			
    "3053": {
        "Floss name": "Green Gray",
        "Hex Code": "#9CA482",
        "RGB Value": "(156, 164, 130)"
    },			
    "3052": {
        "Floss name": "Green Gray Medium",
        "Hex Code": "#889268",
        "RGB Value": "(136, 146, 104)"
    },			
    "3051": {
        "Floss name": "Green Gray Dark",
        "Hex Code": "#5F6648",
        "RGB Value": "(95, 102, 72)"
    },			
    "524": {
        "Floss name": "Fern Green Very Light",
        "Hex Code": "#C4CDAC",
        "RGB Value": "(196, 205, 172)"
    },			
    "522": {
        "Floss name": "Fern Green",
        "Hex Code": "#969E7E",
        "RGB Value": "(150, 158, 126)"
    },			
    "520": {
        "Floss name": "Fern Green Dark",
        "Hex Code": "#666D4F",
        "RGB Value": "(102, 109, 79)"
    },		
    "3364": {
        "Floss name": "Pine Green",
        "Hex Code": "#83975F",
        "RGB Value": "(131, 151, 95)"
    },		
    "3363": {
        "Floss name": "Pine Green Medium",
        "Hex Code": "#728256",
        "RGB Value": "(114, 130, 86)"
    },			
    "3362": {
        "Floss name": "Pine Green Dark",
        "Hex Code": "#5E6B47",
        "RGB Value": "(94, 107, 71)"
    },			
    "165": {
        "Floss name": "Moss Green Very Light",
        "Hex Code": "#EFF4A4",
        "RGB Value": "(239, 244, 164)"
    },			
    "3819": {
        "Floss name": "Moss Green Light",
        "Hex Code": "#E0E868",
        "RGB Value": "(224, 232, 104)"
    },			
    "166": {
        "Floss name": "Moss Green Medium Light",
        "Hex Code": "#C0C840",
        "RGB Value": "(192, 200, 64)"
    },			
    "581": {
        "Floss name": "Moss Green",
        "Hex Code": "#A7AE38",
        "RGB Value": "(167, 174, 56)"
    },			
    "580": {
        "Floss name": "Moss Green Dark",
        "Hex Code": "#888D33",
        "RGB Value": "(136, 141, 51)"
    },		
    "734": {
        "Floss name": "Olive Green Light",
        "Hex Code": "#C7C077",
        "RGB Value": "(199, 192, 119)"
    },	
    "733": {
        "Floss name": "Olive Green Medium",
        "Hex Code": "#BCB34C",
        "RGB Value": "(188, 179, 76)"
    },			
    "732": {
        "Floss name": "Olive Green",
        "Hex Code": "#948C36",
        "RGB Value": "(148, 140, 54)"
    },			
    "731": {
        "Floss name": "Olive Green Dark",
        "Hex Code": "#938B37",
        "RGB Value": "(147, 139, 55)"
    },			
    "730": {
        "Floss name": "Olive Green Very Dark",
        "Hex Code": "#827B30",
        "RGB Value": "(130, 123, 48)"
    },		
    "3013": {
        "Floss name": "Khaki Green Light",
        "Hex Code": "#B9B982",
        "RGB Value": "(185, 185, 130)"
    },		
    "3012": {
        "Floss name": "Khaki Green Medium",
        "Hex Code": "#A6A75D",
        "RGB Value": "(166, 167, 93)"
    },		
    "3011": {
        "Floss name": "Khaki Green Dark",
        "Hex Code": "#898A58",
        "RGB Value": "(137, 138, 88)"
    },			
    "372": {
        "Floss name": "Mustard Light",
        "Hex Code": "#CCB784",
        "RGB Value": "(204, 183, 132)"
    },			
    "371": {
        "Floss name": "Mustard",
        "Hex Code": "#BFA671",
        "RGB Value": "(191, 166, 113)"
    },		
    "370": {
        "Floss name": "Mustard Medium",
        "Hex Code": "#B89D64",
        "RGB Value": "(184, 157, 100)"
    },		
    "834": {
        "Floss name": "Golden Olive Very Light",
        "Hex Code": "#DBBE7F",
        "RGB Value": "(219, 190, 127)"
    },			
    "833": {
        "Floss name": "Golden Olive Light",
        "Hex Code": "#C8AB6C",
        "RGB Value": "(200, 171, 108)"
    },		
    "832": {
        "Floss name": "Golden Olive",
        "Hex Code": "#BD9B51",
        "RGB Value": "(189, 155, 81)"
    },			
    "831": {
        "Floss name": "Golden Olive Medium",
        "Hex Code": "#AA8F56",
        "RGB Value": "(170, 143, 86)"
    },			
    "830": {
        "Floss name": "Golden Olive Dark",
        "Hex Code": "#8D784B",
        "RGB Value": "(141, 120, 75)"
    },		
    "829": {
        "Floss name": "Golden Olive Very Dark",
        "Hex Code": "#7E6B42",
        "RGB Value": "(126, 107, 66)"
    },			
    "613": {
        "Floss name": "Drab Brown Very Light",
        "Hex Code": "#DCC4AA",
        "RGB Value": "(220, 196, 170)"
    },			
    "612": {
        "Floss name": "Drab Brown Light",
        "Hex Code": "#BC9A78",
        "RGB Value": "(188, 154, 120)"
    },			
    "611": {
        "Floss name": "Drab Brown",
        "Hex Code": "#967656",
        "RGB Value": "(150, 118, 86)"
    },			
    "610": {
        "Floss name": "Drab Brown Dark",
        "Hex Code": "#796047",
        "RGB Value": "(121, 96, 71)"
    },	
    "3047": {
        "Floss name": "Yellow Beige Light",
        "Hex Code": "#E7D6C1",
        "RGB Value": "(231, 214, 193)"
    },			
    "3046": {
        "Floss name": "Yellow Beige Medium",
        "Hex Code": "#D8BC9A",
        "RGB Value": "(216, 188, 154)"
    },			
    "3045": {
        "Floss name": "Yellow Beige Dark",
        "Hex Code": "#BC966A",
        "RGB Value": "(188, 150, 106)"
    },			
    "167": {
        "Floss name": "Yellow Beige Very Dark",
        "Hex Code": "#A77C49",
        "RGB Value": "(167, 124, 73)"
    },		
    "746": {
        "Floss name": "Off White",
        "Hex Code": "#FCFCEE",
        "RGB Value": "(252, 252, 238)"
    },		
    "677": {
        "Floss name": "Old Gold Very Light",
        "Hex Code": "#F5ECCB",
        "RGB Value": "(245, 236, 203)"
    },			
    "422": {
        "Floss name": "Hazelnut Brown Light",
        "Hex Code": "#C69F7B",
        "RGB Value": "(198, 159, 123)"
    },			
    "3828": {
        "Floss name": "Hazelnut Brown",
        "Hex Code": "#B78B61",
        "RGB Value": "(183, 139, 97)"
    },			
    "420": {
        "Floss name": "Hazelnut Brown Dark",
        "Hex Code": "#A07042",
        "RGB Value": "(160, 112, 66)"
    },		 
    "869": {
        "Floss name": "Hazelnut Brown Very Dark",
        "Hex Code": "#835E39",
        "RGB Value": "(131, 94, 57)"
    },		
    "728": {
        "Floss name": "Topaz",
        "Hex Code": "#E4B468",
        "RGB Value": "(228, 180, 104)"
    },			
    "783": {
        "Floss name": "Topaz Medium",
        "Hex Code": "#CE9124",
        "RGB Value": "(206, 145, 36)"
    },			
    "782": {
        "Floss name": "Topaz Dark",
        "Hex Code": "#AE7720",
        "RGB Value": "(174, 119, 32)"
    },			
    "781": {
        "Floss name": "Topaz Very Dark",
        "Hex Code": "#A26D20",
        "RGB Value": "(162, 109, 32)"
    },		
    "780": {
        "Floss name": "Topaz Ultra Very Dark",
        "Hex Code": "#94631A",
        "RGB Value": "(148, 99, 26)"
    },		
    "676": {
        "Floss name": "Old Gold Light",
        "Hex Code": "#E5CE97",
        "RGB Value": "(229, 206, 151)"
    },		
    "729": {
        "Floss name": "Old Gold Medium",
        "Hex Code": "#D0A53E",
        "RGB Value": "(208, 165, 62)"
    },		
    "680": {
        "Floss name": "Old Gold Dark",
        "Hex Code": "#BC8D0E",
        "RGB Value": "(188, 141, 14)"
    },	
    "3829": {
        "Floss name": "Old Gold Very Dark",
        "Hex Code": "#A98204",
        "RGB Value": "(169, 130, 4)"
    },		
    "3822": {
        "Floss name": "Straw Light",
        "Hex Code": "#F6DC98",
        "RGB Value": "(246, 220, 152)"
    },		
    "3821": {
        "Floss name": "Straw",
        "Hex Code": "#F3CE75",
        "RGB Value": "(243, 206, 117)"
    },		
    "3820": {
        "Floss name": "Straw Dark",
        "Hex Code": "#DFB65F",
        "RGB Value": "(223, 182, 95)"
    },	
    "3852": {
        "Floss name": "Straw Very Dark",
        "Hex Code": "#CD9D37",
        "RGB Value": "(205, 157, 55)"
    },		
    "445": {
        "Floss name": "Lemon Light",
        "Hex Code": "#FFFB8B",
        "RGB Value": "(255, 251, 139)"
    },		
    "307": {
        "Floss name": "Lemon",
        "Hex Code": "#FDED54",
        "RGB Value": "(253, 237, 84)"
    },		
    "973": {
        "Floss name": "Canary Bright",
        "Hex Code": "#FFE300",
        "RGB Value": "(255, 227, 0)"
    },			
    "444": {
        "Floss name": "Lemon Dark",
        "Hex Code": "#FFD600",
        "RGB Value": "(255, 214, 0)"
    },			
    "3078": {
        "Floss name": "Golden Yellow Very Light",
        "Hex Code": "#FDF9CD",
        "RGB Value": "(253, 249, 205)"
    },			
    "727": {
        "Floss name": "Topaz Very Light",
        "Hex Code": "#FFF1AF",
        "RGB Value": "(255, 241, 175)"
    },	
    "726": {
        "Floss name": "Topaz Light",
        "Hex Code": "#FDD755",
        "RGB Value": "(253, 215, 85)"
    },			
    "725": {
        "Floss name": "Topaz Medium Light",
        "Hex Code": "#FFC840",
        "RGB Value": "(255, 200, 64)"
    },			
    "972": {
        "Floss name": "Canary Deep",
        "Hex Code": "#FFB515",
        "RGB Value": "(255, 181, 21)"
    },			
    "745": {
        "Floss name": "Yellow Pale Light",
        "Hex Code": "#FFE9AD",
        "RGB Value": "(255, 233, 173)"
    },		
    "744": {
        "Floss name": "Yellow Pale",
        "Hex Code": "#FFE793",
        "RGB Value": "(255, 231, 147)"
    },		
    "743": {
        "Floss name": "Yellow Medium",
        "Hex Code": "#FED376",
        "RGB Value": "(254, 211, 118)"
    },		
    "742": {
        "Floss name": "Tangerine Light",
        "Hex Code": "#FFBF57",
        "RGB Value": "(255, 191, 87)"
    },		
    "741": {
        "Floss name": "Tangerine Medium",
        "Hex Code": "#FFA32B",
        "RGB Value": "(255, 163, 43)"
    },			
    "740": {
        "Floss name": "Tangerine",
        "Hex Code": "#FF8B00",
        "RGB Value": "(255, 139, 0)"
    },		
    "970": {
        "Floss name": "Pumpkin Light",
        "Hex Code": "#F78B13",
        "RGB Value": "(247, 139, 19)"
    },			
    "971": {
        "Floss name": "Pumpkin",
        "Hex Code": "#F67F00",
        "RGB Value": "(246, 127, 0)"
    },			
    "947": {
        "Floss name": "Burnt Orange",
        "Hex Code": "#FF7B4D",
        "RGB Value": "(255, 123, 77)"
    },		
    "946": {
        "Floss name": "Burnt Orange Medium",
        "Hex Code": "#EB6307",
        "RGB Value": "(235, 99, 7)"
    },		
    "900": {
        "Floss name": "Burnt Orange Dark",
        "Hex Code": "#D15807",
        "RGB Value": "(209, 88, 7)"
    },		
    "967": {
        "Floss name": "Apricot Very Light",
        "Hex Code": "#FFDED5",
        "RGB Value": "(255, 222, 213)"
    },		
    "3824": {
        "Floss name": "Apricot Light",
        "Hex Code": "#FECDC2",
        "RGB Value": "(254, 205, 194)"
    },	
    "3341": {
        "Floss name": "Apricot",
        "Hex Code": "#FCAB98",
        "RGB Value": "(252, 171, 152)"
    },	
    "3340": {
        "Floss name": "Apricot Medium",
        "Hex Code": "#FF836F",
        "RGB Value": "(255, 131, 111)"
    },	
    "608": {
        "Floss name": "Burnt Orange Bright",
        "Hex Code": "#FD5D35",
        "RGB Value": "(253, 93, 53)"
    },	
    "606": {
        "Floss name": "Orange Red Bright",
        "Hex Code": "#FA3203",
        "RGB Value": "(250, 50, 3)"
    },	
    "951": {
        "Floss name": "Tawny Light",
        "Hex Code": "#FFE2CF",
        "RGB Value": "(255, 226, 207)"
    },	
    "3856": {
        "Floss name": "Mahogany Ultra Very Light",
        "Hex Code": "#FFD3B5",
        "RGB Value": "(255, 211, 181)"
    },		
    "722": {
        "Floss name": "Orange Spice Light",
        "Hex Code": "#F7976F",
        "RGB Value": "(247, 151, 111)"
    },	
    "721": {
        "Floss name": "Orange Spice Medium",
        "Hex Code": "#F27842",
        "RGB Value": "(242, 120, 66)"
    },
    "720": {
        "Floss name": "Orange Spice Dark",
        "Hex Code": "#E55C1F",
        "RGB Value": "(229, 92, 31)"
    },	
    "3825": {
        "Floss name": "Pumpkin Pale",
        "Hex Code": "#FDBD96",
        "RGB Value": "(253, 189, 150)"
    },	
    "922": {
        "Floss name": "Copper Light",
        "Hex Code": "#E27323",
        "RGB Value": "(226, 115, 35)"
    },	
    "921": {
        "Floss name": "Copper",
        "Hex Code": "#C66218",
        "RGB Value": "(198, 98, 24)"
    },	
    "920": {
        "Floss name": "Copper Medium",
        "Hex Code": "#AC5414",
        "RGB Value": "(172, 84, 20)"
    },	
    "919": {
        "Floss name": "Red Copper",
        "Hex Code": "#A64510",
        "RGB Value": "(166, 69, 16)"
    },	
    "918": {
        "Floss name": "Red Copper Dark",
        "Hex Code": "#82340A",
        "RGB Value": "(130, 52, 10)"
    },	
    "3770": {
        "Floss name": "Tawny Very Light",
        "Hex Code": "#FFEEE3",
        "RGB Value": "(255, 238, 227)"
    },	
    "945": {
        "Floss name": "Tawny",
        "Hex Code": "#FBD5BB",
        "RGB Value": "(251, 213, 187)"
    },
    "402": {
        "Floss name": "Mahogany Very Light",
        "Hex Code": "#F7A777",
        "RGB Value": "(247, 167, 119)"
    },	
    "3776": {
        "Floss name": "Mahogany Light",
        "Hex Code": "#CF7939",
        "RGB Value": "(207, 121, 57)"
    },	
    "301": {
        "Floss name": "Mahogany Medium",
        "Hex Code": "#B35F2B",
        "RGB Value": "(179, 95, 43)"
    },	
    "400": {
        "Floss name": "Mahogany Dark",
        "Hex Code": "#8F430F",
        "RGB Value": "(143, 67, 15)"
    },	
    "300": {
        "Floss name": "Mahogany Very Dark",
        "Hex Code": "#6F2F00",
        "RGB Value": "(111, 47, 0)"
    },	
    "3823": {
        "Floss name": "Yellow Ultra Pale",
        "Hex Code": "#FFFDE3",
        "RGB Value": "(255, 253, 227)"
    },	
    "3855": {
        "Floss name": "Autumn Gold Light",
        "Hex Code": "#FAD396",
        "RGB Value": "(250, 211, 150)"
    },	
    "3854": {
        "Floss name": "Autumn Gold Medium",
        "Hex Code": "#F2AF68",
        "RGB Value": "(242, 175, 104)"
    },	
    "3853": {
        "Floss name": "Autumn Gold Dark",
        "Hex Code": "#F29746",
        "RGB Value": "(242, 151, 70)"
    },	
    "3827": {
        "Floss name": "Golden Brown Pale",
        "Hex Code": "#F7BB77",
        "RGB Value": "(247, 187, 119)"
    },
    "977": {
        "Floss name": "Golden Brown Light",
        "Hex Code": "#DC9C56",
        "RGB Value": "(220, 156, 86)"
    },
    "976": {
        "Floss name": "Golden Brown Medium",
        "Hex Code": "#C28142",
        "RGB Value": "(194, 129, 66)"
    },		
    "3826": {
        "Floss name": "Golden Brown",
        "Hex Code": "#AD7239",
        "RGB Value": "(173, 114, 57)"
    },	
    "975": {
        "Floss name": "Golden Brown Dark",
        "Hex Code": "#914F12",
        "RGB Value": "(145, 79, 18)"
    },	
    "948": {
        "Floss name": "Peach Very Light",
        "Hex Code": "#FEE7DA",
        "RGB Value": "(254, 231, 218)"
    },	
    "754": {
        "Floss name": "Peach Light",
        "Hex Code": "#F7CBBF",
        "RGB Value": "(247, 203, 191)"
    },	
    "3771": {
        "Floss name": "Terra Cotta Ultra Very Light",
        "Hex Code": "#F4BBA9",
        "RGB Value": "(244, 187, 169)"
    },	
    "758": {
        "Floss name": "Terra Cotta Very Light",
        "Hex Code": "#EEAA9B",
        "RGB Value": "(238, 170, 155)"
    },	
    "3778": {
        "Floss name": "Terra Cotta Light",
        "Hex Code": "#D98978",
        "RGB Value": "(217, 137, 120)"
    },	
    "356": {
        "Floss name": "Terra Cotta Medium",
        "Hex Code": "#C56A5B",
        "RGB Value": "(197, 106, 91)"
    },	
    "3830": {
        "Floss name": "Terra Cotta",
        "Hex Code": "#BC5544",
        "RGB Value": "(185, 85, 68)"
    },	
    "355": {
        "Floss name": "Terra Cotta Dark",
        "Hex Code": "#984436",
        "RGB Value": "(152, 68, 54)"
    },	
    "3777": {
        "Floss name": "Terra Cotta Very Dark",
        "Hex Code": "#863022",
        "RGB Value": "(134, 48, 34)"
    },	
    "3779": {
        "Floss name": "Rosewood Ultra Very Light",
        "Hex Code": "#F8CAC8",
        "RGB Value": "(248, 202, 200)"
    },	
    "3859": {
        "Floss name": "Rosewood Light",
        "Hex Code": "#BA8B7C",
        "RGB Value": "(186, 139, 124)"
    },	
    "3858": {
        "Floss name": "Rosewood Medium",
        "Hex Code": "#964A3F",
        "RGB Value": "(150, 74, 63)"
    },	
    "3857": {
        "Floss name": "Rosewood Dark",
        "Hex Code": "#68251A",
        "RGB Value": "(104, 37, 26)"
    },	
    "3774": {
        "Floss name": "Desert Sand Very Light",
        "Hex Code": "#F3E1D7",
        "RGB Value": "(243, 225, 215)"
    },	
    "950": {
        "Floss name": "Desert Sand Light",
        "Hex Code": "#EED3C4",
        "RGB Value": "(238, 211, 196)"
    },	
    "3064": {
        "Floss name": "Desert Sand",
        "Hex Code": "#C48E70",
        "RGB Value": "(196, 142, 112)"
    },	
    "407": {
        "Floss name": "Desert Sand Medium",
        "Hex Code": "#BB8161",
        "RGB Value": "(187, 129, 97)"
    },	
    "3773": {
        "Floss name": "Desert Sand Dark",
        "Hex Code": "#B67552",
        "RGB Value": "(182, 117, 82)"
    },	
    "3772": {
        "Floss name": "Desert Sand Very Dark",
        "Hex Code": "#A06C50",
        "RGB Value": "(160, 108, 80)"
    },	
    "632": {
        "Floss name": "Desert Sand Ultra Very Dark",
        "Hex Code": "#875539",
        "RGB Value": "(135, 85, 57)"
    },	
    "453": {
        "Floss name": "Shell Gray Light",
        "Hex Code": "#D7CECB",
        "RGB Value": "(215, 206, 203)"
    },	
    "452": {
        "Floss name": "Shell Gray Medium",
        "Hex Code": "#C0B3AE",
        "RGB Value": "(192, 179, 174)"
    },	
    "451": {
        "Floss name": "Shell Gray Dark",
        "Hex Code": "#917B73",
        "RGB Value": "(145, 123, 115)"
    },
    "3861": {
        "Floss name": "Cocoa Light",
        "Hex Code": "#A68881",
        "RGB Value": "(166, 136, 129)"
    },
    "3860": {
        "Floss name": "Cocoa",
        "Hex Code": "#7D5D57",
        "RGB Value": "(125, 93, 87)"
    },
    "779": {
        "Floss name": "Cocoa Dark",
        "Hex Code": "#624B45",
        "RGB Value": "(98, 75, 69)"
    },
    "712": {
        "Floss name": "Cream",
        "Hex Code": "#FFFBEF",
        "RGB Value": "(255, 251, 239)"
    },	
    "739": {
        "Floss name": "Tan Ultra Very Light",
        "Hex Code": "#F8E4C8",
        "RGB Value": "(248, 228, 200)"
    },
    "738": {
        "Floss name": "Tan Very Light",
        "Hex Code": "#ECCC9E",
        "RGB Value": "(236, 204, 158)"
    },	
    "437": {
        "Floss name": "Tan Light",
        "Hex Code": "#E4BB8E",
        "RGB Value": "(228, 187, 142)"
    },	
    "436": {
        "Floss name": "Tan",
        "Hex Code": "#CB9051",
        "RGB Value": "(203, 144, 81)"
    },	
    "435": {
        "Floss name": "Brown Very Light",
        "Hex Code": "#B87748",
        "RGB Value": "(184, 119, 72)"
    },	
    "434": {
        "Floss name": "Brown Light",
        "Hex Code": "#985E33",
        "RGB Value": "(152, 94, 51)"
    },	
    "433": {
        "Floss name": "Brown Medium",
        "Hex Code": "#7A451F",
        "RGB Value": "(122, 69, 31)"
    },	
    "801": {
        "Floss name": "Coffee Brown Dark",
        "Hex Code": "#653919",
        "RGB Value": "(101, 57, 25)"
    },	
    "898": {
        "Floss name": "Coffee Brown Very Dark",
        "Hex Code": "#492A13",
        "RGB Value": "(73, 42, 19)"
    },	
    "938": {
        "Floss name": "Coffee Brown Ultra Dark",
        "Hex Code": "#361F0E",
        "RGB Value": "(54, 31, 14)"
    },	
    "3371": {
        "Floss name": "Black Brown",
        "Hex Code": "#1E1108",
        "RGB Value": "(30, 17, 8)"
    },		
    "543": {
        "Floss name": "Beige Brown Ultra Very Light",
        "Hex Code": "#F2E3CE",
        "RGB Value": "(242, 227, 206)"
    },		
    "3864": {
        "Floss name": "Mocha Beige Light",
        "Hex Code": "#CBB69C",
        "RGB Value": "(203, 182, 156)"
    },	
    "3863": {
        "Floss name": "Mocha Beige Medium",
        "Hex Code": "#A4835C",
        "RGB Value": "(164, 131, 92)"
    },	
    "3862": {
        "Floss name": "Mocha Beige Dark",
        "Hex Code": "#8A6E4E",
        "RGB Value": "(138, 110, 78)"
    },	
    "3031": {
        "Floss name": "Mocha Brown Very Dark",
        "Hex Code": "#4B3C2A",
        "RGB Value": "(75, 60, 42)"
    },	
    "B5200": {
        "Floss name": "Snow White",
        "Hex Code": "#FFFFFF",
        "RGB Value": "(255, 255, 255)"
    },	
    "White": {
        "Floss name": "White",
        "Hex Code": "#FCFBF8",
        "RGB Value": "(252, 251, 248)"
    },	
    "3865": {
        "Floss name": "Winter White",
        "Hex Code": "#F9F7F1",
        "RGB Value": "(249, 247, 241)"
    },	
    "Ecru": {
        "Floss name": "Ecru",
        "Hex Code": "#F0EADA",
        "RGB Value": "(240, 234, 218)"
    },	
    "822": {
        "Floss name": "Beige Gray Light",
        "Hex Code": "#E7E2D3",
        "RGB Value": "(231, 226, 211)"
    },	
    "644": {
        "Floss name": "Beige Gray Medium",
        "Hex Code": "#DDD8CB",
        "RGB Value": "(221, 216, 203)"
    },	
    "642": {
        "Floss name": "Beige Gray Dark",
        "Hex Code": "#A49878",
        "RGB Value": "(164, 152, 120)"
    },	
    "640": {
        "Floss name": "Beige Gray Very Dark",
        "Hex Code": "#857B61",
        "RGB Value": "(133, 123, 97)"
    },	
    "3787": {
        "Floss name": "Brown Gray Dark",
        "Hex Code": "#625D50",
        "RGB Value": "(98, 93, 80)"
    },	
    "3021": {
        "Floss name": "Brown Gray Very Dark",
        "Hex Code": "#4F4B41",
        "RGB Value": "(79, 75, 65)"
    },	
    "3024": {
        "Floss name": "Brown Gray Very Light",
        "Hex Code": "#EBEAE7",
        "RGB Value": "(235, 234, 231)"
    },	
    "3023": {
        "Floss name": "Brown Gray Light",
        "Hex Code": "#B1AA97",
        "RGB Value": "(177, 170, 151)"
    },	
    "3022": {
        "Floss name": "Brown Gray Medium",
        "Hex Code": "#8E9078",
        "RGB Value": "(142, 144, 120)"
    },	
    "535": {
        "Floss name": "Ash Gray Very Light",
        "Hex Code": "#636458",
        "RGB Value": "(99, 100, 88)"
    },	
    "3033": {
        "Floss name": "Mocha Brown Very Light",
        "Hex Code": "#E3D8CC",
        "RGB Value": "(227, 216, 204)"
    },	
    "3782": {
        "Floss name": "Mocha Brown Light",
        "Hex Code": "#D2BCA6",
        "RGB Value": "(210, 188, 166)"
    },
    "3032": {
        "Floss name": "Mocha Brown Medium",
        "Hex Code": "#B39F8B",
        "RGB Value": "(179, 159, 139)"
    },	
    "3790": {
        "Floss name": "Beige Gray Ultra Dark",
        "Hex Code": "#7F6A55",
        "RGB Value": "(127, 106, 85)"
    },	
    "3781": {
        "Floss name": "Mocha Brown Dark",
        "Hex Code": "#6B5743",
        "RGB Value": "(107, 87, 67)"
    },
    "3866": {
        "Floss name": "Mocha Brown Ultra Very Light",
        "Hex Code": "#FAF6F0",
        "RGB Value": "(250, 246, 240)"
    },
    "842": {
        "Floss name": "Beige Brown Very Light",
        "Hex Code": "#D1BAA1",
        "RGB Value": "(209, 186, 161)"
    },	
    "841": {
        "Floss name": "Beige Brown Light",
        "Hex Code": "#B69B7E",
        "RGB Value": "(182, 155, 126)"
    },		
    "840": {
        "Floss name": "Beige Brown Medium",
        "Hex Code": "#9A7C5C",
        "RGB Value": "(154, 124, 92)"
    },	
    "839": {
        "Floss name": "Beige Brown Dark",
        "Hex Code": "#675541",
        "RGB Value": "(103, 85, 65)"
    },		
    "838": {
        "Floss name": "Beige Brown Very Dark",
        "Hex Code": "#594937",
        "RGB Value": "(89, 73, 55)"
    },	
    "3072": {
        "Floss name": "Beaver Gray Very Light",
        "Hex Code": "#E6E8E8",
        "RGB Value": "(230, 232, 232)"
    },	
    "648": {
        "Floss name": "Beaver Gray Light",
        "Hex Code": "#BCB4AC",
        "RGB Value": "(188, 180, 172)"
    },	
    "647": {
        "Floss name": "Beaver Gray Medium",
        "Hex Code": "#B0A69C",
        "RGB Value": "(176, 166, 156)"
    },	
    "646": {
        "Floss name": "Beaver Gray Dark",
        "Hex Code": "#877D73",
        "RGB Value": "(135, 125, 115)"
    },	
    "645": {
        "Floss name": "Beaver Gray Very Dark",
        "Hex Code": "#6E655C",
        "RGB Value": "(110, 101, 92)"
    },		
    "844": {
        "Floss name": "Beaver Gray Ultra Dark",
        "Hex Code": "#484848",
        "RGB Value": "(72, 72, 72)"
    },	
    "762": {
        "Floss name": "Pearl Gray Very Light",
        "Hex Code": "#ECECEC",
        "RGB Value": "(236, 236, 236)"
    },	
    "415": {
        "Floss name": "Pearl Gray",
        "Hex Code": "#D3D3D6",
        "RGB Value": "(211, 211, 214)"
    },	
    "318": {
        "Floss name": "Steel Gray Light",
        "Hex Code": "#ABABAB",
        "RGB Value": "(171, 171, 171)"
    },	
    "414": {
        "Floss name": "Steel Gray Dark",
        "Hex Code": "#8C8C8C",
        "RGB Value": "(140, 140, 140)"
    },	
    "168": {
        "Floss name": "Pewter Very Light",
        "Hex Code": "#D1D1D1",
        "RGB Value": "(209, 209, 209)"
    },	
    "169": {
        "Floss name": "Pewter Light",
        "Hex Code": "#848484",
        "RGB Value": "(132, 132, 132)"
    },	
    "317": {
        "Floss name": "Pewter Gray",
        "Hex Code": "#6C6C6C",
        "RGB Value": "(108, 108, 108)"
    },
    "413": {
        "Floss name": "Pewter Gray Dark",
        "Hex Code": "#565656",
        "RGB Value": "(86, 86, 86)"
    },		
    "3799": {
        "Floss name": "Pewter Gray Very Dark",
        "Hex Code": "#424242",
        "RGB Value": "(66, 66, 66)"
    },
    "310": {
        "Floss name": "Black",
        "Hex Code": "#000000",
        "RGB Value": "(0, 0, 0)"
    },
    "01": {
        "Floss name": "White Tin",
        "Hex Code": "#E3E3E6",
        "RGB Value": "(227, 227, 230)"
    },
    "02": {
        "Floss name": "Tin",
        "Hex Code": "#D7D7D8",
        "RGB Value": "(215, 215, 216)"
    },
    "03": {
        "Floss name": "Tin Medium",
        "Hex Code": "#B8B8BB",
        "RGB Value": "(184, 184, 187)"
    },
    "04": {
        "Floss name": "Tin Dark",
        "Hex Code": "#AEAEB1",
        "RGB Value": "(174, 174, 177)"
    },
    "05": {
        "Floss name": "Driftwood Light",
        "Hex Code": "#E3CCBE",
        "RGB Value": "(227, 204, 190)"
    },
    "06": {
        "Floss name": "Driftwood Medium Light",
        "Hex Code": "#DCC6B8",
        "RGB Value": "(220, 198, 184)"
    },
    "07": {
        "Floss name": "Driftwood",
        "Hex Code": "#8F7B6E",
        "RGB Value": "(143, 123, 110)"
    },
    "08": {
        "Floss name": "Driftwood Dark",
        "Hex Code": "#6A5046",
        "RGB Value": "(106, 80, 70)"
    },
    "09": {
        "Floss name": "Cocoa Very Dark",
        "Hex Code": "#552014",
        "RGB Value": "(85, 32, 14)"
    },
    "10": {
        "Floss name": "Tender Green Very Light",
        "Hex Code": "#EDFED9",
        "RGB Value": "(237, 254, 217)"
    },
    "11": {
        "Floss name": "Tender Green Light",
        "Hex Code": "#E2EDB5",
        "RGB Value": "(226, 237, 181)"
    },
    "12": {
        "Floss name": "Tender Green",
        "Hex Code": "#CDD99A",
        "RGB Value": "(205, 217, 154)"
    },
    "13": {
        "Floss name": "Nile Green Medium Light",
        "Hex Code": "#BFF6E0",
        "RGB Value": "(191, 246, 224)"
    },
    "14": {
        "Floss name": "Apple Green Pale",
        "Hex Code": "#D0FBB2",
        "RGB Value": "(208, 251, 178)"
    },
    "15": {
        "Floss name": "Apple Green",
        "Hex Code": "#D1EDA4",
        "RGB Value": "(209, 237, 164)"
    },
    "16": {
        "Floss name": "Chartreuse Light",
        "Hex Code": "#C9C258",
        "RGB Value": "(201, 194, 88)"
    },
    "17": {
        "Floss name": "Yellow Plum Light",
        "Hex Code": "#E5E272",
        "RGB Value": "(229, 226, 114)"
    },
    "18": {
        "Floss name": "Yellow Plum",
        "Hex Code": "#D9D56D",
        "RGB Value": "(217, 213, 109)"
    },
    "19": {
        "Floss name": "Autumn Gold medium Light",
        "Hex Code": "#F7C95F",
        "RGB Value": "(247, 201, 95)"
    },
    "20": {
        "Floss name": "Shrimp",
        "Hex Code": "#F7AF93",
        "RGB Value": "(247, 175, 147)"
    },
    "21": {
        "Floss name": "Alizarin Light",
        "Hex Code": "#D79982",
        "RGB Value": "(215, 153, 130)"
    },
    "22": {
        "Floss name": "Alizarin",
        "Hex Code": "#BC604E",
        "RGB Value": "(188, 96, 78)"
    },
    "23": {
        "Floss name": "Apple Blossom",
        "Hex Code": "#EDE2ED",
        "RGB Value": "(237, 226, 237)"
    },
    "24": {
        "Floss name": "White Lavender",
        "Hex Code": "#E0D7EE",
        "RGB Value": "(224, 215, 238)"
    },
    "25": {
        "Floss name": "Lavender Ultra Light",
        "Hex Code": "#DAD2E9",
        "RGB Value": "(218, 210, 233)"
    },
    "26": {
        "Floss name": "Lavender Pale",
        "Hex Code": "#D7CAE6",
        "RGB Value": "(215, 202, 230)"
    },
    "27": {
        "Floss name": "White Violet",
        "Hex Code": "#F0EEF9",
        "RGB Value": "(240, 238, 249)"
    },
    "28": {
        "Floss name": "Eggplant Medium Light",
        "Hex Code": "#9086A9",
        "RGB Value": "(144, 134, 169)"
    },
    "29": {
        "Floss name": "Eggplant",
        "Hex Code": "#674076",
        "RGB Value": "(103, 64, 118)"
    },
    "30": {
        "Floss name": "Blueberry Medium Light",
        "Hex Code": "#7D77A5",
        "RGB Value": "(125, 119, 165)"
    },
    "31": {
        "Floss name": "Blueberry",
        "Hex Code": "#50518D",
        "RGB Value": "(80, 81, 141)"
    },
    "32": {
        "Floss name": "Blueberry Dark",
        "Hex Code": "#4D2E8A",
        "RGB Value": "(77, 46, 138)"
    },
    "33": {
        "Floss name": "Fuschia",
        "Hex Code": "#9C599C",
        "RGB Value": "(156, 89, 158)"
    },
    "34": {
        "Floss name": "Fuschia Dark",
        "Hex Code": "#7D3064",
        "RGB Value": "(125, 48, 100)"
    },
    "35": {
        "Floss name": "Fuschia Very Dark",
        "Hex Code": "#46052D",
        "RGB Value": "(70, 5, 45)"
    },
    "unknown": {
        "Floss name": "unknown",
        "Hex Code": "unknown",
        "RGB Value": "unknown"
    },
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:number", (req, res) =>{
    const threadNumber = req.params.number
    if (threads[threadNumber]){
       res.json(threads[threadNumber])
    } else {
        res.json(threads["unknown"])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})