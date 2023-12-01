var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/account/:id', function(req, res, next) {
  res.json(
  {
  "avatar": {
    "gravatar": {
      "hash": "19232fd8c41adb1ab67822a1ec6f3dc3"
    },
    "tmdb": {
      "avatar_path": null
    }
  },
  "id": 20702514,
  "iso_639_1": "en",
  "iso_3166_1": "PH",
  "name": "",
  "include_adult": false,
  "username": "wilsonmarasigan"
}

  );
});

router.get('/account/:id/favorite/movies', function(req, res, next) {
  res.json(
    {
      "page": 1,
      "results": [],
      "total_pages": 0,
      "total_results": 0
    }

  )
});

router.get('/account/:id/favorite/tv', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/lists', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/rated/movies', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:id/rated/tv', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/account/:id/rated/tv', function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/account/:id/rated/tv/episodes', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:account_id/watchlist/movies', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/account/:account_id/watchlist/tv', function(req, res, next) {
  res.json({
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  });
});

router.get('/authentication/guest_session/new', function(req, res, next) {
  res.json({
    "success": true,
    "guest_session_id": "0f88ad697dea11655e0016a2cacf01f1",
    "expires_at": "2023-11-20 22:26:54 UTC"
  });
});

router.get('/authentication/token/new', function(req, res, next) {
  res.json({
    "success": true,
    "expires_at": "2023-11-19 23:28:29 UTC",
    "request_token": "86b587231e4b4acbe75f7a76dfbfdd7de79b5d19"
  });
});

router.get('/certification/movie/list', function(req, res, next) {
  res.json({
    "certifications": {
      "AU": [
        {
          "certification": "E",
          "meaning": "Exempt from classification. Films that are exempt from classification must not contain contentious material (i.e. material that would ordinarily be rated M or higher).",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General. The content is very mild in impact.",
          "order": 2
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance recommended. There are no age restrictions. The content is mild in impact.",
          "order": 3
        },
        {
          "certification": "M",
          "meaning": "Recommended for mature audiences. There are no age restrictions. The content is moderate in impact.",
          "order": 4
        },
        {
          "certification": "MA 15+",
          "meaning": "Mature Accompanied. Unsuitable for children younger than 15. Children younger than 15 years must be accompanied by a parent or guardian. The content is strong in impact.",
          "order": 5
        },
        {
          "certification": "R 18+",
          "meaning": "Restricted to 18 years and over. Adults only. The content is high in impact.",
          "order": 6
        },
        {
          "certification": "X 18+",
          "meaning": "Restricted to 18 years and over. Films with this rating have pornographic content. Films classified as X18+ are banned from being sold or rented in all Australian states and are only legally available in the Australian Capital Territory and the Northern Territory. However, importing X18+ material from the two territories to any of the Australian states is legal.The content is sexually explicit in impact.",
          "order": 7
        },
        {
          "certification": "RC",
          "meaning": "Refused Classification. Banned from sale or hire in Australia; also generally applies to importation (if inspected by and suspicious to Customs). Private Internet viewing is unenforced and attempts to legally censor such online material has resulted in controversy. Films are rated RC if their content exceeds the guidelines. The content is very high in impact.",
          "order": 8
        }
      ],
      "BG": [
        {
          "certification": "D",
          "meaning": "Prohibited for persons under 16.",
          "order": 4
        },
        {
          "certification": "X",
          "meaning": "Prohibited for persons under 18.",
          "order": 5
        },
        {
          "certification": "B",
          "meaning": "Without age restrictions.",
          "order": 2
        },
        {
          "certification": "C",
          "meaning": "Not recommended for children under 12.",
          "order": 3
        },
        {
          "certification": "A",
          "meaning": "Recommended for children.",
          "order": 1
        }
      ],
      "BR": [
        {
          "certification": "14",
          "meaning": "Not recommended for minors under fourteen. More violent material, stronger sex references and/or nudity.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Not recommended for minors under sixteen. Scenes featuring production, trafficking and/or use of illegal drugs, hyper-realistic sex, sexual violence, abortion, torture, mutilation, suicide, trivialization of violence and death penalty.",
          "order": 5
        },
        {
          "certification": "L",
          "meaning": "General Audiences. Do not expose children to potentially harmful content.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for minors under twelve. Scenes can include physical aggression, use of legal drugs and sexual innuendo.",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "Not recommended for minors under ten. Violent content or inappropriate language to children, even if of a less intensity.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "Not recommended for minors under eighteen. Scenes featuring explicit sex, incest, pedophilia, praising of the use of illegal drugs and violence of a strong imagery impact.",
          "order": 6
        }
      ],
      "CA": [
        {
          "certification": "G",
          "meaning": "All ages.",
          "order": 2
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance advised. There is no age restriction but some material may not be suitable for all children.",
          "order": 3
        },
        {
          "certification": "14A",
          "meaning": "Persons under 14 years of age must be accompanied by an adult.",
          "order": 4
        },
        {
          "certification": "18A",
          "meaning": "Persons under 18 years of age must be accompanied by an adult. In the Maritimes & Manitoba, children under the age of 14 are prohibited from viewing the film.",
          "order": 5
        },
        {
          "certification": "R",
          "meaning": "Restricted to 18 years and over. No rental or purchase by those under 18. Content not suitable for minors. Video contains frequent use of: sexual activity; brutal/graphic violence; intense horror; and/or other disturbing content.",
          "order": 6
        },
        {
          "certification": "A",
          "meaning": "Admittance restricted to people 18 years of age or older. Sole purpose of the film is the portrayal of sexually explicit activity and/or explicit violence.",
          "order": 7
        },
        {
          "certification": "E",
          "meaning": "Exempt. Contains material not subject to classification such as documentaries, nature, travel, music, arts and culture, sports and educational and instructional information.",
          "order": 1
        }
      ],
      "CA-QC": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "General Rating – May be viewed, rented or purchased by persons of all ages. If a film carrying a \"G\" rating might offend the sensibilities of a child under 8 years of age, \"Not suitable for young children\" is appended to the classification.",
          "order": 1
        },
        {
          "certification": "13+",
          "meaning": "13 years and over – May be viewed, rented or purchased only by children 13 years of age or over. Children under 13 may be admitted only if accompanied by an adult.",
          "order": 2
        },
        {
          "certification": "16+",
          "meaning": "16 years and over – May be viewed, rented or purchased only by children 16 years of age or over.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "18 years and over – May be viewed, rented or purchased only by adults 18 years of age or over. If a film contains real and explicit sexual activity \"Explicit sexuality\" is appended to the classification, and in the retail video industry storeowners are required to place the film in a room reserved for adults.",
          "order": 4
        }
      ],
      "DE": [
        {
          "certification": "12",
          "meaning": "Children 12 or older admitted, children between 6 and 11 only when accompanied by parent or a legal guardian.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "No youth admitted, only adults.",
          "order": 5
        },
        {
          "certification": "0",
          "meaning": "No age restriction.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "No children younger than 6 years admitted.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Children 16 or older admitted, nobody under this age admitted.",
          "order": 4
        }
      ],
      "DK": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "A",
          "meaning": "Suitable for a general audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children under 7.",
          "order": 2
        },
        {
          "certification": "11",
          "meaning": "For ages 11 and up.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "For ages 15 and up.",
          "order": 4
        },
        {
          "certification": "F",
          "meaning": "Exempt from classification.",
          "order": 5
        }
      ],
      "ES": [
        {
          "certification": "A",
          "meaning": "General admission.",
          "order": 1
        },
        {
          "certification": "Ai",
          "meaning": "General admission.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "Not recommended for audiences under 7.",
          "order": 3
        },
        {
          "certification": "7i",
          "meaning": "Not recommended for audiences under 7.",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "Not recommended for audiences under 12.",
          "order": 5
        },
        {
          "certification": "16",
          "meaning": "Not recommended for audiences under 16.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Not recommended for audiences under 18.",
          "order": 7
        },
        {
          "certification": "X",
          "meaning": "Prohibited for audiences under 18.",
          "order": 8
        }
      ],
      "FI": [
        {
          "certification": "K-16",
          "meaning": "Over 16 years.",
          "order": 4
        },
        {
          "certification": "K-12",
          "meaning": "Over 12 years.",
          "order": 3
        },
        {
          "certification": "K-7",
          "meaning": "Over 7 years.",
          "order": 2
        },
        {
          "certification": "S",
          "meaning": "For all ages.",
          "order": 1
        },
        {
          "certification": "K-18",
          "meaning": "Adults only.",
          "order": 5
        },
        {
          "certification": "KK",
          "meaning": "Banned from commercial distribution.",
          "order": 6
        }
      ],
      "FR": [
        {
          "certification": "TP",
          "meaning": "Valid for all audiences.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Unsuitable for children younger than 12 or forbidden in cinemas for under 12.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Unsuitable for children younger than 16 or forbidden in cinemas for under 16.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Unsuitable for children younger than 18 or forbidden in cinemas for under 18.",
          "order": 4
        }
      ],
      "GB": [
        {
          "certification": "15",
          "meaning": "Only those over 15 years are admitted. Nobody younger than 15 can rent or buy a 15-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category can contain adult themes, hard drugs, frequent strong language and limited use of very strong language, strong violence and strong sex references, and nudity without graphic detail. Sexual activity may be portrayed but without any strong detail. Sexual violence may be shown if discreet and justified by context.",
          "order": 5
        },
        {
          "certification": "R18",
          "meaning": "Can only be shown at licensed adult cinemas or sold at licensed sex shops, and only to adults, those aged 18 or over. Films under this category are always hard-core pornography, defined as material intended for sexual stimulation and containing clear images of real sexual activity, strong fetish material, explicit animated images, or sight of certain acts such as triple simultaneous penetration and snowballing. There remains a range of material that is often cut from the R18 rating: strong images of injury in BDSM or spanking works, urolagnia, scenes suggesting incest even if staged, references to underage sex or childhood sexual development and aggressive behaviour such as hair-pulling or spitting on a performer are not permitted. More cuts are demanded in this category than any other category.",
          "order": 7
        },
        {
          "certification": "PG",
          "meaning": "All ages admitted, but certain scenes may be unsuitable for young children. May contain mild language and sex/drugs references. May contain moderate violence if justified by context (e.g. fantasy).",
          "order": 2
        },
        {
          "certification": "12A",
          "meaning": "Films under this category are considered to be unsuitable for very young people. Those aged under 12 years are only admitted if accompanied by an adult, aged at least 18 years, at all times during the motion picture. However, it is generally not recommended that children under 12 years should watch the film. Films under this category can contain mature themes, discrimination, soft drugs, moderate swear words, infrequent strong language and moderate violence, sex references and nudity. Sexual activity may be briefly and discreetly portrayed. Sexual violence may be implied or briefly indicated.",
          "order": 3
        },
        {
          "certification": "U",
          "meaning": "All ages admitted, there is nothing unsuitable for children.",
          "order": 1
        },
        {
          "certification": "18",
          "meaning": "Only adults are admitted. Nobody younger than 18 can rent or buy an 18-rated VHS, DVD, Blu-ray Disc, UMD or game, or watch a film in the cinema with this rating. Films under this category do not have limitation on the bad language that is used. Hard drugs are generally allowed, and explicit sex references along with detailed sexual activity are also allowed. Scenes of strong real sex may be permitted if justified by the context. Very strong, gory, and/or sadistic violence is usually permitted. Strong sexual violence is permitted unless it is eroticised or excessively graphic.",
          "order": 6
        },
        {
          "certification": "12",
          "meaning": "Home media only since 2002. 12A-rated films are usually given a 12 certificate for the VHS/DVD version unless extra material has been added that requires a higher rating. Nobody younger than 12 can rent or buy a 12-rated VHS, DVD, Blu-ray Disc, UMD or game. The content guidelines are identical to those used for the 12A certificate.",
          "order": 4
        }
      ],
      "HU": [
        {
          "certification": "6",
          "meaning": "Not recommended below age of 6.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended below age of 16.",
          "order": 4
        },
        {
          "certification": "KN",
          "meaning": "Without age restriction.",
          "order": 1
        },
        {
          "certification": "18",
          "meaning": "Not recommended below age of 18.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "12",
          "meaning": "Not recommended below age of 12.",
          "order": 3
        },
        {
          "certification": "X",
          "meaning": "Restricted below 18, for adults only.",
          "order": 6
        }
      ],
      "IN": [
        {
          "certification": "U",
          "meaning": "Unrestricted Public Exhibition throughout India, suitable for all age groups. Films under this category should not upset children over 4. Such films may contain educational, social or family-oriented themes. Films under this category may also contain fantasy violence and/or mild bad language.",
          "order": 1
        },
        {
          "certification": "U/A 7+",
          "meaning": "Viewable for 7 and above years old.",
          "order": 2
        },
        {
          "certification": "UA",
          "meaning": "All ages admitted, but it is advised that children below 12 be accompanied by a parent as the theme or content may be considered intense or inappropriate for young children. Films under this category may contain mature themes, sexual references, mild sex scenes, violence with brief gory images and/or infrequent use of crude language.",
          "order": 3
        },
        {
          "certification": "U/A 13+",
          "meaning": "Viewable for 13 and above years old.",
          "order": 4
        },
        {
          "certification": "U/A 16+",
          "meaning": "Viewable for 16 and above years old.",
          "order": 5
        },
        {
          "certification": "A",
          "meaning": "Restricted to adult audiences (18 years or over). Nobody below the age of 18 may buy/rent an A-rated DVD, VHS, UMD or watch a film in the cinema with this rating. Films under this category may contain adult/disturbing themes, frequent crude language, brutal violence with blood and gore, strong sex scenes and/or scenes of drug abuse which is considered unsuitable for minors.",
          "order": 6
        },
        {
          "certification": "S",
          "meaning": "Restricted to any special class of persons.",
          "order": 7
        }
      ],
      "IT": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "T",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Not suitable for children under 6.",
          "order": 2
        },
        {
          "certification": "14+",
          "meaning": "Released to ages 14 and older; children who are at least 12 may be admitted with adult accompaniment.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Released to ages 18 and older; children who are at least 16 may be admitted with adult accompaniment.",
          "order": 4
        }
      ],
      "LT": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "V",
          "meaning": "Movies for the audience of all ages.",
          "order": 1
        },
        {
          "certification": "N-7",
          "meaning": "Movies for viewers from 7 years old. Younger than 7 years of age, viewers of this index have been featured only together with accompanying adult persons.",
          "order": 2
        },
        {
          "certification": "N-13",
          "meaning": "Movies for viewers from 13 years of age. The viewers from 7 to 13 years of age are allowed to enter this index only together with accompanying adult persons.",
          "order": 3
        },
        {
          "certification": "N-16",
          "meaning": "Movies for viewers from 16 years of age.",
          "order": 4
        },
        {
          "certification": "N-18",
          "meaning": "Movies for viewers from 18 years of age.",
          "order": 5
        }
      ],
      "MY": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "U",
          "meaning": "(Umum: \"General Audiences\") - For general audiences. (Used by the majority of films screened in Malaysia until 2008 but it continues only for television, notably for RTM.)",
          "order": 1
        },
        {
          "certification": "P13",
          "meaning": "(Penjaga 13 : \"Parental Guidance 13\") - Children under 13 not admitted unless accompanied by an adult. (Introduced in 2006, this became the official Malaysian motion picture rating system in 2008. The \"PG-13\" rating was revised to \"P13\" from April 2012 onwards to emphasize the use of Malay language instead of English.) Passionate kissing scenes are not allowed under a P13 rating.",
          "order": 2
        },
        {
          "certification": "18SG",
          "meaning": "(Seram, Ganas: \"Graphic Violence and Horror/Terror\") - Film may contain strong violence, gore or horror/terror people may find objectionable.",
          "order": 3
        },
        {
          "certification": "18SX",
          "meaning": "(Seks: \"Sexual Content\") - Film may contain sex scenes, nudity or sexual dialogue/references people may find objectionable (despite scenes of sex and nudity being strictly censored off by the LPF.)",
          "order": 4
        },
        {
          "certification": "18PA",
          "meaning": "(Politik, Agama: \"Strong Religious or Political Elements\") - Film may contain elements which include religious, social or political aspects people may find objectionable. Rarely used.",
          "order": 5
        },
        {
          "certification": "18PL",
          "meaning": "(Pelbagai: \"Various\") - Film may contain strong violence, gore, horror/terror, sex scenes, nudity, sexual dialogues/references, religious, social or political aspects people may find objectionable. The majority of the 18+ movies use this rating. For example, a film with sex scenes and strong violence will be classified as 18PL, despite scenes of sex and nudity being strictly censored off by the LPF.",
          "order": 6
        }
      ],
      "NL": [
        {
          "certification": "AL",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Potentially harmful to children under 6 years.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Potentially harmful to children under 9 years.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Potentially harmful to children under 12 years; broadcasting is not allowed before 8:00 pm.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Potentially harmful to children under 16 years; broadcasting is not allowed before 10:00 pm.",
          "order": 6
        },
        {
          "certification": "14",
          "meaning": "Potentially harmful to children under 14 years; broadcasting is not allowed before 8:00 pm.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Potentially harmful to (and not allowed for) children under 18 years; broadcasting is not allowed before midnight.",
          "order": 7
        }
      ],
      "NO": [
        {
          "certification": "6",
          "meaning": "6 years (no restriction for children accompanied by an adult).",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "9 years (children down to 6 years accompanied by an adult).",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "18",
          "meaning": " 18 years (absolute lower limit).",
          "order": 6
        },
        {
          "certification": "15",
          "meaning": "15 years (young down to 12 years accompanied by an adult).",
          "order": 5
        },
        {
          "certification": "12",
          "meaning": "12 years (children down to 9 years accompanied by an adult).",
          "order": 4
        },
        {
          "certification": "A",
          "meaning": "Suitable for all.",
          "order": 1
        }
      ],
      "NZ": [
        {
          "certification": "G",
          "meaning": "Suitable for general audiences.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance recommended for younger viewers.",
          "order": 2
        },
        {
          "certification": "M",
          "meaning": "Suitable for (but not restricted to) mature audiences 16 years and up.",
          "order": 3
        },
        {
          "certification": "R13",
          "meaning": "Restricted to persons 13 years of age and over.",
          "order": 4
        },
        {
          "certification": "R15",
          "meaning": "Restricted to persons 15 years of age and over.",
          "order": 6
        },
        {
          "certification": "R16",
          "meaning": "Restricted to persons 16 years of age and over.",
          "order": 7
        },
        {
          "certification": "R18",
          "meaning": "Restricted to persons 18 years of age and over.",
          "order": 9
        },
        {
          "certification": "R",
          "meaning": "Restricted to a particular class of persons, or for particular purposes, or both.",
          "order": 11
        },
        {
          "certification": "RP13",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "RP16",
          "meaning": "",
          "order": 8
        },
        {
          "certification": "RP18",
          "meaning": "",
          "order": 10
        }
      ],
      "PH": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "PG",
          "meaning": "Viewers below 13 years old must be accompanied by a parent or supervising adult.",
          "order": 2
        },
        {
          "certification": "X",
          "meaning": "“X-rated” films are not suitable for public exhibition.",
          "order": 6
        },
        {
          "certification": "R-18",
          "meaning": "Only viewers who are 18 years old and above can be admitted.",
          "order": 5
        },
        {
          "certification": "R-16",
          "meaning": "Only viewers who are 16 years old and above can be admitted.",
          "order": 4
        },
        {
          "certification": "G",
          "meaning": "Viewers of all ages are admitted.",
          "order": 1
        },
        {
          "certification": "R-13",
          "meaning": "Only viewers who are 13 years old and above can be admitted.",
          "order": 3
        }
      ],
      "PT": [
        {
          "certification": "Públicos",
          "meaning": "For all the public (especially designed for children under 3 years of age).",
          "order": 1
        },
        {
          "certification": "M/3",
          "meaning": "Passed for viewers aged 3 and older.",
          "order": 2
        },
        {
          "certification": "M/6",
          "meaning": "Passed for viewers aged 6 and older.",
          "order": 3
        },
        {
          "certification": "M/12",
          "meaning": "Passed for viewers aged 12 and older.",
          "order": 4
        },
        {
          "certification": "M/14",
          "meaning": "Passed for viewers aged 14 and older.",
          "order": 5
        },
        {
          "certification": "M/16",
          "meaning": "Passed for viewers aged 16 and older.",
          "order": 6
        },
        {
          "certification": "M/18",
          "meaning": "Passed for viewers aged 18 and older.",
          "order": 7
        },
        {
          "certification": "P",
          "meaning": "Special rating supplementary to the M/18 age rating denoting pornography.",
          "order": 8
        }
      ],
      "RU": [
        {
          "certification": "6+",
          "meaning": "(For children above 6) – Unsuitable for children under 6.",
          "order": 2
        },
        {
          "certification": "0+",
          "meaning": "All ages are admitted.",
          "order": 1
        },
        {
          "certification": "16+",
          "meaning": "(For children above 16) – Unsuitable for children under 16.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "(Prohibited for children) – Prohibited for children under 18.",
          "order": 5
        },
        {
          "certification": "12+",
          "meaning": "(For children above 12) – Unsuitable for children under 12.",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        }
      ],
      "SE": [
        {
          "certification": "11",
          "meaning": "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11.",
          "order": 3
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "15",
          "meaning": "Children over the age of 7, who are accompanied by an adult, are admitted to films that have been passed for children from the age of 11. Updated on March 1, 2017.",
          "order": 4
        },
        {
          "certification": "Btl",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Children under the age of 7, who are accompanied by an adult (a person aged 18 or over), are admitted to films that have been passed for children from the age of 7.",
          "order": 2
        }
      ],
      "US": [
        {
          "certification": "R",
          "meaning": "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
          "order": 4
        },
        {
          "certification": "PG",
          "meaning": "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
          "order": 2
        },
        {
          "certification": "NC-17",
          "meaning": "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
          "order": 5
        },
        {
          "certification": "G",
          "meaning": "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
          "order": 1
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "PG-13",
          "meaning": "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
          "order": 3
        }
      ],
      "KR": [
        {
          "certification": "All",
          "meaning": "Film suitable for all ages.",
          "order": 0
        },
        {
          "certification": "12",
          "meaning": "Film intended for audiences 12 and over. Underage audiences accompanied by a parent or guardian are allowed.",
          "order": 1
        },
        {
          "certification": "15",
          "meaning": "Film intended for audiences 15 and over. Underage audiences accompanied by a parent or guardian are allowed.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "No one under 18 is allowed to watch this film.",
          "order": 3
        },
        {
          "certification": "Restricted Screening",
          "meaning": "Film needs a certain restriction in screening or advertisement as it is considered a highly bad influence to universal human dignity, social value, good customs or national emotion due to excessive expression of nudity, violence, social behavior, etc. (technically not an age restriction but films with this rating may only be screened at \"adults only\" theatres, with the age of majority set at 19).",
          "order": 4
        }
      ],
      "SK": [
        {
          "certification": "U",
          "meaning": "General audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children younger than 7 years.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Not recommended for people younger than 12 years.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Not recommended for people younger than 15 years.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Prohibited for minors under 18 years of age.",
          "order": 5
        }
      ],
      "TH": [
        {
          "certification": "P",
          "meaning": "Educational.",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General audience",
          "order": 2
        },
        {
          "certification": "13",
          "meaning": "Suitable for viewers aged 13 years and over.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Suitable for viewers aged 15 years and over",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Suitable for viewers aged 18 years and over.",
          "order": 5
        },
        {
          "certification": "20",
          "meaning": "Content is unsuitable for viewers aged under 20",
          "order": 6
        },
        {
          "certification": "Banned",
          "meaning": "Films that are not allowed to screen publicly in Thailand",
          "order": 7
        }
      ],
      "MX": [
        {
          "certification": "AA",
          "meaning": "Informative-only rating: Understandable for children under 7 years.",
          "order": 1
        },
        {
          "certification": "A",
          "meaning": "Information-only rating: For all age groups.",
          "order": 2
        },
        {
          "certification": "B",
          "meaning": "Information-only rating: For adolescents 12 years and older.",
          "order": 3
        },
        {
          "certification": "B-15",
          "meaning": "Information-only rating: Not recommended for children under 15.",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Restrictive rating: For adults 18 and older.",
          "order": 5
        },
        {
          "certification": "D",
          "meaning": "Restrictive rating: Adult movies (legally prohibited to those under 18 years of age).",
          "order": 6
        }
      ],
      "ID": [
        {
          "certification": "SU",
          "meaning": "All ages.",
          "order": 1
        },
        {
          "certification": "13+",
          "meaning": "Suitable for ages 13 and above.",
          "order": 2
        },
        {
          "certification": "17+",
          "meaning": "Suitable for ages 17 and above.",
          "order": 3
        },
        {
          "certification": "21+",
          "meaning": "Suitable for ages 21 and above.",
          "order": 4
        }
      ],
      "TR": [
        {
          "certification": "Genel İzleyici Kitlesi",
          "meaning": "General audience.",
          "order": 1
        },
        {
          "certification": "6A",
          "meaning": "Viewers under the age of 6 may watch with accompanying family members.",
          "order": 2
        },
        {
          "certification": "6+",
          "meaning": "Suitable for viewers aged 6 and over.",
          "order": 3
        },
        {
          "certification": "10A",
          "meaning": "Viewers under the age of 10 may watch with accompanying family members.",
          "order": 4
        },
        {
          "certification": "10+",
          "meaning": "Suitable for viewers aged 10 and over.",
          "order": 5
        },
        {
          "certification": "13A",
          "meaning": "Viewers under the age of 13 may watch with accompanying family members.",
          "order": 6
        },
        {
          "certification": "13+",
          "meaning": "Suitable for viewers aged 13 and over.",
          "order": 7
        },
        {
          "certification": "16+",
          "meaning": "Suitable for viewers aged 16 and over.",
          "order": 8
        },
        {
          "certification": "18+",
          "meaning": "Suitable for viewers aged 18 and over.",
          "order": 9
        }
      ],
      "AR": [
        {
          "certification": "ATP",
          "meaning": "For all public.",
          "order": 1
        },
        {
          "certification": "+13",
          "meaning": "Suitable for 13-year-olds and over. Children under the age of 13 are admitted if accompanied by an adult.",
          "order": 2
        },
        {
          "certification": "+16",
          "meaning": "Suitable for 16-year-olds and over.",
          "order": 3
        },
        {
          "certification": "+18",
          "meaning": "Suitable for 18-year-olds and over.",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Suitable for 18-year-olds and over. Restricted to specially licensed venues.",
          "order": 5
        }
      ],
      "GR": [
        {
          "certification": "K",
          "meaning": "No restrictions.",
          "order": 1
        },
        {
          "certification": "K12",
          "meaning": "The film may contain mild violence and adult themes. Suitable for people aged 13 and above.",
          "order": 2
        },
        {
          "certification": "K15",
          "meaning": "The film may contain violence, drug abuse, and softcore pornographic scenes. An ID card certifying the age is required in all Greek cinemas and video rental shops in order to get a cinema ticket or rent a video of a ",
          "order": 3
        },
        {
          "certification": "K18",
          "meaning": "Not permitted to people under the age of 18.",
          "order": 4
        }
      ],
      "TW": [
        {
          "certification": "0+",
          "meaning": "Viewing is permitted for audiences of all ages.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Viewing is not permitted for children under 6; children between 6 and 11 shall be accompanied and given guidance by parents, teachers, seniors, or adult relatives or friends.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Viewing is not permitted for children under 12.",
          "order": 3
        },
        {
          "certification": "15+",
          "meaning": "Viewing is not permitted for those under 15.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Viewing is not permitted for those under 18.",
          "order": 5
        }
      ],
      "ZA": [
        {
          "certification": "A",
          "meaning": "Suitable for all.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental Guidance.",
          "order": 2
        },
        {
          "certification": "7-9PG",
          "meaning": "Not suitable for children under the age of 7. Children aged 7–9 years old may not be admitted unless accompanied by an adult.",
          "order": 3
        },
        {
          "certification": "10-12PG",
          "meaning": "Not suitable for children under the age of 10. Children aged 10–12 years old may not be admitted unless accompanied by an adult.",
          "order": 4
        },
        {
          "certification": "13",
          "meaning": "Not suitable for children under the age of 13.",
          "order": 5
        },
        {
          "certification": "16",
          "meaning": "Not suitable for persons under the age of 16.",
          "order": 6
        },
        {
          "certification": "18",
          "meaning": "Not suitable for persons under the age of 18.",
          "order": 7
        },
        {
          "certification": "X18",
          "meaning": "No one under 18 admitted; restricted to licensed adult premises.",
          "order": 8
        },
        {
          "certification": "XX",
          "meaning": "Must not be distributed or exhibited in public.",
          "order": 9
        }
      ],
      "SG": [
        {
          "certification": "G",
          "meaning": "Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Suitable for all but parents should guide their young.",
          "order": 2
        },
        {
          "certification": "PG13",
          "meaning": "Suitable for persons aged 13 and above but parental guidance is advised for children below 13.",
          "order": 3
        },
        {
          "certification": "NC16",
          "meaning": "Suitable for persons aged 16 and above.",
          "order": 4
        },
        {
          "certification": "M18",
          "meaning": "Suitable for persons aged 18 and above.",
          "order": 5
        },
        {
          "certification": "R21",
          "meaning": "Suitable for adults aged 21 and above (restricted to licensed cinemas).",
          "order": 6
        }
      ],
      "IE": [
        {
          "certification": "G",
          "meaning": "Suitable for children of school going age (note: children can be enrolled in school from the age of 4).",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Suitable for children over the age of 8. Parental guidance is recommended for children under the age of 12.",
          "order": 2
        },
        {
          "certification": "12A",
          "meaning": "Suitable for viewers of 12 and over. Younger children may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 3
        },
        {
          "certification": "15A",
          "meaning": "Suitable for viewers of 15 and over. Younger viewers may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Suitable for viewers of 16 and over. Younger viewers are not admitted.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Suitable only for adults. Viewers under 18 are not admitted at cinemas or permitted to purchase/rent the video.",
          "order": 6
        },
        {
          "certification": "12",
          "meaning": "Suitable for viewers of 12 and over. Younger children may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Suitable for viewers of 15 and over. Younger viewers may be admitted to the film at cinemas if accompanied by an adult; on home video younger viewers are not permitted to purchase/rent the video.",
          "order": 4
        }
      ],
      "PR": [
        {
          "certification": "G",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "PG-13",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "NC-17",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        }
      ],
      "JP": [
        {
          "certification": "G",
          "meaning": "General, suitable for all ages.",
          "order": 1
        },
        {
          "certification": "PG12",
          "meaning": "Parental guidance requested for young people under 12 years.",
          "order": 2
        },
        {
          "certification": "R15+",
          "meaning": "No one under 15 admitted.",
          "order": 3
        },
        {
          "certification": "R18+",
          "meaning": "No one under 18 admitted.",
          "order": 4
        }
      ],
      "VI": [
        {
          "certification": "G",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Some material may not be suitable for children.",
          "order": 2
        },
        {
          "certification": "PG-13",
          "meaning": "Some material may be inappropriate for children under 13.",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "Under 17 requires accompanying parent or adult guardian.",
          "order": 4
        },
        {
          "certification": "NC-17",
          "meaning": "No one 17 and under admitted.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        }
      ],
      "CH": [
        {
          "certification": "0",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "8",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "14",
          "meaning": "",
          "order": 6
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 7
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 8
        }
      ],
      "IL": [
        {
          "certification": "All",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "14",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 5
        }
      ],
      "HK": [
        {
          "certification": "I",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "IIA",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "IIB",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "III",
          "meaning": "",
          "order": 4
        }
      ],
      "MO": [
        {
          "certification": "A",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "B",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "C",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "D",
          "meaning": "",
          "order": 4
        }
      ],
      "LV": [
        {
          "certification": "U",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "7+",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16+",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "",
          "order": 5
        }
      ],
      "LU": [
        {
          "certification": "EA",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "",
          "order": 5
        }
      ],
      "CZ": [
        {
          "certification": "UR",
          "meaning": "Not rated.",
          "order": 0
        },
        {
          "certification": "U",
          "meaning": "No age limit.",
          "order": 1
        },
        {
          "certification": "12+",
          "meaning": "Unsuitable for persons under the age of 12.",
          "order": 2
        },
        {
          "certification": "15+",
          "meaning": "Unsuitable for persons under the age of 15.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Unsuitable for persons under the age of 18.",
          "order": 4
        }
      ]
    }
  });
});

router.get('/certification/tv/list', function(req, res, next) {
  res.json({
    "certifications": {
      "AU": [
        {
          "certification": "P",
          "meaning": "Programming is intended for younger children 2–11; commercial stations must show at least 30 minutes of P-rated content each weekday and weekends at all times. No advertisements may be shown during P-rated programs.",
          "order": 1
        },
        {
          "certification": "C",
          "meaning": "Programming intended for older children 5–14; commercial stations must show at least 30 minutes of C-rated content each weekday between 7 a.m. and 8 a.m. or between 4 p.m. and 8:30 p.m. A further 2 and a half ours a week must also be shown either within these time bands or between 7 a.m. and 8:30 p.m. on weekends and school holidays, for a total of five hours a week (averaged as 260 hours over the course of a year). C-rated content is subject to certain restrictions and limitations on advertising (typically five minutes maximum per 30-minute period or seven minutes including promotions and community announcements).",
          "order": 2
        },
        {
          "certification": "G",
          "meaning": "For general exhibition; all ages are permitted to watch programming with this rating.",
          "order": 3
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance is recommended for young viewers; PG-rated content may air at any time on digital-only channels, otherwise, it should only be broadcast between 8:30 a.m. and 4:00 p.m. and between 7:00 p.m. and 6:00 a.m. on weekdays, and between 10:00 a.m. and 6:00 a.m. on weekends.",
          "order": 4
        },
        {
          "certification": "M",
          "meaning": "Recommended for mature audiences; M-rated content may only be broadcast between 8:30 p.m. and 5:00 a.m. on any day, and additionally between 12:00 p.m. and 3:00 p.m. on schooldays.",
          "order": 5
        },
        {
          "certification": "MA 15+",
          "meaning": "Not suitable for children and teens under 15; MA15+-rated programming may only be broadcast between 9:00 p.m. and 5:00 a.m. on any given day. Consumer advice is mandatory. Some R18+ rated movies on DVD/Blu-ray are often re-edited on free TV/cable channels to secure a more ",
          "order": 6
        },
        {
          "certification": "AV 15+",
          "meaning": "Not suitable for children and teens under 15; this is the same as the MA15+ rating, except the ",
          "order": 7
        },
        {
          "certification": "R 18+",
          "meaning": "Not for children under 18; this is limited to Adult ",
          "order": 8
        }
      ],
      "BR": [
        {
          "certification": "14",
          "meaning": "Content suitable for viewers over the age of 14.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Content suitable for viewers over the age of 16.",
          "order": 4
        },
        {
          "certification": "L",
          "meaning": "Content is suitable for all audiences.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Content suitable for viewers over the age of 10.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for viewers over the age of 12.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "Content suitable for viewers over the age of 18.",
          "order": 5
        }
      ],
      "CA": [
        {
          "certification": "Exempt",
          "meaning": "Shows which are exempt from ratings (such as news and sports programming) will not display an on-screen rating at all.",
          "order": 1
        },
        {
          "certification": "C",
          "meaning": "Programming suitable for children ages of 2–7 years. No profanity or sexual content of any level allowed. Contains little violence.",
          "order": 2
        },
        {
          "certification": "C8",
          "meaning": "Suitable for children ages 8+. Low level violence and fantasy horror is allowed. No foul language is allowed, but occasional ",
          "order": 3
        },
        {
          "certification": "G",
          "meaning": "Suitable for general audiences. Programming suitable for the entire family with mild violence, and mild profanity and/or censored language.",
          "order": 4
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance. Moderate violence and moderate profanity is allowed, as is brief nudity and sexual references if important to the context of the story.",
          "order": 5
        },
        {
          "certification": "14+",
          "meaning": "Programming intended for viewers ages 14 and older. May contain strong violence and strong profanity, and depictions of sexual activity as long as they are within the context of a story.",
          "order": 6
        },
        {
          "certification": "18+",
          "meaning": "Programming intended for viewers ages 18 and older. May contain explicit violence and sexual activity. Programming with this rating cannot air before the watershed (9:00 p.m. to 6:00 a.m.).",
          "order": 7
        }
      ],
      "CA-QC": [
        {
          "certification": "18+",
          "meaning": "Only to be viewed by adults and may contain extreme violence and graphic sexual content. It is mostly used for 18+ movies and pornography.",
          "order": 5
        },
        {
          "certification": "13+",
          "meaning": "Appropriate – suitable for children 13 and up and may contain with moderate violence, language, and some sexual situations.",
          "order": 3
        },
        {
          "certification": "8+",
          "meaning": "Appropriate for children 8 and up may contain with little violence, language, and little to no sexual situations.",
          "order": 2
        },
        {
          "certification": "16+",
          "meaning": "Recommended for children over the age of 16 and may contain with strong violence, strong language, and strong sexual content.",
          "order": 4
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "Appropriate for all ages and must contain little or no violence and little to no sexual content.",
          "order": 1
        }
      ],
      "DE": [
        {
          "certification": "0",
          "meaning": "Can be aired at any time.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Can be aired at any time.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "The broadcaster must take the decision about the air time by taking in consideration the impact on young children in the timeframe from 6:00am to 8:00pm.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Can be aired only from 10:00pm Uhr to 6:00am.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Can be aired only from 11:00pm Uhr to 6:00am.",
          "order": 5
        }
      ],
      "ES": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "ERI",
          "meaning": "Specially recommended for younger children.",
          "order": 1
        },
        {
          "certification": "TP",
          "meaning": "For general viewing.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "Not recommended for viewers under the age of 7.",
          "order": 3
        },
        {
          "certification": "10",
          "meaning": "Not recommended for viewers under the age of 10.",
          "order": 4
        },
        {
          "certification": "12",
          "meaning": "Not recommended for viewers under the age of 12.",
          "order": 5
        },
        {
          "certification": "13",
          "meaning": "Not recommended for viewers under the age of 13.",
          "order": 6
        },
        {
          "certification": "16",
          "meaning": "Not recommended for viewers under the age of 16.",
          "order": 7
        },
        {
          "certification": "18",
          "meaning": "Not recommended for viewers under the age of 18.",
          "order": 8
        }
      ],
      "FR": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Not recommended for children under 10. Not allowed in children's television series.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for children under 12. Not allowed air before 10:00 p.m. Some channels and programs are subject to exception.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended for children under 16. Not allowed air before 10:30 p.m. Some channels and programs are subject to exception.",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Not recommended for persons under 18. Allowed between midnight and 5 a.m. and only in some channels, access to these programs is locked by a personal password.",
          "order": 4
        }
      ],
      "GB": [
        {
          "certification": "U",
          "meaning": "The U symbol stands for Universal. A U film should be suitable for audiences aged four years and over.",
          "order": 0
        },
        {
          "certification": "PG",
          "meaning": "PG stands for Parental Guidance. This means a film is suitable for general viewing, but some scenes may be unsuitable for young children. A PG film should not unsettle a child aged around eight or older.",
          "order": 1
        },
        {
          "certification": "12A",
          "meaning": "Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12. 12A requires an adult to accompany any child under 12 seeing a 12A film at the cinema.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Films classified 12A and video works classified 12 contain material that is not generally suitable for children aged under 12.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "No-one under 15 is allowed to see a 15 film at the cinema or buy/rent a 15 rated video. 15 rated works are not suitable for children under 15 years of age.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Films rated 18 are for adults. No-one under 18 is allowed to see an 18 film at the cinema or buy / rent an 18 rated video. No 18 rated works are suitable for children.",
          "order": 5
        },
        {
          "certification": "R18",
          "meaning": "The R18 category is a special and legally-restricted classification primarily for explicit works of consenting sex or strong fetish material involving adults.",
          "order": 6
        }
      ],
      "HU": [
        {
          "certification": "Unrated",
          "meaning": "Without age restriction.",
          "order": 1
        },
        {
          "certification": "Children",
          "meaning": "Programs recommended for children. It is an optional rating, there is no obligation for broadcasters to indicate it.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Programs not recommended for teens and children below the age of 16, may contain more intensive violence and sexual content. A yellow circle with the number 16 written inside is used for this rating.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "The program is recommended only for adult viewers (for ages 18 and up), may contain explicit violence and explicit sexual content. A red circle with the number 18 written inside is used for this rating (the red circle was also used until 2002, but it did not contain any number in it).",
          "order": 6
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "6",
          "meaning": "Programs not recommended for children below the age of 6, may not contain any violence or sexual content. A yellow circle with the number 6 written inside is used for this rating.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Programs not recommended for children below the age of 12, may contain light sexual content or explicit language. Most films without serious violence or sexual content fit into this category as well. A yellow circle with the number 12 written inside is used for this rating.",
          "order": 4
        }
      ],
      "KR": [
        {
          "certification": "Exempt",
          "meaning": "This rating is only for knowledge based game shows; lifestyle shows; documentary shows; news; current topic discussion shows; education/culture shows; sports that excludes MMA or other violent sports; and other programs that Korea Communications Standards Commission recognizes.",
          "order": 1
        },
        {
          "certification": "ALL",
          "meaning": "This rating is for programming that is appropriate for all ages. This program usually involves programs designed for children or families.",
          "order": 2
        },
        {
          "certification": "7",
          "meaning": "This rating is for programming that may contain material inappropriate for children younger than 7, and parental discretion should be used. Some cartoon programming not deemed strictly as ",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "This rating is for programs that may deemed inappropriate for those younger than 12, and parental discretion should be used. Usually used for animations that have stronger themes or violence then those designed for children, or for reality shows that have mild violence, themes, or language.",
          "order": 4
        },
        {
          "certification": "15",
          "meaning": "This rating is for programs that contain material that may be inappropriate for children under 15, and that parental discretion should be used. Examples include most dramas, and talk shows on OTA (over-the-air) TV (KBS, MBC, SBS), and many American TV shows/dramas on Cable TV channels like OCN and OnStyle. The programs that have this rating may include moderate or strong adult themes, language, sexual inference, and violence. As with the TV-MA rating in North America, this rating is commonly applied to live events where the occurrence of inappropriate dialogue is unpredictable. Since 2007, this rating is the most used rating for TV.",
          "order": 5
        },
        {
          "certification": "19",
          "meaning": "This rating is for programs that are intended for adults only. 19-rated programming cannot air during the hours of 7:00AM to 9:00AM, and 1:00PM to 10:00PM. Programmes that receive this rating will almost certainly have adult themes, sexual situations, frequent use of strong language and disturbing scenes of violence.",
          "order": 6
        }
      ],
      "LT": [
        {
          "certification": "S",
          "meaning": "Intended for adult viewers from the age of 18 (corresponding to the age-appropriate index N-18) and broadcast between 23 (11pm) and 6 (6am) hours; Limited to minors and intended for adult audiences.",
          "order": 3
        },
        {
          "certification": "N-14",
          "meaning": "Intended for viewers from 14 years of age and broadcast from 21 (9pm) to 6 (6am) hours.",
          "order": 2
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "N-7",
          "meaning": "Intended for viewers from 7 years old.",
          "order": 1
        }
      ],
      "NL": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "AL",
          "meaning": "Not harmful / All Ages.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Take care with children under 6.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Take care with children under 9.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Take care with children under 12.",
          "order": 4
        },
        {
          "certification": "16",
          "meaning": "Take care with children under 16.",
          "order": 6
        },
        {
          "certification": "14",
          "meaning": "Take care with children under 14.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Take care with children under 18.",
          "order": 7
        }
      ],
      "PH": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "G",
          "meaning": "Suitable for all ages. Material for television, which in the judgment of the Board does not contain anything unsuitable for children.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental guidance suggested. Material for television, which, in the judgment of the Board, may contain some adult material that may be permissible for children to watch but only under the guidance and supervision of a parent or adult.",
          "order": 2
        },
        {
          "certification": "SPG",
          "meaning": "Stronger and more vigilant parental guidance is suggested. Programs classified as “SPG” may contain more serious topic and theme, which may not be advisable for children to watch except under the very vigilant guidance and presence of a parent or an adult.",
          "order": 3
        },
        {
          "certification": "X",
          "meaning": "Any television program that does not conform to the “G”, “PG”, and “SPG” classification shall be disapproved for television broadcast.",
          "order": 4
        }
      ],
      "PT": [
        {
          "certification": "12AP",
          "meaning": "Acompanhamento Parental (may not be suitable for children under 12, parental guidance advised).",
          "order": 3
        },
        {
          "certification": "18",
          "meaning": "Not suitable for children under 18.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "16",
          "meaning": "Not suitable for children under 16, access to these programs is locked by a personal password.",
          "order": 4
        },
        {
          "certification": "T",
          "meaning": "Todos (suitable for all).",
          "order": 1
        },
        {
          "certification": "10AP",
          "meaning": "Acompanhamento Parental (may not be suitable for children under 10, parental guidance advised).",
          "order": 2
        }
      ],
      "RU": [
        {
          "certification": "16+",
          "meaning": "Only teens the age of 16 or older can watch.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Restricted to People 18 or Older.",
          "order": 5
        },
        {
          "certification": "6+",
          "meaning": "Only kids the age of 6 or older can watch.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Only kids the age of 12 or older can watch.",
          "order": 3
        },
        {
          "certification": "0+",
          "meaning": "Can be watched by Any Age.",
          "order": 1
        }
      ],
      "SK": [
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "7",
          "meaning": "Content suitable for children over 6 years.",
          "order": 2
        },
        {
          "certification": "U",
          "meaning": "Content suitable for all children.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for children over 12 years.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "Content suitable for teens over 15 years.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Content exclusively for adults.",
          "order": 5
        }
      ],
      "TH": [
        {
          "certification": "ส",
          "meaning": "Sor - Educational movies which the public should be encouraged to see.",
          "order": 1
        },
        {
          "certification": "ท",
          "meaning": "Tor - G Movies appropriate for the general public. No sex, abusive language or violence.",
          "order": 2
        },
        {
          "certification": "น 13+",
          "meaning": "Nor 13+ Movies appropriate for audiences aged 13 and older.",
          "order": 3
        },
        {
          "certification": "น 15+",
          "meaning": "Nor 15+ Movies appropriate for audiences aged 15 and older. Some violence, brutality, inhumanity, bad language or indecent gestures allowed.",
          "order": 4
        },
        {
          "certification": "น 18+",
          "meaning": "Nor 18+ Movies appropriate for audiences aged 18 and older.",
          "order": 5
        },
        {
          "certification": "ฉ 20-",
          "meaning": "Chor 20 - Movies prohibited for audiences aged below 20.",
          "order": 6
        },
        {
          "certification": "-",
          "meaning": "Banned.",
          "order": 7
        }
      ],
      "US": [
        {
          "certification": "TV-MA",
          "meaning": "This program is specifically designed to be viewed by adults and therefore may be unsuitable for children under 17.",
          "order": 6
        },
        {
          "certification": "TV-Y",
          "meaning": "This program is designed to be appropriate for all children.",
          "order": 1
        },
        {
          "certification": "TV-14",
          "meaning": "This program contains some material that many parents would find unsuitable for children under 14 years of age.",
          "order": 5
        },
        {
          "certification": "NR",
          "meaning": "No rating information.",
          "order": 0
        },
        {
          "certification": "TV-PG",
          "meaning": "This program contains material that parents may find unsuitable for younger children.",
          "order": 4
        },
        {
          "certification": "TV-Y7",
          "meaning": "This program is designed for children age 7 and above.",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "Most parents would find this program suitable for all ages.",
          "order": 3
        }
      ],
      "IT": [
        {
          "certification": "T",
          "meaning": "All ages admitted.",
          "order": 1
        },
        {
          "certification": "BA",
          "meaning": "Parental guidance suggested.",
          "order": 2
        },
        {
          "certification": "VM12",
          "meaning": "Not recommended for children under 12.",
          "order": 3
        },
        {
          "certification": "VM14",
          "meaning": "Not recommended for children under 14.",
          "order": 4
        },
        {
          "certification": "VM18",
          "meaning": "Not recommended for children under 18.",
          "order": 5
        }
      ],
      "FI": [
        {
          "certification": "S",
          "meaning": "Allowed at all times.",
          "order": 0
        },
        {
          "certification": "K7",
          "meaning": "Not allowed air before 7:00 a.m., not recommended for children under 7.",
          "order": 1
        },
        {
          "certification": "K12",
          "meaning": "Not allowed air before 5:00 p.m., not recommended for children under 12.",
          "order": 2
        },
        {
          "certification": "K16",
          "meaning": "Not allowed air before 9:00 p.m., not recommended for children under 16.",
          "order": 3
        },
        {
          "certification": "K18",
          "meaning": "Not allowed air before 11:00 p.m., not recommended for children under 18.",
          "order": 4
        }
      ],
      "MY": [
        {
          "certification": "U",
          "meaning": "No age limit. Can be broadcast anytime.",
          "order": 1
        },
        {
          "certification": "P13",
          "meaning": "Viewers under 13 years of age need parental/guardian supervision while viewing. Can be broadcast anytime, but some elements may only be broadcast at night.",
          "order": 2
        },
        {
          "certification": "18",
          "meaning": "For viewers 18 and above. Cannot be broadcast before 10:00 PM.",
          "order": 3
        }
      ],
      "NZ": [
        {
          "certification": "G",
          "meaning": "Approved for general viewing.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Parental Guidance recommended for younger viewers.",
          "order": 2
        },
        {
          "certification": "M",
          "meaning": "Suitable for mature audiences 16 years and over.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "People under 16 years should not view.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "People under 18 years should not view.",
          "order": 5
        }
      ],
      "NO": [
        {
          "certification": "A",
          "meaning": "Allowed at all times.",
          "order": 1
        },
        {
          "certification": "6",
          "meaning": "Allowed at all times.",
          "order": 2
        },
        {
          "certification": "9",
          "meaning": "Allowed at all times.",
          "order": 3
        },
        {
          "certification": "12",
          "meaning": "Only allowed during the period 19.00 – 05.30.",
          "order": 4
        },
        {
          "certification": "15",
          "meaning": "Only allowed during the period 21.00 – 05.30.",
          "order": 5
        },
        {
          "certification": "18",
          "meaning": "Only allowed during the period 21.00 – 05.30.",
          "order": 6
        }
      ],
      "BG": [
        {
          "certification": "Unrated",
          "meaning": "Can be viewed for each age.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Content suitable for viewers over the age of 12.",
          "order": 2
        },
        {
          "certification": "14",
          "meaning": "Content suitable for viewers over the age of 14.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Content suitable for viewers over the age of 16.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Content suitable for viewers over the age of 18. Not allowed before 23:00.",
          "order": 5
        }
      ],
      "MX": [
        {
          "certification": "AA",
          "meaning": "Aimed at children (can be broadcast anytime).",
          "order": 1
        },
        {
          "certification": "A",
          "meaning": "Appropriate for all ages.",
          "order": 2
        },
        {
          "certification": "B",
          "meaning": "Designed for ages 12 and older (allowed only between 16:00 and 05:59).",
          "order": 3
        },
        {
          "certification": "B-15",
          "meaning": "Designed for ages 15 and up (allowed only between 19:00 and 05:59).",
          "order": 4
        },
        {
          "certification": "C",
          "meaning": "Designed to be viewed by adults aged 18 or older (allowed only between 21:00 and 05:59).",
          "order": 5
        },
        {
          "certification": "D",
          "meaning": "Exclusively for adults aged 18 or older (allowed only between midnight and 05:00).",
          "order": 6
        }
      ],
      "IN": [
        {
          "certification": "U",
          "meaning": "Viewable for all ages.",
          "order": 1
        },
        {
          "certification": "U/A 7+",
          "meaning": "Viewable for 7 and above years old.",
          "order": 2
        },
        {
          "certification": "U/A 13+",
          "meaning": "Viewable for 13 and above years old.",
          "order": 3
        },
        {
          "certification": "U/A 16+",
          "meaning": "Viewable for 16 and above years old.",
          "order": 4
        },
        {
          "certification": "A",
          "meaning": "Viewable only for adults.",
          "order": 5
        }
      ],
      "DK": [
        {
          "certification": "A",
          "meaning": "Suitable for a general audience.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "Not recommended for children under 7.",
          "order": 2
        },
        {
          "certification": "11",
          "meaning": "For ages 11 and up.",
          "order": 3
        },
        {
          "certification": "15",
          "meaning": "For ages 15 and up.",
          "order": 4
        }
      ],
      "SE": [
        {
          "certification": "Btl",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "Från 7 år",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "Från 11 år",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "Från 15 år",
          "meaning": "",
          "order": 4
        }
      ],
      "ID": [
        {
          "certification": "SU",
          "meaning": "Suitable for general audiences over the age of 2 years.",
          "order": 1
        },
        {
          "certification": "P",
          "meaning": "Suitable for pre-school children from ages 2 through 6.",
          "order": 2
        },
        {
          "certification": "A",
          "meaning": "Suitable for children from ages 7 through 12.",
          "order": 3
        },
        {
          "certification": "R",
          "meaning": "Suitable for teens from ages 13 through 17.",
          "order": 4
        },
        {
          "certification": "D",
          "meaning": "Suitable for viewers over 18 and older. Programmes with this rating are aired from 10.00 PM to 03.00 AM.",
          "order": 5
        }
      ],
      "TR": [
        {
          "certification": "Genel İzleyici",
          "meaning": "General audience. Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "7+",
          "meaning": "Suitable for ages 7 and over.",
          "order": 2
        },
        {
          "certification": "13+",
          "meaning": "Suitable for ages 13 and over.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Suitable for ages 18 and over.",
          "order": 4
        }
      ],
      "AR": [
        {
          "certification": "ATP",
          "meaning": "Suitable for all audiences.",
          "order": 1
        },
        {
          "certification": "SAM 13",
          "meaning": "Suitable for ages 13 and up.",
          "order": 2
        },
        {
          "certification": "SAM 16",
          "meaning": "Suitable for ages 16 and up.",
          "order": 3
        },
        {
          "certification": "SAM 18",
          "meaning": "Suitable for ages 18 and up.",
          "order": 4
        }
      ],
      "PL": [
        {
          "certification": "0",
          "meaning": "Positive or neutral view of the world, little to no violence, non-sexual love, and no sexual content.",
          "order": 1
        },
        {
          "certification": "7",
          "meaning": "As above; may additionally contain some mild language, bloodless violence, and a more negative view of the world.",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "May contain some foul language, some violence, and some sexual content.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Deviant social behaviour, world filled with violence and sexuality, simplified picture of adulthood, display of physical force, especially in controversial social context (against or by parents, teachers, etc.), immoral behaviour without ethic dilemma, putting the blame on the victim, excessive concentration on material possessions.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "One-sided display of the joys of adult life without showing responsibilities (e.g. work), social justification of violent behaviour, excessive vulgarity, use of racial slurs and social stereotypes, explicit sexual content, praise of aggression or vulgarity, access to these programs is locked by a personal password.",
          "order": 5
        }
      ],
      "MA": [
        {
          "certification": "NR",
          "meaning": "All audiences.",
          "order": 0
        },
        {
          "certification": "10",
          "meaning": "Not recommended for under 10.",
          "order": 1
        },
        {
          "certification": "12",
          "meaning": "Not recommended for under 12.",
          "order": 2
        },
        {
          "certification": "16",
          "meaning": "Not recommended for under 16.",
          "order": 3
        }
      ],
      "GR": [
        {
          "certification": "K",
          "meaning": "Suitable for all ages.",
          "order": 1
        },
        {
          "certification": "8",
          "meaning": "Suitable for ages 8 and up (allowed only 30 minutes after the kid-friendly zone).",
          "order": 2
        },
        {
          "certification": "12",
          "meaning": "Suitable for ages 12 and up (allowed only between 9:30 p.m. and 6:00 a.m., or between 10:00 p.m. and 6:00 a.m. during Fridays, Saturdays and school holidays).",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Suitable for ages 16 and up (allowed only between 11:00 p.m. and 6:00 a.m.).",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Suitable for ages 18 and up (allowed only between 1:00 a.m. and 6:00 a.m.).",
          "order": 5
        }
      ],
      "IL": [
        {
          "certification": "E",
          "meaning": "Exempt from classification. This rating is usually applied to live broadcasts.",
          "order": 1
        },
        {
          "certification": "G",
          "meaning": "General Audiences. Anyone, regardless of age, can watch the programme.",
          "order": 1
        },
        {
          "certification": "12+",
          "meaning": "Suitable for children 12 and over only.",
          "order": 2
        },
        {
          "certification": "15+",
          "meaning": "Suitable for teens 15 and over only.",
          "order": 3
        },
        {
          "certification": "18+",
          "meaning": "Suitable for adults 18 and over only.",
          "order": 4
        }
      ],
      "TW": [
        {
          "certification": "0+",
          "meaning": "Suitable for watching by general audiences.",
          "order": 1
        },
        {
          "certification": "6+",
          "meaning": "Not suitable for viewing by children under the age of six; children over six and under the age of twelve can view if accompanied by parents, teacher or an adult relative.",
          "order": 2
        },
        {
          "certification": "12+",
          "meaning": "Not suitable for viewing by children under the age of twelve, split from the former rating Parental Guidance.",
          "order": 3
        },
        {
          "certification": "15+",
          "meaning": "Not suitable for viewing by people under the age of fifteen, split from the former rating Parental Guidance.",
          "order": 4
        },
        {
          "certification": "18+",
          "meaning": "Not suitable for viewing by people under the age of eighteen.",
          "order": 4
        }
      ],
      "ZA": [
        {
          "certification": "All",
          "meaning": "This is a programme/film that does not contain any obscenity, and is suitable for family viewing. A logo must be displayed in the corner of the screen for 30 seconds after each commercial break.",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "Children under 6 may watch this programme/film, but must be accompanied by an adult. This program contains an adult related theme, which might include very mild language, violence and sexual innuendo. A logo must be displayed in the corner of the screen for one minute after each commercial break.",
          "order": 2
        },
        {
          "certification": "13",
          "meaning": "Children under 13 are prohibited from watching this programme/film. This programme contains mild language, violence and sexual innuendo. A logo must be displayed in the corner of the screen for two minutes after each commercial break.",
          "order": 3
        },
        {
          "certification": "16",
          "meaning": "Children under 16 are prohibited from watching this programme/film. It contains moderate violence, language, and some sexual situations. In the case of television, this programme may only be broadcast after 9pm–4:30am. A logo must be displayed in the corner of the screen for five minutes after each commercial break. A full-screen warning must be issued before the start of the programme. If the programme is longer than an hour, a warning must be displayed every half an hour.",
          "order": 4
        },
        {
          "certification": "18",
          "meaning": "Children under 18 are prohibited from watching this programme/film. It contains extreme violence, language and/or graphic sexual content. In the case of television, this program may only be broadcast from 10pm–4:30am. A logo must be displayed in the corner of the screen for the duration of the programme. A full-screen warning must be issued before the start of the programme and after each commercial break.",
          "order": 5
        },
        {
          "certification": "X18",
          "meaning": "This is reserved for films of an extreme sexual nature (pornography). X18 films may only be distributed in the form of video and DVD in a controlled environment (e.g. adult shops). No public viewing of this film may take place. X18 films may not be broadcast on television and in cinemas. This has been breached twice by e.tv, where the softcore (borderline hardcore) Emmanuelle was screened. The X18 rating does not refer to child pornography/child sexual abuse—due to being banned by the Film and Publication Board.",
          "order": 6
        }
      ],
      "SG": [
        {
          "certification": "G",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "PG",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "PG13",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "NC16",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "M18",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "R21",
          "meaning": "Suitable for adults aged 21 and above.",
          "order": 6
        }
      ],
      "PR": [
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        },
        {
          "certification": "TV-MA",
          "meaning": "",
          "order": 6
        },
        {
          "certification": "TV-Y",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "TV-Y7",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "TV-PG",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "TV-14",
          "meaning": "",
          "order": 5
        }
      ],
      "VI": [
        {
          "certification": "NR",
          "meaning": "",
          "order": 0
        },
        {
          "certification": "TV-Y",
          "meaning": "",
          "order": 1
        },
        {
          "certification": "TV-Y7",
          "meaning": "",
          "order": 2
        },
        {
          "certification": "TV-G",
          "meaning": "",
          "order": 3
        },
        {
          "certification": "TV-PG",
          "meaning": "",
          "order": 4
        },
        {
          "certification": "TV-14",
          "meaning": "",
          "order": 5
        },
        {
          "certification": "TV-MA",
          "meaning": "",
          "order": 6
        }
      ]
    }
  });
});

router.get('/movie/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 1178677,
        "adult": false
      },
      {
        "id": 194143,
        "adult": false
      },
      {
        "id": 901193,
        "adult": false
      },
      {
        "id": 213,
        "adult": false
      },
      {
        "id": null,
        "adult": null
      },
      {
        "id": 1206599,
        "adult": false
      },
      {
        "id": 1206583,
        "adult": false
      },
      {
        "id": 1204674,
        "adult": false
      },
      {
        "id": 1190229,
        "adult": false
      },
      {
        "id": 1195952,
        "adult": false
      },
      {
        "id": 1206286,
        "adult": false
      },
      {
        "id": 1146313,
        "adult": false
      },
      {
        "id": 788532,
        "adult": false
      },
      {
        "id": 870359,
        "adult": false
      },
      {
        "id": 1113300,
        "adult": false
      },
      {
        "id": 1175995,
        "adult": false
      },
      {
        "id": 1176000,
        "adult": false
      },
      {
        "id": 1176261,
        "adult": false
      },
      {
        "id": 1176318,
        "adult": false
      },
      {
        "id": 1176700,
        "adult": false
      },
      {
        "id": 1177152,
        "adult": false
      },
      {
        "id": 1192186,
        "adult": false
      },
      {
        "id": 1192189,
        "adult": false
      },
      {
        "id": 1192856,
        "adult": false
      },
      {
        "id": 1196991,
        "adult": false
      },
      {
        "id": 1199400,
        "adult": false
      },
      {
        "id": 1202892,
        "adult": false
      },
      {
        "id": 1203564,
        "adult": false
      },
      {
        "id": 1205078,
        "adult": false
      },
      {
        "id": 1205612,
        "adult": false
      },
      {
        "id": 1120016,
        "adult": false
      },
      {
        "id": 1186957,
        "adult": false
      },
      {
        "id": 1192548,
        "adult": false
      },
      {
        "id": 1198730,
        "adult": false
      },
      {
        "id": 1205651,
        "adult": false
      },
      {
        "id": 1203663,
        "adult": false
      },
      {
        "id": 1130766,
        "adult": false
      },
      {
        "id": 1206403,
        "adult": false
      },
      {
        "id": 1206574,
        "adult": false
      },
      {
        "id": 1206227,
        "adult": false
      },
      {
        "id": 1206399,
        "adult": false
      },
      {
        "id": 1206411,
        "adult": false
      },
      {
        "id": 1196489,
        "adult": false
      },
      {
        "id": 1152908,
        "adult": false
      },
      {
        "id": 1206337,
        "adult": false
      },
      {
        "id": 1202839,
        "adult": false
      },
      {
        "id": 1193695,
        "adult": false
      },
      {
        "id": 1206444,
        "adult": false
      },
      {
        "id": 1205921,
        "adult": false
      },
      {
        "id": 1206189,
        "adult": false
      },
      {
        "id": 1072493,
        "adult": false
      },
      {
        "id": 1206546,
        "adult": false
      },
      {
        "id": 1034833,
        "adult": false
      },
      {
        "id": 82954,
        "adult": false
      },
      {
        "id": 1206589,
        "adult": false
      },
      {
        "id": 903088,
        "adult": false
      },
      {
        "id": 478043,
        "adult": false
      },
      {
        "id": 1206596,
        "adult": false
      },
      {
        "id": 1206562,
        "adult": null
      },
      {
        "id": 1203939,
        "adult": false
      },
      {
        "id": 129689,
        "adult": false
      },
      {
        "id": 244719,
        "adult": false
      },
      {
        "id": 1206593,
        "adult": true
      },
      {
        "id": 1049579,
        "adult": false
      },
      {
        "id": 1128900,
        "adult": false
      },
      {
        "id": 266026,
        "adult": false
      },
      {
        "id": 901121,
        "adult": false
      },
      {
        "id": 1206600,
        "adult": false
      },
      {
        "id": 1038611,
        "adult": false
      },
      {
        "id": 483482,
        "adult": false
      },
      {
        "id": 825800,
        "adult": false
      },
      {
        "id": 244658,
        "adult": false
      },
      {
        "id": 1206601,
        "adult": false
      },
      {
        "id": 391628,
        "adult": false
      },
      {
        "id": 105097,
        "adult": false
      },
      {
        "id": 958197,
        "adult": false
      },
      {
        "id": 1206598,
        "adult": false
      },
      {
        "id": 1206595,
        "adult": false
      },
      {
        "id": 884582,
        "adult": false
      },
      {
        "id": 882691,
        "adult": false
      },
      {
        "id": 287793,
        "adult": false
      },
      {
        "id": 128556,
        "adult": false
      },
      {
        "id": 858994,
        "adult": false
      },
      {
        "id": 1206602,
        "adult": false
      },
      {
        "id": 705635,
        "adult": false
      },
      {
        "id": 394985,
        "adult": false
      },
      {
        "id": 1206603,
        "adult": false
      },
      {
        "id": 52398,
        "adult": false
      },
      {
        "id": 420049,
        "adult": false
      },
      {
        "id": 1206511,
        "adult": false
      },
      {
        "id": 1204864,
        "adult": false
      },
      {
        "id": 1060444,
        "adult": false
      },
      {
        "id": 418670,
        "adult": false
      },
      {
        "id": 1152785,
        "adult": false
      },
      {
        "id": 1180750,
        "adult": false
      },
      {
        "id": 67004,
        "adult": false
      },
      {
        "id": 42649,
        "adult": false
      },
      {
        "id": 1206604,
        "adult": false
      },
      {
        "id": 244871,
        "adult": false
      },
      {
        "id": 670292,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 55,
    "total_results": 5417
  });
});

router.get('/person/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 4379234,
        "adult": false
      },
      {
        "id": 3144475,
        "adult": false
      },
      {
        "id": 4379235,
        "adult": false
      },
      {
        "id": 4379236,
        "adult": false
      },
      {
        "id": 4379237,
        "adult": false
      },
      {
        "id": 132133,
        "adult": false
      },
      {
        "id": 2012753,
        "adult": false
      },
      {
        "id": 4379238,
        "adult": false
      },
      {
        "id": 4378348,
        "adult": false
      },
      {
        "id": 4312232,
        "adult": false
      },
      {
        "id": 4379239,
        "adult": false
      },
      {
        "id": 4379240,
        "adult": false
      },
      {
        "id": 4379241,
        "adult": false
      },
      {
        "id": 4379242,
        "adult": false
      },
      {
        "id": 4379243,
        "adult": false
      },
      {
        "id": 4379244,
        "adult": false
      },
      {
        "id": 4379245,
        "adult": false
      },
      {
        "id": 4379246,
        "adult": false
      },
      {
        "id": 4379247,
        "adult": false
      },
      {
        "id": 4379248,
        "adult": false
      },
      {
        "id": 4323539,
        "adult": false
      },
      {
        "id": 2764578,
        "adult": false
      },
      {
        "id": 4379249,
        "adult": false
      },
      {
        "id": 4379250,
        "adult": false
      },
      {
        "id": 3775270,
        "adult": false
      },
      {
        "id": 122468,
        "adult": false
      },
      {
        "id": 4379251,
        "adult": true
      },
      {
        "id": 4377886,
        "adult": null
      },
      {
        "id": 4377882,
        "adult": null
      },
      {
        "id": 3775273,
        "adult": false
      },
      {
        "id": 4377448,
        "adult": false
      },
      {
        "id": 4084205,
        "adult": false
      },
      {
        "id": 4371497,
        "adult": null
      },
      {
        "id": 4371499,
        "adult": null
      },
      {
        "id": 4371494,
        "adult": null
      },
      {
        "id": 3775268,
        "adult": false
      },
      {
        "id": 4371503,
        "adult": null
      },
      {
        "id": 4371506,
        "adult": null
      },
      {
        "id": 2621212,
        "adult": false
      },
      {
        "id": 18365,
        "adult": false
      },
      {
        "id": 4379252,
        "adult": false
      },
      {
        "id": 4379253,
        "adult": false
      },
      {
        "id": 4379254,
        "adult": false
      },
      {
        "id": 4379255,
        "adult": false
      },
      {
        "id": 4379256,
        "adult": false
      },
      {
        "id": 4379257,
        "adult": false
      },
      {
        "id": 4379258,
        "adult": false
      },
      {
        "id": 4379259,
        "adult": false
      },
      {
        "id": 4379260,
        "adult": false
      },
      {
        "id": 4379261,
        "adult": false
      },
      {
        "id": 553850,
        "adult": null
      },
      {
        "id": 4379262,
        "adult": false
      },
      {
        "id": 121710,
        "adult": false
      },
      {
        "id": 3758338,
        "adult": null
      },
      {
        "id": 3758341,
        "adult": null
      },
      {
        "id": 4085241,
        "adult": false
      },
      {
        "id": 1246151,
        "adult": false
      },
      {
        "id": 1325619,
        "adult": false
      },
      {
        "id": 4379263,
        "adult": false
      },
      {
        "id": 4379264,
        "adult": false
      },
      {
        "id": 4379265,
        "adult": false
      },
      {
        "id": 4379266,
        "adult": false
      },
      {
        "id": 3775271,
        "adult": false
      },
      {
        "id": 4379267,
        "adult": false
      },
      {
        "id": 4379268,
        "adult": false
      },
      {
        "id": 4379269,
        "adult": false
      },
      {
        "id": 4379270,
        "adult": false
      },
      {
        "id": 4379271,
        "adult": false
      },
      {
        "id": 4379272,
        "adult": false
      },
      {
        "id": 4379273,
        "adult": false
      },
      {
        "id": 4379274,
        "adult": false
      },
      {
        "id": 4379275,
        "adult": false
      },
      {
        "id": 4379276,
        "adult": false
      },
      {
        "id": 4379277,
        "adult": false
      },
      {
        "id": 4379278,
        "adult": false
      },
      {
        "id": 1003914,
        "adult": false
      },
      {
        "id": 4379279,
        "adult": false
      },
      {
        "id": 4379280,
        "adult": false
      },
      {
        "id": 4379281,
        "adult": false
      },
      {
        "id": 143707,
        "adult": false
      },
      {
        "id": 2869634,
        "adult": false
      },
      {
        "id": 4379282,
        "adult": false
      },
      {
        "id": 4379283,
        "adult": false
      },
      {
        "id": 1461608,
        "adult": false
      },
      {
        "id": 4379284,
        "adult": false
      },
      {
        "id": 4379285,
        "adult": false
      },
      {
        "id": 4379286,
        "adult": false
      },
      {
        "id": 4379287,
        "adult": false
      },
      {
        "id": 4379288,
        "adult": false
      },
      {
        "id": 4379289,
        "adult": false
      },
      {
        "id": 4379290,
        "adult": false
      },
      {
        "id": 4379291,
        "adult": false
      },
      {
        "id": 4379292,
        "adult": false
      },
      {
        "id": 4379293,
        "adult": false
      },
      {
        "id": 4379294,
        "adult": false
      },
      {
        "id": 4379295,
        "adult": false
      },
      {
        "id": 4379296,
        "adult": false
      },
      {
        "id": 4379297,
        "adult": false
      },
      {
        "id": 4379298,
        "adult": false
      },
      {
        "id": 4379299,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 111,
    "total_results": 11058
  });
});

router.get('/tv/changes', function(req, res, next) {
  res.json({
    "results": [
      {
        "id": 16394,
        "adult": false
      },
      {
        "id": 29904,
        "adult": false
      },
      {
        "id": 6697,
        "adult": false
      },
      {
        "id": 29663,
        "adult": false
      },
      {
        "id": 226687,
        "adult": false
      },
      {
        "id": null,
        "adult": null
      },
      {
        "id": 239763,
        "adult": false
      },
      {
        "id": 198050,
        "adult": false
      },
      {
        "id": 133688,
        "adult": false
      },
      {
        "id": 2527,
        "adult": false
      },
      {
        "id": 621,
        "adult": false
      },
      {
        "id": 115953,
        "adult": false
      },
      {
        "id": 237894,
        "adult": false
      },
      {
        "id": 116899,
        "adult": false
      },
      {
        "id": 239762,
        "adult": false
      },
      {
        "id": 137065,
        "adult": false
      },
      {
        "id": 209867,
        "adult": false
      },
      {
        "id": 113137,
        "adult": false
      },
      {
        "id": 216523,
        "adult": false
      },
      {
        "id": 239764,
        "adult": false
      },
      {
        "id": 1056,
        "adult": false
      },
      {
        "id": 203,
        "adult": false
      },
      {
        "id": 236161,
        "adult": false
      },
      {
        "id": 424,
        "adult": false
      },
      {
        "id": 203946,
        "adult": false
      },
      {
        "id": 121,
        "adult": false
      },
      {
        "id": 129387,
        "adult": false
      },
      {
        "id": 238486,
        "adult": false
      },
      {
        "id": 239687,
        "adult": false
      },
      {
        "id": 239685,
        "adult": false
      },
      {
        "id": 214160,
        "adult": false
      },
      {
        "id": 1057,
        "adult": false
      },
      {
        "id": 64073,
        "adult": false
      },
      {
        "id": 62828,
        "adult": false
      },
      {
        "id": 45282,
        "adult": false
      },
      {
        "id": 157742,
        "adult": false
      },
      {
        "id": 239465,
        "adult": false
      },
      {
        "id": 12513,
        "adult": false
      },
      {
        "id": 134206,
        "adult": false
      },
      {
        "id": 215293,
        "adult": false
      },
      {
        "id": 204219,
        "adult": null
      },
      {
        "id": 225358,
        "adult": false
      },
      {
        "id": 239765,
        "adult": false
      },
      {
        "id": 238042,
        "adult": false
      },
      {
        "id": 106251,
        "adult": false
      },
      {
        "id": 226197,
        "adult": false
      },
      {
        "id": 228849,
        "adult": false
      },
      {
        "id": 76773,
        "adult": false
      },
      {
        "id": 110837,
        "adult": false
      },
      {
        "id": 239268,
        "adult": false
      },
      {
        "id": 86831,
        "adult": false
      },
      {
        "id": 86031,
        "adult": false
      },
      {
        "id": 239723,
        "adult": null
      },
      {
        "id": 46136,
        "adult": false
      },
      {
        "id": 219783,
        "adult": false
      },
      {
        "id": 235610,
        "adult": false
      },
      {
        "id": 239766,
        "adult": false
      },
      {
        "id": 4086,
        "adult": false
      },
      {
        "id": 239761,
        "adult": false
      },
      {
        "id": 155292,
        "adult": false
      },
      {
        "id": 237243,
        "adult": false
      },
      {
        "id": 210402,
        "adult": false
      },
      {
        "id": 114477,
        "adult": false
      },
      {
        "id": 217088,
        "adult": false
      },
      {
        "id": 236142,
        "adult": false
      },
      {
        "id": 195459,
        "adult": false
      },
      {
        "id": 230924,
        "adult": false
      },
      {
        "id": 239666,
        "adult": false
      },
      {
        "id": 119495,
        "adult": false
      },
      {
        "id": 210455,
        "adult": false
      },
      {
        "id": 11213,
        "adult": false
      },
      {
        "id": 155631,
        "adult": false
      },
      {
        "id": 94038,
        "adult": false
      },
      {
        "id": 38003,
        "adult": false
      },
      {
        "id": 85174,
        "adult": true
      },
      {
        "id": 86073,
        "adult": true
      },
      {
        "id": 31295,
        "adult": false
      },
      {
        "id": 237983,
        "adult": false
      },
      {
        "id": 233816,
        "adult": false
      },
      {
        "id": 87917,
        "adult": false
      },
      {
        "id": 198182,
        "adult": false
      },
      {
        "id": 204082,
        "adult": false
      },
      {
        "id": 7897,
        "adult": false
      },
      {
        "id": 4429,
        "adult": false
      },
      {
        "id": 219109,
        "adult": false
      },
      {
        "id": 15,
        "adult": false
      },
      {
        "id": 70523,
        "adult": false
      },
      {
        "id": 219651,
        "adult": false
      },
      {
        "id": 221913,
        "adult": false
      },
      {
        "id": 6007,
        "adult": false
      },
      {
        "id": 6721,
        "adult": false
      },
      {
        "id": 220374,
        "adult": false
      },
      {
        "id": 238179,
        "adult": false
      },
      {
        "id": 6788,
        "adult": false
      },
      {
        "id": 41743,
        "adult": false
      },
      {
        "id": 236619,
        "adult": false
      },
      {
        "id": 207586,
        "adult": false
      },
      {
        "id": 85377,
        "adult": false
      },
      {
        "id": 96932,
        "adult": false
      },
      {
        "id": 125581,
        "adult": false
      }
    ],
    "page": 1,
    "total_pages": 22,
    "total_results": 2120
  });
});

router.get('/configuration', function(req, res, next) {
  res.json({
"images": {
  "base_url": "http://image.tmdb.org/t/p/",
  "secure_base_url": "https://image.tmdb.org/t/p/",
  "backdrop_sizes": [
    "w300",
    "w780",
    "w1280",
    "original"
  ],
  "logo_sizes": [
    "w45",
    "w92",
    "w154",
    "w185",
    "w300",
    "w500",
    "original"
  ],
  "poster_sizes": [
    "w92",
    "w154",
    "w185",
    "w342",
    "w500",
    "w780",
    "original"
  ],
  "profile_sizes": [
    "w45",
    "w185",
    "h632",
    "original"
  ],
  "still_sizes": [
    "w92",
    "w185",
    "w300",
    "original"
  ]
},
"change_keys": [
  "adult",
  "air_date",
  "also_known_as",
  "alternative_titles",
  "biography",
  "birthday",
  "budget",
  "cast",
  "certifications",
  "character_names",
  "created_by",
  "crew",
  "deathday",
  "episode",
  "episode_number",
  "episode_run_time",
  "freebase_id",
  "freebase_mid",
  "general",
  "genres",
  "guest_stars",
  "homepage",
  "images",
  "imdb_id",
  "languages",
  "name",
  "network",
  "origin_country",
  "original_name",
  "original_title",
  "overview",
  "parts",
  "place_of_birth",
  "plot_keywords",
  "production_code",
  "production_companies",
  "production_countries",
  "releases",
  "revenue",
  "runtime",
  "season",
  "season_number",
  "season_regular",
  "spoken_languages",
  "status",
  "tagline",
  "title",
  "translations",
  "tvdb_id",
  "tvrage_id",
  "type",
  "video",
  "videos"
]
});
});

router.get('/configuration/countries', function(req, res, next) {
  res.json([
{
  "iso_3166_1": "AD",
  "english_name": "Andorra",
  "native_name": "Andorra"
},
{
  "iso_3166_1": "AE",
  "english_name": "United Arab Emirates",
  "native_name": "United Arab Emirates"
},
{
  "iso_3166_1": "AF",
  "english_name": "Afghanistan",
  "native_name": "Afghanistan"
},
{
  "iso_3166_1": "AG",
  "english_name": "Antigua and Barbuda",
  "native_name": "Antigua & Barbuda"
},
{
  "iso_3166_1": "AI",
  "english_name": "Anguilla",
  "native_name": "Anguilla"
},
{
  "iso_3166_1": "AL",
  "english_name": "Albania",
  "native_name": "Albania"
},
{
  "iso_3166_1": "AM",
  "english_name": "Armenia",
  "native_name": "Armenia"
},
{
  "iso_3166_1": "AN",
  "english_name": "Netherlands Antilles",
  "native_name": "Netherlands Antilles"
},
{
  "iso_3166_1": "AO",
  "english_name": "Angola",
  "native_name": "Angola"
},
{
  "iso_3166_1": "AQ",
  "english_name": "Antarctica",
  "native_name": "Antarctica"
},
{
  "iso_3166_1": "AR",
  "english_name": "Argentina",
  "native_name": "Argentina"
},
{
  "iso_3166_1": "AS",
  "english_name": "American Samoa",
  "native_name": "American Samoa"
},
{
  "iso_3166_1": "AT",
  "english_name": "Austria",
  "native_name": "Austria"
},
{
  "iso_3166_1": "AU",
  "english_name": "Australia",
  "native_name": "Australia"
},
{
  "iso_3166_1": "AW",
  "english_name": "Aruba",
  "native_name": "Aruba"
},
{
  "iso_3166_1": "AZ",
  "english_name": "Azerbaijan",
  "native_name": "Azerbaijan"
},
{
  "iso_3166_1": "BA",
  "english_name": "Bosnia and Herzegovina",
  "native_name": "Bosnia & Herzegovina"
},
{
  "iso_3166_1": "BB",
  "english_name": "Barbados",
  "native_name": "Barbados"
},
{
  "iso_3166_1": "BD",
  "english_name": "Bangladesh",
  "native_name": "Bangladesh"
},
{
  "iso_3166_1": "BE",
  "english_name": "Belgium",
  "native_name": "Belgium"
},
{
  "iso_3166_1": "BF",
  "english_name": "Burkina Faso",
  "native_name": "Burkina Faso"
},
{
  "iso_3166_1": "BG",
  "english_name": "Bulgaria",
  "native_name": "Bulgaria"
},
{
  "iso_3166_1": "BH",
  "english_name": "Bahrain",
  "native_name": "Bahrain"
},
{
  "iso_3166_1": "BI",
  "english_name": "Burundi",
  "native_name": "Burundi"
},
{
  "iso_3166_1": "BJ",
  "english_name": "Benin",
  "native_name": "Benin"
},
{
  "iso_3166_1": "BM",
  "english_name": "Bermuda",
  "native_name": "Bermuda"
},
{
  "iso_3166_1": "BN",
  "english_name": "Brunei Darussalam",
  "native_name": "Brunei"
},
{
  "iso_3166_1": "BO",
  "english_name": "Bolivia",
  "native_name": "Bolivia"
},
{
  "iso_3166_1": "BR",
  "english_name": "Brazil",
  "native_name": "Brazil"
},
{
  "iso_3166_1": "BS",
  "english_name": "Bahamas",
  "native_name": "Bahamas"
},
{
  "iso_3166_1": "BT",
  "english_name": "Bhutan",
  "native_name": "Bhutan"
},
{
  "iso_3166_1": "BU",
  "english_name": "Burma",
  "native_name": "Burma"
},
{
  "iso_3166_1": "BV",
  "english_name": "Bouvet Island",
  "native_name": "Bouvet Island"
},
{
  "iso_3166_1": "BW",
  "english_name": "Botswana",
  "native_name": "Botswana"
},
{
  "iso_3166_1": "BY",
  "english_name": "Belarus",
  "native_name": "Belarus"
},
{
  "iso_3166_1": "BZ",
  "english_name": "Belize",
  "native_name": "Belize"
},
{
  "iso_3166_1": "CA",
  "english_name": "Canada",
  "native_name": "Canada"
},
{
  "iso_3166_1": "CC",
  "english_name": "Cocos  Islands",
  "native_name": "Cocos (Keeling) Islands"
},
{
  "iso_3166_1": "CD",
  "english_name": "Congo",
  "native_name": "Democratic Republic of the Congo (Kinshasa)"
},
{
  "iso_3166_1": "CF",
  "english_name": "Central African Republic",
  "native_name": "Central African Republic"
},
{
  "iso_3166_1": "CG",
  "english_name": "Congo",
  "native_name": "Republic of the Congo (Brazzaville)"
},
{
  "iso_3166_1": "CH",
  "english_name": "Switzerland",
  "native_name": "Switzerland"
},
{
  "iso_3166_1": "CI",
  "english_name": "Cote D'Ivoire",
  "native_name": "Côte d’Ivoire"
},
{
  "iso_3166_1": "CK",
  "english_name": "Cook Islands",
  "native_name": "Cook Islands"
},
{
  "iso_3166_1": "CL",
  "english_name": "Chile",
  "native_name": "Chile"
},
{
  "iso_3166_1": "CM",
  "english_name": "Cameroon",
  "native_name": "Cameroon"
},
{
  "iso_3166_1": "CN",
  "english_name": "China",
  "native_name": "China"
},
{
  "iso_3166_1": "CO",
  "english_name": "Colombia",
  "native_name": "Colombia"
},
{
  "iso_3166_1": "CR",
  "english_name": "Costa Rica",
  "native_name": "Costa Rica"
},
{
  "iso_3166_1": "CS",
  "english_name": "Serbia and Montenegro",
  "native_name": "Serbia and Montenegro"
},
{
  "iso_3166_1": "CU",
  "english_name": "Cuba",
  "native_name": "Cuba"
},
{
  "iso_3166_1": "CV",
  "english_name": "Cape Verde",
  "native_name": "Cape Verde"
},
{
  "iso_3166_1": "CX",
  "english_name": "Christmas Island",
  "native_name": "Christmas Island"
},
{
  "iso_3166_1": "CY",
  "english_name": "Cyprus",
  "native_name": "Cyprus"
},
{
  "iso_3166_1": "CZ",
  "english_name": "Czech Republic",
  "native_name": "Czech Republic"
},
{
  "iso_3166_1": "DE",
  "english_name": "Germany",
  "native_name": "Germany"
},
{
  "iso_3166_1": "DJ",
  "english_name": "Djibouti",
  "native_name": "Djibouti"
},
{
  "iso_3166_1": "DK",
  "english_name": "Denmark",
  "native_name": "Denmark"
},
{
  "iso_3166_1": "DM",
  "english_name": "Dominica",
  "native_name": "Dominica"
},
{
  "iso_3166_1": "DO",
  "english_name": "Dominican Republic",
  "native_name": "Dominican Republic"
},
{
  "iso_3166_1": "DZ",
  "english_name": "Algeria",
  "native_name": "Algeria"
},
{
  "iso_3166_1": "EC",
  "english_name": "Ecuador",
  "native_name": "Ecuador"
},
{
  "iso_3166_1": "EE",
  "english_name": "Estonia",
  "native_name": "Estonia"
},
{
  "iso_3166_1": "EG",
  "english_name": "Egypt",
  "native_name": "Egypt"
},
{
  "iso_3166_1": "EH",
  "english_name": "Western Sahara",
  "native_name": "Western Sahara"
},
{
  "iso_3166_1": "ER",
  "english_name": "Eritrea",
  "native_name": "Eritrea"
},
{
  "iso_3166_1": "ES",
  "english_name": "Spain",
  "native_name": "Spain"
},
{
  "iso_3166_1": "ET",
  "english_name": "Ethiopia",
  "native_name": "Ethiopia"
},
{
  "iso_3166_1": "FI",
  "english_name": "Finland",
  "native_name": "Finland"
},
{
  "iso_3166_1": "FJ",
  "english_name": "Fiji",
  "native_name": "Fiji"
},
{
  "iso_3166_1": "FK",
  "english_name": "Falkland Islands",
  "native_name": "Falkland Islands"
},
{
  "iso_3166_1": "FM",
  "english_name": "Micronesia",
  "native_name": "Micronesia"
},
{
  "iso_3166_1": "FO",
  "english_name": "Faeroe Islands",
  "native_name": "Faroe Islands"
},
{
  "iso_3166_1": "FR",
  "english_name": "France",
  "native_name": "France"
},
{
  "iso_3166_1": "GA",
  "english_name": "Gabon",
  "native_name": "Gabon"
},
{
  "iso_3166_1": "GB",
  "english_name": "United Kingdom",
  "native_name": "United Kingdom"
},
{
  "iso_3166_1": "GD",
  "english_name": "Grenada",
  "native_name": "Grenada"
},
{
  "iso_3166_1": "GE",
  "english_name": "Georgia",
  "native_name": "Georgia"
},
{
  "iso_3166_1": "GF",
  "english_name": "French Guiana",
  "native_name": "French Guiana"
},
{
  "iso_3166_1": "GH",
  "english_name": "Ghana",
  "native_name": "Ghana"
},
{
  "iso_3166_1": "GI",
  "english_name": "Gibraltar",
  "native_name": "Gibraltar"
},
{
  "iso_3166_1": "GL",
  "english_name": "Greenland",
  "native_name": "Greenland"
},
{
  "iso_3166_1": "GM",
  "english_name": "Gambia",
  "native_name": "Gambia"
},
{
  "iso_3166_1": "GN",
  "english_name": "Guinea",
  "native_name": "Guinea"
},
{
  "iso_3166_1": "GP",
  "english_name": "Guadaloupe",
  "native_name": "Guadeloupe"
},
{
  "iso_3166_1": "GQ",
  "english_name": "Equatorial Guinea",
  "native_name": "Equatorial Guinea"
},
{
  "iso_3166_1": "GR",
  "english_name": "Greece",
  "native_name": "Greece"
},
{
  "iso_3166_1": "GS",
  "english_name": "South Georgia and the South Sandwich Islands",
  "native_name": "South Georgia & South Sandwich Islands"
},
{
  "iso_3166_1": "GT",
  "english_name": "Guatemala",
  "native_name": "Guatemala"
},
{
  "iso_3166_1": "GU",
  "english_name": "Guam",
  "native_name": "Guam"
},
{
  "iso_3166_1": "GW",
  "english_name": "Guinea-Bissau",
  "native_name": "Guinea-Bissau"
},
{
  "iso_3166_1": "GY",
  "english_name": "Guyana",
  "native_name": "Guyana"
},
{
  "iso_3166_1": "HK",
  "english_name": "Hong Kong",
  "native_name": "Hong Kong SAR China"
},
{
  "iso_3166_1": "HM",
  "english_name": "Heard and McDonald Islands",
  "native_name": "Heard & McDonald Islands"
},
{
  "iso_3166_1": "HN",
  "english_name": "Honduras",
  "native_name": "Honduras"
},
{
  "iso_3166_1": "HR",
  "english_name": "Croatia",
  "native_name": "Croatia"
},
{
  "iso_3166_1": "HT",
  "english_name": "Haiti",
  "native_name": "Haiti"
},
{
  "iso_3166_1": "HU",
  "english_name": "Hungary",
  "native_name": "Hungary"
},
{
  "iso_3166_1": "ID",
  "english_name": "Indonesia",
  "native_name": "Indonesia"
},
{
  "iso_3166_1": "IE",
  "english_name": "Ireland",
  "native_name": "Ireland"
},
{
  "iso_3166_1": "IL",
  "english_name": "Israel",
  "native_name": "Israel"
},
{
  "iso_3166_1": "IN",
  "english_name": "India",
  "native_name": "India"
},
{
  "iso_3166_1": "IO",
  "english_name": "British Indian Ocean Territory",
  "native_name": "British Indian Ocean Territory"
},
{
  "iso_3166_1": "IQ",
  "english_name": "Iraq",
  "native_name": "Iraq"
},
{
  "iso_3166_1": "IR",
  "english_name": "Iran",
  "native_name": "Iran"
},
{
  "iso_3166_1": "IS",
  "english_name": "Iceland",
  "native_name": "Iceland"
},
{
  "iso_3166_1": "IT",
  "english_name": "Italy",
  "native_name": "Italy"
},
{
  "iso_3166_1": "JM",
  "english_name": "Jamaica",
  "native_name": "Jamaica"
},
{
  "iso_3166_1": "JO",
  "english_name": "Jordan",
  "native_name": "Jordan"
},
{
  "iso_3166_1": "JP",
  "english_name": "Japan",
  "native_name": "Japan"
},
{
  "iso_3166_1": "KE",
  "english_name": "Kenya",
  "native_name": "Kenya"
},
{
  "iso_3166_1": "KG",
  "english_name": "Kyrgyz Republic",
  "native_name": "Kyrgyzstan"
},
{
  "iso_3166_1": "KH",
  "english_name": "Cambodia",
  "native_name": "Cambodia"
},
{
  "iso_3166_1": "KI",
  "english_name": "Kiribati",
  "native_name": "Kiribati"
},
{
  "iso_3166_1": "KM",
  "english_name": "Comoros",
  "native_name": "Comoros"
},
{
  "iso_3166_1": "KN",
  "english_name": "St. Kitts and Nevis",
  "native_name": "St. Kitts & Nevis"
},
{
  "iso_3166_1": "KP",
  "english_name": "North Korea",
  "native_name": "North Korea"
},
{
  "iso_3166_1": "KR",
  "english_name": "South Korea",
  "native_name": "South Korea"
},
{
  "iso_3166_1": "KW",
  "english_name": "Kuwait",
  "native_name": "Kuwait"
},
{
  "iso_3166_1": "KY",
  "english_name": "Cayman Islands",
  "native_name": "Cayman Islands"
},
{
  "iso_3166_1": "KZ",
  "english_name": "Kazakhstan",
  "native_name": "Kazakhstan"
},
{
  "iso_3166_1": "LA",
  "english_name": "Lao People's Democratic Republic",
  "native_name": "Laos"
},
{
  "iso_3166_1": "LB",
  "english_name": "Lebanon",
  "native_name": "Lebanon"
},
{
  "iso_3166_1": "LC",
  "english_name": "St. Lucia",
  "native_name": "St. Lucia"
},
{
  "iso_3166_1": "LI",
  "english_name": "Liechtenstein",
  "native_name": "Liechtenstein"
},
{
  "iso_3166_1": "LK",
  "english_name": "Sri Lanka",
  "native_name": "Sri Lanka"
},
{
  "iso_3166_1": "LR",
  "english_name": "Liberia",
  "native_name": "Liberia"
},
{
  "iso_3166_1": "LS",
  "english_name": "Lesotho",
  "native_name": "Lesotho"
},
{
  "iso_3166_1": "LT",
  "english_name": "Lithuania",
  "native_name": "Lithuania"
},
{
  "iso_3166_1": "LU",
  "english_name": "Luxembourg",
  "native_name": "Luxembourg"
},
{
  "iso_3166_1": "LV",
  "english_name": "Latvia",
  "native_name": "Latvia"
},
{
  "iso_3166_1": "LY",
  "english_name": "Libyan Arab Jamahiriya",
  "native_name": "Libya"
},
{
  "iso_3166_1": "MA",
  "english_name": "Morocco",
  "native_name": "Morocco"
},
{
  "iso_3166_1": "MC",
  "english_name": "Monaco",
  "native_name": "Monaco"
},
{
  "iso_3166_1": "MD",
  "english_name": "Moldova",
  "native_name": "Moldova"
},
{
  "iso_3166_1": "ME",
  "english_name": "Montenegro",
  "native_name": "Montenegro"
},
{
  "iso_3166_1": "MG",
  "english_name": "Madagascar",
  "native_name": "Madagascar"
},
{
  "iso_3166_1": "MH",
  "english_name": "Marshall Islands",
  "native_name": "Marshall Islands"
},
{
  "iso_3166_1": "MK",
  "english_name": "Macedonia",
  "native_name": "Macedonia"
},
{
  "iso_3166_1": "ML",
  "english_name": "Mali",
  "native_name": "Mali"
},
{
  "iso_3166_1": "MM",
  "english_name": "Myanmar",
  "native_name": "Myanmar (Burma)"
},
{
  "iso_3166_1": "MN",
  "english_name": "Mongolia",
  "native_name": "Mongolia"
},
{
  "iso_3166_1": "MO",
  "english_name": "Macao",
  "native_name": "Macau SAR China"
},
{
  "iso_3166_1": "MP",
  "english_name": "Northern Mariana Islands",
  "native_name": "Northern Mariana Islands"
},
{
  "iso_3166_1": "MQ",
  "english_name": "Martinique",
  "native_name": "Martinique"
},
{
  "iso_3166_1": "MR",
  "english_name": "Mauritania",
  "native_name": "Mauritania"
},
{
  "iso_3166_1": "MS",
  "english_name": "Montserrat",
  "native_name": "Montserrat"
},
{
  "iso_3166_1": "MT",
  "english_name": "Malta",
  "native_name": "Malta"
},
{
  "iso_3166_1": "MU",
  "english_name": "Mauritius",
  "native_name": "Mauritius"
},
{
  "iso_3166_1": "MV",
  "english_name": "Maldives",
  "native_name": "Maldives"
},
{
  "iso_3166_1": "MW",
  "english_name": "Malawi",
  "native_name": "Malawi"
},
{
  "iso_3166_1": "MX",
  "english_name": "Mexico",
  "native_name": "Mexico"
},
{
  "iso_3166_1": "MY",
  "english_name": "Malaysia",
  "native_name": "Malaysia"
},
{
  "iso_3166_1": "MZ",
  "english_name": "Mozambique",
  "native_name": "Mozambique"
},
{
  "iso_3166_1": "NA",
  "english_name": "Namibia",
  "native_name": "Namibia"
},
{
  "iso_3166_1": "NC",
  "english_name": "New Caledonia",
  "native_name": "New Caledonia"
},
{
  "iso_3166_1": "NE",
  "english_name": "Niger",
  "native_name": "Niger"
},
{
  "iso_3166_1": "NF",
  "english_name": "Norfolk Island",
  "native_name": "Norfolk Island"
},
{
  "iso_3166_1": "NG",
  "english_name": "Nigeria",
  "native_name": "Nigeria"
},
{
  "iso_3166_1": "NI",
  "english_name": "Nicaragua",
  "native_name": "Nicaragua"
},
{
  "iso_3166_1": "NL",
  "english_name": "Netherlands",
  "native_name": "Netherlands"
},
{
  "iso_3166_1": "NO",
  "english_name": "Norway",
  "native_name": "Norway"
},
{
  "iso_3166_1": "NP",
  "english_name": "Nepal",
  "native_name": "Nepal"
},
{
  "iso_3166_1": "NR",
  "english_name": "Nauru",
  "native_name": "Nauru"
},
{
  "iso_3166_1": "NU",
  "english_name": "Niue",
  "native_name": "Niue"
},
{
  "iso_3166_1": "NZ",
  "english_name": "New Zealand",
  "native_name": "New Zealand"
},
{
  "iso_3166_1": "OM",
  "english_name": "Oman",
  "native_name": "Oman"
},
{
  "iso_3166_1": "PA",
  "english_name": "Panama",
  "native_name": "Panama"
},
{
  "iso_3166_1": "PE",
  "english_name": "Peru",
  "native_name": "Peru"
},
{
  "iso_3166_1": "PF",
  "english_name": "French Polynesia",
  "native_name": "French Polynesia"
},
{
  "iso_3166_1": "PG",
  "english_name": "Papua New Guinea",
  "native_name": "Papua New Guinea"
},
{
  "iso_3166_1": "PH",
  "english_name": "Philippines",
  "native_name": "Philippines"
},
{
  "iso_3166_1": "PK",
  "english_name": "Pakistan",
  "native_name": "Pakistan"
},
{
  "iso_3166_1": "PL",
  "english_name": "Poland",
  "native_name": "Poland"
},
{
  "iso_3166_1": "PM",
  "english_name": "St. Pierre and Miquelon",
  "native_name": "St. Pierre & Miquelon"
},
{
  "iso_3166_1": "PN",
  "english_name": "Pitcairn Island",
  "native_name": "Pitcairn Islands"
},
{
  "iso_3166_1": "PR",
  "english_name": "Puerto Rico",
  "native_name": "Puerto Rico"
},
{
  "iso_3166_1": "PS",
  "english_name": "Palestinian Territory",
  "native_name": "Palestinian Territories"
},
{
  "iso_3166_1": "PT",
  "english_name": "Portugal",
  "native_name": "Portugal"
},
{
  "iso_3166_1": "PW",
  "english_name": "Palau",
  "native_name": "Palau"
},
{
  "iso_3166_1": "PY",
  "english_name": "Paraguay",
  "native_name": "Paraguay"
},
{
  "iso_3166_1": "QA",
  "english_name": "Qatar",
  "native_name": "Qatar"
},
{
  "iso_3166_1": "RE",
  "english_name": "Reunion",
  "native_name": "Réunion"
},
{
  "iso_3166_1": "RO",
  "english_name": "Romania",
  "native_name": "Romania"
},
{
  "iso_3166_1": "RS",
  "english_name": "Serbia",
  "native_name": "Serbia"
},
{
  "iso_3166_1": "RU",
  "english_name": "Russia",
  "native_name": "Russia"
},
{
  "iso_3166_1": "RW",
  "english_name": "Rwanda",
  "native_name": "Rwanda"
},
{
  "iso_3166_1": "SA",
  "english_name": "Saudi Arabia",
  "native_name": "Saudi Arabia"
},
{
  "iso_3166_1": "SB",
  "english_name": "Solomon Islands",
  "native_name": "Solomon Islands"
},
{
  "iso_3166_1": "SC",
  "english_name": "Seychelles",
  "native_name": "Seychelles"
},
{
  "iso_3166_1": "SD",
  "english_name": "Sudan",
  "native_name": "Sudan"
},
{
  "iso_3166_1": "SE",
  "english_name": "Sweden",
  "native_name": "Sweden"
},
{
  "iso_3166_1": "SG",
  "english_name": "Singapore",
  "native_name": "Singapore"
},
{
  "iso_3166_1": "SH",
  "english_name": "St. Helena",
  "native_name": "St. Helena"
},
{
  "iso_3166_1": "SI",
  "english_name": "Slovenia",
  "native_name": "Slovenia"
},
{
  "iso_3166_1": "SJ",
  "english_name": "Svalbard & Jan Mayen Islands",
  "native_name": "Svalbard & Jan Mayen"
},
{
  "iso_3166_1": "SK",
  "english_name": "Slovakia",
  "native_name": "Slovakia"
},
{
  "iso_3166_1": "SL",
  "english_name": "Sierra Leone",
  "native_name": "Sierra Leone"
},
{
  "iso_3166_1": "SM",
  "english_name": "San Marino",
  "native_name": "San Marino"
},
{
  "iso_3166_1": "SN",
  "english_name": "Senegal",
  "native_name": "Senegal"
},
{
  "iso_3166_1": "SO",
  "english_name": "Somalia",
  "native_name": "Somalia"
},
{
  "iso_3166_1": "SR",
  "english_name": "Suriname",
  "native_name": "Suriname"
},
{
  "iso_3166_1": "SS",
  "english_name": "South Sudan",
  "native_name": "South Sudan"
},
{
  "iso_3166_1": "ST",
  "english_name": "Sao Tome and Principe",
  "native_name": "São Tomé & Príncipe"
},
{
  "iso_3166_1": "SU",
  "english_name": "Soviet Union",
  "native_name": "Soviet Union"
},
{
  "iso_3166_1": "SV",
  "english_name": "El Salvador",
  "native_name": "El Salvador"
},
{
  "iso_3166_1": "SY",
  "english_name": "Syrian Arab Republic",
  "native_name": "Syria"
},
{
  "iso_3166_1": "SZ",
  "english_name": "Swaziland",
  "native_name": "Eswatini (Swaziland)"
},
{
  "iso_3166_1": "TC",
  "english_name": "Turks and Caicos Islands",
  "native_name": "Turks & Caicos Islands"
},
{
  "iso_3166_1": "TD",
  "english_name": "Chad",
  "native_name": "Chad"
},
{
  "iso_3166_1": "TF",
  "english_name": "French Southern Territories",
  "native_name": "French Southern Territories"
},
{
  "iso_3166_1": "TG",
  "english_name": "Togo",
  "native_name": "Togo"
},
{
  "iso_3166_1": "TH",
  "english_name": "Thailand",
  "native_name": "Thailand"
},
{
  "iso_3166_1": "TJ",
  "english_name": "Tajikistan",
  "native_name": "Tajikistan"
},
{
  "iso_3166_1": "TK",
  "english_name": "Tokelau",
  "native_name": "Tokelau"
},
{
  "iso_3166_1": "TL",
  "english_name": "Timor-Leste",
  "native_name": "Timor-Leste"
},
{
  "iso_3166_1": "TM",
  "english_name": "Turkmenistan",
  "native_name": "Turkmenistan"
},
{
  "iso_3166_1": "TN",
  "english_name": "Tunisia",
  "native_name": "Tunisia"
},
{
  "iso_3166_1": "TO",
  "english_name": "Tonga",
  "native_name": "Tonga"
},
{
  "iso_3166_1": "TP",
  "english_name": "East Timor",
  "native_name": "East Timor"
},
{
  "iso_3166_1": "TR",
  "english_name": "Turkey",
  "native_name": "Turkey"
},
{
  "iso_3166_1": "TT",
  "english_name": "Trinidad and Tobago",
  "native_name": "Trinidad & Tobago"
},
{
  "iso_3166_1": "TV",
  "english_name": "Tuvalu",
  "native_name": "Tuvalu"
},
{
  "iso_3166_1": "TW",
  "english_name": "Taiwan",
  "native_name": "Taiwan"
},
{
  "iso_3166_1": "TZ",
  "english_name": "Tanzania",
  "native_name": "Tanzania"
},
{
  "iso_3166_1": "UA",
  "english_name": "Ukraine",
  "native_name": "Ukraine"
},
{
  "iso_3166_1": "UG",
  "english_name": "Uganda",
  "native_name": "Uganda"
},
{
  "iso_3166_1": "UM",
  "english_name": "United States Minor Outlying Islands",
  "native_name": "U.S. Outlying Islands"
},
{
  "iso_3166_1": "US",
  "english_name": "United States of America",
  "native_name": "United States"
},
{
  "iso_3166_1": "UY",
  "english_name": "Uruguay",
  "native_name": "Uruguay"
},
{
  "iso_3166_1": "UZ",
  "english_name": "Uzbekistan",
  "native_name": "Uzbekistan"
},
{
  "iso_3166_1": "VA",
  "english_name": "Holy See",
  "native_name": "Vatican City"
},
{
  "iso_3166_1": "VC",
  "english_name": "St. Vincent and the Grenadines",
  "native_name": "St. Vincent & Grenadines"
},
{
  "iso_3166_1": "VE",
  "english_name": "Venezuela",
  "native_name": "Venezuela"
},
{
  "iso_3166_1": "VG",
  "english_name": "British Virgin Islands",
  "native_name": "British Virgin Islands"
},
{
  "iso_3166_1": "VI",
  "english_name": "US Virgin Islands",
  "native_name": "U.S. Virgin Islands"
},
{
  "iso_3166_1": "VN",
  "english_name": "Vietnam",
  "native_name": "Vietnam"
},
{
  "iso_3166_1": "VU",
  "english_name": "Vanuatu",
  "native_name": "Vanuatu"
},
{
  "iso_3166_1": "WF",
  "english_name": "Wallis and Futuna Islands",
  "native_name": "Wallis & Futuna"
},
{
  "iso_3166_1": "WS",
  "english_name": "Samoa",
  "native_name": "Samoa"
},
{
  "iso_3166_1": "XC",
  "english_name": "Czechoslovakia",
  "native_name": "Czechoslovakia"
},
{
  "iso_3166_1": "XG",
  "english_name": "East Germany",
  "native_name": "East Germany"
},
{
  "iso_3166_1": "XI",
  "english_name": "Northern Ireland",
  "native_name": "Northern Ireland"
},
{
  "iso_3166_1": "XK",
  "english_name": "Kosovo",
  "native_name": "Kosovo"
},
{
  "iso_3166_1": "YE",
  "english_name": "Yemen",
  "native_name": "Yemen"
},
{
  "iso_3166_1": "YT",
  "english_name": "Mayotte",
  "native_name": "Mayotte"
},
{
  "iso_3166_1": "YU",
  "english_name": "Yugoslavia",
  "native_name": "Yugoslavia"
},
{
  "iso_3166_1": "ZA",
  "english_name": "South Africa",
  "native_name": "South Africa"
},
{
  "iso_3166_1": "ZM",
  "english_name": "Zambia",
  "native_name": "Zambia"
},
{
  "iso_3166_1": "ZR",
  "english_name": "Zaire",
  "native_name": "Zaire"
},
{
  "iso_3166_1": "ZW",
  "english_name": "Zimbabwe",
  "native_name": "Zimbabwe"
}
]);
});

router.get('/configuration/jobs', function(req, res, next) {
  res.json([
{
  "department": "Production",
  "jobs": [
    "Casting",
    "ADR Voice Casting",
    "Production Accountant",
    "Finance",
    "Coordinating Producer",
    "Script Researcher",
    "Line Producer",
    "Development Manager",
    "Publicist",
    "Supervising Producer",
    "Assistant Production Manager",
    "Executive Producer",
    "Production Manager",
    "Other",
    "Production Director",
    "Unit Manager",
    "Associate Producer",
    "Assistant Production Coordinator",
    "Co-Producer",
    "Consulting Producer",
    "Producer",
    "Location Manager",
    "Executive In Charge Of Production",
    "Administration",
    "Executive In Charge Of Post Production",
    "Unit Production Manager",
    "Character Technical Supervisor",
    "Co-Executive Producer",
    "Senior Executive Consultant",
    "Production Supervisor",
    "Casting Associate",
    "Casting Consultant",
    "Local Casting",
    "Production Office Coordinator",
    "Executive Consultant",
    "Casting Assistant",
    "Researcher",
    "Production Coordinator",
    "Casting Producer",
    "Musical Casting",
    "Street Casting",
    "Assistant Extras Casting",
    "Back-up Set Production Assistant",
    "Post Producer",
    "Second Assistant Production Coordinator",
    "Additional Casting",
    "Art Department Production Assistant",
    "Executive Co-Producer",
    "Key Set Production Assistant",
    "Post Production Coordinator",
    "Production Designer",
    "Second Unit Location Manager",
    "Attorney",
    "Delegated Producer",
    "Feature Finishing Producer",
    "Grip Production Assistant",
    "Production Secretary",
    "Trainee Production Coordinator",
    "Accounting Clerk Assistant",
    "Consulting Accountant",
    "General Manager",
    "Insert Unit Location Manager",
    "Location Production Assistant",
    "Production Trainee",
    "Unit Swing",
    "Assistant Accountant",
    "Data Management Technician",
    "First Assistant Production Coordinator",
    "Head of Research",
    "Location Assistant",
    "Location Coordinator",
    "Production Executive",
    "Second Assistant Accountant",
    "Accountant",
    "Assistant Location Manager",
    "Finishing Producer",
    "Location Casting",
    "Post Production Accountant",
    "Casting Researcher",
    "Key Art Production Assistant",
    "Executive Assistant",
    "Post Coordinator",
    "Post Production Producer",
    "Additional Production Assistant",
    "Development Producer",
    "Director of Operations",
    "Key Production Assistant",
    "Accounting Trainee",
    "Additional Post-Production Supervisor",
    "Casting Coordinator",
    "Contract Manager",
    "Extras Casting Coordinator",
    "Producer's Assistant",
    "Casting Director",
    "Extras Casting Assistant",
    "Post Production Technical Engineer",
    "Accounting Supervisor",
    "Key Accountant",
    "Production Runner",
    "Truck Production Assistant",
    "Executive Producer's Assistant",
    "Extras Casting",
    "First Assistant Accountant",
    "Human Resources",
    "Key Grip Production Assistant",
    "Production Assistant",
    "Travel Coordinator",
    "Background Casting Director",
    "Back-up Truck Production Assistant",
    "Business Affairs Coordinator",
    "Controller",
    "Head of Production",
    "Original Casting",
    "Payroll Accountant",
    "Research Assistant",
    "Second Assistant Unit Manager",
    "Assistant Unit Manager",
    "Broadcast Producer",
    "Head of Programming",
    "Locale Casting Director",
    "Production Consultant",
    "Production Driver"
  ]
},
{
  "department": "Crew",
  "jobs": [
    "Supervising Technical Director",
    "Production Artist",
    "Documentation & Support",
    "Compositor",
    "Video Assist Operator",
    "Score Engineer",
    "Additional Dialogue",
    "Unit Publicist",
    "Studio Teacher",
    "Transportation Co-Captain",
    "Second Unit Cinematographer",
    "Visual Effects Design Consultant",
    "Series Writer",
    "Temp Sound Editor",
    "Post Production Assistant",
    "Set Production Assistant",
    "Loader",
    "Public Relations",
    "Dramaturgy",
    "Second Film Editor",
    "Supervisor of Production Resources",
    "Production Office Assistant",
    "Systems Administrators & Support",
    "Picture Car Coordinator",
    "Craft Service",
    "Prop Maker",
    "Digital Effects Producer",
    "Choreographer",
    "Sound Design Assistant",
    "Sequence Artist",
    "Actor's Assistant",
    "Chef",
    "Propmaker",
    "Manager of Operations",
    "Martial Arts Choreographer",
    "Executive in Charge of Finance",
    "Lighting Camera",
    "Editorial Staff",
    "Special Effects",
    "Information Systems Manager",
    "Set Medic",
    "Production Controller",
    "Quality Control Supervisor",
    "Associate Choreographer",
    "Pilot",
    "Presenter",
    "Software Engineer",
    "Schedule Coordinator",
    "Motion Actor",
    "Stand In",
    "Production Intern",
    "Digital Effects Supervisor",
    "CG Supervisor",
    "Visual Effects Editor",
    "Additional Writing",
    "Stunt Coordinator",
    "Motion Capture Artist",
    "Transportation Coordinator",
    "Transportation Captain",
    "Cinematography",
    "Treatment",
    "CGI Supervisor",
    "Script",
    "Additional Music",
    "Creator",
    "Graphic Novel Illustrator",
    "Software Team Lead",
    "Machinist",
    "Post-Production Manager",
    "Utility Stunts",
    "Executive Visual Effects Producer",
    "Radio Play",
    "Second Unit",
    "Temp Music Editor",
    "Mix Technician",
    "Post Production Consulting",
    "Set Production Intern",
    "Legal Services",
    "Translator",
    "Telecine Colorist",
    "Animatronic and Prosthetic Effects",
    "Makeup Effects",
    "Poem",
    "In Memory Of",
    "Animatronics Supervisor",
    "Fight Choreographer",
    "Dialect Coach",
    "Steadycam",
    "Digital Producer",
    "Thanks",
    "Animatronics Designer",
    "Marine Coordinator",
    "Photoscience Manager",
    "Special Sound Effects",
    "Armory Coordinator",
    "Pyrotechnician",
    "Techno Crane Operator",
    "Post Production Supervisor",
    "Sequence Supervisor",
    "Driver",
    "Technical Supervisor",
    "Creative Consultant",
    "Commissioning Editor",
    "Special Effects Coordinator",
    "Security",
    "Other",
    "Carpenter",
    "Sequence Lead",
    "Department Administrator",
    "Sets & Props Supervisor",
    "Mixing Engineer",
    "Title Graphics",
    "Visual Effects Art Director",
    "Video Game",
    "Armorer",
    "Aerial Coordinator",
    "Animal Wrangler",
    "Drone Operator",
    "Stunts",
    "Supervising Animator",
    "Projection",
    "Tattooist",
    "Sets & Props Artist",
    "Cableman",
    "Scenic Artist",
    "Executive Music Producer",
    "Animal Coordinator",
    "Administrative Assistant",
    "Stunt Double",
    "Assistant Craft Service",
    "Cast Driver",
    "Digital Supervisor",
    "Medical Consultant",
    "Playback Coordinator",
    "Set Runner",
    "Specialized Driver",
    "Transcriptions",
    "Clearances Consultant",
    "Series Publicist",
    "Stunt Driver",
    "Child Wrangler",
    "Dialogue Coach",
    "Key Special Effects",
    "Assistant Script",
    "Scientific Consultant",
    "Special Effects Assistant",
    "Special Effects Manager",
    "Vehicles Wrangler",
    "Base Camp Operator",
    "Catering Head Chef",
    "Chaperone",
    "Clearances Coordinator",
    "Special Effects Best Boy",
    "Logistics Coordinator",
    "Master at Arms",
    "Post Production Scripts",
    "Sponsorship Director",
    "Assistant Picture Car Coordinator",
    "Vehicles Coordinator",
    "Catering",
    "Police Consultant",
    "Supervising Armorer",
    "Technical Advisor",
    "Acting Double",
    "Additional Script Supervisor",
    "Interactive Manager",
    "Assistant Vehicles Coordinator",
    "File Footage",
    "Head Driver",
    "Health and Safety",
    "Military Consultant",
    "Charge Scenic Artist",
    "Film Processor",
    "Key Scenic Artist",
    "Marine Pilot",
    "Unit Medic",
    "Chaperone Tutor",
    "Floor Runner",
    "Weapons Master",
    "Weapons Wrangler",
    "Security Coordinator",
    "Sponsorship Coordinator",
    "Captain Driver",
    "Director of Communications",
    "Generator Operator",
    "Intern",
    "Receptionist",
    "Special Effects Technician",
    "Assistant Chef"
  ]
},
{
  "department": "Camera",
  "jobs": [
    "Camera Department Manager",
    "Russian Arm Operator",
    "Additional Camera",
    "Dolly Grip",
    "Steadicam Operator",
    "Camera Technician",
    "Still Photographer",
    "Helicopter Camera",
    "Aerial Camera",
    "Second Unit Director of Photography",
    "Director of Photography",
    "Underwater Camera",
    "Grip",
    "Camera Intern",
    "Camera Operator",
    "Key Grip",
    "Additional Still Photographer",
    "Camera Supervisor",
    "Camera Loader",
    "Additional Photography",
    "First Assistant Camera",
    "Epk Camera Operator",
    "Underwater Director of Photography",
    "Ultimate Arm Operator",
    "Aerial Director of Photography",
    "Other",
    "Aerial Camera Technician",
    "Libra Head Technician",
    "Additional Director of Photography",
    "Additional First Assistant Camera",
    "BTS Photographer",
    "Camera Trainee",
    "Focus Puller",
    "Second Assistant \"D\" Camera",
    "Videojournalist",
    "Epk Director",
    "Assistant Camera",
    "BTS Footage",
    "Second Company Grip",
    "Third Assistant Camera",
    "Additional Second Assistant Camera",
    "Best Boy Grip",
    "Red Technician",
    "\"D\" Camera Operator",
    "Set Photographer",
    "\"A\" Camera Operator",
    "\"B\" Camera Operator",
    "\"C\" Camera Operator",
    "Camera Car",
    "Camera Production Assistant",
    "Clapper Loader",
    "First Assistant \"B\" Camera",
    "First Assistant \"D\" Camera",
    "Camera Department Production Assistant",
    "Additional Key Grip",
    "Digital Imaging Technician",
    "First Assistant \"C\" Camera",
    "First Company Grip",
    "Second Assistant Camera",
    "Third Assistant \"A\" Camera",
    "Assistant Grip",
    "Jimmy Jib Operator",
    "Third Assistant \"B\" Camera",
    "Additional Grip",
    "Drone Cinematographer",
    "Phantom Operator",
    "Second Assistant \"B\" Camera",
    "Underwater Stills Photographer",
    "Second Assistant \"C\" Camera",
    "Video Report",
    "Additional Set Photographer",
    "Drone Pilot",
    "Additional Underwater Photography",
    "Data Wrangler",
    "First Assistant \"A\" Camera",
    "Head of Layout",
    "Second Assistant \"A\" Camera",
    "Third Assistant \"C\" Camera",
    "Third Assistant \"D\" Camera",
    "Underwater Epk Photographer",
    "BTS Videographer",
    "Camera Truck",
    "Epk Producer"
  ]
},
{
  "department": "Writing",
  "jobs": [
    "Writer",
    "Storyboard",
    "Story Editor",
    "Idea",
    "Script Editor",
    "Short Story",
    "Story",
    "Teleplay",
    "Adaptation",
    "Author",
    "Scenario Writer",
    "Script Consultant",
    "Opera",
    "Musical",
    "Comic Book",
    "Series Composition",
    "Novel",
    "Dialogue",
    "Co-Writer",
    "Characters",
    "Theatre Play",
    "Other",
    "Screenstory",
    "Original Story",
    "Creative Producer",
    "Book",
    "Screenplay",
    "Original Series Creator",
    "Graphic Novel",
    "Original Film Writer",
    "Story Consultant",
    "Writers' Assistant",
    "Executive Story Editor",
    "Story Manager",
    "Senior Story Editor",
    "Story Supervisor",
    "Staff Writer",
    "Writers' Production",
    "Story Artist",
    "Story Developer",
    "Head of Story",
    "Lyricist",
    "Junior Story Editor",
    "Original Concept",
    "Story Coordinator"
  ]
},
{
  "department": "Art",
  "jobs": [
    "Art Direction",
    "Production Design",
    "Set Designer",
    "Interior Designer",
    "Prop Designer",
    "Assistant Set Designer",
    "Dressing Prop",
    "Head Designer",
    "Gun Wrangler",
    "Additional Set Dresser",
    "Assistant Decorator",
    "Assistant Production Design",
    "Construction Grip",
    "Construction Manager",
    "First Assistant Property Master",
    "Greensman",
    "Construction Foreman",
    "Lead Painter",
    "Assistant Director of Photography",
    "Additional Key Construction Grip",
    "First Assistant Art Direction",
    "Digital Storyboarding",
    "Head Carpenter",
    "Assistant Property Master",
    "Co-Art Director",
    "Conceptual Illustrator",
    "Assistant Set Propsman",
    "Storyboard Designer",
    "Assistant Set Decoration Buyer",
    "Concept Artist",
    "Set Decorating Coordinator",
    "Construction Buyer",
    "Decorator",
    "Art Department Assistant",
    "Background Designer",
    "Sign Painter",
    "Title Designer",
    "Art Designer",
    "Art Direction Intern",
    "Creative Director",
    "Sculptor",
    "Assistant Set Dresser",
    "Additional Storyboarding",
    "Settings",
    "Other",
    "Production Illustrator",
    "Standby Painter",
    "Assistant Art Director",
    "Art Department Coordinator",
    "Draughtsman",
    "Additional Construction Grip",
    "Art Department Trainee",
    "Art Department Manager",
    "Graphic Designer",
    "Head Decorator",
    "Supervising Art Director",
    "Construction Coordinator",
    "Lead Set Dresser",
    "Set Dresser",
    "Additional Construction",
    "Assistant Set Decoration",
    "Set Decoration",
    "Leadman",
    "Daily Grip",
    "Conceptual Design",
    "Set Decoration Buyer",
    "Property Master",
    "Location Scout",
    "Painter",
    "Property Builder",
    "Runner Art Department",
    "Paint Coordinator",
    "Storyboard Artist",
    "Special Props",
    "Standby Carpenter",
    "On Set Props",
    "Set Propsman",
    "Property Graphic Designer",
    "Petty Cash Buyer",
    "Head Greensman",
    "Title Illustration",
    "Property Buyer",
    "Props",
    "Standby Property Master",
    "Shop Electric",
    "On Set Key Props",
    "Key Construction Grip",
    "Key Set Painter",
    "Standby Art Director",
    "Opening Title Sequence",
    "Key Carpenter",
    "Second Assistant Art Director",
    "Textile Artist",
    "Set Painter",
    "Web Designer",
    "Main Title Designer",
    "On Set Computer Graphics",
    "Original Series Design",
    "Set Dressing Buyer",
    "Set Supervisor",
    "Storyboard Assistant",
    "Set Buyer",
    "Supervising Carpenter",
    "Swing",
    "Helping Hand"
  ]
},
{
  "department": "Actors",
  "jobs": [
    "Cameo",
    "Actor",
    "Voice",
    "Special Guest",
    "Stunt Double"
  ]
},
{
  "department": "Directing",
  "jobs": [
    "Director",
    "Script Supervisor",
    "Layout",
    "Continuity",
    "Special Guest Director",
    "Other",
    "Assistant Director",
    "Co-Director",
    "Second Assistant Director",
    "Third Assistant Director",
    "Script Coordinator",
    "First Assistant Director",
    "Insert Unit Director",
    "Second Second Assistant Director",
    "Second Unit First Assistant Director",
    "Insert Unit First Assistant Director",
    "Field Director",
    "Crowd Assistant Director",
    "Stage Director",
    "Action Director",
    "Additional Second Assistant Director",
    "Assistant Director Trainee",
    "Second Assistant Director Trainee",
    "Additional Third Assistant Director",
    "First Assistant Director (Prep)",
    "First Assistant Director Trainee",
    "Second Unit Director",
    "Series Director"
  ]
},
{
  "department": "Sound",
  "jobs": [
    "Music Editor",
    "Sound Designer",
    "Sound Recordist",
    "Assistant Sound Editor",
    "Sound Effects",
    "Supervising ADR Editor",
    "Utility Sound",
    "Original Music Composer",
    "Music Supervisor",
    "ADR Supervisor",
    "Playback Singer",
    "Supervising Music Editor",
    "Sound Director",
    "Dialogue Editor",
    "Boom Operator",
    "Songs",
    "Orchestrator",
    "Supervising Sound Effects Editor",
    "Recording Supervision",
    "Additional Music Supervisor",
    "Sound",
    "Musician",
    "Music Programmer",
    "Scoring Mixer",
    "Additional Sound Re-Recordist",
    "Supervising Sound Editor",
    "Sound Re-Recording Mixer",
    "Sound Engineer",
    "Foley Editor",
    "Music Score Producer",
    "Additional Soundtrack",
    "Foley",
    "Sound Montage Associate",
    "Music Director",
    "Sound Effects Editor",
    "Music",
    "First Assistant Sound Editor",
    "Dolby Consultant",
    "Production Sound Mixer",
    "Other",
    "Sound Effects Designer",
    "Theme Song Performance",
    "ADR & Dubbing",
    "Vocal Coach",
    "Additional Sound Re-Recording Mixer",
    "Assistant Music Supervisor",
    "Supervising Dialogue Editor",
    "Sound Editor",
    "Sound Mixer",
    "ADR Editor",
    "Apprentice Sound Editor",
    "Conductor",
    "Foley Recordist",
    "Assistant Dialogue Editor",
    "Assistant Sound Designer",
    "Foley Recording Engineer",
    "Music Sound Design and Processing",
    "Second Assistant Sound",
    "Music Coordinator",
    "O.B. Sound",
    "ADR Engineer",
    "Audio Post Coordinator",
    "Location Sound Recordist",
    "Music Consultant",
    "Sound Technical Supervisor",
    "Assistant Sound Engineer",
    "Sound Mix Technician",
    "Additional Production Sound Mixer",
    "Foley Mixer",
    "Keyboard Programmer",
    "Location Sound Assistant",
    "Sound Post Production Coordinator",
    "ADR Recordist",
    "Loop Group Coordinator",
    "Music Producer",
    "ADR Recording Engineer",
    "Sound Supervisor",
    "ADR Editor",
    "Foley Artist",
    "Joint ADR Mixer",
    "Sound Assistant",
    "Sound Post Supervisor",
    "Assistant Foley Artist",
    "Music Arranger",
    "Music Supervision Assistant",
    "ADR Coordinator",
    "Main Title Theme Composer",
    "Music Co-Supervisor",
    "ADR Post Producer",
    "Foley Supervisor",
    "Sound Re-Recording Assistant",
    "ADR Mixer",
    "Digital Foley Artist",
    "Location Sound Mixer",
    "Vocals"
  ]
},
{
  "department": "Visual Effects",
  "jobs": [
    "Chief Technician / Stop-Motion Expert",
    "Visual Development",
    "Animation Manager",
    "I/O Manager",
    "3D Modeller",
    "CGI Director",
    "Mechanical Designer",
    "Animation Fix Coordinator",
    "Pyrotechnic Supervisor",
    "Animation Director",
    "Battle Motion Coordinator",
    "Visual Effects Producer",
    "Color Designer",
    "Pre-Visualization Supervisor",
    "3D Animator",
    "Fix Animator",
    "VFX Supervisor",
    "Character Modelling Supervisor",
    "Visual Effects Technical Director",
    "Visual Effects",
    "Animation Supervisor",
    "Simulation & Effects Artist",
    "3D Supervisor",
    "Creature Technical Director",
    "Lead Character Designer",
    "VFX Director of Photography",
    "Imaging Science",
    "VFX Editor",
    "2D Artist",
    "3D Coordinator",
    "3D Tracking Layout",
    "Creature Design",
    "Visual Effects Supervisor",
    "Visual Effects Designer",
    "Digital Compositor",
    "Matchmove Supervisor",
    "Stereoscopic Coordinator",
    "VFX Lighting Artist",
    "Shading",
    "VFX Production Coordinator",
    "Simulation & Effects Production Assistant",
    "Key Animation",
    "Lead Animator",
    "Opening/Ending Animation",
    "I/O Supervisor",
    "Special Effects Supervisor",
    "2D Supervisor",
    "Character Designer",
    "Animation Department Coordinator",
    "3D Director",
    "3D Sequence Supervisor",
    "CG Animator",
    "CG Painter",
    "VFX Artist",
    "3D Artist",
    "Animation Production Assistant",
    "Mechanical & Creature Designer",
    "Cloth Setup",
    "CG Engineer",
    "Additional Effects Development",
    "Visual Effects Coordinator",
    "3D Generalist",
    "Digital Effects Producer",
    "Roto Supervisor",
    "Animation",
    "Modeling",
    "24 Frame Playback",
    "Creature Effects Technical Director",
    "Visual Effects Assistant Editor",
    "Visual Effects Director",
    "Visual Effects Production Manager",
    "Cyber Scanning Supervisor",
    "Generalist",
    "Visual Effects Camera",
    "Compositing Artist",
    "Compositing Supervisor",
    "Rotoscoping Artist",
    "Senior Modeller",
    "Stereoscopic Technical Director",
    "Director of Previsualization",
    "Photo Retouching",
    "Smoke Artist",
    "CG Artist",
    "Digital Film Recording",
    "Head of Animation",
    "Senior Animator",
    "Visual Effects Compositor",
    "Animation Coordinator",
    "Layout Supervisor",
    "Pre-Visualization Coordinator",
    "Visual Effects Production Assistant",
    "Modelling Supervisor",
    "Senior Visual Effects Supervisor",
    "Animation Technical Director",
    "2D Sequence Supervisor",
    "Lead Creature Designer",
    "Visual Effects Lineup",
    "Senior Generalist",
    "Compositing Lead",
    "Matte Painter",
    "Pipeline Technical Director",
    "Supervising Animation Director",
    "Additional Visual Effects",
    "Effects Supervisor",
    "Stereoscopic Supervisor"
  ]
},
{
  "department": "Editing",
  "jobs": [
    "Additional Editorial Assistant",
    "Assistant Editor",
    "Editorial Manager",
    "Editor",
    "Archival Footage Research",
    "Supervising Film Editor",
    "Editorial Production Assistant",
    "Digital Intermediate",
    "Associate Editor",
    "Additional Editing",
    "Editorial Coordinator",
    "Co-Editor",
    "Archival Footage Coordinator",
    "Color Timer",
    "First Assistant Editor",
    "Other",
    "Negative Cutter",
    "Editorial Services",
    "Atmos Editor",
    "Additional Editor",
    "Color Assistant",
    "Digital Color Timer",
    "Senior Digital Intermediate Colorist",
    "3D Editor",
    "Colorist",
    "EPK Editor",
    "Senior Colorist",
    "First Assistant Picture Editor",
    "Supervising Editor",
    "Color Grading",
    "Dailies Operator",
    "Digital Colorist",
    "Lead Editor",
    "3D Digital Colorist",
    "Assistant Picture Editor",
    "Dailies Technician",
    "Digital Conform Editor",
    "Project Manager",
    "Stereoscopic Editor",
    "Additional Colorist",
    "Dailies Manager",
    "Digital Intermediate Editor",
    "Digital Intermediate Colorist",
    "Digital Intermediate Data Wrangler",
    "Consulting Editor",
    "Editorial Consultant",
    "Digital Intermediate Producer",
    "Online Editor",
    "Digital Intermediate Assistant"
  ]
},
{
  "department": "Lighting",
  "jobs": [
    "Directing Lighting Artist",
    "Best Boy Electric",
    "Rigging Gaffer",
    "Best Boy Electrician",
    "Lighting Coordinator",
    "Lighting Director",
    "Underwater Gaffer",
    "Lighting Technician",
    "Gaffer",
    "Lighting Manager",
    "Master Lighting Artist",
    "Other",
    "Rigging Supervisor",
    "Lighting Supervisor",
    "Lighting Production Assistant",
    "Rigging Grip",
    "Chief Lighting Technician",
    "Lighting Artist",
    "Electrician",
    "O.B. Lighting",
    "Additional Gaffer",
    "Key Rigging Grip",
    "Lighting Design",
    "Assistant Electrician",
    "Assistant Chief Lighting Technician",
    "Best Boy Lighting Technician",
    "Daily Electrics",
    "Genetator Operator",
    "Lighting Programmer",
    "Standby Rigger",
    "Additional Lighting Technician",
    "Assistant Gaffer"
  ]
},
{
  "department": "Costume & Make-Up",
  "jobs": [
    "Set Costumer",
    "Co-Costume Designer",
    "Makeup Effects Designer",
    "Hair Department Head",
    "Tattoo Designer",
    "Seamstress",
    "Prosthetic Makeup Artist",
    "Set Dressing Manager",
    "Set Dressing Production Assistant",
    "Hair Setup",
    "Key Hair Stylist",
    "Makeup Artist",
    "Makeup Designer",
    "Hair Designer",
    "Tailor",
    "Ager/Dyer",
    "Costume Design",
    "Key Makeup Artist",
    "Key Set Costumer",
    "Set Dressing Artist",
    "Set Dressing Supervisor",
    "Shoe Design",
    "Costume Coordinator",
    "Key Costumer",
    "Costume Supervisor",
    "Makeup Department Head",
    "Prosthetic Designer",
    "Costume Illustrator",
    "Wigmaker",
    "Other",
    "Hair Supervisor",
    "Wardrobe Supervisor",
    "Hairstylist",
    "Prosthetic Supervisor",
    "Facial Setup Artist",
    "Assistant Costume Designer",
    "Costume Consultant",
    "Makeup Supervisor",
    "Wig Designer",
    "Assistant Hairstylist",
    "Hairdresser",
    "Key Hairdresser",
    "Special Effects Key Makeup Artist",
    "Special Effects Makeup Artist",
    "Contact Lens Painter",
    "Prosthetics Painter",
    "Truck Costumer",
    "Additional Wardrobe Assistant",
    "Costumer",
    "Extras Dresser",
    "Makeup & Hair Assistant",
    "Daily Makeup & Hair",
    "Dresser",
    "Makeup Trainee",
    "Wardrobe Intern",
    "Costume Mistress",
    "Wardrobe Specialized Technician",
    "Makeup & Hair",
    "Prosthetics Sculptor",
    "First Assistant Hairstylist",
    "First Assistant Makeup Artist",
    "Lead Costumer",
    "Hair Assistant",
    "Principal Costumer",
    "Truck Supervisor",
    "Costume Set Supervisor",
    "Key Dresser",
    "On Set Dresser",
    "Additional Hairstylist",
    "Assistant Hairdresser",
    "Costume Assistant",
    "Costume Designer",
    "Daily Wardrobe",
    "Extras Makeup Artist",
    "Contact Lens Technician",
    "Costume Standby",
    "Prosthetics",
    "Wardrobe Assistant",
    "Wardrobe Designer",
    "Wardrobe Master",
    "Assistant Makeup Artist",
    "Contact Lens Designer",
    "Wardrobe Coordinator"
  ]
}
]);
});

router.get('/configuration/languages', function(req, res, next) {
  res.json([
{
  "iso_639_1": "an",
  "english_name": "Aragonese",
  "name": ""
},
{
  "iso_639_1": "ak",
  "english_name": "Akan",
  "name": ""
},
{
  "iso_639_1": "cr",
  "english_name": "Cree",
  "name": ""
},
{
  "iso_639_1": "az",
  "english_name": "Azerbaijani",
  "name": "Azərbaycan"
},
{
  "iso_639_1": "cs",
  "english_name": "Czech",
  "name": "Český"
},
{
  "iso_639_1": "aa",
  "english_name": "Afar",
  "name": ""
},
{
  "iso_639_1": "br",
  "english_name": "Breton",
  "name": ""
},
{
  "iso_639_1": "af",
  "english_name": "Afrikaans",
  "name": "Afrikaans"
},
{
  "iso_639_1": "bo",
  "english_name": "Tibetan",
  "name": ""
},
{
  "iso_639_1": "ce",
  "english_name": "Chechen",
  "name": ""
},
{
  "iso_639_1": "kw",
  "english_name": "Cornish",
  "name": ""
},
{
  "iso_639_1": "fo",
  "english_name": "Faroese",
  "name": ""
},
{
  "iso_639_1": "la",
  "english_name": "Latin",
  "name": "Latin"
},
{
  "iso_639_1": "ng",
  "english_name": "Ndonga",
  "name": ""
},
{
  "iso_639_1": "sc",
  "english_name": "Sardinian",
  "name": ""
},
{
  "iso_639_1": "ti",
  "english_name": "Tigrinya",
  "name": ""
},
{
  "iso_639_1": "tn",
  "english_name": "Tswana",
  "name": ""
},
{
  "iso_639_1": "tr",
  "english_name": "Turkish",
  "name": "Türkçe"
},
{
  "iso_639_1": "pa",
  "english_name": "Punjabi",
  "name": "ਪੰਜਾਬੀ"
},
{
  "iso_639_1": "et",
  "english_name": "Estonian",
  "name": "Eesti"
},
{
  "iso_639_1": "fr",
  "english_name": "French",
  "name": "Français"
},
{
  "iso_639_1": "ha",
  "english_name": "Hausa",
  "name": "Hausa"
},
{
  "iso_639_1": "is",
  "english_name": "Icelandic",
  "name": "Íslenska"
},
{
  "iso_639_1": "li",
  "english_name": "Limburgish",
  "name": ""
},
{
  "iso_639_1": "ln",
  "english_name": "Lingala",
  "name": ""
},
{
  "iso_639_1": "ss",
  "english_name": "Swati",
  "name": ""
},
{
  "iso_639_1": "ab",
  "english_name": "Abkhazian",
  "name": ""
},
{
  "iso_639_1": "sh",
  "english_name": "Serbo-Croatian",
  "name": ""
},
{
  "iso_639_1": "eu",
  "english_name": "Basque",
  "name": "euskera"
},
{
  "iso_639_1": "fy",
  "english_name": "Frisian",
  "name": ""
},
{
  "iso_639_1": "ja",
  "english_name": "Japanese",
  "name": "日本語"
},
{
  "iso_639_1": "oj",
  "english_name": "Ojibwa",
  "name": ""
},
{
  "iso_639_1": "or",
  "english_name": "Oriya",
  "name": ""
},
{
  "iso_639_1": "pi",
  "english_name": "Pali",
  "name": ""
},
{
  "iso_639_1": "su",
  "english_name": "Sundanese",
  "name": ""
},
{
  "iso_639_1": "th",
  "english_name": "Thai",
  "name": "ภาษาไทย"
},
{
  "iso_639_1": "ig",
  "english_name": "Igbo",
  "name": ""
},
{
  "iso_639_1": "id",
  "english_name": "Indonesian",
  "name": "Bahasa indonesia"
},
{
  "iso_639_1": "kk",
  "english_name": "Kazakh",
  "name": "қазақ"
},
{
  "iso_639_1": "ki",
  "english_name": "Kikuyu",
  "name": ""
},
{
  "iso_639_1": "ug",
  "english_name": "Uighur",
  "name": ""
},
{
  "iso_639_1": "ve",
  "english_name": "Venda",
  "name": ""
},
{
  "iso_639_1": "rw",
  "english_name": "Kinyarwanda",
  "name": "Kinyarwanda"
},
{
  "iso_639_1": "mi",
  "english_name": "Maori",
  "name": ""
},
{
  "iso_639_1": "nv",
  "english_name": "Navajo",
  "name": ""
},
{
  "iso_639_1": "hi",
  "english_name": "Hindi",
  "name": "हिन्दी"
},
{
  "iso_639_1": "pt",
  "english_name": "Portuguese",
  "name": "Português"
},
{
  "iso_639_1": "sg",
  "english_name": "Sango",
  "name": ""
},
{
  "iso_639_1": "sk",
  "english_name": "Slovak",
  "name": "Slovenčina"
},
{
  "iso_639_1": "sr",
  "english_name": "Serbian",
  "name": "Srpski"
},
{
  "iso_639_1": "ty",
  "english_name": "Tahitian",
  "name": ""
},
{
  "iso_639_1": "xh",
  "english_name": "Xhosa",
  "name": ""
},
{
  "iso_639_1": "ar",
  "english_name": "Arabic",
  "name": "العربية"
},
{
  "iso_639_1": "co",
  "english_name": "Corsican",
  "name": ""
},
{
  "iso_639_1": "bi",
  "english_name": "Bislama",
  "name": ""
},
{
  "iso_639_1": "eo",
  "english_name": "Esperanto",
  "name": "Esperanto"
},
{
  "iso_639_1": "hz",
  "english_name": "Herero",
  "name": ""
},
{
  "iso_639_1": "fi",
  "english_name": "Finnish",
  "name": "suomi"
},
{
  "iso_639_1": "iu",
  "english_name": "Inuktitut",
  "name": ""
},
{
  "iso_639_1": "lv",
  "english_name": "Latvian",
  "name": "Latviešu"
},
{
  "iso_639_1": "it",
  "english_name": "Italian",
  "name": "Italiano"
},
{
  "iso_639_1": "nl",
  "english_name": "Dutch",
  "name": "Nederlands"
},
{
  "iso_639_1": "kn",
  "english_name": "Kannada",
  "name": "?????"
},
{
  "iso_639_1": "sa",
  "english_name": "Sanskrit",
  "name": ""
},
{
  "iso_639_1": "sq",
  "english_name": "Albanian",
  "name": "shqip"
},
{
  "iso_639_1": "tl",
  "english_name": "Tagalog",
  "name": ""
},
{
  "iso_639_1": "lb",
  "english_name": "Letzeburgesch",
  "name": ""
},
{
  "iso_639_1": "ts",
  "english_name": "Tsonga",
  "name": ""
},
{
  "iso_639_1": "ml",
  "english_name": "Malayalam",
  "name": ""
},
{
  "iso_639_1": "vo",
  "english_name": "Volapük",
  "name": ""
},
{
  "iso_639_1": "zu",
  "english_name": "Zulu",
  "name": "isiZulu"
},
{
  "iso_639_1": "os",
  "english_name": "Ossetian; Ossetic",
  "name": ""
},
{
  "iso_639_1": "sm",
  "english_name": "Samoan",
  "name": ""
},
{
  "iso_639_1": "za",
  "english_name": "Zhuang",
  "name": ""
},
{
  "iso_639_1": "bn",
  "english_name": "Bengali",
  "name": "বাংলা"
},
{
  "iso_639_1": "cu",
  "english_name": "Slavic",
  "name": ""
},
{
  "iso_639_1": "ga",
  "english_name": "Irish",
  "name": "Gaeilge"
},
{
  "iso_639_1": "gv",
  "english_name": "Manx",
  "name": ""
},
{
  "iso_639_1": "hu",
  "english_name": "Hungarian",
  "name": "Magyar"
},
{
  "iso_639_1": "jv",
  "english_name": "Javanese",
  "name": ""
},
{
  "iso_639_1": "kr",
  "english_name": "Kanuri",
  "name": ""
},
{
  "iso_639_1": "km",
  "english_name": "Khmer",
  "name": ""
},
{
  "iso_639_1": "ky",
  "english_name": "Kirghiz",
  "name": "??????"
},
{
  "iso_639_1": "na",
  "english_name": "Nauru",
  "name": ""
},
{
  "iso_639_1": "nr",
  "english_name": "Ndebele",
  "name": ""
},
{
  "iso_639_1": "oc",
  "english_name": "Occitan",
  "name": ""
},
{
  "iso_639_1": "ro",
  "english_name": "Romanian",
  "name": "Română"
},
{
  "iso_639_1": "ru",
  "english_name": "Russian",
  "name": "Pусский"
},
{
  "iso_639_1": "hy",
  "english_name": "Armenian",
  "name": ""
},
{
  "iso_639_1": "ch",
  "english_name": "Chamorro",
  "name": "Finu' Chamorro"
},
{
  "iso_639_1": "xx",
  "english_name": "No Language",
  "name": "No Language"
},
{
  "iso_639_1": "ba",
  "english_name": "Bashkir",
  "name": ""
},
{
  "iso_639_1": "gl",
  "english_name": "Galician",
  "name": "Galego"
},
{
  "iso_639_1": "io",
  "english_name": "Ido",
  "name": ""
},
{
  "iso_639_1": "lu",
  "english_name": "Luba-Katanga",
  "name": ""
},
{
  "iso_639_1": "mh",
  "english_name": "Marshall",
  "name": ""
},
{
  "iso_639_1": "mg",
  "english_name": "Malagasy",
  "name": ""
},
{
  "iso_639_1": "mo",
  "english_name": "Moldavian",
  "name": ""
},
{
  "iso_639_1": "mn",
  "english_name": "Mongolian",
  "name": ""
},
{
  "iso_639_1": "nd",
  "english_name": "Ndebele",
  "name": ""
},
{
  "iso_639_1": "no",
  "english_name": "Norwegian",
  "name": "Norsk"
},
{
  "iso_639_1": "pl",
  "english_name": "Polish",
  "name": "Polski"
},
{
  "iso_639_1": "sw",
  "english_name": "Swahili",
  "name": "Kiswahili"
},
{
  "iso_639_1": "tg",
  "english_name": "Tajik",
  "name": ""
},
{
  "iso_639_1": "to",
  "english_name": "Tonga",
  "name": ""
},
{
  "iso_639_1": "wa",
  "english_name": "Walloon",
  "name": ""
},
{
  "iso_639_1": "yi",
  "english_name": "Yiddish",
  "name": ""
},
{
  "iso_639_1": "en",
  "english_name": "English",
  "name": "English"
},
{
  "iso_639_1": "as",
  "english_name": "Assamese",
  "name": ""
},
{
  "iso_639_1": "gd",
  "english_name": "Gaelic",
  "name": ""
},
{
  "iso_639_1": "kl",
  "english_name": "Kalaallisut",
  "name": ""
},
{
  "iso_639_1": "my",
  "english_name": "Burmese",
  "name": ""
},
{
  "iso_639_1": "qu",
  "english_name": "Quechua",
  "name": ""
},
{
  "iso_639_1": "sn",
  "english_name": "Shona",
  "name": ""
},
{
  "iso_639_1": "uk",
  "english_name": "Ukrainian",
  "name": "Український"
},
{
  "iso_639_1": "fa",
  "english_name": "Persian",
  "name": "فارسی"
},
{
  "iso_639_1": "ka",
  "english_name": "Georgian",
  "name": "ქართული"
},
{
  "iso_639_1": "gu",
  "english_name": "Gujarati",
  "name": ""
},
{
  "iso_639_1": "av",
  "english_name": "Avaric",
  "name": ""
},
{
  "iso_639_1": "ae",
  "english_name": "Avestan",
  "name": ""
},
{
  "iso_639_1": "gn",
  "english_name": "Guarani",
  "name": ""
},
{
  "iso_639_1": "mt",
  "english_name": "Maltese",
  "name": "Malti"
},
{
  "iso_639_1": "ne",
  "english_name": "Nepali",
  "name": ""
},
{
  "iso_639_1": "sv",
  "english_name": "Swedish",
  "name": "svenska"
},
{
  "iso_639_1": "tt",
  "english_name": "Tatar",
  "name": ""
},
{
  "iso_639_1": "wo",
  "english_name": "Wolof",
  "name": "Wolof"
},
{
  "iso_639_1": "cn",
  "english_name": "Cantonese",
  "name": "广州话 / 廣州話"
},
{
  "iso_639_1": "cv",
  "english_name": "Chuvash",
  "name": ""
},
{
  "iso_639_1": "da",
  "english_name": "Danish",
  "name": "Dansk"
},
{
  "iso_639_1": "dz",
  "english_name": "Dzongkha",
  "name": ""
},
{
  "iso_639_1": "ny",
  "english_name": "Chichewa; Nyanja",
  "name": ""
},
{
  "iso_639_1": "rn",
  "english_name": "Rundi",
  "name": "Kirundi"
},
{
  "iso_639_1": "st",
  "english_name": "Sotho",
  "name": ""
},
{
  "iso_639_1": "tk",
  "english_name": "Turkmen",
  "name": ""
},
{
  "iso_639_1": "uz",
  "english_name": "Uzbek",
  "name": "ozbek"
},
{
  "iso_639_1": "vi",
  "english_name": "Vietnamese",
  "name": "Tiếng Việt"
},
{
  "iso_639_1": "el",
  "english_name": "Greek",
  "name": "ελληνικά"
},
{
  "iso_639_1": "ca",
  "english_name": "Catalan",
  "name": "Català"
},
{
  "iso_639_1": "cy",
  "english_name": "Welsh",
  "name": "Cymraeg"
},
{
  "iso_639_1": "de",
  "english_name": "German",
  "name": "Deutsch"
},
{
  "iso_639_1": "ks",
  "english_name": "Kashmiri",
  "name": ""
},
{
  "iso_639_1": "ms",
  "english_name": "Malay",
  "name": "Bahasa melayu"
},
{
  "iso_639_1": "nb",
  "english_name": "Norwegian Bokmål",
  "name": "Bokmål"
},
{
  "iso_639_1": "rm",
  "english_name": "Raeto-Romance",
  "name": ""
},
{
  "iso_639_1": "si",
  "english_name": "Sinhalese",
  "name": "සිංහල"
},
{
  "iso_639_1": "es",
  "english_name": "Spanish",
  "name": "Español"
},
{
  "iso_639_1": "te",
  "english_name": "Telugu",
  "name": "తెలుగు"
},
{
  "iso_639_1": "tw",
  "english_name": "Twi",
  "name": ""
},
{
  "iso_639_1": "ps",
  "english_name": "Pushto",
  "name": "پښتو"
},
{
  "iso_639_1": "bg",
  "english_name": "Bulgarian",
  "name": "български език"
},
{
  "iso_639_1": "mk",
  "english_name": "Macedonian",
  "name": ""
},
{
  "iso_639_1": "ik",
  "english_name": "Inupiaq",
  "name": ""
},
{
  "iso_639_1": "ko",
  "english_name": "Korean",
  "name": "한국어/조선말"
},
{
  "iso_639_1": "lt",
  "english_name": "Lithuanian",
  "name": "Lietuvių"
},
{
  "iso_639_1": "om",
  "english_name": "Oromo",
  "name": ""
},
{
  "iso_639_1": "se",
  "english_name": "Northern Sami",
  "name": ""
},
{
  "iso_639_1": "so",
  "english_name": "Somali",
  "name": "Somali"
},
{
  "iso_639_1": "ta",
  "english_name": "Tamil",
  "name": "தமிழ்"
},
{
  "iso_639_1": "ur",
  "english_name": "Urdu",
  "name": "اردو"
},
{
  "iso_639_1": "am",
  "english_name": "Amharic",
  "name": ""
},
{
  "iso_639_1": "bs",
  "english_name": "Bosnian",
  "name": "Bosanski"
},
{
  "iso_639_1": "dv",
  "english_name": "Divehi",
  "name": ""
},
{
  "iso_639_1": "ay",
  "english_name": "Aymara",
  "name": ""
},
{
  "iso_639_1": "bm",
  "english_name": "Bambara",
  "name": "Bamanankan"
},
{
  "iso_639_1": "ii",
  "english_name": "Yi",
  "name": ""
},
{
  "iso_639_1": "ie",
  "english_name": "Interlingue",
  "name": ""
},
{
  "iso_639_1": "kv",
  "english_name": "Komi",
  "name": ""
},
{
  "iso_639_1": "ku",
  "english_name": "Kurdish",
  "name": ""
},
{
  "iso_639_1": "nn",
  "english_name": "Norwegian Nynorsk",
  "name": ""
},
{
  "iso_639_1": "zh",
  "english_name": "Mandarin",
  "name": "普通话"
},
{
  "iso_639_1": "he",
  "english_name": "Hebrew",
  "name": "עִבְרִית"
},
{
  "iso_639_1": "ee",
  "english_name": "Ewe",
  "name": "Èʋegbe"
},
{
  "iso_639_1": "fj",
  "english_name": "Fijian",
  "name": ""
},
{
  "iso_639_1": "ff",
  "english_name": "Fulah",
  "name": "Fulfulde"
},
{
  "iso_639_1": "ht",
  "english_name": "Haitian; Haitian Creole",
  "name": ""
},
{
  "iso_639_1": "hr",
  "english_name": "Croatian",
  "name": "Hrvatski"
},
{
  "iso_639_1": "ia",
  "english_name": "Interlingua",
  "name": ""
},
{
  "iso_639_1": "kj",
  "english_name": "Kuanyama",
  "name": ""
},
{
  "iso_639_1": "lo",
  "english_name": "Lao",
  "name": ""
},
{
  "iso_639_1": "lg",
  "english_name": "Ganda",
  "name": ""
},
{
  "iso_639_1": "mr",
  "english_name": "Marathi",
  "name": ""
},
{
  "iso_639_1": "sd",
  "english_name": "Sindhi",
  "name": ""
},
{
  "iso_639_1": "be",
  "english_name": "Belarusian",
  "name": "беларуская мова"
},
{
  "iso_639_1": "ho",
  "english_name": "Hiri Motu",
  "name": ""
},
{
  "iso_639_1": "kg",
  "english_name": "Kongo",
  "name": ""
},
{
  "iso_639_1": "sl",
  "english_name": "Slovenian",
  "name": "Slovenščina"
},
{
  "iso_639_1": "yo",
  "english_name": "Yoruba",
  "name": "Èdè Yorùbá"
}
]);
});

router.get('/configuration/primary_translations', function(req, res, next) {
  res.json([
"af-ZA",
"ar-AE",
"ar-SA",
"be-BY",
"bg-BG",
"bn-BD",
"ca-ES",
"ch-GU",
"cn-CN",
"cs-CZ",
"cy-GB",
"da-DK",
"de-AT",
"de-CH",
"de-DE",
"el-GR",
"en-AU",
"en-CA",
"en-GB",
"en-IE",
"en-NZ",
"en-US",
"eo-EO",
"es-ES",
"es-MX",
"et-EE",
"eu-ES",
"fa-IR",
"fi-FI",
"fr-CA",
"fr-FR",
"ga-IE",
"gd-GB",
"gl-ES",
"he-IL",
"hi-IN",
"hr-HR",
"hu-HU",
"id-ID",
"it-IT",
"ja-JP",
"ka-GE",
"kk-KZ",
"kn-IN",
"ko-KR",
"ky-KG",
"lt-LT",
"lv-LV",
"ml-IN",
"mr-IN",
"ms-MY",
"ms-SG",
"nb-NO",
"nl-BE",
"nl-NL",
"no-NO",
"pa-IN",
"pl-PL",
"pt-BR",
"pt-PT",
"ro-RO",
"ru-RU",
"si-LK",
"sk-SK",
"sl-SI",
"sq-AL",
"sr-RS",
"sv-SE",
"ta-IN",
"te-IN",
"th-TH",
"tl-PH",
"tr-TR",
"uk-UA",
"vi-VN",
"zh-CN",
"zh-HK",
"zh-SG",
"zh-TW",
"zu-ZA"
]);
});

router.get('/configuration/timezones', function(req, res, next) {
  res.json([
{
  "iso_3166_1": "AD",
  "zones": [
    "Europe/Andorra"
  ]
},
{
  "iso_3166_1": "AE",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "AF",
  "zones": [
    "Asia/Kabul"
  ]
},
{
  "iso_3166_1": "AG",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AI",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AL",
  "zones": [
    "Europe/Tirane"
  ]
},
{
  "iso_3166_1": "AM",
  "zones": [
    "Asia/Yerevan"
  ]
},
{
  "iso_3166_1": "AO",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "AQ",
  "zones": [
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/Mawson",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/Troll",
    "Asia/Urumqi",
    "Pacific/Auckland",
    "Pacific/Port_Moresby",
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "AR",
  "zones": [
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Cordoba",
    "America/Argentina/Salta",
    "America/Argentina/Jujuy",
    "America/Argentina/Tucuman",
    "America/Argentina/Catamarca",
    "America/Argentina/La_Rioja",
    "America/Argentina/San_Juan",
    "America/Argentina/Mendoza",
    "America/Argentina/San_Luis",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Ushuaia"
  ]
},
{
  "iso_3166_1": "AS",
  "zones": [
    "Pacific/Pago_Pago"
  ]
},
{
  "iso_3166_1": "AT",
  "zones": [
    "Europe/Vienna"
  ]
},
{
  "iso_3166_1": "AU",
  "zones": [
    "Australia/Lord_Howe",
    "Antarctica/Macquarie",
    "Australia/Hobart",
    "Australia/Melbourne",
    "Australia/Sydney",
    "Australia/Broken_Hill",
    "Australia/Brisbane",
    "Australia/Lindeman",
    "Australia/Adelaide",
    "Australia/Darwin",
    "Australia/Perth",
    "Australia/Eucla"
  ]
},
{
  "iso_3166_1": "AW",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "AX",
  "zones": [
    "Europe/Helsinki"
  ]
},
{
  "iso_3166_1": "AZ",
  "zones": [
    "Asia/Baku"
  ]
},
{
  "iso_3166_1": "BA",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "BB",
  "zones": [
    "America/Barbados"
  ]
},
{
  "iso_3166_1": "BD",
  "zones": [
    "Asia/Dhaka"
  ]
},
{
  "iso_3166_1": "BE",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "BF",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "BG",
  "zones": [
    "Europe/Sofia"
  ]
},
{
  "iso_3166_1": "BH",
  "zones": [
    "Asia/Qatar"
  ]
},
{
  "iso_3166_1": "BI",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "BJ",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "BL",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "BM",
  "zones": [
    "Atlantic/Bermuda"
  ]
},
{
  "iso_3166_1": "BN",
  "zones": [
    "Asia/Kuching"
  ]
},
{
  "iso_3166_1": "BO",
  "zones": [
    "America/La_Paz"
  ]
},
{
  "iso_3166_1": "BQ",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "BR",
  "zones": [
    "America/Noronha",
    "America/Belem",
    "America/Fortaleza",
    "America/Recife",
    "America/Araguaina",
    "America/Maceio",
    "America/Bahia",
    "America/Sao_Paulo",
    "America/Campo_Grande",
    "America/Cuiaba",
    "America/Santarem",
    "America/Porto_Velho",
    "America/Boa_Vista",
    "America/Manaus",
    "America/Eirunepe",
    "America/Rio_Branco"
  ]
},
{
  "iso_3166_1": "BS",
  "zones": [
    "America/Toronto"
  ]
},
{
  "iso_3166_1": "BT",
  "zones": [
    "Asia/Thimphu"
  ]
},
{
  "iso_3166_1": "BV",
  "zones": []
},
{
  "iso_3166_1": "BW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "BY",
  "zones": [
    "Europe/Minsk"
  ]
},
{
  "iso_3166_1": "BZ",
  "zones": [
    "America/Belize"
  ]
},
{
  "iso_3166_1": "CA",
  "zones": [
    "America/St_Johns",
    "America/Halifax",
    "America/Glace_Bay",
    "America/Moncton",
    "America/Goose_Bay",
    "America/Toronto",
    "America/Iqaluit",
    "America/Winnipeg",
    "America/Resolute",
    "America/Rankin_Inlet",
    "America/Regina",
    "America/Swift_Current",
    "America/Edmonton",
    "America/Cambridge_Bay",
    "America/Inuvik",
    "America/Dawson_Creek",
    "America/Fort_Nelson",
    "America/Whitehorse",
    "America/Dawson",
    "America/Vancouver",
    "America/Panama",
    "America/Puerto_Rico",
    "America/Phoenix"
  ]
},
{
  "iso_3166_1": "CC",
  "zones": [
    "Asia/Yangon"
  ]
},
{
  "iso_3166_1": "CD",
  "zones": [
    "Africa/Maputo",
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CF",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CG",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CH",
  "zones": [
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "CI",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "CK",
  "zones": [
    "Pacific/Rarotonga"
  ]
},
{
  "iso_3166_1": "CL",
  "zones": [
    "America/Santiago",
    "America/Punta_Arenas",
    "Pacific/Easter"
  ]
},
{
  "iso_3166_1": "CM",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "CN",
  "zones": [
    "Asia/Shanghai",
    "Asia/Urumqi"
  ]
},
{
  "iso_3166_1": "CO",
  "zones": [
    "America/Bogota"
  ]
},
{
  "iso_3166_1": "CR",
  "zones": [
    "America/Costa_Rica"
  ]
},
{
  "iso_3166_1": "CU",
  "zones": [
    "America/Havana"
  ]
},
{
  "iso_3166_1": "CV",
  "zones": [
    "Atlantic/Cape_Verde"
  ]
},
{
  "iso_3166_1": "CW",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "CX",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "CY",
  "zones": [
    "Asia/Nicosia",
    "Asia/Famagusta"
  ]
},
{
  "iso_3166_1": "CZ",
  "zones": [
    "Europe/Prague"
  ]
},
{
  "iso_3166_1": "DE",
  "zones": [
    "Europe/Berlin",
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "DJ",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "DK",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "DM",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "DO",
  "zones": [
    "America/Santo_Domingo"
  ]
},
{
  "iso_3166_1": "DZ",
  "zones": [
    "Africa/Algiers"
  ]
},
{
  "iso_3166_1": "EC",
  "zones": [
    "America/Guayaquil",
    "Pacific/Galapagos"
  ]
},
{
  "iso_3166_1": "EE",
  "zones": [
    "Europe/Tallinn"
  ]
},
{
  "iso_3166_1": "EG",
  "zones": [
    "Africa/Cairo"
  ]
},
{
  "iso_3166_1": "EH",
  "zones": [
    "Africa/El_Aaiun"
  ]
},
{
  "iso_3166_1": "ER",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "ES",
  "zones": [
    "Europe/Madrid",
    "Africa/Ceuta",
    "Atlantic/Canary"
  ]
},
{
  "iso_3166_1": "ET",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "FI",
  "zones": [
    "Europe/Helsinki"
  ]
},
{
  "iso_3166_1": "FJ",
  "zones": [
    "Pacific/Fiji"
  ]
},
{
  "iso_3166_1": "FK",
  "zones": [
    "Atlantic/Stanley"
  ]
},
{
  "iso_3166_1": "FM",
  "zones": [
    "Pacific/Kosrae",
    "Pacific/Port_Moresby",
    "Pacific/Guadalcanal"
  ]
},
{
  "iso_3166_1": "FO",
  "zones": [
    "Atlantic/Faroe"
  ]
},
{
  "iso_3166_1": "FR",
  "zones": [
    "Europe/Paris"
  ]
},
{
  "iso_3166_1": "GA",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "GB",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "GD",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "GE",
  "zones": [
    "Asia/Tbilisi"
  ]
},
{
  "iso_3166_1": "GF",
  "zones": [
    "America/Cayenne"
  ]
},
{
  "iso_3166_1": "GG",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "GH",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GI",
  "zones": [
    "Europe/Gibraltar"
  ]
},
{
  "iso_3166_1": "GL",
  "zones": [
    "America/Nuuk",
    "America/Danmarkshavn",
    "America/Scoresbysund",
    "America/Thule"
  ]
},
{
  "iso_3166_1": "GM",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GN",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "GP",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "GQ",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "GR",
  "zones": [
    "Europe/Athens"
  ]
},
{
  "iso_3166_1": "GS",
  "zones": [
    "Atlantic/South_Georgia"
  ]
},
{
  "iso_3166_1": "GT",
  "zones": [
    "America/Guatemala"
  ]
},
{
  "iso_3166_1": "GU",
  "zones": [
    "Pacific/Guam"
  ]
},
{
  "iso_3166_1": "GW",
  "zones": [
    "Africa/Bissau"
  ]
},
{
  "iso_3166_1": "GY",
  "zones": [
    "America/Guyana"
  ]
},
{
  "iso_3166_1": "HK",
  "zones": [
    "Asia/Hong_Kong"
  ]
},
{
  "iso_3166_1": "HM",
  "zones": []
},
{
  "iso_3166_1": "HN",
  "zones": [
    "America/Tegucigalpa"
  ]
},
{
  "iso_3166_1": "HR",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "HT",
  "zones": [
    "America/Port-au-Prince"
  ]
},
{
  "iso_3166_1": "HU",
  "zones": [
    "Europe/Budapest"
  ]
},
{
  "iso_3166_1": "ID",
  "zones": [
    "Asia/Jakarta",
    "Asia/Pontianak",
    "Asia/Makassar",
    "Asia/Jayapura"
  ]
},
{
  "iso_3166_1": "IE",
  "zones": [
    "Europe/Dublin"
  ]
},
{
  "iso_3166_1": "IL",
  "zones": [
    "Asia/Jerusalem"
  ]
},
{
  "iso_3166_1": "IM",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "IN",
  "zones": [
    "Asia/Kolkata"
  ]
},
{
  "iso_3166_1": "IO",
  "zones": [
    "Indian/Chagos"
  ]
},
{
  "iso_3166_1": "IQ",
  "zones": [
    "Asia/Baghdad"
  ]
},
{
  "iso_3166_1": "IR",
  "zones": [
    "Asia/Tehran"
  ]
},
{
  "iso_3166_1": "IS",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "IT",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "JE",
  "zones": [
    "Europe/London"
  ]
},
{
  "iso_3166_1": "JM",
  "zones": [
    "America/Jamaica"
  ]
},
{
  "iso_3166_1": "JO",
  "zones": [
    "Asia/Amman"
  ]
},
{
  "iso_3166_1": "JP",
  "zones": [
    "Asia/Tokyo"
  ]
},
{
  "iso_3166_1": "KE",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "KG",
  "zones": [
    "Asia/Bishkek"
  ]
},
{
  "iso_3166_1": "KH",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "KI",
  "zones": [
    "Pacific/Tarawa",
    "Pacific/Kanton",
    "Pacific/Kiritimati"
  ]
},
{
  "iso_3166_1": "KM",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "KN",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "KP",
  "zones": [
    "Asia/Pyongyang"
  ]
},
{
  "iso_3166_1": "KR",
  "zones": [
    "Asia/Seoul"
  ]
},
{
  "iso_3166_1": "KW",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "KY",
  "zones": [
    "America/Panama"
  ]
},
{
  "iso_3166_1": "KZ",
  "zones": [
    "Asia/Almaty",
    "Asia/Qyzylorda",
    "Asia/Qostanay",
    "Asia/Aqtobe",
    "Asia/Aqtau",
    "Asia/Atyrau",
    "Asia/Oral"
  ]
},
{
  "iso_3166_1": "LA",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "LB",
  "zones": [
    "Asia/Beirut"
  ]
},
{
  "iso_3166_1": "LC",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "LI",
  "zones": [
    "Europe/Zurich"
  ]
},
{
  "iso_3166_1": "LK",
  "zones": [
    "Asia/Colombo"
  ]
},
{
  "iso_3166_1": "LR",
  "zones": [
    "Africa/Monrovia"
  ]
},
{
  "iso_3166_1": "LS",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "LT",
  "zones": [
    "Europe/Vilnius"
  ]
},
{
  "iso_3166_1": "LU",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "LV",
  "zones": [
    "Europe/Riga"
  ]
},
{
  "iso_3166_1": "LY",
  "zones": [
    "Africa/Tripoli"
  ]
},
{
  "iso_3166_1": "MA",
  "zones": [
    "Africa/Casablanca"
  ]
},
{
  "iso_3166_1": "MC",
  "zones": [
    "Europe/Paris"
  ]
},
{
  "iso_3166_1": "MD",
  "zones": [
    "Europe/Chisinau"
  ]
},
{
  "iso_3166_1": "ME",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "MF",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "MG",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "MH",
  "zones": [
    "Pacific/Kwajalein",
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "MK",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "ML",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "MM",
  "zones": [
    "Asia/Yangon"
  ]
},
{
  "iso_3166_1": "MN",
  "zones": [
    "Asia/Ulaanbaatar",
    "Asia/Hovd",
    "Asia/Choibalsan"
  ]
},
{
  "iso_3166_1": "MO",
  "zones": [
    "Asia/Macau"
  ]
},
{
  "iso_3166_1": "MP",
  "zones": [
    "Pacific/Guam"
  ]
},
{
  "iso_3166_1": "MQ",
  "zones": [
    "America/Martinique"
  ]
},
{
  "iso_3166_1": "MR",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "MS",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "MT",
  "zones": [
    "Europe/Malta"
  ]
},
{
  "iso_3166_1": "MU",
  "zones": [
    "Indian/Mauritius"
  ]
},
{
  "iso_3166_1": "MV",
  "zones": [
    "Indian/Maldives"
  ]
},
{
  "iso_3166_1": "MW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "MX",
  "zones": [
    "America/Mexico_City",
    "America/Cancun",
    "America/Merida",
    "America/Monterrey",
    "America/Matamoros",
    "America/Chihuahua",
    "America/Ciudad_Juarez",
    "America/Ojinaga",
    "America/Mazatlan",
    "America/Bahia_Banderas",
    "America/Hermosillo",
    "America/Tijuana"
  ]
},
{
  "iso_3166_1": "MY",
  "zones": [
    "Asia/Kuching",
    "Asia/Singapore"
  ]
},
{
  "iso_3166_1": "MZ",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "NA",
  "zones": [
    "Africa/Windhoek"
  ]
},
{
  "iso_3166_1": "NC",
  "zones": [
    "Pacific/Noumea"
  ]
},
{
  "iso_3166_1": "NE",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "NF",
  "zones": [
    "Pacific/Norfolk"
  ]
},
{
  "iso_3166_1": "NG",
  "zones": [
    "Africa/Lagos"
  ]
},
{
  "iso_3166_1": "NI",
  "zones": [
    "America/Managua"
  ]
},
{
  "iso_3166_1": "NL",
  "zones": [
    "Europe/Brussels"
  ]
},
{
  "iso_3166_1": "NO",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "NP",
  "zones": [
    "Asia/Kathmandu"
  ]
},
{
  "iso_3166_1": "NR",
  "zones": [
    "Pacific/Nauru"
  ]
},
{
  "iso_3166_1": "NU",
  "zones": [
    "Pacific/Niue"
  ]
},
{
  "iso_3166_1": "NZ",
  "zones": [
    "Pacific/Auckland",
    "Pacific/Chatham"
  ]
},
{
  "iso_3166_1": "OM",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "PA",
  "zones": [
    "America/Panama"
  ]
},
{
  "iso_3166_1": "PE",
  "zones": [
    "America/Lima"
  ]
},
{
  "iso_3166_1": "PF",
  "zones": [
    "Pacific/Tahiti",
    "Pacific/Marquesas",
    "Pacific/Gambier"
  ]
},
{
  "iso_3166_1": "PG",
  "zones": [
    "Pacific/Port_Moresby",
    "Pacific/Bougainville"
  ]
},
{
  "iso_3166_1": "PH",
  "zones": [
    "Asia/Manila"
  ]
},
{
  "iso_3166_1": "PK",
  "zones": [
    "Asia/Karachi"
  ]
},
{
  "iso_3166_1": "PL",
  "zones": [
    "Europe/Warsaw"
  ]
},
{
  "iso_3166_1": "PM",
  "zones": [
    "America/Miquelon"
  ]
},
{
  "iso_3166_1": "PN",
  "zones": [
    "Pacific/Pitcairn"
  ]
},
{
  "iso_3166_1": "PR",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "PS",
  "zones": [
    "Asia/Gaza",
    "Asia/Hebron"
  ]
},
{
  "iso_3166_1": "PT",
  "zones": [
    "Europe/Lisbon",
    "Atlantic/Madeira",
    "Atlantic/Azores"
  ]
},
{
  "iso_3166_1": "PW",
  "zones": [
    "Pacific/Palau"
  ]
},
{
  "iso_3166_1": "PY",
  "zones": [
    "America/Asuncion"
  ]
},
{
  "iso_3166_1": "QA",
  "zones": [
    "Asia/Qatar"
  ]
},
{
  "iso_3166_1": "RE",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "RO",
  "zones": [
    "Europe/Bucharest"
  ]
},
{
  "iso_3166_1": "RS",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "RU",
  "zones": [
    "Europe/Kaliningrad",
    "Europe/Moscow",
    "Europe/Simferopol",
    "Europe/Kirov",
    "Europe/Volgograd",
    "Europe/Astrakhan",
    "Europe/Saratov",
    "Europe/Ulyanovsk",
    "Europe/Samara",
    "Asia/Yekaterinburg",
    "Asia/Omsk",
    "Asia/Novosibirsk",
    "Asia/Barnaul",
    "Asia/Tomsk",
    "Asia/Novokuznetsk",
    "Asia/Krasnoyarsk",
    "Asia/Irkutsk",
    "Asia/Chita",
    "Asia/Yakutsk",
    "Asia/Khandyga",
    "Asia/Vladivostok",
    "Asia/Ust-Nera",
    "Asia/Magadan",
    "Asia/Sakhalin",
    "Asia/Srednekolymsk",
    "Asia/Kamchatka",
    "Asia/Anadyr"
  ]
},
{
  "iso_3166_1": "RW",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "SA",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "SB",
  "zones": [
    "Pacific/Guadalcanal"
  ]
},
{
  "iso_3166_1": "SC",
  "zones": [
    "Asia/Dubai"
  ]
},
{
  "iso_3166_1": "SD",
  "zones": [
    "Africa/Khartoum"
  ]
},
{
  "iso_3166_1": "SE",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "SG",
  "zones": [
    "Asia/Singapore"
  ]
},
{
  "iso_3166_1": "SH",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SI",
  "zones": [
    "Europe/Belgrade"
  ]
},
{
  "iso_3166_1": "SJ",
  "zones": [
    "Europe/Berlin"
  ]
},
{
  "iso_3166_1": "SK",
  "zones": [
    "Europe/Prague"
  ]
},
{
  "iso_3166_1": "SL",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SM",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "SN",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "SO",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "SR",
  "zones": [
    "America/Paramaribo"
  ]
},
{
  "iso_3166_1": "SS",
  "zones": [
    "Africa/Juba"
  ]
},
{
  "iso_3166_1": "ST",
  "zones": [
    "Africa/Sao_Tome"
  ]
},
{
  "iso_3166_1": "SV",
  "zones": [
    "America/El_Salvador"
  ]
},
{
  "iso_3166_1": "SX",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "SY",
  "zones": [
    "Asia/Damascus"
  ]
},
{
  "iso_3166_1": "SZ",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "TC",
  "zones": [
    "America/Grand_Turk"
  ]
},
{
  "iso_3166_1": "TD",
  "zones": [
    "Africa/Ndjamena"
  ]
},
{
  "iso_3166_1": "TF",
  "zones": [
    "Asia/Dubai",
    "Indian/Maldives"
  ]
},
{
  "iso_3166_1": "TG",
  "zones": [
    "Africa/Abidjan"
  ]
},
{
  "iso_3166_1": "TH",
  "zones": [
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "TJ",
  "zones": [
    "Asia/Dushanbe"
  ]
},
{
  "iso_3166_1": "TK",
  "zones": [
    "Pacific/Fakaofo"
  ]
},
{
  "iso_3166_1": "TL",
  "zones": [
    "Asia/Dili"
  ]
},
{
  "iso_3166_1": "TM",
  "zones": [
    "Asia/Ashgabat"
  ]
},
{
  "iso_3166_1": "TN",
  "zones": [
    "Africa/Tunis"
  ]
},
{
  "iso_3166_1": "TO",
  "zones": [
    "Pacific/Tongatapu"
  ]
},
{
  "iso_3166_1": "TR",
  "zones": [
    "Europe/Istanbul"
  ]
},
{
  "iso_3166_1": "TT",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "TV",
  "zones": [
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "TW",
  "zones": [
    "Asia/Taipei"
  ]
},
{
  "iso_3166_1": "TZ",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "UA",
  "zones": [
    "Europe/Kyiv",
    "Europe/Simferopol"
  ]
},
{
  "iso_3166_1": "UG",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "UM",
  "zones": [
    "Pacific/Pago_Pago",
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "US",
  "zones": [
    "America/New_York",
    "America/Detroit",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Indiana/Indianapolis",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Vevay",
    "America/Chicago",
    "America/Indiana/Tell_City",
    "America/Indiana/Knox",
    "America/Menominee",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/North_Dakota/Beulah",
    "America/Denver",
    "America/Boise",
    "America/Phoenix",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Juneau",
    "America/Sitka",
    "America/Metlakatla",
    "America/Yakutat",
    "America/Nome",
    "America/Adak",
    "Pacific/Honolulu"
  ]
},
{
  "iso_3166_1": "UY",
  "zones": [
    "America/Montevideo"
  ]
},
{
  "iso_3166_1": "UZ",
  "zones": [
    "Asia/Samarkand",
    "Asia/Tashkent"
  ]
},
{
  "iso_3166_1": "VA",
  "zones": [
    "Europe/Rome"
  ]
},
{
  "iso_3166_1": "VC",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VE",
  "zones": [
    "America/Caracas"
  ]
},
{
  "iso_3166_1": "VG",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VI",
  "zones": [
    "America/Puerto_Rico"
  ]
},
{
  "iso_3166_1": "VN",
  "zones": [
    "Asia/Ho_Chi_Minh",
    "Asia/Bangkok"
  ]
},
{
  "iso_3166_1": "VU",
  "zones": [
    "Pacific/Efate"
  ]
},
{
  "iso_3166_1": "WF",
  "zones": [
    "Pacific/Tarawa"
  ]
},
{
  "iso_3166_1": "WS",
  "zones": [
    "Pacific/Apia"
  ]
},
{
  "iso_3166_1": "YE",
  "zones": [
    "Asia/Riyadh"
  ]
},
{
  "iso_3166_1": "YT",
  "zones": [
    "Africa/Nairobi"
  ]
},
{
  "iso_3166_1": "ZA",
  "zones": [
    "Africa/Johannesburg"
  ]
},
{
  "iso_3166_1": "ZM",
  "zones": [
    "Africa/Maputo"
  ]
},
{
  "iso_3166_1": "ZW",
  "zones": [
    "Africa/Maputo"
  ]
}
]);
});

router.get('/credit/:credit_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/discover/movie', function(req, res, next) {

  if (req.query.with_genres == 20300 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          20300, 20301, 20302, 20304, 20300, 20300
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20301 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20302 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20303 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20304 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20305 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20306 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20307 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20308 ){
      res.json(
	  
	  {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 99988801,
        "original_language": "en",
        "original_title": "Delito Continuado",
        "overview": "Delito Continuado or continuing offense consists of a series of acts arising from. one criminal intent or resolution. In the above views, since there is only a single criminal intent, even though there. is a series of criminal acts.",
        "popularity": 2590.24,
        "poster_path": "/images/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Delito Continuado",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/t5zCBSB5xMDKcDqe91qahCOUYVV.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 99988802,
        "original_language": "en",
        "original_title": "Three fold rule and GCTA",
        "overview": "Under the three-fold rule, of Article 70, a convict can be punished only up to three times the most severe penalty imposed, and such maximum period shall not exceed 40 years.",
        "popularity": 1617.893,
        "poster_path": "/images/A4j8S6moJS2zNtRR8oWF08gRnL5.png",
        "release_date": "2023-10-25",
        "title": "Three fold rule and GCTA",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 99988803,
        "original_language": "en",
        "original_title": "Falsification Malversation of Funds Estafa Theft",
        "overview": "The crime of theft is included necessarily in that of robbery and therefore ... estafa with falsification through imprudence, but of intentional estafa with ...",
        "popularity": 1595.817,
        "poster_path": "/images/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.png",
        "release_date": "2023-09-27",
        "title": "Falsification Malversation of Funds Estafa Theft",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


});


router.get('/discover/tv', function(req, res, next) {
  console.log('Request Genres - ' + req.query.with_genres);
  if (req.query.with_genres == 20300 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/6Ra4oY_L1HM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20300888801,
        "original_language": "en",
        "original_title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "overview": "This discussion will provide a constitutional law analysis of certain serious criminal offenses in the Philippines: Robbery, Kidnapping, Arbitrary detention, Unlawful arrest, Arson.",
        "popularity": 2590.24,
        "poster_path": "/images/6Ra4oY_L1HM.jpg",
        "release_date": "2023-07-19",
        "title": "Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/PNkPfxySMg0.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20300888802,
        "original_language": "en",
        "original_title": "RA No  11648 statutory rape",
        "overview": "The discussion will center on analyzing Republic Act No. 11648, which amended Article 266-A of the Revised Penal Code on online libel. Specifically, points of discussion include: An overview of the new provisions introduced under the amended Article 266-A, Comparison to the previous provisions to understand the key changes/updates, Constitutional and legal issues potentially raised by the amendments.",
        "popularity": 1617.893,
        "poster_path": "/images/PNkPfxySMg0.png",
        "release_date": "2023-10-25",
        "title": "RA No  11648   statutory rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/8OqZT7jfFn8.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20300888803,
        "original_language": "en",
        "original_title": "bigamy, illegal marriage   performance of illegal marriage",
        "overview": "The discussion will focus on analyzing and comparing the crimes of bigamy, illegal marriage, and performance of illegal marriage under Philippine law. Specifically, it will: Define the elements and nature of bigamy as contracting a second or subsequent marriage, Explain illegal marriage in terms of lack of legal requirements or impediments.",
        "popularity": 1595.817,
        "poster_path": "/images/8OqZT7jfFn8.png",
        "release_date": "2023-09-27",
        "title": "bigamy, illegal marriage   performance of illegal marriage",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/KLdPUh7D0sU.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20300888804,
        "original_language": "en",
        "original_title": "error in personae, aberatiu ictus, praeter intentioneme",
        "overview": "The discussion will examine the concepts of error in personae, aberatio ictus, and praeter intentionem in relation to Article 4 of the Revised Penal Code of the Philippines. Specifically, it will analyze: Error in personae, which refers to mistakes regarding the identity of the victim, Aberatio ictus, which relates to deviation of the criminal act from the initial plan, Praeter intentionem, or unintended consequences of an unlawful act.",
        "popularity": 1108.183,
        "poster_path": "/images/KLdPUh7D0sU.jpg",
        "release_date": "2023-09-15",
        "title": "error in personae, aberatiu ictus, praeter intentioneme",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/kxirVAw_-0s.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20300888805,
        "original_language": "en",
        "original_title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "overview": "The discussion will examine issues relating to different forms of homicide and related crimes within the framework of the Philippine Constitution. Specifically, it will analyze: Death under exceptional circumstances, Tumultuous affray, Abortion, Infanticide, Parricide, Murder.",
        "popularity": 1044.199,
        "poster_path": "/images/kxirVAw_-0s.jpg",
        "release_date": "2023-07-08",
        "title": "death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder,",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20301 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/zcYAnpJxV5g.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20301888801,
        "original_language": "en",
        "original_title": "Impossible crime",
        "overview": "The discussion will focus on the concept of impossible crimes under Philippine criminal law. An impossible crime refers to an act that is incapable of being performed due to factual or legal impossibility, yet there is criminal intent to commit the act.",
        "popularity": 2590.24,
        "poster_path": "/images/zcYAnpJxV5g.jpg",
        "release_date": "2023-07-19",
        "title": "Impossible crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/ncg7TsrhiUY.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20301888802,
        "original_language": "en",
        "original_title": "Stages of felony",
        "overview": "The discussion will focus on the different stages a felony can take under Philippine law - attempted, frustrated or consummated. Specifically, it will examine: Defining the elements and requirements of an attempted felony, including specifics on overt acts and proximity to completion.",
        "popularity": 1617.893,
        "poster_path": "/images/ncg7TsrhiUY.png",
        "release_date": "2023-10-25",
        "title": "Stages of felony",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/a6yRu-13OFc.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20301888803,
        "original_language": "en",
        "original_title": "Plunder",
        "overview": "The discussion will provide an analysis of the crime of plunder as defined under Republic Act 7080, as amended by Republic Act 7659. Specifically, it will: Outline the key provisions of both laws pertaining to the offense of plunder, Explain the essential elements that must be proved to constitute plunder.",
        "popularity": 1595.817,
        "poster_path": "/images/a6yRu-13OFc.png",
        "release_date": "2023-09-27",
        "title": "Plunder",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/dLSWeutlFPA.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20301888804,
        "original_language": "en",
        "original_title": "Treason, Rebellion, coup detat, sedition",
        "overview": "The video will discuss and compare the crimes of treason, rebellion, coup d'etat and sedition under Philippine law. It will analyze the following elements: The offender, The criminal act, The mode, and the Criminal intent.",
        "popularity": 1108.183,
        "poster_path": "/images/dLSWeutlFPA.jpg",
        "release_date": "2023-09-15",
        "title": "Treason, Rebellion, coup detat, sedition",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/bhI5oNqfplk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20301888805,
        "original_language": "en",
        "original_title": "Violence against women RA No  9262",
        "overview": "The discussion is all about RA No 9262 with cases in which the victim must be a woman with whom the offender has a marital sexual or dating relationship or the child is the biological child of the woman or the child is under the care of a woman.",
        "popularity": 1044.199,
        "poster_path": "/images/bhI5oNqfplk.jpg",
        "release_date": "2023-07-08",
        "title": "Violence against women RA No  9262",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20302 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/JgDpR8Xme4Y.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20302888801,
        "original_language": "en",
        "original_title": "Amnesty and pardon",
        "overview": "The discussion will focus on comparing and contrasting the concepts of amnesty and pardon under Philippine law. Specific points of analysis include: Defining amnesty and pardon, and how they differ in terms of effect and application, Requirements and procedures for granting each type of relief.",
        "popularity": 2590.24,
        "poster_path": "/images/JgDpR8Xme4Y.jpg",
        "release_date": "2023-07-19",
        "title": "Amnesty and pardon",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/BB3yoKrF8DM.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20302888802,
        "original_language": "en",
        "original_title": "Probation and community service",
        "overview": "The video will provide an overview and analysis of probation and community service as alternatives to imprisonment under Philippine law. Specifically, it will cover: An introduction to probation and its legal basis under Presidential Decree 968, as amended by Republic Act 10707, and Eligibility criteria and procedures for both probation and community service.",
        "popularity": 1617.893,
        "poster_path": "/images/BB3yoKrF8DM.png",
        "release_date": "2023-10-25",
        "title": "Probation and community service",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/JxsN19NL_Ds.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20302888803,
        "original_language": "en",
        "original_title": "Three-fold rule and GCTA",
        "overview": "The discussion will focus on analyzing the Three-fold Rule under Philippine penal law and its relationship to the Good Conduct Time Allowance (GCTA) system. Specifically, it will: Explain the Three-fold Rule, Outline the GCTA system, how it grants reductions in sentence length for good behavior, and Compare how these two concepts interact and potentially conflict.",
        "popularity": 1595.817,
        "poster_path": "/images/JxsN19NL_Ds.png",
        "release_date": "2023-09-27",
        "title": "Three-fold rule and GCTA",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/l1G9L8dF6zQ.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20302888804,
        "original_language": "en",
        "original_title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "overview": "The discussion will examine different parties to a crime based on provisions in the Revised Penal Code and how they relate to criminal liability. Specifically, it will explore the roles and elements of principal, accomplice, accessory - a person who helps a felon escape punishment for reasons of blood or affinity, fencing, obstruction of justice - acts that hinder investigation/prosecution.",
        "popularity": 1108.183,
        "poster_path": "/images/l1G9L8dF6zQ.jpg",
        "release_date": "2023-09-15",
        "title": "Principal, accomplice, accessory, fencing, obstruction of justice 1",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Pgzb33HIBDQ.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20302888805,
        "original_language": "en",
        "original_title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "overview": "The discussion will focus on analyzing trafficking in persons based on Republic Act 9208 (The Anti-Trafficking in Persons Act of 2003), as amended by RA 11862. Specifically, it will examine the key elements that define trafficking offenses under this law.",
        "popularity": 1044.199,
        "poster_path": "/images/Pgzb33HIBDQ.jpg",
        "release_date": "2023-07-08",
        "title": "Trafficking in person, child trafficking, child pornography, cyber sex",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20303 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/O4WKPNUks5U.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20303888801,
        "original_language": "en",
        "original_title": "Special complex crime",
        "overview": "The discussion will focus on the concept of a special complex crime under Philippine criminal law. A special complex crime involves the commission of two or more felonies through a single criminal act, transaction, or course of conduct where the law prescribes a single, indivisible penalty for the whole offense.",
        "popularity": 2590.24,
        "poster_path": "/images/O4WKPNUks5U.jpg",
        "release_date": "2023-07-19",
        "title": "Special complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/B6-DJ-qWYKg.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20303888802,
        "original_language": "en",
        "original_title": "Rape with homicide, robbery with homicide or rape",
        "overview": "The video will provide an analysis of the legal concept of special complex crimes under Philippine law. A main focus will be on two key characteristics that define special complex crimes such as the original design and direct connection.",
        "popularity": 1617.893,
        "poster_path": "/images/B6-DJ-qWYKg.png",
        "release_date": "2023-10-25",
        "title": "Rape with homicide, robbery with homicide or rape",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/CaRrSRRAI8c.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20303888803,
        "original_language": "en",
        "original_title": "Kidnapping with homicide or rape",
        "overview": "The discussion will focus on analyzing the special complex crime of kidnapping with either homicide or rape under Philippine law. Specifically, it will examine kidnapping as one of the principal offenses of this special complex crime and homicide or rape as the other principal offense committed through the same criminal act.",
        "popularity": 1595.817,
        "poster_path": "/images/CaRrSRRAI8c.png",
        "release_date": "2023-09-27",
        "title": "Kidnapping with homicide or rape",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/FZQmGvdWONY.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20303888804,
        "original_language": "en",
        "original_title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "overview": "The discussion will focus on the special complex crime of kidnapping with rape, rape through forcible abduction, and kidnapping and robbery. For a crime to be called kidnapping with rape, the original design must be to commit kidnapping. If the original design however, is to rape the victim then the crime commited is complex crime of rape through forcible abduction.",
        "popularity": 1108.183,
        "poster_path": "/images/FZQmGvdWONY.jpg",
        "release_date": "2023-09-15",
        "title": "Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/ybOrhRO0uMM.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20303888805,
        "original_language": "en",
        "original_title": "Theft and estafae",
        "overview": "The discussion will focus on distinguishing the crimes of theft and estafa through misappropriation under Philippine law. Specifically, it will define the elements of theft as taking another's property without consent and explain estafa through misappropriation, which involves receiving property through trust, administration of an obligation, or duty to deliver, and later misappropriating, converting or denying the property.",
        "popularity": 1044.199,
        "poster_path": "/images/ybOrhRO0uMM.jpg",
        "release_date": "2023-07-08",
        "title": "Theft and estafa",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20304 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/bZ_Dn4SFniM.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20304888801,
        "original_language": "en",
        "original_title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "overview": "The discussion is all about Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, and child cohabitation. The discussion will also include laws and example cases under it.",
        "popularity": 2590.24,
        "poster_path": "/images/bZ_Dn4SFniM.jpg",
        "release_date": "2023-07-19",
        "title": "Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/AYoZ07A0OWg.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20304888802,
        "original_language": "en",
        "original_title": "Falsification, malversation, estafa, theft",
        "overview": "The discussion will analyze the crime of falsification of public, commercial or private documents in relation to other offenses like malversation, estafa, and theft. Specifically, it will cover 4 rules on classifying these crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/AYoZ07A0OWg.png",
        "release_date": "2023-10-25",
        "title": "Falsification, malversation, estafa, theft",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/4c6N2L9mO3A.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20304888803,
        "original_language": "en",
        "original_title": "Terrorism",
        "overview": "The video will analyze the concept of terrorism under Republic Act 11479 or the Anti-Terrorism Act of 2020. Specifically, it will cover an overview of the definition of terrorism provided in RA 11479 and the acts classified as terrorism and potential issues around vagueness/overreach.",
        "popularity": 1595.817,
        "poster_path": "/images/4c6N2L9mO3A.png",
        "release_date": "2023-09-27",
        "title": "Terrorism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/-rxaYsUN3YY.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20304888804,
        "original_language": "en",
        "original_title": "Generality and territoriality 1",
        "overview": "The discussion will provide a comparative analysis of the principles of generality and territoriality in criminal law. Specifically, it will define the key concepts of generality and territoriality separately, examine the scope and application of each principle, and compare and contrast the approaches of both principles.",
        "popularity": 1108.183,
        "poster_path": "/images/-rxaYsUN3YY.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/cNsyonG2K1o.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20304888805,
        "original_language": "en",
        "original_title": "Territoriality, repeal and RA 10951 001 2",
        "overview": "The discussion will continue examining the principle of territoriality in criminal law. Specifically, it will analyze specific types of crimes in relation to territorial jurisdiction issues, evaluate concepts like objective and subjective territoriality in more depth and discuss exceptions to territoriality such as crimes on the high seas.",
        "popularity": 1044.199,
        "poster_path": "/images/cNsyonG2K1o.jpg",
        "release_date": "2023-07-08",
        "title": "Territoriality, repeal and RA 10951 001 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20305 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/hzwrQOg7CqA.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20305888801,
        "original_language": "en",
        "original_title": "Culpa and mistake of fact",
        "overview": "The discussion will provide analyses of the doctrine of Culpa and the concept of Mistake of Fact in criminal law. Specifically, it will define Culpa and explain the two prevailing views on its scope and culpability standards, distinguish Culpa from Dolus and analyze their applications, and outline the rules governing mistakes of fact as exculpatory or inculpatory circumstances.",
        "popularity": 2590.24,
        "poster_path": "/images/hzwrQOg7CqA.jpg",
        "release_date": "2023-07-19",
        "title": "Culpa and mistake of fact",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/TDpAhpVcKXo.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20305888802,
        "original_language": "en",
        "original_title": "Penalties special law",
        "overview": "The discussion will focus on analyzing criminal penalties associated with offenses established under special laws in the Philippines. Some points of discussion may include examining categories of special laws that contain criminal provisions, discussing the range and graduation of penalties for violating special laws, and comparing penalty schemes between special laws and the Revised Penal Code.",
        "popularity": 1617.893,
        "poster_path": "/images/TDpAhpVcKXo.png",
        "release_date": "2023-10-25",
        "title": "Penalties special law",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/Cf0TCYWhreQ.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20305888803,
        "original_language": "en",
        "original_title": "Penalties for special law",
        "overview": "The discussion will center on analyzing special penal laws and applicable penalties through examination of two case studies such as People v. Obias (G.R. No. 222187, March 25, 2019) and People v. Pis-an (G.R. No. 242692, July 13, 2020)",
        "popularity": 1595.817,
        "poster_path": "/images/Cf0TCYWhreQ.png",
        "release_date": "2023-09-27",
        "title": "Penalties for special law",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/QPIpzPG8GhI.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20305888804,
        "original_language": "en",
        "original_title": "Lawas principle",
        "overview": "The video will examine the legal concept and principles surrounding single criminal investure under Philippine law. As a foundational point, it will discuss Article 48 of the Revised Penal Code, which establishes the general rule regarding a single criminal act.",
        "popularity": 1108.183,
        "poster_path": "/images/QPIpzPG8GhI.jpg",
        "release_date": "2023-09-15",
        "title": "Lawas principle",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/Nhh2qyOpCiY.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20305888805,
        "original_language": "en",
        "original_title": "Carnapping and piracy",
        "overview": "The discussion centers around the issue of carnapping and how motor vehicles are used on public highways. Specifically, we will be exploring the legal implications when a motor vehicle is carnapped and subsequently utilized on public roadways.",
        "popularity": 1044.199,
        "poster_path": "/images/Nhh2qyOpCiY.jpg",
        "release_date": "2023-07-08",
        "title": "Carnapping and piracy",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20306 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/4P9MdLhfxvw.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20306888801,
        "original_language": "en",
        "original_title": "Brigandage and hijacking",
        "overview": "The crime of brigandage under Philippine law involves organized armed robbery carried out by groups of four or more individuals. Specifically brigandage refers to a form of aggravated robbery or theft committed by an association of four or more persons who are armed with firearms or other deadly weapons.",
        "popularity": 2590.24,
        "poster_path": "/images/4P9MdLhfxvw.jpg",
        "release_date": "2023-07-19",
        "title": "Brigandage and hijacking",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/nFK07TccaHc.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20306888802,
        "original_language": "en",
        "original_title": "Syndicated estafa",
        "overview": "The discussion will center around the crime of syndicated estafa based on Philippine laws and jurisprudence. Some key points of focus could include legally defining the elements that constitute the offense of syndicated estafa, analyzing the distinctive characteristics that make this different from simple estafa, and exploring the legal frameworks used to identify syndicated criminal operations.",
        "popularity": 1617.893,
        "poster_path": "/images/nFK07TccaHc.png",
        "release_date": "2023-10-25",
        "title": "Syndicated estafa",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/kSqwVtztixg.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20306888803,
        "original_language": "en",
        "original_title": "Voyuerism",
        "overview": "The discussion will center around analyzing Republic Act 9995, also known as the Anti-Photo and Video Voyeurism Act of 2009. Some potential discussion points include defining key terms related to photo/video voyeurism as outlined in the law, examining the specific acts that are deemed illegal photo/video voyeurism, and discussing the intent and objectives of RA 9995 in addressing these issues.",
        "popularity": 1595.817,
        "poster_path": "/images/kSqwVtztixg.png",
        "release_date": "2023-09-27",
        "title": "Voyuerism",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/huREGMfs_54.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 20306888804,
        "original_language": "en",
        "original_title": "Hazing",
        "overview": "The discussion will center around analyzing the legal framework for hazing under Republic Act 8049 (also known as the Anti-Hazing Law of 1995), as subsequently amended by RA 11053 in 2018. A primary focus will be on the key elements that constitute hazing based on these laws.",
        "popularity": 1108.183,
        "poster_path": "/images/huREGMfs_54.jpg",
        "release_date": "2023-09-15",
        "title": "Hazing",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/-e3At2-lqTk.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 20306888805,
        "original_language": "en",
        "original_title": "Cyber libel",
        "overview": "The discussion will focus on analyzing key aspects of cyber libel law based on the Court of Appeals decision in People vs. Santos and Ressa of Rappler (CA-G.R. SP No. 151618). Specifically, it will examine the appellate court's rulings on applicability of traditional libel rules to online publications/blog posts, interpretation of actual malice in the context of digital media, and scope and limits of exemptions like fair comment and criticism.",
        "popularity": 1044.199,
        "poster_path": "/images/-e3At2-lqTk.jpg",
        "release_date": "2023-07-08",
        "title": "Cyber libel",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }


  if (req.query.with_genres == 20307 ){
      res.json({
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/images/yJyR5OOmcVQ.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 20307888801,
        "original_language": "en",
        "original_title": "Complex crime",
        "overview": "The video will examine the concept of complex crimes under Article 48 of the Revised Penal Code of the Philippines. Specifically, it will cover an overview of complex crimes as defined in the RPC and distinguishing between the two types such as the compound crime where one felony serves as a means for committing another and complex crime proper where a single act constitutes two or more grave/less grave felonies.",
        "popularity": 2590.24,
        "poster_path": "/images/yJyR5OOmcVQ.jpg",
        "release_date": "2023-07-19",
        "title": "Complex crime",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4588
      },
      {
        "adult": false,
        "backdrop_path": "/images/pnScrR_P5AM.png",
        "genre_ids": [
          27,
          9648
        ],

        "id": 20307888802,
        "original_language": "en",
        "original_title": "Delito continuado",
        "overview": "The video will provide an analysis of the legal concept of delito continuado or continuing crime under Philippine law. Key aspects that will be covered include the definition of a continuing crime as composed of several acts committed under a single criminal impulse in violation of a single penal provision and distinguishing features compared to other types of crimes like complex crimes.",
        "popularity": 1617.893,
        "poster_path": "/images/pnScrR_P5AM.png",
        "release_date": "2023-10-25",
        "title": "Delito continuado",
        "video": false,
        "vote_average": 8,
        "vote_count": 2300
      },
      {
        "adult": false,
        "backdrop_path": "/images/GQpnQnCKBDU.jpg",
        "genre_ids": [
          878,
          28,
          53
        ],
        "id": 20307888803,
        "original_language": "en",
        "original_title": "Delito continuado 2",
        "overview": "The discussion will cover the second part of the concept of delito continuado or continuing crime under Philippine criminal law. Specifically, it will focus on analyzing the four kinds of continuing crimes identified by Train jurisprudence such as the crimes committed with indivisible intention, crimes committed by successive acts, crimes committed by intermittent acts, and crimes committed in breach of only one duty.",
        "popularity": 1595.817,
        "poster_path": "/images/GQpnQnCKBDU.png",
        "release_date": "2023-09-27",
        "title": "Delito continuado 2",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 786
      },
      {
        "adult": false,
        "backdrop_path": "/images/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 99988804,
        "original_language": "en",
        "original_title": "Bigamy illegal marriage performance of illegal marriage",
        "overview": "Bigamy can be intentional, where one spouse marries a second spouse knowing full well their initial marriage remains legally binding, or it can be unintentional, the result of an attempted divorce that was never legally finalized.",
        "popularity": 1108.183,
        "poster_path": "/images/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
        "release_date": "2023-09-15",
        "title": "Bigamy illegal marriage performance of illegal marriage",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 741
      },
      {
        "adult": false,
        "backdrop_path": "/images/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 99988805,
        "original_language": "en",
        "original_title": "Complex Crime",
        "overview": "Complex Crime is defined as when a single act constitutes two or more grave or less grave felonies, or when an offense is a necessary means for committing the other, the penalty for the most serious crime shall be imposed, the same to be applied in its maximum period.",
        "popularity": 1044.199,
        "poster_path": "/images/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
        "release_date": "2023-07-08",
        "title": "Complex Crime",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 2454
      }
    ],
    "total_pages": 1,
    "total_results": 5
    });
 } else {
  res.json({});
 }

});

router.get('/find/:external_id', function(req, res, next) {
  res.json({
"movie_results": [],
"person_results": [],
"tv_results": [],
"tv_episode_results": [
  {
    "id": 412766,
    "name": "The Choice (2)",
    "overview": "Part 2 of 2. When new evidence surfaces, DH is pressured to change his statement; Olczyk receives news about his father; a rift grows between Robin and Leon.",
    "media_type": "tv_episode",
    "vote_average": 0,
    "vote_count": 0,
    "air_date": "2003-09-16",
    "episode_number": 4,
    "episode_type": "standard",
    "production_code": "",
    "runtime": 45,
    "season_number": 1,
    "show_id": 9885,
    "still_path": null
  }
],
"tv_season_results": []
});
});

router.get('/genre/movie/list', function(req, res, next) {
  res.json({
"genres": [
		{
		  "id": 90101,
		  "name": "Reviewer on Political Part 1"
		},
		{
		  "id": 90102,
		  "name": "Reviewer on Political Part 2"
		},
		{
		  "id": 90103,
		  "name": "Reviewer on Political Part 3"
		},
		{
		  "id": 90104,
		  "name": "Reviewer on Political Part 4"
		},
		{
		  "id": 90105,
		  "name": "Reviewer on Political Part 5"
		},
		{
		  "id": 90106,
		  "name": "Reviewer on Taxation Part 1"
		},
		{
		  "id": 90107,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90108,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90109,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90110,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90111,
		  "name": "Reviewer on Commercial Part 1"
		},
		{
		  "id": 90112,
		  "name": "Reviewer on Taxation Part 2"
		},
		{
		  "id": 90113,
		  "name": "Reviewer on Taxation Part 3"
		},
		{
		  "id": 90114,
		  "name": "Reviewer on Taxation Part 4"
		},
		{
		  "id": 90115,
		  "name": "Reviewer on Taxation Part 5"
		},
		{
		  "id": 90116,
		  "name": "Reviewer on Civil Part 1"
		},
		{
		  "id": 90117,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90118,
		  "name": "Reviewer on Civil Part 2"
		},
		{
		  "id": 90119,
		  "name": "Reviewer on Civil Part 3"
		},
		{
		  "id": 90120,
		  "name": "Reviewer on Civil Part 4"
		},
		{
		  "id": 90121,
		  "name": "Reviewer on Civil Part 5"
		},
		{
		  "id": 90122,
		  "name": "Reviewer on Labort Part 1"
		},
		{
		  "id": 90123,
		  "name": "Reviewer on Labort Part 2"
		},
		{
		  "id": 90124,
		  "name": "Reviewer on Labort Part 3"
		},
		{
		  "id": 20300,
		  "name": "Reviewer on Criminal Part 1"
		},
		{
		  "id": 20301,
		  "name": "Reviewer on Criminal Part 2"
		},
		{
		  "id": 20302,
		  "name": "Reviewer on Criminal Part 3"
		},
		{
		  "id": 90128,
		  "name": "Reviewer on Criminal Part 4"
		},
		{
		  "id": 90129,
		  "name": "Reviewer on Criminal Part 5"
		},
		{
		  "id": 90130,
		  "name": "Reviewer on Remedial Part 1"
		},
		{
		  "id": 90131,
		  "name": "Reviewer on Remedial Part 2"
		},
		{
		  "id": 90132,
		  "name": "Reviewer on Remedial Part 3"
		},
		{
		  "id": 90133,
		  "name": "Reviewer on Remedial Part 4"
		},
		{
		  "id": 90135,
		  "name": "Reviewer on Remedial Part 5"
		},
		{
		  "id": 90136,
		  "name": "Reviewer on Legal Ethics Part 1"
		},
		{
		  "id": 90137,
		  "name": "Reviewer on Legal Ethics Part 2"
		},
		{
		  "id": 90138,
		  "name": "Reviewer on Legal Ethics Part 3"
		}
	  ]
});
});

router.get('/genre/tv/list', function(req, res, next) {
  res.json({
"genres": [
  {
    "id": 1028,
    "name": "Criminal"
  },
  {
    "id": 1012,
    "name": "Remedial"
  },
  {
    "id": 1016,
    "name": "Political"
  },
  {
    "id": 1035,
    "name": "Civil"
  },
  {
    "id": 1080,
    "name": "Legal Ethics"
  },
  {
    "id": 1099,
    "name": "Taxation"
  },
  {
    "id": 1018,
    "name": "Commercial"
  },
  {
    "id": 1071,
    "name": "Labor"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10763,
    "name": "News"
  },
  {
    "id": 10764,
    "name": "Reality"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
  },
  {
    "id": 10766,
    "name": "Soap"
  },
  {
    "id": 10767,
    "name": "Talk"
  },
  {
    "id": 10768,
    "name": "War & Politics"
  },
  {
    "id": 37,
    "name": "Western"
  }
]
});
});

router.get('/list/:list_id', function(req, res, next) {
  res.json({
"created_by": "D7Zins",
"description": "Love",
"favorite_count": 0,
"id": 1211,
"iso_639_1": "en",
"item_count": 0,
"items": [],
"name": "Love",
"page": 1,
"poster_path": null,
"total_pages": 1,
"total_results": 0
});
});

router.get('/movie/now_playing', function(req, res, next) {
  res.json({
"dates": {
  "maximum": "2023-11-22",
  "minimum": "2023-10-11"
},
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 507089,
    "original_language": "en",
    "original_title": "Five Nights at Freddy's",
    "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    "popularity": 1617.893,
    "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
    "release_date": "2023-10-25",
    "title": "Five Nights at Freddy's",
    "video": false,
    "vote_average": 7.945,
    "vote_count": 2324
  },
  {
    "adult": false,
    "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
    "genre_ids": [
      878,
      28,
      53
    ],
    "id": 670292,
    "original_language": "en",
    "original_title": "The Creator",
    "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    "popularity": 1595.817,
    "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    "release_date": "2023-09-27",
    "title": "The Creator",
    "video": false,
    "vote_average": 7.209,
    "vote_count": 842
  },
  {
    "adult": false,
    "backdrop_path": "/wl4NWiZwpzZH67HiDgpDImLyds9.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 299054,
    "original_language": "en",
    "original_title": "Expend4bles",
    "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    "popularity": 1108.183,
    "poster_path": "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    "release_date": "2023-09-15",
    "title": "Expend4bles",
    "video": false,
    "vote_average": 6.408,
    "vote_count": 753
  },
  {
    "adult": false,
    "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 695721,
    "original_language": "en",
    "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
    "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    "popularity": 734.432,
    "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    "release_date": "2023-11-15",
    "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 184
  },
  {
    "adult": false,
    "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 609681,
    "original_language": "en",
    "original_title": "The Marvels",
    "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    "popularity": 633.789,
    "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
    "release_date": "2023-11-08",
    "title": "The Marvels",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 438
  },
  {
    "adult": false,
    "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 951491,
    "original_language": "en",
    "original_title": "Saw X",
    "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    "popularity": 626.145,
    "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    "release_date": "2023-09-26",
    "title": "Saw X",
    "video": false,
    "vote_average": 7.403,
    "vote_count": 1079
  },
  {
    "adult": false,
    "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 614.334,
    "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 1473
  },
  {
    "adult": false,
    "backdrop_path": "/zgQQF04u3OgNBJqClRNby1FPz9s.jpg",
    "genre_ids": [
      16,
      10751,
      28,
      878
    ],
    "id": 893723,
    "original_language": "en",
    "original_title": "PAW Patrol: The Mighty Movie",
    "overview": "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
    "popularity": 540.935,
    "poster_path": "/oJkyw6TNEWIS0WkrxNspJfUTao4.jpg",
    "release_date": "2023-09-21",
    "title": "PAW Patrol: The Mighty Movie",
    "video": false,
    "vote_average": 6.925,
    "vote_count": 173
  },
  {
    "adult": false,
    "backdrop_path": "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 968051,
    "original_language": "en",
    "original_title": "The Nun II",
    "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    "popularity": 520.807,
    "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    "release_date": "2023-09-06",
    "title": "The Nun II",
    "video": false,
    "vote_average": 6.912,
    "vote_count": 1425
  },
  {
    "adult": false,
    "backdrop_path": "/drfl2eWipiibW3u3Ybx9HQ8VgIn.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 841742,
    "original_language": "fr",
    "original_title": "Megalomaniac",
    "overview": "Felix and Martha, the two offspring of legendary serial murderer The Skinner of Mons, grapple with the grotesque legacy bequeathed to them. While Martha works a menial janitorial job, Felix continues his father's reign of terror. But following a brutal attack at work, Martha quickly descends into madness, finding she must come to terms with the infamous blood that flows through her veins.",
    "popularity": 502.741,
    "poster_path": "/eAx5QKnboZpysIg1XBfjhbSgOPF.jpg",
    "release_date": "2023-09-08",
    "title": "Megalomaniac",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 13
  },
  {
    "adult": false,
    "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 762430,
    "original_language": "en",
    "original_title": "Retribution",
    "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    "popularity": 489.304,
    "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    "release_date": "2023-08-23",
    "title": "Retribution",
    "video": false,
    "vote_average": 7,
    "vote_count": 668
  },
  {
    "adult": false,
    "backdrop_path": "/mRmRE4RknbL7qKALWQDz64hWKPa.jpg",
    "genre_ids": [
      80,
      53
    ],
    "id": 800158,
    "original_language": "en",
    "original_title": "The Killer",
    "overview": "After a fateful near-miss, an assassin battles his employers, and himself, on an international manhunt he insists isn't personal.",
    "popularity": 447.212,
    "poster_path": "/e7Jvsry47JJQruuezjU2X1Z6J77.jpg",
    "release_date": "2023-10-25",
    "title": "The Killer",
    "video": false,
    "vote_average": 6.758,
    "vote_count": 771
  },
  {
    "adult": false,
    "backdrop_path": "/azD31DjpV3PJfjF3h72LVw2WCSD.jpg",
    "genre_ids": [
      27
    ],
    "id": 807172,
    "original_language": "en",
    "original_title": "The Exorcist: Believer",
    "overview": "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
    "popularity": 440.298,
    "poster_path": "/fFXkAlMH2iQrNknv4eq7LGTkcti.jpg",
    "release_date": "2023-10-04",
    "title": "The Exorcist: Believer",
    "video": false,
    "vote_average": 6.146,
    "vote_count": 575
  },
  {
    "adult": false,
    "backdrop_path": "/45zVtZx6Tzx3RKeDziK25K9geFf.jpg",
    "genre_ids": [
      16,
      10751,
      10402,
      14,
      35
    ],
    "id": 901362,
    "original_language": "en",
    "original_title": "Trolls Band Together",
    "overview": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    "popularity": 393.236,
    "poster_path": "/lxoPJR6eR5nd6nHSKIkEIV4FQWe.jpg",
    "release_date": "2023-10-12",
    "title": "Trolls Band Together",
    "video": false,
    "vote_average": 6.585,
    "vote_count": 47
  },
  {
    "adult": false,
    "backdrop_path": "/tj7mp7uWjVw5N73G5Hwm1bkMOcD.jpg",
    "genre_ids": [
      28,
      10752
    ],
    "id": 975902,
    "original_language": "en",
    "original_title": "Boudica",
    "overview": "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
    "popularity": 379.271,
    "poster_path": "/adMcxfUonnm9RvPImGHy25wYUks.jpg",
    "release_date": "2023-10-26",
    "title": "Boudica",
    "video": false,
    "vote_average": 6.159,
    "vote_count": 82
  },
  {
    "adult": false,
    "backdrop_path": "/lyHmhoRj3zXSdeCYbs2oOXLCF4K.jpg",
    "genre_ids": [
      16,
      12,
      10751,
      14
    ],
    "id": 459003,
    "original_language": "uk",
    "original_title": "Мавка: Лісова пісня",
    "overview": "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
    "popularity": 367.772,
    "poster_path": "/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
    "release_date": "2023-03-02",
    "title": "Mavka: The Forest Song",
    "video": false,
    "vote_average": 7.268,
    "vote_count": 503
  },
  {
    "adult": false,
    "backdrop_path": "/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 1008042,
    "original_language": "en",
    "original_title": "Talk to Me",
    "overview": "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
    "popularity": 357.992,
    "poster_path": "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
    "release_date": "2023-07-26",
    "title": "Talk to Me",
    "video": false,
    "vote_average": 7.196,
    "vote_count": 1762
  },
  {
    "adult": false,
    "backdrop_path": "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
    "genre_ids": [
      18
    ],
    "id": 1058694,
    "original_language": "en",
    "original_title": "Radical",
    "overview": "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
    "popularity": 252.536,
    "poster_path": "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
    "release_date": "2023-10-19",
    "title": "Radical",
    "video": false,
    "vote_average": 7.273,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/cavK9ox37pxDg11RvJINMH63onU.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 744857,
    "original_language": "es",
    "original_title": "Cuando acecha la maldad",
    "overview": "Residents of a small rural town discover that a demon is about to be born among them. They desperately try to escape before the evil is born, but it may be too late.",
    "popularity": 248.36,
    "poster_path": "/iQ7G9LhP7NRRIUM4Vlai3eOxBAc.jpg",
    "release_date": "2023-10-05",
    "title": "When Evil Lurks",
    "video": false,
    "vote_average": 7.333,
    "vote_count": 216
  },
  {
    "adult": false,
    "backdrop_path": "/jP3FatCTHc460ZGW57q9ypTdBqu.jpg",
    "genre_ids": [
      53,
      878,
      28
    ],
    "id": 937249,
    "original_language": "en",
    "original_title": "57 Seconds",
    "overview": "When a tech blogger lands an interview with a tech guru and stops an attack on him, he finds a mysterious ring that takes him back 57 seconds into the past.",
    "popularity": 228.47,
    "poster_path": "/dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg",
    "release_date": "2023-09-29",
    "title": "57 Seconds",
    "video": false,
    "vote_average": 5.745,
    "vote_count": 186
  }
],
"total_pages": 106,
"total_results": 2106
});
});

router.get('/movie/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    "genre_ids": [
      18,
      36
    ],
    "id": 872585,
    "original_language": "en",
    "original_title": "Oppenheimer",
    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "popularity": 2590.24,
    "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "release_date": "2023-07-19",
    "title": "Oppenheimer",
    "video": false,
    "vote_average": 8.197,
    "vote_count": 4634
  },
  {
    "adult": false,
    "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 507089,
    "original_language": "en",
    "original_title": "Five Nights at Freddy's",
    "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
    "popularity": 1617.893,
    "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
    "release_date": "2023-10-25",
    "title": "Five Nights at Freddy's",
    "video": false,
    "vote_average": 7.94,
    "vote_count": 2330
  },
  {
    "adult": false,
    "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
    "genre_ids": [
      878,
      28,
      53
    ],
    "id": 670292,
    "original_language": "en",
    "original_title": "The Creator",
    "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    "popularity": 1595.817,
    "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    "release_date": "2023-09-27",
    "title": "The Creator",
    "video": false,
    "vote_average": 7.207,
    "vote_count": 847
  },
  {
    "adult": false,
    "backdrop_path": "/wl4NWiZwpzZH67HiDgpDImLyds9.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 299054,
    "original_language": "en",
    "original_title": "Expend4bles",
    "overview": "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
    "popularity": 1108.183,
    "poster_path": "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
    "release_date": "2023-09-15",
    "title": "Expend4bles",
    "video": false,
    "vote_average": 6.408,
    "vote_count": 753
  },
  {
    "adult": false,
    "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    "genre_ids": [
      28,
      53
    ],
    "id": 575264,
    "original_language": "en",
    "original_title": "Mission: Impossible - Dead Reckoning Part One",
    "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    "popularity": 1044.199,
    "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    "release_date": "2023-07-08",
    "title": "Mission: Impossible - Dead Reckoning Part One",
    "video": false,
    "vote_average": 7.591,
    "vote_count": 2466
  },
  {
    "adult": false,
    "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    "genre_ids": [
      28,
      80,
      53
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 770.248,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 7.215,
    "vote_count": 4289
  },
  {
    "adult": false,
    "backdrop_path": "/tC78Pck2YCsUAtEdZwuHYUFYtOj.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 926393,
    "original_language": "en",
    "original_title": "The Equalizer 3",
    "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    "popularity": 741.736,
    "poster_path": "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    "release_date": "2023-08-30",
    "title": "The Equalizer 3",
    "video": false,
    "vote_average": 7.42,
    "vote_count": 1654
  },
  {
    "adult": false,
    "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 695721,
    "original_language": "en",
    "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
    "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    "popularity": 734.432,
    "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
    "release_date": "2023-11-15",
    "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 189
  },
  {
    "adult": false,
    "backdrop_path": "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 609681,
    "original_language": "en",
    "original_title": "The Marvels",
    "overview": "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    "popularity": 633.789,
    "poster_path": "/Ag3D9qXjhJ2FUkrlJ0Cv1pgxqYQ.jpg",
    "release_date": "2023-11-08",
    "title": "The Marvels",
    "video": false,
    "vote_average": 6.507,
    "vote_count": 439
  },
  {
    "adult": false,
    "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 951491,
    "original_language": "en",
    "original_title": "Saw X",
    "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    "popularity": 626.145,
    "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    "release_date": "2023-09-26",
    "title": "Saw X",
    "video": false,
    "vote_average": 7.403,
    "vote_count": 1080
  },
  {
    "adult": false,
    "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 614.334,
    "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 1473
  },
  {
    "adult": false,
    "backdrop_path": "/3H9NA1KWEQN0ItL3Wl3SFZYP6yV.jpg",
    "genre_ids": [
      28,
      878,
      12
    ],
    "id": 565770,
    "original_language": "en",
    "original_title": "Blue Beetle",
    "overview": "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
    "popularity": 579.577,
    "poster_path": "/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
    "release_date": "2023-08-16",
    "title": "Blue Beetle",
    "video": false,
    "vote_average": 6.983,
    "vote_count": 1626
  },
  {
    "adult": false,
    "backdrop_path": "/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
    "genre_ids": [
      12,
      28,
      18
    ],
    "id": 980489,
    "original_language": "en",
    "original_title": "Gran Turismo",
    "overview": "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
    "popularity": 556.183,
    "poster_path": "/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
    "release_date": "2023-08-09",
    "title": "Gran Turismo",
    "video": false,
    "vote_average": 7.985,
    "vote_count": 1453
  },
  {
    "adult": false,
    "backdrop_path": "/dRWhJ4godwy40JdmNuRZy23oViY.jpg",
    "genre_ids": [
      27
    ],
    "id": 830764,
    "original_language": "en",
    "original_title": "Pet Sematary: Bloodlines",
    "overview": "In 1969, a young Jud Crandall has dreams of leaving his hometown of Ludlow, Maine behind, but soon discovers sinister secrets buried within and is forced to confront a dark family history that will forever keep him connected to Ludlow.",
    "popularity": 553.407,
    "poster_path": "/yqnNLn24shYnZ6kqGpbwuB3NJ0D.jpg",
    "release_date": "2023-09-23",
    "title": "Pet Sematary: Bloodlines",
    "video": false,
    "vote_average": 6.107,
    "vote_count": 205
  },
  {
    "adult": false,
    "backdrop_path": "/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg",
    "genre_ids": [
      28,
      878,
      27
    ],
    "id": 615656,
    "original_language": "en",
    "original_title": "Meg 2: The Trench",
    "overview": "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
    "popularity": 544.8,
    "poster_path": "/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
    "release_date": "2023-08-02",
    "title": "Meg 2: The Trench",
    "video": false,
    "vote_average": 6.757,
    "vote_count": 2549
  },
  {
    "adult": false,
    "backdrop_path": "/zgQQF04u3OgNBJqClRNby1FPz9s.jpg",
    "genre_ids": [
      16,
      10751,
      28,
      878
    ],
    "id": 893723,
    "original_language": "en",
    "original_title": "PAW Patrol: The Mighty Movie",
    "overview": "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
    "popularity": 540.935,
    "poster_path": "/oJkyw6TNEWIS0WkrxNspJfUTao4.jpg",
    "release_date": "2023-09-21",
    "title": "PAW Patrol: The Mighty Movie",
    "video": false,
    "vote_average": 6.925,
    "vote_count": 173
  },
  {
    "adult": false,
    "backdrop_path": "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 968051,
    "original_language": "en",
    "original_title": "The Nun II",
    "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
    "popularity": 520.807,
    "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
    "release_date": "2023-09-06",
    "title": "The Nun II",
    "video": false,
    "vote_average": 6.912,
    "vote_count": 1425
  },
  {
    "adult": false,
    "backdrop_path": "/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      14,
      10749
    ],
    "id": 976573,
    "original_language": "en",
    "original_title": "Elemental",
    "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    "popularity": 511.748,
    "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    "release_date": "2023-06-14",
    "title": "Elemental",
    "video": false,
    "vote_average": 7.734,
    "vote_count": 3000
  },
  {
    "adult": false,
    "backdrop_path": "/drfl2eWipiibW3u3Ybx9HQ8VgIn.jpg",
    "genre_ids": [
      27,
      9648,
      53
    ],
    "id": 841742,
    "original_language": "fr",
    "original_title": "Megalomaniac",
    "overview": "Felix and Martha, the two offspring of legendary serial murderer The Skinner of Mons, grapple with the grotesque legacy bequeathed to them. While Martha works a menial janitorial job, Felix continues his father's reign of terror. But following a brutal attack at work, Martha quickly descends into madness, finding she must come to terms with the infamous blood that flows through her veins.",
    "popularity": 502.741,
    "poster_path": "/eAx5QKnboZpysIg1XBfjhbSgOPF.jpg",
    "release_date": "2023-09-08",
    "title": "Megalomaniac",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 13
  },
  {
    "adult": false,
    "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 762430,
    "original_language": "en",
    "original_title": "Retribution",
    "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    "popularity": 489.304,
    "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    "release_date": "2023-08-23",
    "title": "Retribution",
    "video": false,
    "vote_average": 7,
    "vote_count": 668
  }
],
"total_pages": 41391,
"total_results": 827816
});
});

router.get('/movie/top_rated', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 170.364,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.708,
    "vote_count": 18957
  },
  {
    "adult": false,
    "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 278,
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 129.413,
    "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "release_date": "1994-09-23",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.704,
    "vote_count": 24947
  },
  {
    "adult": false,
    "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 240,
    "original_language": "en",
    "original_title": "The Godfather Part II",
    "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "popularity": 81.29,
    "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
    "release_date": "1974-12-20",
    "title": "The Godfather Part II",
    "video": false,
    "vote_average": 8.589,
    "vote_count": 11445
  },
  {
    "adult": false,
    "backdrop_path": "/3f92DMBTFqr3wgXpfxzrb0qv8nG.jpg",
    "genre_ids": [
      18,
      36,
      10752
    ],
    "id": 424,
    "original_language": "en",
    "original_title": "Schindler's List",
    "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "popularity": 69.623,
    "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "release_date": "1993-12-15",
    "title": "Schindler's List",
    "video": false,
    "vote_average": 8.571,
    "vote_count": 14792
  },
  {
    "adult": false,
    "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 19404,
    "original_language": "hi",
    "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
    "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
    "popularity": 47.74,
    "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
    "release_date": "1995-10-20",
    "title": "Dilwale Dulhania Le Jayenge",
    "video": false,
    "vote_average": 8.546,
    "vote_count": 4276
  },
  {
    "adult": false,
    "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "genre_ids": [
      18
    ],
    "id": 389,
    "original_language": "en",
    "original_title": "12 Angry Men",
    "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "popularity": 48.272,
    "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    "release_date": "1957-04-10",
    "title": "12 Angry Men",
    "video": false,
    "vote_average": 8.545,
    "vote_count": 7793
  },
  {
    "adult": false,
    "backdrop_path": "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
    "genre_ids": [
      16,
      10751,
      14
    ],
    "id": 129,
    "original_language": "ja",
    "original_title": "千と千尋の神隠し",
    "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    "popularity": 111.257,
    "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "release_date": "2001-07-20",
    "title": "Spirited Away",
    "video": false,
    "vote_average": 8.54,
    "vote_count": 15109
  },
  {
    "adult": false,
    "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
    "genre_ids": [
      35,
      53,
      18
    ],
    "id": 496243,
    "original_language": "ko",
    "original_title": "기생충",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "popularity": 80.184,
    "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "release_date": "2019-05-30",
    "title": "Parasite",
    "video": false,
    "vote_average": 8.515,
    "vote_count": 16658
  },
  {
    "adult": false,
    "backdrop_path": "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "id": 155,
    "original_language": "en",
    "original_title": "The Dark Knight",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "popularity": 126.243,
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "release_date": "2008-07-16",
    "title": "The Dark Knight",
    "video": false,
    "vote_average": 8.513,
    "vote_count": 30920
  },
  {
    "adult": false,
    "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
    "genre_ids": [
      14,
      18,
      80
    ],
    "id": 497,
    "original_language": "en",
    "original_title": "The Green Mile",
    "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "popularity": 74.795,
    "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "release_date": "1999-12-10",
    "title": "The Green Mile",
    "video": false,
    "vote_average": 8.509,
    "vote_count": 16139
  },
  {
    "adult": false,
    "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
    "genre_ids": [
      10749,
      16,
      18
    ],
    "id": 372058,
    "original_language": "ja",
    "original_title": "君の名は。",
    "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    "popularity": 96.707,
    "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
    "release_date": "2016-08-26",
    "title": "Your Name.",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 10504
  },
  {
    "adult": false,
    "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    "genre_ids": [
      53,
      80
    ],
    "id": 680,
    "original_language": "en",
    "original_title": "Pulp Fiction",
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "popularity": 66.281,
    "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "release_date": "1994-09-10",
    "title": "Pulp Fiction",
    "video": false,
    "vote_average": 8.489,
    "vote_count": 26152
  },
  {
    "adult": false,
    "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "id": 122,
    "original_language": "en",
    "original_title": "The Lord of the Rings: The Return of the King",
    "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    "popularity": 102.119,
    "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "release_date": "2003-12-01",
    "title": "The Lord of the Rings: The Return of the King",
    "video": false,
    "vote_average": 8.476,
    "vote_count": 22579
  },
  {
    "adult": false,
    "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 13,
    "original_language": "en",
    "original_title": "Forrest Gump",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    "popularity": 98.079,
    "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "release_date": "1994-06-23",
    "title": "Forrest Gump",
    "video": false,
    "vote_average": 8.476,
    "vote_count": 25664
  },
  {
    "adult": false,
    "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
    "genre_ids": [
      37
    ],
    "id": 429,
    "original_language": "it",
    "original_title": "Il buono, il brutto, il cattivo",
    "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "popularity": 64.826,
    "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "release_date": "1966-12-23",
    "title": "The Good, the Bad and the Ugly",
    "video": false,
    "vote_average": 8.469,
    "vote_count": 7876
  },
  {
    "adult": false,
    "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 769,
    "original_language": "en",
    "original_title": "GoodFellas",
    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "popularity": 78.324,
    "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "release_date": "1990-09-12",
    "title": "GoodFellas",
    "video": false,
    "vote_average": 8.466,
    "vote_count": 11894
  },
  {
    "adult": false,
    "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
    "genre_ids": [
      16,
      18,
      10752
    ],
    "id": 12477,
    "original_language": "ja",
    "original_title": "火垂るの墓",
    "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    "popularity": 0.6,
    "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    "release_date": "1988-04-15",
    "title": "Grave of the Fireflies",
    "video": false,
    "vote_average": 8.454,
    "vote_count": 4947
  },
  {
    "adult": false,
    "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
    "genre_ids": [
      35,
      18
    ],
    "id": 637,
    "original_language": "it",
    "original_title": "La vita è bella",
    "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
    "popularity": 51.581,
    "poster_path": "/mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
    "release_date": "1997-12-20",
    "title": "Life Is Beautiful",
    "video": false,
    "vote_average": 8.454,
    "vote_count": 12353
  },
  {
    "adult": false,
    "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 346,
    "original_language": "ja",
    "original_title": "七人の侍",
    "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
    "popularity": 41.565,
    "poster_path": "/iAq0sq42vKTLneVGqHn1D4GzgrM.jpg",
    "release_date": "1954-04-26",
    "title": "Seven Samurai",
    "video": false,
    "vote_average": 8.453,
    "vote_count": 3293
  },
  {
    "adult": false,
    "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 11216,
    "original_language": "it",
    "original_title": "Nuovo Cinema Paradiso",
    "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    "popularity": 41.615,
    "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
    "release_date": "1988-11-17",
    "title": "Cinema Paradiso",
    "video": false,
    "vote_average": 8.448,
    "vote_count": 4009
  }
],
"total_pages": 449,
"total_results": 8962
});
});

router.get('/movie/upcoming', function(req, res, next) {
  res.json({
"dates": {
  "maximum": "2023-12-13",
  "minimum": "2023-11-22"
},
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/dZbLqRjjiiNCpTYzhzL2NMvz4J0.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 951491,
    "original_language": "en",
    "original_title": "Saw X",
    "overview": "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    "popularity": 626.145,
    "poster_path": "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    "release_date": "2023-09-26",
    "title": "Saw X",
    "video": false,
    "vote_average": 7.401,
    "vote_count": 1079
  },
  {
    "adult": false,
    "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 614.334,
    "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8.092,
    "vote_count": 1472
  },
  {
    "adult": false,
    "backdrop_path": "/iiXliCeykkzmJ0Eg9RYJ7F2CWSz.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 762430,
    "original_language": "en",
    "original_title": "Retribution",
    "overview": "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
    "popularity": 489.304,
    "poster_path": "/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg",
    "release_date": "2023-08-23",
    "title": "Retribution",
    "video": false,
    "vote_average": 7,
    "vote_count": 668
  },
  {
    "adult": false,
    "backdrop_path": "/azD31DjpV3PJfjF3h72LVw2WCSD.jpg",
    "genre_ids": [
      27
    ],
    "id": 807172,
    "original_language": "en",
    "original_title": "The Exorcist: Believer",
    "overview": "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
    "popularity": 440.298,
    "poster_path": "/fFXkAlMH2iQrNknv4eq7LGTkcti.jpg",
    "release_date": "2023-10-04",
    "title": "The Exorcist: Believer",
    "video": false,
    "vote_average": 6.146,
    "vote_count": 575
  },
  {
    "adult": false,
    "backdrop_path": "/45zVtZx6Tzx3RKeDziK25K9geFf.jpg",
    "genre_ids": [
      16,
      10751,
      10402,
      14,
      35
    ],
    "id": 901362,
    "original_language": "en",
    "original_title": "Trolls Band Together",
    "overview": "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    "popularity": 393.236,
    "poster_path": "/lxoPJR6eR5nd6nHSKIkEIV4FQWe.jpg",
    "release_date": "2023-10-12",
    "title": "Trolls Band Together",
    "video": false,
    "vote_average": 6.598,
    "vote_count": 46
  },
  {
    "adult": false,
    "backdrop_path": "/jP3FatCTHc460ZGW57q9ypTdBqu.jpg",
    "genre_ids": [
      53,
      878,
      28
    ],
    "id": 937249,
    "original_language": "en",
    "original_title": "57 Seconds",
    "overview": "When a tech blogger lands an interview with a tech guru and stops an attack on him, he finds a mysterious ring that takes him back 57 seconds into the past.",
    "popularity": 228.47,
    "poster_path": "/dfS5qHWFuXyZQnwYREwb7N4qU5p.jpg",
    "release_date": "2023-09-29",
    "title": "57 Seconds",
    "video": false,
    "vote_average": 5.745,
    "vote_count": 186
  },
  {
    "adult": false,
    "backdrop_path": "/6WFfCMe7J7FxsnlHEo1wzU2JH6s.jpg",
    "genre_ids": [
      80,
      18,
      36
    ],
    "id": 466420,
    "original_language": "en",
    "original_title": "Killers of the Flower Moon",
    "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
    "popularity": 225.305,
    "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
    "release_date": "2023-10-18",
    "title": "Killers of the Flower Moon",
    "video": false,
    "vote_average": 7.714,
    "vote_count": 959
  },
  {
    "adult": false,
    "backdrop_path": "/igwshQHV36aBkPyWp7En5P4Kn2V.jpg",
    "genre_ids": [
      27,
      53,
      9648
    ],
    "id": 1071215,
    "original_language": "en",
    "original_title": "Thanksgiving",
    "overview": "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
    "popularity": 193.702,
    "poster_path": "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
    "release_date": "2023-11-16",
    "title": "Thanksgiving",
    "video": false,
    "vote_average": 6.05,
    "vote_count": 20
  },
  {
    "adult": false,
    "backdrop_path": "/9sl9k7FjE4g0vCVNkPdR1Fs3Yx8.jpg",
    "genre_ids": [
      36,
      18,
      10752
    ],
    "id": 753342,
    "original_language": "en",
    "original_title": "Napoleon",
    "overview": "A personal look at the French military leader’s origins and swift, ruthless climb to emperor, viewed through the prism of Napoleon’s addictive, volatile relationship with his wife and one true love, Josephine.",
    "popularity": 186.421,
    "poster_path": "/s46YI7diwlqDVLe55uOaO1VzTId.jpg",
    "release_date": "2023-11-22",
    "title": "Napoleon",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 4
  },
  {
    "adult": false,
    "backdrop_path": "/rron9HAuS9s7zBF8iCX1tsafxUo.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 666277,
    "original_language": "en",
    "original_title": "Past Lives",
    "overview": "Nora and Hae Sung, two childhood friends, are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life.",
    "popularity": 162.801,
    "poster_path": "/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    "release_date": "2023-06-02",
    "title": "Past Lives",
    "video": false,
    "vote_average": 7.936,
    "vote_count": 282
  },
  {
    "adult": false,
    "backdrop_path": "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
    "genre_ids": [
      16,
      10751,
      14,
      12
    ],
    "id": 1022796,
    "original_language": "en",
    "original_title": "Wish",
    "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    "popularity": 154.581,
    "poster_path": "/vgJZSqKMXWDDx09iSIStGKfHMku.jpg",
    "release_date": "2023-11-13",
    "title": "Wish",
    "video": false,
    "vote_average": 7,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/1HzL603WOer58xtnrRYdSIL5K04.jpg",
    "genre_ids": [
      35,
      12
    ],
    "id": 912908,
    "original_language": "en",
    "original_title": "Strays",
    "overview": "When Reggie is abandoned on the mean city streets by his lowlife owner, Doug, Reggie is certain that his beloved owner would never leave him on purpose. But once Reggie falls in with Bug, a fast-talking, foul-mouthed stray who loves his freedom and believes that owners are for suckers, Reggie finally realizes he was in a toxic relationship and begins to see Doug for the heartless sleazeball that he is.",
    "popularity": 148.894,
    "poster_path": "/muDaKftykz9Nj1mhRheMdbuNI9Z.jpg",
    "release_date": "2023-08-17",
    "title": "Strays",
    "video": false,
    "vote_average": 7.544,
    "vote_count": 518
  },
  {
    "adult": false,
    "backdrop_path": "/f9ErVXAyR9EP5WOOp4i5ivBKsKC.jpg",
    "genre_ids": [
      35
    ],
    "id": 814776,
    "original_language": "en",
    "original_title": "Bottoms",
    "overview": "Unpopular best friends PJ and Josie start a high school self-defense club to meet girls and lose their virginity. They soon find themselves in over their heads when the most popular students start beating each other up in the name of self-defense.",
    "popularity": 140.923,
    "poster_path": "/jeyTQrNEpyE1LZIgVlswYh3sc34.jpg",
    "release_date": "2023-08-25",
    "title": "Bottoms",
    "video": false,
    "vote_average": 7.017,
    "vote_count": 173
  },
  {
    "adult": false,
    "backdrop_path": "/dp0rdbGSbZTyWumnbWspXQp87hA.jpg",
    "genre_ids": [
      27,
      9648
    ],
    "id": 1024773,
    "original_language": "en",
    "original_title": "It Lives Inside",
    "overview": "Desperate to fit in at school, Sam rejects her East Indian culture and family to be like everyone else. However, when a mythological demonic spirit latches onto her former best friend, she must come to terms with her heritage to defeat it.",
    "popularity": 121.501,
    "poster_path": "/73gIfV8gDwkVgUrFDzt4TfZC9Zc.jpg",
    "release_date": "2023-09-06",
    "title": "It Lives Inside",
    "video": false,
    "vote_average": 5.695,
    "vote_count": 82
  },
  {
    "adult": false,
    "backdrop_path": "/hb0BeFvZNx2zLGWwuwENOIVeK1U.jpg",
    "genre_ids": [
      35,
      18,
      36
    ],
    "id": 792293,
    "original_language": "en",
    "original_title": "Dumb Money",
    "overview": "Vlogger Keith Gill sinks his life savings into GameStop stock and posts about it. When social media starts blowing up, so do his life and the lives of everyone following him. As a stock tip becomes a movement, everyone gets rich—until the billionaires fight back, and both sides find their worlds turned upside down.",
    "popularity": 105.245,
    "poster_path": "/xYTymnjkVqhn3V66QmNJxFUesLT.jpg",
    "release_date": "2023-09-15",
    "title": "Dumb Money",
    "video": false,
    "vote_average": 6.661,
    "vote_count": 96
  },
  {
    "adult": false,
    "backdrop_path": "/9Rq14Eyrf7Tu1xk0Pl7VcNbNh1n.jpg",
    "genre_ids": [
      28,
      12,
      53
    ],
    "id": 646389,
    "original_language": "en",
    "original_title": "Plane",
    "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
    "popularity": 93.561,
    "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
    "release_date": "2023-01-12",
    "title": "Plane",
    "video": false,
    "vote_average": 6.988,
    "vote_count": 1845
  },
  {
    "adult": false,
    "backdrop_path": "/hjyqNFHx5wIO8dqaRi0v2ix1wiR.jpg",
    "genre_ids": [
      53,
      28,
      80,
      27
    ],
    "id": 808396,
    "original_language": "en",
    "original_title": "God Is a Bullet",
    "overview": "Based on true events and the novel of the same name. Vice detective Bob Hightower finds his ex-wife murdered and daughter kidnapped by a cult. Frustrated by the botched official investigations, he quits the force and infiltrates the cult to hunt down the leader with the help of the cult’s only female victim escapee, Case Hardin.",
    "popularity": 80.564,
    "poster_path": "/5kiLS9nsSJxDdlYUyYGiSUt8Fi8.jpg",
    "release_date": "2023-06-22",
    "title": "God Is a Bullet",
    "video": false,
    "vote_average": 6.315,
    "vote_count": 108
  },
  {
    "adult": false,
    "backdrop_path": "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
    "genre_ids": [
      16,
      12,
      14,
      18
    ],
    "id": 508883,
    "original_language": "ja",
    "original_title": "君たちはどう生きるか",
    "overview": "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the long-awaited one.",
    "popularity": 80.497,
    "poster_path": "/jDQPkgzerGophKRRn7MKm071vCU.jpg",
    "release_date": "2023-07-14",
    "title": "The Boy and the Heron",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 169
  },
  {
    "adult": false,
    "backdrop_path": "/uIk2g2bRkNwNywKZIhC5oIU94Kh.jpg",
    "genre_ids": [
      35,
      10751,
      14
    ],
    "id": 787699,
    "original_language": "en",
    "original_title": "Wonka",
    "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    "popularity": 76.925,
    "poster_path": "/dbABBH3DvFLkBUKwPUG0BlTYdmh.jpg",
    "release_date": "2023-12-06",
    "title": "Wonka",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/x0kI3Tbaqe6OqHXrOJDJ4c4SycM.jpg",
    "genre_ids": [
      28,
      18,
      878
    ],
    "id": 940721,
    "original_language": "ja",
    "original_title": "ゴジラ-1.0",
    "overview": "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
    "popularity": 73.485,
    "poster_path": "/kM5FcckjKbWSeV9Gj0hBTpvNuvi.jpg",
    "release_date": "2023-11-03",
    "title": "Godzilla Minus One",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 5
  }
],
"total_pages": 31,
"total_results": 611
});
});

router.get('/movie/:movie_id', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": "/5AIAnucJKZ3sHpm7r1ykFVIoUHK.jpg",
"belongs_to_collection": null,
"budget": 50000000,
"genres": [
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 53,
    "name": "Thriller"
  }
],
"homepage": "",
"id": 1272,
"imdb_id": "tt0448134",
"original_language": "en",
"original_title": "Sunshine",
"overview": "Fifty years into the future, the sun is dying, and Earth is threatened by arctic temperatures. A team of astronauts is sent to revive the Sun — but the mission fails. Seven years later, a new team is sent to finish the mission as mankind’s last hope.",
"popularity": 26.64,
"poster_path": "/3dmW9NWP80wnXln5IUoQTAmXbj5.jpg",
"production_companies": [
  {
    "id": 290,
    "logo_path": "/jrgCuaQsY9ouP5ILZf4Dq4ZOkIX.png",
    "name": "Ingenious Media",
    "origin_country": "GB"
  },
  {
    "id": 20478,
    "logo_path": "/gSS2OBc6dRsK2ewRx5lcwnARrpl.png",
    "name": "Moving Picture Company",
    "origin_country": "GB"
  },
  {
    "id": 2452,
    "logo_path": "/6CLoZ59fLPG7UyxQtGTqRevjf58.png",
    "name": "UK Film Council",
    "origin_country": "GB"
  },
  {
    "id": 284,
    "logo_path": null,
    "name": "DNA Films",
    "origin_country": "GB"
  }
],
"production_countries": [
  {
    "iso_3166_1": "GB",
    "name": "United Kingdom"
  }
],
"release_date": "2007-04-05",
"revenue": 34806812,
"runtime": 107,
"spoken_languages": [
  {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
  }
],
"status": "Released",
"tagline": "If the sun dies, so do we.",
"title": "Sunshine",
"video": false,
"vote_average": 6.952,
"vote_count": 3440
});
});

router.get('/movie/:movie_id/account_states', function(req, res, next) {
  res.json({
"id": 12722,
"favorite": false,
"rated": false,
"watchlist": false
});
});

router.get('/movie/:movie_id/alternative_titles', function(req, res, next) {
  res.json({
"id": 343611,
"titles": [
  {
    "iso_3166_1": "US",
    "title": "Jack Reacher: Never Look Back",
    "type": "poster title"
  },
  {
    "iso_3166_1": "US",
    "title": "Jack Reacher 2",
    "type": "working title"
  },
  {
    "iso_3166_1": "PE",
    "title": "Jack Reacher: Sin Regreso",
    "type": ""
  },
  {
    "iso_3166_1": "BR",
    "title": "Jack Reacher 2 - Sem Retorno",
    "type": "DVD"
  },
  {
    "iso_3166_1": "CN",
    "title": "侠探杰克2",
    "type": ""
  },
  {
    "iso_3166_1": "KR",
    "title": "잭 리처 네버 고백",
    "type": ""
  },
  {
    "iso_3166_1": "ES",
    "title": "Jack Reacher Nunca vuelvas atrás",
    "type": ""
  },
  {
    "iso_3166_1": "FR",
    "title": "Jack Reacher 2 - Never go back",
    "type": ""
  },
  {
    "iso_3166_1": "KR",
    "title": "잭리처: 네버 고 백",
    "type": ""
  },
  {
    "iso_3166_1": "KR",
    "title": "잭리처: 네버고백",
    "type": ""
  },
  {
    "iso_3166_1": "KR",
    "title": "잭 리처: 네버고백",
    "type": ""
  },
  {
    "iso_3166_1": "VN",
    "title": "Jack Reacher: Không Quay Đầu",
    "type": ""
  },
  {
    "iso_3166_1": "DE",
    "title": "Jack Reacher: Kein Weg zurück",
    "type": ""
  },
  {
    "iso_3166_1": "US",
    "title": "Jack Reacher։ Never Go Back",
    "type": ""
  },
  {
    "iso_3166_1": "TH",
    "title": "ยอดคนสืบระห่ำ 2",
    "type": ""
  },
  {
    "iso_3166_1": "JP",
    "title": "ジャック・リーチャー NEVER GO BACK：2016",
    "type": ""
  },
  {
    "iso_3166_1": "US",
    "title": "Jack Reacher：Never Go Back",
    "type": "Full Title with alt char '：' for Windows filenames"
  }
]
});
});

router.get('/movie/:movie_id/changes', function(req, res, next) {
  res.json({
"changes": []
});
});

router.get('/movie/:movie_id/credits', function(req, res, next) {
  res.json({
"id": 343611,
"cast": [
  {
    "adult": false,
    "gender": 2,
    "id": 500,
    "known_for_department": "Acting",
    "name": "Tom Cruise",
    "original_name": "Tom Cruise",
    "popularity": 48.237,
    "profile_path": "/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg",
    "cast_id": 0,
    "character": "Jack Reacher",
    "credit_id": "5573971c9251413f6600024d",
    "order": 0
  },
  {
    "adult": false,
    "gender": 1,
    "id": 71189,
    "known_for_department": "Acting",
    "name": "Cobie Smulders",
    "original_name": "Cobie Smulders",
    "popularity": 39.925,
    "profile_path": "/aMvuD7RkxzKxGDifN9b1jTzHYVi.jpg",
    "cast_id": 5,
    "character": "Susan Turner",
    "credit_id": "55fdcf53c3a368133b0016bb",
    "order": 1
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1466613,
    "known_for_department": "Acting",
    "name": "Danika Yarosh",
    "original_name": "Danika Yarosh",
    "popularity": 14.54,
    "profile_path": "/i0Z0XnAFxf2BlhfJe26ach2HAVz.jpg",
    "cast_id": 7,
    "character": "Samantha",
    "credit_id": "55fdcf61925141529f0019b5",
    "order": 2
  },
  {
    "adult": false,
    "gender": 2,
    "id": 83860,
    "known_for_department": "Acting",
    "name": "Aldis Hodge",
    "original_name": "Aldis Hodge",
    "popularity": 16.523,
    "profile_path": "/jPpnaAGFXaIeOrRNUHIHxk3fIJL.jpg",
    "cast_id": 6,
    "character": "Espin",
    "credit_id": "55fdcf5a92514152aa001927",
    "order": 3
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1223163,
    "known_for_department": "Acting",
    "name": "Patrick Heusinger",
    "original_name": "Patrick Heusinger",
    "popularity": 14.876,
    "profile_path": "/ddtKHbu7j2qW4PXFHk1qZIvTPO8.jpg",
    "cast_id": 16,
    "character": "The Hunter",
    "credit_id": "57aed22b92514128f6001b22",
    "order": 4
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1485114,
    "known_for_department": "Acting",
    "name": "Madalyn Horcher",
    "original_name": "Madalyn Horcher",
    "popularity": 19.626,
    "profile_path": "/tgbI87CaMhNUFPdnqw9fpvh1hBW.jpg",
    "cast_id": 24,
    "character": "Sgt. Leach",
    "credit_id": "588a1ee0c3a3684093018c3e",
    "order": 5
  },
  {
    "adult": false,
    "gender": 1,
    "id": 55463,
    "known_for_department": "Acting",
    "name": "Jessica Stroup",
    "original_name": "Jessica Stroup",
    "popularity": 5.659,
    "profile_path": "/qKpYNOim2YqAMEvJpgzzf9PlMir.jpg",
    "cast_id": 131,
    "character": "Lt. Sullivan",
    "credit_id": "5de122a50cd44600143401b9",
    "order": 6
  },
  {
    "adult": false,
    "gender": 2,
    "id": 7497,
    "known_for_department": "Acting",
    "name": "Holt McCallany",
    "original_name": "Holt McCallany",
    "popularity": 25.602,
    "profile_path": "/a5ax2ICLrV6l0T74OSFvzssCQyQ.jpg",
    "cast_id": 17,
    "character": "Col. Morgan",
    "credit_id": "57aed238c3a36821a20018cd",
    "order": 7
  },
  {
    "adult": false,
    "gender": 2,
    "id": 17343,
    "known_for_department": "Acting",
    "name": "Robert Knepper",
    "original_name": "Robert Knepper",
    "popularity": 16.538,
    "profile_path": "/w40AttR4OPQvjYyTVanq5Rm5iOb.jpg",
    "cast_id": 20,
    "character": "General Harkness",
    "credit_id": "57aed27cc3a36821a5001b2d",
    "order": 8
  },
  {
    "adult": false,
    "gender": 2,
    "id": 149590,
    "known_for_department": "Acting",
    "name": "Robert Catrini",
    "original_name": "Robert Catrini",
    "popularity": 12.1,
    "profile_path": "/zmA6oHE0OXhMrasd8qG9lvYYRaI.jpg",
    "cast_id": 19,
    "character": "Colonel Moorcroft",
    "credit_id": "57aed269c3a36821a5001b1d",
    "order": 9
  },
  {
    "adult": false,
    "gender": 2,
    "id": 990136,
    "known_for_department": "Acting",
    "name": "Judd Lormand",
    "original_name": "Judd Lormand",
    "popularity": 7.135,
    "profile_path": "/jeZBWgcjiTaXZM6FwcHm9QW1F6w.jpg",
    "cast_id": 25,
    "character": "Local Deputy",
    "credit_id": "5890e864c3a368701700a374",
    "order": 10
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1173099,
    "known_for_department": "Acting",
    "name": "Christopher Berry",
    "original_name": "Christopher Berry",
    "popularity": 7.718,
    "profile_path": "/8y2HybPVLxUabwnMPjdBREbitKZ.jpg",
    "cast_id": 26,
    "character": "Onlooker at Diner",
    "credit_id": "5890e88bc3a368701700a398",
    "order": 11
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1374151,
    "known_for_department": "Acting",
    "name": "Hunter Burke",
    "original_name": "Hunter Burke",
    "popularity": 5.821,
    "profile_path": "/ibR2TL9jwKVDr9E3VJRnPcgcvHN.jpg",
    "cast_id": 27,
    "character": "Onlooker at Diner",
    "credit_id": "5890e8a5c3a368700d009a38",
    "order": 12
  },
  {
    "adult": false,
    "gender": 2,
    "id": 20496,
    "known_for_department": "Acting",
    "name": "Jason Douglas",
    "original_name": "Jason Douglas",
    "popularity": 8.719,
    "profile_path": "/9vvygaziqPt23AafWHJY8TlUK8d.jpg",
    "cast_id": 28,
    "character": "Sheriff",
    "credit_id": "5890e8cb92514103f700a054",
    "order": 13
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1711523,
    "known_for_department": "Acting",
    "name": "Lizeth Hutchings",
    "original_name": "Lizeth Hutchings",
    "popularity": 1.442,
    "profile_path": "/gyQDcZgeLeVGENoli47PlIyvHBD.jpg",
    "cast_id": 29,
    "character": "Smuggled Woman",
    "credit_id": "5890e8e792514103f3009f83",
    "order": 14
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1542879,
    "known_for_department": "Acting",
    "name": "Marisela Zumbado",
    "original_name": "Marisela Zumbado",
    "popularity": 3.743,
    "profile_path": "/5049L8NXA6LKlnhhf4KHkYHCbU6.jpg",
    "cast_id": 30,
    "character": "Smuggled Woman",
    "credit_id": "5890e90792514103ec009d7f",
    "order": 15
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1748192,
    "known_for_department": "Acting",
    "name": "Alexandra Lucchesi",
    "original_name": "Alexandra Lucchesi",
    "popularity": 1.584,
    "profile_path": "/26X02HYpYte0NIm5ocOPzssPG6n.jpg",
    "cast_id": 31,
    "character": "Smuggled Woman",
    "credit_id": "5890e928c3a368700d009a9a",
    "order": 16
  },
  {
    "adult": false,
    "gender": 2,
    "id": 202930,
    "known_for_department": "Acting",
    "name": "Anthony Molinari",
    "original_name": "Anthony Molinari",
    "popularity": 11.837,
    "profile_path": "/8Gl1b5Y7QLrdv5vvOwAmJk29joM.jpg",
    "cast_id": 156,
    "character": "Buzzcut",
    "credit_id": "5ea728b6b76cbb001ae3c779",
    "order": 17
  },
  {
    "adult": false,
    "gender": 2,
    "id": 202955,
    "known_for_department": "Crew",
    "name": "Theo Kypri",
    "original_name": "Theo Kypri",
    "popularity": 3.199,
    "profile_path": "/4JrpMbLip6wZY0BmHvnfM5OZO3j.jpg",
    "cast_id": 157,
    "character": "Passenger",
    "credit_id": "5ea728c2b7fbbd001d384574",
    "order": 18
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1190731,
    "known_for_department": "Acting",
    "name": "Talbott Lin",
    "original_name": "Talbott Lin",
    "popularity": 2.234,
    "profile_path": "/fQVQaes0xVysbq7VUS24mBKUzlg.jpg",
    "cast_id": 158,
    "character": "Shop Owner",
    "credit_id": "5ea728ee07291c0020ea05ea",
    "order": 19
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1394025,
    "known_for_department": "Acting",
    "name": "M. Serrano",
    "original_name": "M. Serrano",
    "popularity": 0.6,
    "profile_path": "/r8OBKdC6GZUUn0uBR74CKdqIAWV.jpg",
    "cast_id": 159,
    "character": "Cibelli",
    "credit_id": "5ea728fcb7fbbd001b383f8e",
    "order": 20
  },
  {
    "adult": false,
    "gender": 1,
    "id": 231855,
    "known_for_department": "Acting",
    "name": "Nicole Barré",
    "original_name": "Nicole Barré",
    "popularity": 7.05,
    "profile_path": "/vy61iMo8cNWsBBFbRLnCdXp6Dej.jpg",
    "cast_id": 160,
    "character": "Mirkovich",
    "credit_id": "5ea7290acc9683001eadfb03",
    "order": 21
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1334321,
    "known_for_department": "Acting",
    "name": "Craig Henningsen",
    "original_name": "Craig Henningsen",
    "popularity": 4.872,
    "profile_path": "/mWittaEYFxIFCaskmYFE0m9bJr9.jpg",
    "cast_id": 161,
    "character": "MP at Fort Dyer",
    "credit_id": "5ea729a2bb070d001ca6f314",
    "order": 22
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2573870,
    "known_for_department": "Acting",
    "name": "Giovanni Silva",
    "original_name": "Giovanni Silva",
    "popularity": 2.151,
    "profile_path": "/xBhOBooucfKF0VdrybMPOf3uIMF.jpg",
    "cast_id": 162,
    "character": "Lead MP at Fort Dyer",
    "credit_id": "5ea729babb070d0023a6f190",
    "order": 23
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1629633,
    "known_for_department": "Acting",
    "name": "Ryan Broussard",
    "original_name": "Ryan Broussard",
    "popularity": 8.898,
    "profile_path": "/9IJCebw6L5GTUfPEoonKYqwRQC6.jpg",
    "cast_id": 163,
    "character": "Prison Guard",
    "credit_id": "5ea729cc07291c0020ea070d",
    "order": 24
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2004289,
    "known_for_department": "Acting",
    "name": "Josh Breslow",
    "original_name": "Josh Breslow",
    "popularity": 6.832,
    "profile_path": "/70R8lKQFLMpXI2KsNp5D9j46Fuu.jpg",
    "cast_id": 164,
    "character": "OPS Center Worker",
    "credit_id": "5ea729dcfdc1460022a2d62c",
    "order": 25
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1704653,
    "known_for_department": "Acting",
    "name": "Ninja N. Devoe",
    "original_name": "Ninja N. Devoe",
    "popularity": 5.486,
    "profile_path": "/85wHAJNTAHnsb6HgDZkYBYbWsmz.jpg",
    "cast_id": 165,
    "character": "MP at OPS Center",
    "credit_id": "5ea729eab7fbbd001d38469e",
    "order": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1810485,
    "known_for_department": "Acting",
    "name": "Ernest Wells",
    "original_name": "Ernest Wells",
    "popularity": 2.958,
    "profile_path": "/8b0olhIAyiltes3j8UN9Lral2Wt.jpg",
    "cast_id": 166,
    "character": "Cab Driver",
    "credit_id": "5ea729f9b7fbbd001b38408f",
    "order": 27
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1394280,
    "known_for_department": "Acting",
    "name": "Caroline Hebert",
    "original_name": "Caroline Hebert",
    "popularity": 6.45,
    "profile_path": "/un3ZS9OxeVFmFTCWxyHyz36Ytv8.jpg",
    "cast_id": 167,
    "character": "Restaurant Hostess",
    "credit_id": "5ea72a1bb76cbb001ae3c8a7",
    "order": 28
  },
  {
    "adult": false,
    "gender": 2,
    "id": 20582,
    "known_for_department": "Acting",
    "name": "Michael Papajohn",
    "original_name": "Michael Papajohn",
    "popularity": 8.621,
    "profile_path": "/hdTJBfIXfvRdlD1p8y6rra207UP.jpg",
    "cast_id": 168,
    "character": "DC Policeman at Restaurant",
    "credit_id": "5ea72a2a426ae800264807fb",
    "order": 29
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616808,
    "known_for_department": "Acting",
    "name": "Sharon E. Smith",
    "original_name": "Sharon E. Smith",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 169,
    "character": "Nancy Peters",
    "credit_id": "5ea72a37b7fbbd001b3840df",
    "order": 30
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1939706,
    "known_for_department": "Acting",
    "name": "Martin Covert",
    "original_name": "Martin Covert",
    "popularity": 1.624,
    "profile_path": "/1aG46YTpob1UVlFA1izF4jm6HKs.jpg",
    "cast_id": 170,
    "character": "Art Teacher",
    "credit_id": "5ea72a5607291c001eea0afb",
    "order": 31
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1630319,
    "known_for_department": "Acting",
    "name": "Abbie Gayle",
    "original_name": "Abbie Gayle",
    "popularity": 16.106,
    "profile_path": "/tRoyXGJPQqmHApLXk42s3k6EBUp.jpg",
    "cast_id": 171,
    "character": "Pembroke Student",
    "credit_id": "5ea72a63bb070d0023a6f24a",
    "order": 32
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2616809,
    "known_for_department": "Acting",
    "name": "Rae Varela",
    "original_name": "Rae Varela",
    "popularity": 1.628,
    "profile_path": "/t0AnNm5Du8c4rZRiVxgzvXnOcMP.jpg",
    "cast_id": 172,
    "character": "Pembroke Student",
    "credit_id": "5ea72a7107291c0025ea0626",
    "order": 33
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1681921,
    "known_for_department": "Acting",
    "name": "Taylor Faye Ruffin",
    "original_name": "Taylor Faye Ruffin",
    "popularity": 0.863,
    "profile_path": "/hspuaD1R4Iwz7UnnWuVBxMn8fWb.jpg",
    "cast_id": 173,
    "character": "Pembroke Student",
    "credit_id": "5ea72a82b7fbbd001b38411c",
    "order": 34
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1056052,
    "known_for_department": "Writing",
    "name": "Lee Child",
    "original_name": "Lee Child",
    "popularity": 4.265,
    "profile_path": "/bJiJb69N2h4MdvdP2PjUpgJdCll.jpg",
    "cast_id": 174,
    "character": "Airport security",
    "credit_id": "5ea72a91be55b7001de3e473",
    "order": 35
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1458990,
    "known_for_department": "Acting",
    "name": "Robert Larriviere",
    "original_name": "Robert Larriviere",
    "popularity": 11.623,
    "profile_path": "/9tJzMqhjDOHr3w6nSh4SFOudh4O.jpg",
    "cast_id": 175,
    "character": "Hotel Receptionist",
    "credit_id": "5ea72a9ebb070d0023a6f2f6",
    "order": 36
  },
  {
    "adult": false,
    "gender": 1,
    "id": 565501,
    "known_for_department": "Acting",
    "name": "Teri Wyble",
    "original_name": "Teri Wyble",
    "popularity": 10.113,
    "profile_path": "/zOdjLw4GCDRT2kswPXIHH4ZT6d.jpg",
    "cast_id": 23,
    "character": "Prud'homme´s wife",
    "credit_id": "57d9a383c3a36878e900867f",
    "order": 37
  },
  {
    "adult": false,
    "gender": 2,
    "id": 563560,
    "known_for_department": "Acting",
    "name": "Gordon Alexander",
    "original_name": "Gordon Alexander",
    "popularity": 6.484,
    "profile_path": "/d7Z5Rbctu6Jj9WmJJgrMHk8mhK6.jpg",
    "cast_id": 176,
    "character": "Cage Match Goon",
    "credit_id": "5ea72b25d38b58002626e151",
    "order": 38
  },
  {
    "adult": false,
    "gender": 2,
    "id": 86276,
    "known_for_department": "Acting",
    "name": "Sean Boyd",
    "original_name": "Sean Boyd",
    "popularity": 3.66,
    "profile_path": "/kmcfU9S7ajCBVhCbNvTztHS2OJL.jpg",
    "cast_id": 177,
    "character": "Decoudreau",
    "credit_id": "5ea72b32b7fbbd001d3847f2",
    "order": 39
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1125009,
    "known_for_department": "Acting",
    "name": "Zachary James Rukavina",
    "original_name": "Zachary James Rukavina",
    "popularity": 4.164,
    "profile_path": "/yzXQ9hi6J7ObmAJDRkjvxBfCctL.jpg",
    "cast_id": 178,
    "character": "Amputee Vet",
    "credit_id": "5ea72b3f514c4a00268aa660",
    "order": 40
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1668606,
    "known_for_department": "Acting",
    "name": "Jared Bankens",
    "original_name": "Jared Bankens",
    "popularity": 7.786,
    "profile_path": "/6Wr4uihYoP6H7MBXY3EsAjOPthR.jpg",
    "cast_id": 179,
    "character": "Junkie",
    "credit_id": "5ea72b4ccc9683001eadfd47",
    "order": 41
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1578723,
    "known_for_department": "Acting",
    "name": "Robert Segari",
    "original_name": "Robert Segari",
    "popularity": 0.833,
    "profile_path": null,
    "cast_id": 180,
    "character": "Junkie",
    "credit_id": "5ea72b5a2d1e40001f82aa5b",
    "order": 42
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1367847,
    "known_for_department": "Acting",
    "name": "Austin Hébert",
    "original_name": "Austin Hébert",
    "popularity": 7.426,
    "profile_path": "/vOuRMtOtPVd8vuNCCxxavQSdGIC.jpg",
    "cast_id": 18,
    "character": "Prudhomme",
    "credit_id": "57aed252c3a36878fe0029a6",
    "order": 43
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1270862,
    "known_for_department": "Acting",
    "name": "Darcel White Moreno",
    "original_name": "Darcel White Moreno",
    "popularity": 3.062,
    "profile_path": "/2OwTvQllbKsHBpuH1mnqpt9MtTs.jpg",
    "cast_id": 181,
    "character": "Apolline",
    "credit_id": "5ea72b90d38b58002626e175",
    "order": 44
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1671208,
    "known_for_department": "Acting",
    "name": "Jenny Ballard",
    "original_name": "Jenny Ballard",
    "popularity": 0.6,
    "profile_path": "/jydalQK5bNXzmiryVbgCs4R0ULz.jpg",
    "cast_id": 182,
    "character": "Tech at Parasource OPS Center",
    "credit_id": "5ea72ba3fdc146001da2d589",
    "order": 45
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1684351,
    "known_for_department": "Acting",
    "name": "Jesse Malinowski",
    "original_name": "Jesse Malinowski",
    "popularity": 3.916,
    "profile_path": "/mZK00u2EWDYdYd41vgnTLbdBy9V.jpg",
    "cast_id": 183,
    "character": "Aide at Parasource OPS Center",
    "credit_id": "5ea72bb02d1e40001d82acd9",
    "order": 46
  },
  {
    "adult": false,
    "gender": 2,
    "id": 62784,
    "known_for_department": "Acting",
    "name": "Billy Slaughter",
    "original_name": "Billy Slaughter",
    "popularity": 10.799,
    "profile_path": "/wyKVHwnFodOmNsTgDTcL1GlJzqa.jpg",
    "cast_id": 21,
    "character": "Parasource Aide",
    "credit_id": "57aed28692514128f6001b42",
    "order": 47
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1455813,
    "known_for_department": "Acting",
    "name": "Ben VanderMey",
    "original_name": "Ben VanderMey",
    "popularity": 6.306,
    "profile_path": "/lkPNTxvIiV0WtBVOV8DbLiCSp0c.jpg",
    "cast_id": 184,
    "character": "Parasource Gate Guard",
    "credit_id": "5ea72bdbd38b58002626e1cb",
    "order": 48
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616814,
    "known_for_department": "Acting",
    "name": "Ashley Wilks",
    "original_name": "Ashley Wilks",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 185,
    "character": "Hotel Guest",
    "credit_id": "5ea72bea514c4a00218aacac",
    "order": 49
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616815,
    "known_for_department": "Acting",
    "name": "Robert J. Gilchrist",
    "original_name": "Robert J. Gilchrist",
    "popularity": 0.6,
    "profile_path": "/fg6VsnTjYAisJpfUAjTKWbfaMyB.jpg",
    "cast_id": 186,
    "character": "Ghoul on Float",
    "credit_id": "5ea72bf7d38b58001e26e7ac",
    "order": 50
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616817,
    "known_for_department": "Acting",
    "name": "Bennie Pete",
    "original_name": "Bennie Pete",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 187,
    "character": "Musician",
    "credit_id": "5ea72c05d38b58002626e1ed",
    "order": 51
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616818,
    "known_for_department": "Acting",
    "name": "Tyrus Chapman",
    "original_name": "Tyrus Chapman",
    "popularity": 1.4,
    "profile_path": null,
    "cast_id": 188,
    "character": "Musician",
    "credit_id": "5ea72c1a07291c0025ea0866",
    "order": 52
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616819,
    "known_for_department": "Acting",
    "name": "Larry Lamar Brown",
    "original_name": "Larry Lamar Brown",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 189,
    "character": "Musician",
    "credit_id": "5ea72c25426ae80021480ac2",
    "order": 53
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616821,
    "known_for_department": "Acting",
    "name": "Phillip Sherrell Armand",
    "original_name": "Phillip Sherrell Armand",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 190,
    "character": "Musician",
    "credit_id": "5ea72c32cc9683001cadf8c6",
    "order": 54
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616822,
    "known_for_department": "Acting",
    "name": "Harry Darvell Cook",
    "original_name": "Harry Darvell Cook",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 191,
    "character": "Musician",
    "credit_id": "5ea72c59be55b7001de3e61a",
    "order": 55
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616824,
    "known_for_department": "Acting",
    "name": "John Arvin Gilbert",
    "original_name": "John Arvin Gilbert",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 192,
    "character": "Musician",
    "credit_id": "5ea72c6407291c0025ea08f7",
    "order": 56
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616825,
    "known_for_department": "Acting",
    "name": "Dwayne Finnie",
    "original_name": "Dwayne Finnie",
    "popularity": 0.828,
    "profile_path": null,
    "cast_id": 193,
    "character": "Musician",
    "credit_id": "5ea72c6f426ae8002648094a",
    "order": 57
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616826,
    "known_for_department": "Acting",
    "name": "Alvarez Huntley",
    "original_name": "Alvarez Huntley",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 194,
    "character": "Musician",
    "credit_id": "5ea72c7b07291c001eea0c94",
    "order": 58
  },
  {
    "adult": false,
    "gender": 1,
    "id": 133386,
    "known_for_department": "Acting",
    "name": "Sabrina Gennarino",
    "original_name": "Sabrina Gennarino",
    "popularity": 8.425,
    "profile_path": "/kNJJbryHzhONUBHJxRgWiF7j5j8.jpg",
    "cast_id": 195,
    "character": "Candace",
    "credit_id": "5ea72c86514c4a00218aad04",
    "order": 59
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2973300,
    "known_for_department": "Acting",
    "name": "Chase Savoie",
    "original_name": "Chase Savoie",
    "popularity": 0.6,
    "profile_path": null,
    "cast_id": 205,
    "character": "Garde",
    "credit_id": "60250d44abf8e2003fa502e5",
    "order": 60
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1787405,
    "known_for_department": "Acting",
    "name": "Timothy Carr",
    "original_name": "Timothy Carr",
    "popularity": 1.7,
    "profile_path": "/hVcWRcR8SLGIlmdhYILkC3q116a.jpg",
    "cast_id": 207,
    "character": "Military Police (uncredited)",
    "credit_id": "61103efca3d027002c753602",
    "order": 61
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1748388,
    "known_for_department": "Acting",
    "name": "Gino Galento",
    "original_name": "Gino Galento",
    "popularity": 1.748,
    "profile_path": null,
    "cast_id": 208,
    "character": "Wendy G Kennedy",
    "credit_id": "61cb1fcb511d090063df1015",
    "order": 62
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1044954,
    "known_for_department": "Acting",
    "name": "Sam Medina",
    "original_name": "Sam Medina",
    "popularity": 7.44,
    "profile_path": "/9xDO3sxBcO3tsDXknlKJuepeFwl.jpg",
    "cast_id": 209,
    "character": "DC Policeman #2 (uncredited)",
    "credit_id": "623bc410211ce50088becf6e",
    "order": 63
  },
  {
    "adult": false,
    "gender": 1,
    "id": 4324188,
    "known_for_department": "Acting",
    "name": "Julia Holt",
    "original_name": "Julia Holt",
    "popularity": 0.6,
    "profile_path": "/3saskdbIbRdliTQyuSBrOzeN6Dv.jpg",
    "cast_id": 210,
    "character": "Pedestrian (uncredited)",
    "credit_id": "652dc0db358da75b5c0c8ae1",
    "order": 64
  }
],
"crew": [
  {
    "adult": false,
    "gender": 2,
    "id": 500,
    "known_for_department": "Acting",
    "name": "Tom Cruise",
    "original_name": "Tom Cruise",
    "popularity": 48.237,
    "profile_path": "/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg",
    "credit_id": "55fdcfa7c3a368133400196b",
    "department": "Production",
    "job": "Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 4197,
    "known_for_department": "Art",
    "name": "Clay A. Griffith",
    "original_name": "Clay A. Griffith",
    "popularity": 1.744,
    "profile_path": null,
    "credit_id": "58b945c3c3a368666b00876f",
    "department": "Art",
    "job": "Production Design"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 909,
    "known_for_department": "Editing",
    "name": "Billy Weber",
    "original_name": "Billy Weber",
    "popularity": 2.093,
    "profile_path": null,
    "credit_id": "57aed2b9c3a368213f001bcf",
    "department": "Editing",
    "job": "Editor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9181,
    "known_for_department": "Directing",
    "name": "Edward Zwick",
    "original_name": "Edward Zwick",
    "popularity": 9.306,
    "profile_path": "/RzRjOpqfob68smXTj5RPjankKr.jpg",
    "credit_id": "55fdcf9ac3a36813370017ca",
    "department": "Writing",
    "job": "Screenplay"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9181,
    "known_for_department": "Directing",
    "name": "Edward Zwick",
    "original_name": "Edward Zwick",
    "popularity": 9.306,
    "profile_path": "/RzRjOpqfob68smXTj5RPjankKr.jpg",
    "credit_id": "55e73aad9251416c0d000453",
    "department": "Directing",
    "job": "Director"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9182,
    "known_for_department": "Production",
    "name": "Marshall Herskovitz",
    "original_name": "Marshall Herskovitz",
    "popularity": 2.168,
    "profile_path": "/cfvp1rGCUiAUldqNoxTmjxxxipi.jpg",
    "credit_id": "55fdcf90c3a3681334001968",
    "department": "Writing",
    "job": "Screenplay"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 9183,
    "known_for_department": "Production",
    "name": "Paula Wagner",
    "original_name": "Paula Wagner",
    "popularity": 1.965,
    "profile_path": "/jRnMmW3USte8Qglpe57nJWlA38E.jpg",
    "credit_id": "5b0ea93fc3a368288e00610c",
    "department": "Production",
    "job": "Executive Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9033,
    "known_for_department": "Writing",
    "name": "Christopher McQuarrie",
    "original_name": "Christopher McQuarrie",
    "popularity": 14.652,
    "profile_path": "/7FcybX1uFpMKHSI0p15LGPG3O3x.jpg",
    "credit_id": "58b940d7c3a368664d009162",
    "department": "Production",
    "job": "Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 11409,
    "known_for_department": "Camera",
    "name": "Oliver Wood",
    "original_name": "Oliver Wood",
    "popularity": 1.583,
    "profile_path": "/rUXhXZUF818WsqWms7BIIz9YHjN.jpg",
    "credit_id": "578850cac3a36839190046f8",
    "department": "Camera",
    "job": "Director of Photography"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 15332,
    "known_for_department": "Sound",
    "name": "Mark P. Stoeckinger",
    "original_name": "Mark P. Stoeckinger",
    "popularity": 1.069,
    "profile_path": null,
    "credit_id": "58b9734f925141607300aaa2",
    "department": "Sound",
    "job": "Supervising Sound Editor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 16601,
    "known_for_department": "Visual Effects",
    "name": "William Mesa",
    "original_name": "William Mesa",
    "popularity": 2.111,
    "profile_path": null,
    "credit_id": "58b9499ec3a368668f00827e",
    "department": "Visual Effects",
    "job": "Visual Effects Supervisor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 22814,
    "known_for_department": "Writing",
    "name": "Richard Wenk",
    "original_name": "Richard Wenk",
    "popularity": 4.943,
    "profile_path": "/tUH6K1QHmZKpZC2UGn7q1z20C4P.jpg",
    "credit_id": "55fdcf7f92514152a8001866",
    "department": "Writing",
    "job": "Screenplay"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 29018,
    "known_for_department": "Production",
    "name": "Dana Goldberg",
    "original_name": "Dana Goldberg",
    "popularity": 2.834,
    "profile_path": "/AtiT0HTrrrvVVjZgOXpxKxVFyAb.jpg",
    "credit_id": "5b0ea97e0e0a2671d6005f5e",
    "department": "Production",
    "job": "Executive Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 56461,
    "known_for_department": "Production",
    "name": "Kevin J. Messick",
    "original_name": "Kevin J. Messick",
    "popularity": 2.371,
    "profile_path": "/pz8NSCCp146P4MxDXdtBcgX2DxD.jpg",
    "credit_id": "5ea72417bb070d0023a6ed5a",
    "department": "Production",
    "job": "Co-Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 56737,
    "known_for_department": "Production",
    "name": "Don Granger",
    "original_name": "Don Granger",
    "popularity": 2.815,
    "profile_path": "/ilhrUzybaDqaZOiaw1M8dzkZ0ZF.jpg",
    "credit_id": "55fdcfbcc3a368132c001b9f",
    "department": "Production",
    "job": "Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 58433,
    "known_for_department": "Production",
    "name": "David Ellison",
    "original_name": "David Ellison",
    "popularity": 6.194,
    "profile_path": "/jOhjFZWW2KqsOzm4IiE71FHmcIf.jpg",
    "credit_id": "5b0ea96c0e0a2671a900604f",
    "department": "Production",
    "job": "Executive Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 62739,
    "known_for_department": "Production",
    "name": "Herb Gains",
    "original_name": "Herb Gains",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "5b0ea95b0e0a2671bd005263",
    "department": "Production",
    "job": "Executive Producer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 72640,
    "known_for_department": "Production",
    "name": "Gary Huckabay",
    "original_name": "Gary Huckabay",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "5ea7246ebb070d0023a6edaa",
    "department": "Crew",
    "job": "Supervisor of Production Resources"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 89287,
    "known_for_department": "Writing",
    "name": "Nathan Parker",
    "original_name": "Nathan Parker",
    "popularity": 1.996,
    "profile_path": "/rKglYuA8WokK3ofd3KoYily7hd8.jpg",
    "credit_id": "5ea7276ab7fbbd001b383e6e",
    "department": "Directing",
    "job": "Second Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 86907,
    "known_for_department": "Production",
    "name": "Susan E. Novick",
    "original_name": "Susan E. Novick",
    "popularity": 1.477,
    "profile_path": null,
    "credit_id": "5ea72491b76cbb001ae3c3af",
    "department": "Crew",
    "job": "Post Production Supervisor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 91932,
    "known_for_department": "Crew",
    "name": "Cliff Fleming",
    "original_name": "Cliff Fleming",
    "popularity": 5.443,
    "profile_path": "/20Wp9UrwBR8KUU16gBpM2p0DQO6.jpg",
    "credit_id": "58b94295c3a3686630008897",
    "department": "Crew",
    "job": "Aerial Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 149960,
    "known_for_department": "Camera",
    "name": "Bruce Dickson",
    "original_name": "Bruce Dickson",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b975c4c3a36866af00a6cd",
    "department": "Camera",
    "job": "Second Unit Director of Photography"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 210468,
    "known_for_department": "Acting",
    "name": "Paul Bennett",
    "original_name": "Paul Bennett",
    "popularity": 3.953,
    "profile_path": null,
    "credit_id": "5ea724d4d38b58002626daa8",
    "department": "Directing",
    "job": "Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 227440,
    "known_for_department": "Sound",
    "name": "Henry Jackman",
    "original_name": "Henry Jackman",
    "popularity": 10.31,
    "profile_path": "/wJYFGHG5Vsh8cbiyiS8zpO2SMHb.jpg",
    "credit_id": "578850b8c3a36832e400290f",
    "department": "Sound",
    "job": "Original Music Composer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 578730,
    "known_for_department": "Costume & Make-Up",
    "name": "Amy Wood",
    "original_name": "Amy Wood",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b946f4925141606b009b53",
    "department": "Costume & Make-Up",
    "job": "Key Hair Stylist"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 589402,
    "known_for_department": "Directing",
    "name": "Adrian Grünberg",
    "original_name": "Adrian Grünberg",
    "popularity": 1.789,
    "profile_path": "/ubhQE5F4orGeAuQYN1PoY8ZJc3n.jpg",
    "credit_id": "5ea726af2d1e40002482ad97",
    "department": "Directing",
    "job": "First Assistant Director"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 960673,
    "known_for_department": "Art",
    "name": "Peter Borck",
    "original_name": "Peter Borck",
    "popularity": 1.22,
    "profile_path": null,
    "credit_id": "58b94683c3a36866b7009292",
    "department": "Art",
    "job": "Supervising Art Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1046602,
    "known_for_department": "Art",
    "name": "Brian Stultz",
    "original_name": "Brian Stultz",
    "popularity": 2.705,
    "profile_path": null,
    "credit_id": "58b945e3c3a36866860086c8",
    "department": "Art",
    "job": "Art Direction"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1056052,
    "known_for_department": "Writing",
    "name": "Lee Child",
    "original_name": "Lee Child",
    "popularity": 4.265,
    "profile_path": "/bJiJb69N2h4MdvdP2PjUpgJdCll.jpg",
    "credit_id": "55e73abec3a368379200046f",
    "department": "Writing",
    "job": "Novel"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1069869,
    "known_for_department": "Costume & Make-Up",
    "name": "Kimberly Amacker",
    "original_name": "Kimberly Amacker",
    "popularity": 1.38,
    "profile_path": null,
    "credit_id": "58b9471ec3a36866b70092f8",
    "department": "Costume & Make-Up",
    "job": "Key Makeup Artist"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1099633,
    "known_for_department": "Sound",
    "name": "Luke Gibleon",
    "original_name": "Luke Gibleon",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b972dd925141609e00a682",
    "department": "Sound",
    "job": "Sound Effects Editor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1127957,
    "known_for_department": "Visual Effects",
    "name": "Lincoln Kupchak",
    "original_name": "Lincoln Kupchak",
    "popularity": 0.964,
    "profile_path": null,
    "credit_id": "58b9491cc3a36866af0090f4",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1203712,
    "known_for_department": "Editing",
    "name": "Michael Nouryeh",
    "original_name": "Michael Nouryeh",
    "popularity": 0.98,
    "profile_path": null,
    "credit_id": "58b948b7925141606f0097e8",
    "department": "Crew",
    "job": "Visual Effects Editor"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1279727,
    "known_for_department": "Crew",
    "name": "Debbie Evans",
    "original_name": "Debbie Evans",
    "popularity": 10.72,
    "profile_path": "/eDLKuLGUsI2Wk5HYiq2n0DjQZ7C.jpg",
    "credit_id": "5ffe21b9223e20003eaea6ed",
    "department": "Crew",
    "job": "Stunts"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1319157,
    "known_for_department": "Costume & Make-Up",
    "name": "Hannah Gates",
    "original_name": "Hannah Gates",
    "popularity": 1.594,
    "profile_path": null,
    "credit_id": "58b94401925141606f00954b",
    "department": "Costume & Make-Up",
    "job": "Set Costumer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1319844,
    "known_for_department": "Costume & Make-Up",
    "name": "Lisa Lovaas",
    "original_name": "Lisa Lovaas",
    "popularity": 2.411,
    "profile_path": null,
    "credit_id": "58b9458b925141607b009635",
    "department": "Costume & Make-Up",
    "job": "Costume Design"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1322011,
    "known_for_department": "Costume & Make-Up",
    "name": "Jennifer Kamrath",
    "original_name": "Jennifer Kamrath",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94427925141606f009560",
    "department": "Costume & Make-Up",
    "job": "Set Costumer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1332515,
    "known_for_department": "Camera",
    "name": "Klemens Becker",
    "original_name": "Klemens Becker",
    "popularity": 1.901,
    "profile_path": null,
    "credit_id": "58b975d9925141609b00a978",
    "department": "Camera",
    "job": "Steadicam Operator"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1333932,
    "known_for_department": "Production",
    "name": "Elizabeth Coulon",
    "original_name": "Elizabeth Coulon",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "58b94187c3a3686630008812",
    "department": "Production",
    "job": "Local Casting"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1337243,
    "known_for_department": "Acting",
    "name": "Brooklyn Proctor",
    "original_name": "Brooklyn Proctor",
    "popularity": 1.015,
    "profile_path": null,
    "credit_id": "5ffe20c67d5db5003ec79fbb",
    "department": "Crew",
    "job": "Stunts"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1338372,
    "known_for_department": "Sound",
    "name": "Dan O'Connell",
    "original_name": "Dan O'Connell",
    "popularity": 2.171,
    "profile_path": "/4AjIlClDijH3iYgXygHEcVZtTzi.jpg",
    "credit_id": "58b9727c925141607300aa38",
    "department": "Sound",
    "job": "Foley"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1338976,
    "known_for_department": "Sound",
    "name": "Andy Nelson",
    "original_name": "Andy Nelson",
    "popularity": 2.982,
    "profile_path": null,
    "credit_id": "58b972fec3a36866a500a545",
    "department": "Sound",
    "job": "Sound Re-Recording Mixer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1339439,
    "known_for_department": "Art",
    "name": "Lindsay Good",
    "original_name": "Lindsay Good",
    "popularity": 1.624,
    "profile_path": null,
    "credit_id": "58b945ffc3a368668f00809b",
    "department": "Art",
    "job": "Art Department Coordinator"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1345635,
    "known_for_department": "Directing",
    "name": "Anna Rane",
    "original_name": "Anna Rane",
    "popularity": 1.38,
    "profile_path": null,
    "credit_id": "5ea727b8b7fbbd001b383eae",
    "department": "Directing",
    "job": "Script Supervisor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1367493,
    "known_for_department": "Sound",
    "name": "John T. Cucci",
    "original_name": "John T. Cucci",
    "popularity": 3.928,
    "profile_path": null,
    "credit_id": "58b9728e925141608400aeaf",
    "department": "Sound",
    "job": "Foley"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1367502,
    "known_for_department": "Lighting",
    "name": "Andy Ryan",
    "original_name": "Andy Ryan",
    "popularity": 1.176,
    "profile_path": null,
    "credit_id": "58b973bc925141609e00a6e6",
    "department": "Lighting",
    "job": "Gaffer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1368889,
    "known_for_department": "Costume & Make-Up",
    "name": "Jaclyn Tamizato",
    "original_name": "Jaclyn Tamizato",
    "popularity": 0.932,
    "profile_path": null,
    "credit_id": "58b943ad925141609e008f21",
    "department": "Costume & Make-Up",
    "job": "Key Costumer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1384375,
    "known_for_department": "Visual Effects",
    "name": "Max Leonard",
    "original_name": "Max Leonard",
    "popularity": 2.314,
    "profile_path": null,
    "credit_id": "58b94932925141606f00982d",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1389139,
    "known_for_department": "Camera",
    "name": "David James",
    "original_name": "David James",
    "popularity": 3.23,
    "profile_path": null,
    "credit_id": "5939c2879251411f250011e9",
    "department": "Camera",
    "job": "Still Photographer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1393372,
    "known_for_department": "Art",
    "name": "Chuck Stringer",
    "original_name": "Chuck Stringer",
    "popularity": 1.891,
    "profile_path": null,
    "credit_id": "58b94629c3a368664d009459",
    "department": "Art",
    "job": "Construction Coordinator"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1394750,
    "known_for_department": "Visual Effects",
    "name": "Thomas Nittmann",
    "original_name": "Thomas Nittmann",
    "popularity": 0.903,
    "profile_path": null,
    "credit_id": "58b94908925141609e009224",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1397725,
    "known_for_department": "Art",
    "name": "Lisa K. Sessions",
    "original_name": "Lisa K. Sessions",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94670925141606f0096a2",
    "department": "Art",
    "job": "Set Decoration"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1399477,
    "known_for_department": "Costume & Make-Up",
    "name": "Laura Wolford",
    "original_name": "Laura Wolford",
    "popularity": 1.38,
    "profile_path": null,
    "credit_id": "58b943649251416073009227",
    "department": "Costume & Make-Up",
    "job": "Costume Supervisor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1400088,
    "known_for_department": "Sound",
    "name": "Daniel Pinder",
    "original_name": "Daniel Pinder",
    "popularity": 2.965,
    "profile_path": null,
    "credit_id": "58b942ea92514160770095ed",
    "department": "Sound",
    "job": "Music Editor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1401720,
    "known_for_department": "Visual Effects",
    "name": "Erik Liles",
    "original_name": "Erik Liles",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b9498bc3a36866a5009080",
    "department": "Visual Effects",
    "job": "Visual Effects Supervisor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1403413,
    "known_for_department": "Camera",
    "name": "Joe Chess",
    "original_name": "Joe Chess",
    "popularity": 0.972,
    "profile_path": null,
    "credit_id": "58b97540925141608400b003",
    "department": "Camera",
    "job": "Camera Operator"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1403415,
    "known_for_department": "Camera",
    "name": "David B. Nowell",
    "original_name": "David B. Nowell",
    "popularity": 2.268,
    "profile_path": null,
    "credit_id": "58b974d5c3a368668f00964a",
    "department": "Camera",
    "job": "Aerial Director of Photography"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1404808,
    "known_for_department": "Costume & Make-Up",
    "name": "Leigh Ann Yandle",
    "original_name": "Leigh Ann Yandle",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "58b94708c3a368666b008824",
    "department": "Costume & Make-Up",
    "job": "Makeup Department Head"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1406894,
    "known_for_department": "Production",
    "name": "Sara Flamm",
    "original_name": "Sara Flamm",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea72439fdc1460022a2d084",
    "department": "Production",
    "job": "Unit Production Manager"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1410205,
    "known_for_department": "Directing",
    "name": "Beverly Winston",
    "original_name": "Beverly Winston",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea727c7d38b58002626dc9b",
    "department": "Directing",
    "job": "Script Supervisor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1411066,
    "known_for_department": "Costume & Make-Up",
    "name": "Sarah Monzani",
    "original_name": "Sarah Monzani",
    "popularity": 1.073,
    "profile_path": null,
    "credit_id": "58b94743925141609e009121",
    "department": "Costume & Make-Up",
    "job": "Makeup Artist"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1411271,
    "known_for_department": "Camera",
    "name": "Michael J. Walker",
    "original_name": "Michael J. Walker",
    "popularity": 0.828,
    "profile_path": null,
    "credit_id": "58b97552925141606b00b3cf",
    "department": "Camera",
    "job": "Camera Operator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1412722,
    "known_for_department": "Editing",
    "name": "Joe Ken",
    "original_name": "Joe Ken",
    "popularity": 0.652,
    "profile_path": null,
    "credit_id": "58b97720925141608400b146",
    "department": "Editing",
    "job": "Digital Intermediate"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1414151,
    "known_for_department": "Camera",
    "name": "Robert Foster",
    "original_name": "Robert Foster",
    "popularity": 1.96,
    "profile_path": null,
    "credit_id": "58b9758c925141606b00b3f4",
    "department": "Camera",
    "job": "Camera Operator"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1416155,
    "known_for_department": "Sound",
    "name": "James Bolt",
    "original_name": "James Bolt",
    "popularity": 1.468,
    "profile_path": null,
    "credit_id": "58b9731e925141606b00b29b",
    "department": "Sound",
    "job": "Sound Re-Recording Mixer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1423004,
    "known_for_department": "Sound",
    "name": "David Metzner",
    "original_name": "David Metzner",
    "popularity": 2.708,
    "profile_path": null,
    "credit_id": "58b94302c3a368668f007f0c",
    "department": "Sound",
    "job": "Music Editor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1425341,
    "known_for_department": "Lighting",
    "name": "Ferdinand Duplantier Jr.",
    "original_name": "Ferdinand Duplantier Jr.",
    "popularity": 0.694,
    "profile_path": null,
    "credit_id": "58b97402c3a36866af00a5d4",
    "department": "Lighting",
    "job": "Rigging Gaffer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1431552,
    "known_for_department": "Costume & Make-Up",
    "name": "Daina Daigle",
    "original_name": "Daina Daigle",
    "popularity": 0.84,
    "profile_path": null,
    "credit_id": "58b946af925141609b0091d3",
    "department": "Costume & Make-Up",
    "job": "Hair Department Head"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1434568,
    "known_for_department": "Costume & Make-Up",
    "name": "Molly Kamrath",
    "original_name": "Molly Kamrath",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94439c3a36866b7009126",
    "department": "Costume & Make-Up",
    "job": "Set Costumer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1437305,
    "known_for_department": "Camera",
    "name": "Michael Applebaum",
    "original_name": "Michael Applebaum",
    "popularity": 1.441,
    "profile_path": null,
    "credit_id": "58b97565925141606b00b3e2",
    "department": "Camera",
    "job": "Camera Operator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1440877,
    "known_for_department": "Visual Effects",
    "name": "Garry Elmendorf",
    "original_name": "Garry Elmendorf",
    "popularity": 2.687,
    "profile_path": null,
    "credit_id": "58b94814925141609e0091a9",
    "department": "Visual Effects",
    "job": "Special Effects Supervisor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1456041,
    "known_for_department": "Sound",
    "name": "Oleg Kulchytskyi",
    "original_name": "Oleg Kulchytskyi",
    "popularity": 1.652,
    "profile_path": null,
    "credit_id": "58b97332c3a3686686009c8b",
    "department": "Sound",
    "job": "Sound Re-Recording Mixer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1456719,
    "known_for_department": "Crew",
    "name": "Ashley Nicole Hudson",
    "original_name": "Ashley Nicole Hudson",
    "popularity": 2.759,
    "profile_path": "/bwuzR1Zsx17volrLgYYPAthuFI1.jpg",
    "credit_id": "5ffe2161a4f03c003a37eb79",
    "department": "Crew",
    "job": "Stunt Driver"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1457949,
    "known_for_department": "Art",
    "name": "Bryan Felty",
    "original_name": "Bryan Felty",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "58b945d3c3a36866a5008e50",
    "department": "Art",
    "job": "Art Direction"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1463284,
    "known_for_department": "Directing",
    "name": "Dan Gutierrez",
    "original_name": "Dan Gutierrez",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea726befdc146001ba2d0c3",
    "department": "Directing",
    "job": "Additional Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1463400,
    "known_for_department": "Sound",
    "name": "Chris Welcker",
    "original_name": "Chris Welcker",
    "popularity": 1.102,
    "profile_path": null,
    "credit_id": "58b971f9c3a3686686009bf6",
    "department": "Sound",
    "job": "Boom Operator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1463424,
    "known_for_department": "Crew",
    "name": "Donald Myers",
    "original_name": "Donald Myers",
    "popularity": 1.336,
    "profile_path": null,
    "credit_id": "58b947dfc3a368664d009571",
    "department": "Visual Effects",
    "job": "Animation"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1463796,
    "known_for_department": "Costume & Make-Up",
    "name": "Kelly Herdus",
    "original_name": "Kelly Herdus",
    "popularity": 0.847,
    "profile_path": null,
    "credit_id": "58b94415c3a368666b008660",
    "department": "Costume & Make-Up",
    "job": "Set Costumer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1463809,
    "known_for_department": "Editing",
    "name": "Thomas Kuo",
    "original_name": "Thomas Kuo",
    "popularity": 0.972,
    "profile_path": null,
    "credit_id": "58b97739925141608400b153",
    "department": "Editing",
    "job": "Digital Intermediate"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1466663,
    "known_for_department": "Costume & Make-Up",
    "name": "Heather Leat",
    "original_name": "Heather Leat",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94351c3a36866af008dc8",
    "department": "Costume & Make-Up",
    "job": "Costume Supervisor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1484989,
    "known_for_department": "Costume & Make-Up",
    "name": "Benj Gibicsar",
    "original_name": "Benj Gibicsar",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b9437f925141607b00951a",
    "department": "Costume & Make-Up",
    "job": "Ager/Dyer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1511170,
    "known_for_department": "Acting",
    "name": "Megan Le",
    "original_name": "Megan Le",
    "popularity": 4.741,
    "profile_path": "/5WIQmIMgEqSo3w69TiDoUKehae8.jpg",
    "credit_id": "5ffe21466a300b003b84c57c",
    "department": "Crew",
    "job": "Utility Stunts"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1528429,
    "known_for_department": "Production",
    "name": "Max Keene",
    "original_name": "Max Keene",
    "popularity": 1.889,
    "profile_path": null,
    "credit_id": "5ea726ffcc96830023adf072",
    "department": "Directing",
    "job": "First Assistant Director"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1533054,
    "known_for_department": "Art",
    "name": "Kris Peck",
    "original_name": "Kris Peck",
    "popularity": 2.239,
    "profile_path": null,
    "credit_id": "58b9463fc3a36866af008f4f",
    "department": "Art",
    "job": "Property Master"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1548389,
    "known_for_department": "Sound",
    "name": "Adam Horley",
    "original_name": "Adam Horley",
    "popularity": 1.566,
    "profile_path": null,
    "credit_id": "58b971d5c3a3686686009be5",
    "department": "Sound",
    "job": "ADR Supervisor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1548460,
    "known_for_department": "Costume & Make-Up",
    "name": "Chrissy Callan",
    "original_name": "Chrissy Callan",
    "popularity": 1.143,
    "profile_path": null,
    "credit_id": "58b94399c3a36866a5008d17",
    "department": "Costume & Make-Up",
    "job": "Key Costumer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1556313,
    "known_for_department": "Crew",
    "name": "Wade Eastwood",
    "original_name": "Wade Eastwood",
    "popularity": 3.319,
    "profile_path": null,
    "credit_id": "5ea72510bb070d001ca6eede",
    "department": "Directing",
    "job": "Second Unit Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1558090,
    "known_for_department": "Visual Effects",
    "name": "Karina Benesh",
    "original_name": "Karina Benesh",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "58b94835c3a368668600882a",
    "department": "Visual Effects",
    "job": "Visual Effects Coordinator"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1564250,
    "known_for_department": "Sound",
    "name": "James Ashwill",
    "original_name": "James Ashwill",
    "popularity": 2.422,
    "profile_path": null,
    "credit_id": "58b972a5925141606b00b267",
    "department": "Sound",
    "job": "Foley"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1573031,
    "known_for_department": "Visual Effects",
    "name": "Ryan Andersen",
    "original_name": "Ryan Andersen",
    "popularity": 0.972,
    "profile_path": null,
    "credit_id": "58b948c9c3a3686630008c14",
    "department": "Crew",
    "job": "Visual Effects Editor"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1599066,
    "known_for_department": "Production",
    "name": "Judith Sunga",
    "original_name": "Judith Sunga",
    "popularity": 0.687,
    "profile_path": null,
    "credit_id": "58b9415e925141607700952c",
    "department": "Production",
    "job": "Casting Associate"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1634737,
    "known_for_department": "Production",
    "name": "Jason Pomerantz",
    "original_name": "Jason Pomerantz",
    "popularity": 1.255,
    "profile_path": null,
    "credit_id": "5ea724c3426ae80021480487",
    "department": "Production",
    "job": "Production Director"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1637825,
    "known_for_department": "Production",
    "name": "James Grant",
    "original_name": "James Grant",
    "popularity": 2.423,
    "profile_path": null,
    "credit_id": "609846aaa3d027003c40637f",
    "department": "Production",
    "job": "Unit Production Manager"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1644256,
    "known_for_department": "Visual Effects",
    "name": "Anwei Chen",
    "original_name": "Anwei Chen",
    "popularity": 1.052,
    "profile_path": null,
    "credit_id": "58b948a692514160840098a0",
    "department": "Visual Effects",
    "job": "Visual Effects Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1646230,
    "known_for_department": "Crew",
    "name": "Harry Lu",
    "original_name": "Harry Lu",
    "popularity": 0.996,
    "profile_path": null,
    "credit_id": "58b94214c3a3686630008858",
    "department": "Crew",
    "job": "Armorer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1671024,
    "known_for_department": "Crew",
    "name": "Jessica Williams",
    "original_name": "Jessica Williams",
    "popularity": 1.38,
    "profile_path": "/4cmQLiPkuUes2aVh7c1SvvKpl93.jpg",
    "credit_id": "5ffe1efa7d5db5003dc7a0c8",
    "department": "Crew",
    "job": "Stunts"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1729038,
    "known_for_department": "Lighting",
    "name": "Jaim O'Neil",
    "original_name": "Jaim O'Neil",
    "popularity": 1.751,
    "profile_path": null,
    "credit_id": "58b973d2925141607b00ad9f",
    "department": "Lighting",
    "job": "Gaffer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1729039,
    "known_for_department": "Lighting",
    "name": "Max Patrucco",
    "original_name": "Max Patrucco",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b9744ac3a368663000a1bd",
    "department": "Lighting",
    "job": "Rigging Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1738103,
    "known_for_department": "Camera",
    "name": "Jared Slater",
    "original_name": "Jared Slater",
    "popularity": 1.417,
    "profile_path": null,
    "credit_id": "58b974ed925141607700b08e",
    "department": "Camera",
    "job": "Aerial Camera Technician"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1738653,
    "known_for_department": "Visual Effects",
    "name": "Molly Pabian",
    "original_name": "Molly Pabian",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94946c3a36866b700941d",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1757620,
    "known_for_department": "Production",
    "name": "Amelia Chen Miley",
    "original_name": "Amelia Chen Miley",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94172c3a36866af008cda",
    "department": "Production",
    "job": "Casting Associate"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1757626,
    "known_for_department": "Camera",
    "name": "Joe Cassano",
    "original_name": "Joe Cassano",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b976b2925141609e00a87a",
    "department": "Camera",
    "job": "Dolly Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1759758,
    "known_for_department": "Camera",
    "name": "Peter Graf",
    "original_name": "Peter Graf",
    "popularity": 1.135,
    "profile_path": null,
    "credit_id": "58b97515925141607300ab9a",
    "department": "Camera",
    "job": "Aerial Camera Technician"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768939,
    "known_for_department": "Crew",
    "name": "Cory Wilde",
    "original_name": "Cory Wilde",
    "popularity": 0.823,
    "profile_path": null,
    "credit_id": "58b9423ec3a36866860084cf",
    "department": "Crew",
    "job": "Armorer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768941,
    "known_for_department": "Crew",
    "name": "Sid Yost",
    "original_name": "Sid Yost",
    "popularity": 0.84,
    "profile_path": null,
    "credit_id": "58b942ccc3a368666b0085c0",
    "department": "Crew",
    "job": "Animal Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768942,
    "known_for_department": "Costume & Make-Up",
    "name": "Dionne Simoneaux",
    "original_name": "Dionne Simoneaux",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b9433c9251416077009618",
    "department": "Costume & Make-Up",
    "job": "Costume Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768944,
    "known_for_department": "Costume & Make-Up",
    "name": "Emma Kate Wood",
    "original_name": "Emma Kate Wood",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b943bf925141607b009543",
    "department": "Costume & Make-Up",
    "job": "Key Costumer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768945,
    "known_for_department": "Costume & Make-Up",
    "name": "Jade Brandt",
    "original_name": "Jade Brandt",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b943d8c3a36866af008e18",
    "department": "Costume & Make-Up",
    "job": "Seamstress"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768948,
    "known_for_department": "Costume & Make-Up",
    "name": "Meagan Herrera",
    "original_name": "Meagan Herrera",
    "popularity": 1.4,
    "profile_path": null,
    "credit_id": "58b9469ec3a3686630008ad4",
    "department": "Costume & Make-Up",
    "job": "Hair Department Head"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768950,
    "known_for_department": "Costume & Make-Up",
    "name": "Alice Moore",
    "original_name": "Alice Moore",
    "popularity": 1.96,
    "profile_path": null,
    "credit_id": "58b946cf9251416084009776",
    "department": "Costume & Make-Up",
    "job": "Hairstylist"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768952,
    "known_for_department": "Visual Effects",
    "name": "Tyler Johnson",
    "original_name": "Tyler Johnson",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b94860925141609e0091d7",
    "department": "Visual Effects",
    "job": "Visual Effects Coordinator"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1768953,
    "known_for_department": "Visual Effects",
    "name": "Rob Krauzig",
    "original_name": "Rob Krauzig",
    "popularity": 0.98,
    "profile_path": null,
    "credit_id": "58b9487cc3a36866af009099",
    "department": "Visual Effects",
    "job": "Visual Effects Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768954,
    "known_for_department": "Visual Effects",
    "name": "Emmi Nakagawa",
    "original_name": "Emmi Nakagawa",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b948909251416077009948",
    "department": "Visual Effects",
    "job": "Visual Effects Coordinator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768955,
    "known_for_department": "Visual Effects",
    "name": "Brian Jochum",
    "original_name": "Brian Jochum",
    "popularity": 1.788,
    "profile_path": null,
    "credit_id": "58b948e4c3a368668f008219",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768956,
    "known_for_department": "Visual Effects",
    "name": "Jacklyn Ramirez",
    "original_name": "Jacklyn Ramirez",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b948f8c3a368668f008228",
    "department": "Visual Effects",
    "job": "Visual Effects Producer"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1768957,
    "known_for_department": "Art",
    "name": "Alan Munro",
    "original_name": "Alan Munro",
    "popularity": 1.414,
    "profile_path": null,
    "credit_id": "58b94977925141608400991e",
    "department": "Visual Effects",
    "job": "Visual Effects Supervisor"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769079,
    "known_for_department": "Sound",
    "name": "Joel Reidy",
    "original_name": "Joel Reidy",
    "popularity": 1.054,
    "profile_path": null,
    "credit_id": "58b971e8c3a36866af00a4ea",
    "department": "Sound",
    "job": "Boom Operator"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769087,
    "known_for_department": "Lighting",
    "name": "Bridget Brown",
    "original_name": "Bridget Brown",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b97472925141606b00b340",
    "department": "Lighting",
    "job": "Rigging Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769089,
    "known_for_department": "Lighting",
    "name": "Donald Roth",
    "original_name": "Donald Roth",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b97482c3a36866b700aa7a",
    "department": "Lighting",
    "job": "Rigging Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769091,
    "known_for_department": "Lighting",
    "name": "Jim Wayer",
    "original_name": "Jim Wayer",
    "popularity": 0.728,
    "profile_path": null,
    "credit_id": "58b974a0925141606b00b35b",
    "department": "Lighting",
    "job": "Rigging Grip"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1769093,
    "known_for_department": "Camera",
    "name": "Chiabella James",
    "original_name": "Chiabella James",
    "popularity": 1.708,
    "profile_path": null,
    "credit_id": "58b975fac3a368663000a2ad",
    "department": "Camera",
    "job": "Still Photographer"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1769095,
    "known_for_department": "Camera",
    "name": "Joe Sökmen",
    "original_name": "Joe Sökmen",
    "popularity": 1.128,
    "profile_path": null,
    "credit_id": "58b97666925141606f00b01d",
    "department": "Camera",
    "job": "Dolly Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769096,
    "known_for_department": "Camera",
    "name": "Richard T. Hoover",
    "original_name": "Richard T. Hoover",
    "popularity": 0.694,
    "profile_path": null,
    "credit_id": "58b97682925141607700b16e",
    "department": "Camera",
    "job": "Dolly Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769097,
    "known_for_department": "Camera",
    "name": "Jeremy Wren",
    "original_name": "Jeremy Wren",
    "popularity": 2.353,
    "profile_path": null,
    "credit_id": "58b97699c3a368664d00ae63",
    "department": "Camera",
    "job": "Dolly Grip"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1769098,
    "known_for_department": "Camera",
    "name": "Maxwell Beard",
    "original_name": "Maxwell Beard",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "58b976c2c3a36866af00a747",
    "department": "Camera",
    "job": "Dolly Grip"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1769100,
    "known_for_department": "Editing",
    "name": "Christopher Rucinski",
    "original_name": "Christopher Rucinski",
    "popularity": 1.744,
    "profile_path": null,
    "credit_id": "58b97757925141606f00b08d",
    "department": "Editing",
    "job": "First Assistant Editor"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1804880,
    "known_for_department": "Directing",
    "name": "Conte Mark Matal",
    "original_name": "Conte Mark Matal",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea7272dbb070d0023a6f015",
    "department": "Directing",
    "job": "Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1815730,
    "known_for_department": "Directing",
    "name": "Daniel Hillary",
    "original_name": "Daniel Hillary",
    "popularity": 0.988,
    "profile_path": null,
    "credit_id": "5ea726e1fdc1460022a2d242",
    "department": "Directing",
    "job": "Second Unit Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1836152,
    "known_for_department": "Directing",
    "name": "Pablo Gambetta",
    "original_name": "Pablo Gambetta",
    "popularity": 1.134,
    "profile_path": null,
    "credit_id": "5ea7269eb7fbbd001c383c3a",
    "department": "Directing",
    "job": "Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1860869,
    "known_for_department": "Directing",
    "name": "Hirotatsu Taniguchi",
    "original_name": "Hirotatsu Taniguchi",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea7277eb7fbbd001d384481",
    "department": "Directing",
    "job": "Additional Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1966209,
    "known_for_department": "Crew",
    "name": "Deven MacNair",
    "original_name": "Deven MacNair",
    "popularity": 2.941,
    "profile_path": "/oTyjAPM9yHEbVM3pyOCjurmXkOi.jpg",
    "credit_id": "652f10f50cb33516f5cb5da8",
    "department": "Crew",
    "job": "Stunt Driver"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2057498,
    "known_for_department": "Crew",
    "name": "Kelly Phelan",
    "original_name": "Kelly Phelan",
    "popularity": 2.385,
    "profile_path": "/hAEmElRV33zHpp7Zm98zLiQg1wl.jpg",
    "credit_id": "5ffe20f4ad59b50040f9c3d8",
    "department": "Crew",
    "job": "Stunt Double"
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2090975,
    "known_for_department": "Crew",
    "name": "Daniel Rogers",
    "original_name": "Daniel Rogers",
    "popularity": 3.431,
    "profile_path": null,
    "credit_id": "5b565f9e9251416dc60262cd",
    "department": "Crew",
    "job": "Health and Safety"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2176985,
    "known_for_department": "Directing",
    "name": "Zack Earl Edwards",
    "original_name": "Zack Earl Edwards",
    "popularity": 0.98,
    "profile_path": null,
    "credit_id": "5ea72536b76cbb001ce3c20a",
    "department": "Directing",
    "job": "Additional Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2188076,
    "known_for_department": "Crew",
    "name": "Lydia Hand",
    "original_name": "Lydia Hand",
    "popularity": 1.272,
    "profile_path": "/fEoRGiJIgBdJ58ILHtFML5kIUNY.jpg",
    "credit_id": "5ffe217dfea0d7003d8c7adb",
    "department": "Crew",
    "job": "Stunts"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2224824,
    "known_for_department": "Crew",
    "name": "Elizabeth Classen",
    "original_name": "Elizabeth Classen",
    "popularity": 0.63,
    "profile_path": "/ka2HyR2xKrcO3bFba90OSTDgRg1.jpg",
    "credit_id": "5ffe21d5678259004099c9fd",
    "department": "Crew",
    "job": "Stunts"
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2277896,
    "known_for_department": "Crew",
    "name": "Lucy Cork",
    "original_name": "Lucy Cork",
    "popularity": 1.148,
    "profile_path": "/litpdpX4LfUyB4OM9q25pUIkPT3.jpg",
    "credit_id": "5ffe21ebd20c87003f045f18",
    "department": "Crew",
    "job": "Stunt Double"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2446389,
    "known_for_department": "Directing",
    "name": "Derek Hall",
    "original_name": "Derek Hall",
    "popularity": 1.96,
    "profile_path": null,
    "credit_id": "5ea726d02d1e40002482adb0",
    "department": "Directing",
    "job": "Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2484537,
    "known_for_department": "Directing",
    "name": "Ben LeDoux",
    "original_name": "Ben LeDoux",
    "popularity": 2.688,
    "profile_path": null,
    "credit_id": "5ea7271c514c4a00268aa299",
    "department": "Directing",
    "job": "Second Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2488166,
    "known_for_department": "Directing",
    "name": "Dixon McPhillips",
    "original_name": "Dixon McPhillips",
    "popularity": 2.174,
    "profile_path": null,
    "credit_id": "5ea7273fcc9683001cadf58e",
    "department": "Directing",
    "job": "Additional Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2615927,
    "known_for_department": "Directing",
    "name": "Mikey Eberle",
    "original_name": "Mikey Eberle",
    "popularity": 1.176,
    "profile_path": null,
    "credit_id": "5ea725202d1e40001f82a4bf",
    "department": "Directing",
    "job": "Second Assistant Director"
  },
  {
    "adult": false,
    "gender": 0,
    "id": 2616802,
    "known_for_department": "Directing",
    "name": "Neil Morgan",
    "original_name": "Neil Morgan",
    "popularity": 0.6,
    "profile_path": null,
    "credit_id": "5ea72754cc9683001cadf5a5",
    "department": "Directing",
    "job": "Assistant Director"
  }
]
});
});

router.get('/movie/:movie_id/release_dates', function(req, res, next) {
  res.json({
"id": 343611,
"results": [
  {
    "iso_3166_1": "AU",
    "release_dates": [
      {
        "certification": "M",
        "descriptors": [],
        "iso_639_1": "en",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "BR",
    "release_dates": [
      {
        "certification": "14",
        "descriptors": [],
        "iso_639_1": "pt",
        "note": "",
        "release_date": "2016-11-24T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "CA",
    "release_dates": [
      {
        "certification": "PG",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "CH",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "fr",
        "note": "",
        "release_date": "2016-10-19T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "CN",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "",
        "note": "Shanghai",
        "release_date": "2016-10-12T00:00:00.000Z",
        "type": 1
      }
    ]
  },
  {
    "iso_3166_1": "DE",
    "release_dates": [
      {
        "certification": "16",
        "descriptors": [],
        "iso_639_1": "de",
        "note": "",
        "release_date": "2016-11-10T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "DK",
    "release_dates": [
      {
        "certification": "11",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "ES",
    "release_dates": [
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "es",
        "note": "",
        "release_date": "2016-11-11T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "FR",
    "release_dates": [
      {
        "certification": "U",
        "descriptors": [],
        "iso_639_1": "fr",
        "note": "",
        "release_date": "2016-10-19T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "GB",
    "release_dates": [
      {
        "certification": "12A",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      },
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "en",
        "note": "DVD",
        "release_date": "2017-02-27T00:00:00.000Z",
        "type": 5
      }
    ]
  },
  {
    "iso_3166_1": "GR",
    "release_dates": [
      {
        "certification": "Κ-15",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-11-10T00:00:00.000Z",
        "type": 3
      },
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "",
        "note": "DVD, Blu-ray",
        "release_date": "2017-02-24T00:00:00.000Z",
        "type": 5
      }
    ]
  },
  {
    "iso_3166_1": "HK",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "IE",
    "release_dates": [
      {
        "certification": "12A",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "IN",
    "release_dates": [
      {
        "certification": "UA",
        "descriptors": [],
        "iso_639_1": "en",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "IT",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "KR",
    "release_dates": [
      {
        "certification": "15",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-11-30T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "KZ",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "LT",
    "release_dates": [
      {
        "certification": "N-13",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "NL",
    "release_dates": [
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      },
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "",
        "note": "DVD",
        "release_date": "2017-03-22T00:00:00.000Z",
        "type": 5
      },
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "",
        "note": "Veronica",
        "release_date": "2018-10-31T00:00:00.000Z",
        "type": 6
      }
    ]
  },
  {
    "iso_3166_1": "PL",
    "release_dates": [
      {
        "certification": "od 15 lat",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "PT",
    "release_dates": [
      {
        "certification": "M/12",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "RU",
    "release_dates": [
      {
        "certification": "16+",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 1
      }
    ]
  },
  {
    "iso_3166_1": "SE",
    "release_dates": [
      {
        "certification": "15",
        "descriptors": [],
        "iso_639_1": "en",
        "note": "",
        "release_date": "2016-10-19T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "SK",
    "release_dates": [
      {
        "certification": "12",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "TW",
    "release_dates": [
      {
        "certification": "保護級",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "UA",
    "release_dates": [
      {
        "certification": "",
        "descriptors": [],
        "iso_639_1": "uk",
        "note": "",
        "release_date": "2016-10-20T00:00:00.000Z",
        "type": 3
      }
    ]
  },
  {
    "iso_3166_1": "US",
    "release_dates": [
      {
        "certification": "PG-13",
        "descriptors": [],
        "iso_639_1": "",
        "note": "",
        "release_date": "2016-10-21T00:00:00.000Z",
        "type": 3
      },
      {
        "certification": "PG-13",
        "descriptors": [],
        "iso_639_1": "en",
        "note": "",
        "release_date": "2017-01-31T00:00:00.000Z",
        "type": 5
      }
    ]
  }
]
});
});

router.get('/movie/:movie_id/recommendations', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/6iufs7HJMrmBJgMjSj0J4P27D0K.jpg",
    "id": 956947,
    "title": "Good Life",
    "original_language": "en",
    "original_title": "Good Life",
    "overview": "Olive Pappadopoulous, 35, an Oral Hygienist, flees Cape Town for Greece to try outwit a broken heart, but is faced with the local villagers hostility and is befriended by a 7-year-old refugee who teaches her how to live “The Good Life.”",
    "poster_path": "/p4q9wQeGtJKz50TUj6r1laLROOm.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      35
    ],
    "popularity": 2.755,
    "release_date": "2021-09-09",
    "video": false,
    "vote_average": 7,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/mvUAo9ACgmLpS4Ofc2IwD4n7WCt.jpg",
    "id": 17431,
    "title": "Moon",
    "original_language": "en",
    "original_title": "Moon",
    "overview": "With only three weeks left in his three year contract, Sam Bell is getting anxious to finally return to Earth. He is the only occupant of a Moon-based manufacturing facility along with his computer and assistant, GERTY. When he has an accident however, he wakens to find that he is not alone.",
    "poster_path": "/35IU0Mq0zFsN1mYwDGts5mKc77n.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      18
    ],
    "popularity": 21.64,
    "release_date": "2009-06-12",
    "video": false,
    "vote_average": 7.57,
    "vote_count": 5282
  },
  {
    "adult": false,
    "backdrop_path": "/bmAzESah8IUNRQX5MqeyUrhE5Pr.jpg",
    "id": 2666,
    "title": "Dark City",
    "original_language": "en",
    "original_title": "Dark City",
    "overview": "A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish world with no sun and run by beings with telekinetic powers who seek the souls of humans.",
    "poster_path": "/6gDMQwnWPQfk0IqnkZHkrNSPQY4.jpg",
    "media_type": "movie",
    "genre_ids": [
      9648,
      878
    ],
    "popularity": 29.794,
    "release_date": "1998-02-27",
    "video": false,
    "vote_average": 7.329,
    "vote_count": 2556
  },
  {
    "adult": false,
    "backdrop_path": "/tCkcvg7iSAAyNGJZlei3MDMfaz1.jpg",
    "id": 686,
    "title": "Contact",
    "original_language": "en",
    "original_title": "Contact",
    "overview": "A radio astronomer receives the first extraterrestrial radio signal ever picked up on Earth. As the world powers scramble to decipher the message and decide upon a course of action, she must make some difficult decisions between her beliefs, the truth, and reality.",
    "poster_path": "/bCpMIywuNZeWt3i5UMLEIc0VSwM.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      878,
      9648
    ],
    "popularity": 40.762,
    "release_date": "1997-07-11",
    "video": false,
    "vote_average": 7.42,
    "vote_count": 4082
  },
  {
    "adult": false,
    "backdrop_path": "/hPsCR1ny6GnctJkWqeJwihTDD7T.jpg",
    "id": 782,
    "title": "Gattaca",
    "original_language": "en",
    "original_title": "Gattaca",
    "overview": "In a future society in the era of indefinite eugenics, humans are set on a life course depending on their DNA. Young Vincent Freeman is born with a condition that would prevent him from space travel, yet is determined to infiltrate the GATTACA space program.",
    "poster_path": "/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
    "media_type": "movie",
    "genre_ids": [
      53,
      878,
      9648,
      10749
    ],
    "popularity": 35.232,
    "release_date": "1997-09-07",
    "video": false,
    "vote_average": 7.552,
    "vote_count": 5838
  },
  {
    "adult": false,
    "backdrop_path": "/veUl0QT8swshQ9Dz0fQ1k6ZkthD.jpg",
    "id": 170,
    "title": "28 Days Later",
    "original_language": "en",
    "original_title": "28 Days Later",
    "overview": "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
    "poster_path": "/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
    "media_type": "movie",
    "genre_ids": [
      27,
      53,
      878
    ],
    "popularity": 33.391,
    "release_date": "2002-10-31",
    "video": false,
    "vote_average": 7.205,
    "vote_count": 6173
  },
  {
    "adult": false,
    "backdrop_path": "/csGprKcRxt7SDpsrKiwxpgLdEsx.jpg",
    "id": 16320,
    "title": "Serenity",
    "original_language": "en",
    "original_title": "Serenity",
    "overview": "When the renegade crew of Serenity agrees to hide a fugitive on their ship, they find themselves in an action-packed battle between the relentless military might of a totalitarian regime who will destroy anything – or anyone – to get the girl back and the bloodthirsty creatures who roam the uncharted areas of space. But... the greatest danger of all may be on their ship.",
    "poster_path": "/ckDo5vnRKehJ2qu8U95c7QcvGUm.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      28,
      12,
      53
    ],
    "popularity": 28.356,
    "release_date": "2005-09-25",
    "video": false,
    "vote_average": 7.37,
    "vote_count": 3236
  },
  {
    "adult": false,
    "backdrop_path": "/2M5V8VcK02o4R5cxe7Ew1ltaxKr.jpg",
    "id": 19898,
    "title": "Pandorum",
    "original_language": "en",
    "original_title": "Pandorum",
    "overview": "Two crew members wake up on an abandoned spacecraft with no idea who they are, how long they've been asleep, or what their mission is. The two soon discover they're actually not alone – and the reality of their situation is more horrifying than they could have imagined.",
    "poster_path": "/tgnKTUsKJ6kM0oqiLmPNePgQ8Sw.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      27,
      9648,
      878,
      53
    ],
    "popularity": 21.607,
    "release_date": "2009-09-08",
    "video": false,
    "vote_average": 6.553,
    "vote_count": 2178
  },
  {
    "adult": false,
    "backdrop_path": "/huZZBPyYUnMPCnrAFyJhnwYsQx9.jpg",
    "id": 7299,
    "title": "Equilibrium",
    "original_language": "en",
    "original_title": "Equilibrium",
    "overview": "In a dystopian future, a totalitarian regime maintains peace by subduing the populace with a drug, and displays of emotion are punishable by death. A man in charge of enforcing the law rises to overthrow the system.",
    "poster_path": "/eW3YrxOh3rd6PnRgMSftYoflvfe.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      878,
      53
    ],
    "popularity": 31.904,
    "release_date": "2002-12-06",
    "video": false,
    "vote_average": 7.033,
    "vote_count": 4193
  },
  {
    "adult": false,
    "backdrop_path": "/j0BB9DoqobGvRqKVeAveP70hWi2.jpg",
    "id": 563,
    "title": "Starship Troopers",
    "original_language": "en",
    "original_title": "Starship Troopers",
    "overview": "Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as \"the Bugs\".",
    "poster_path": "/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg",
    "media_type": "movie",
    "genre_ids": [
      12,
      28,
      53,
      878
    ],
    "popularity": 34.881,
    "release_date": "1997-11-07",
    "video": false,
    "vote_average": 7.04,
    "vote_count": 4452
  },
  {
    "adult": false,
    "backdrop_path": "/dGQudfWpmNbt5SOlQb8uubux3ZT.jpg",
    "id": 8413,
    "title": "Event Horizon",
    "original_language": "en",
    "original_title": "Event Horizon",
    "overview": "In 2047, a group of astronauts are sent to investigate and salvage the starship Event Horizon which disappeared mysteriously 7 years before on its maiden voyage. However, it soon becomes evident that something sinister resides in its corridors, and that the horrors that befell the Event Horizon's previous journey are still present.",
    "poster_path": "/6b5Kux470PpQkgBdRqE9WtUpYfE.jpg",
    "media_type": "movie",
    "genre_ids": [
      27,
      878,
      9648
    ],
    "popularity": 31.468,
    "release_date": "1997-08-15",
    "video": false,
    "vote_average": 6.536,
    "vote_count": 2557
  },
  {
    "adult": false,
    "backdrop_path": "/7cW7zHpDdl9fgaRXI5qAglV247P.jpg",
    "id": 9693,
    "title": "Children of Men",
    "original_language": "en",
    "original_title": "Children of Men",
    "overview": "In 2027, in a chaotic world in which humans can no longer procreate, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea, where her child's birth may help scientists save the future of humankind.",
    "poster_path": "/k9IAS4TehZFcKi4HVByxZNPfqex.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      28,
      53,
      878
    ],
    "popularity": 39.345,
    "release_date": "2006-09-22",
    "video": false,
    "vote_average": 7.606,
    "vote_count": 6571
  },
  {
    "adult": false,
    "backdrop_path": "/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
    "id": 17654,
    "title": "District 9",
    "original_language": "en",
    "original_title": "District 9",
    "overview": "Thirty years ago, aliens arrive on Earth. Not to conquer or give aid, but to find refuge from their dying planet. Separated from humans in a South African area called District 9, the aliens are managed by Multi-National United, which is unconcerned with the aliens' welfare but will do anything to master their advanced technology. When a company field agent contracts a mysterious virus that begins to alter his DNA, there is only one place he can hide: District 9.",
    "poster_path": "/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
    "media_type": "movie",
    "genre_ids": [
      878
    ],
    "popularity": 39.844,
    "release_date": "2009-08-05",
    "video": false,
    "vote_average": 7.426,
    "vote_count": 8817
  },
  {
    "adult": false,
    "backdrop_path": "/aPB3jFuMSoNFk2uDZ5tX5CIGaSX.jpg",
    "id": 2756,
    "title": "The Abyss",
    "original_language": "en",
    "original_title": "The Abyss",
    "overview": "A civilian oil rig crew is recruited to conduct a search and rescue effort when a nuclear submarine mysteriously sinks. One diver soon finds himself on a spectacular odyssey 25,000 feet below the ocean's surface where he confronts a mysterious force that has the power to change the world or destroy it.",
    "poster_path": "/nCOdcQ4HrVBug0MsqvfVuMCijmx.jpg",
    "media_type": "movie",
    "genre_ids": [
      12,
      28,
      53,
      878
    ],
    "popularity": 33.642,
    "release_date": "1989-08-09",
    "video": false,
    "vote_average": 7.346,
    "vote_count": 2635
  },
  {
    "adult": false,
    "backdrop_path": "/hO97RyNjBIMfzfFpUjNhsm4zImh.jpg",
    "id": 70981,
    "title": "Prometheus",
    "original_language": "en",
    "original_title": "Prometheus",
    "overview": "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    "poster_path": "/m7nZCtHJyDLncBUarfM5h5mrppx.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      12,
      9648
    ],
    "popularity": 63.794,
    "release_date": "2012-05-30",
    "video": false,
    "vote_average": 6.538,
    "vote_count": 11361
  },
  {
    "adult": false,
    "backdrop_path": "/n7p6UTAZtkeoHkwCO42BEQaMFJY.jpg",
    "id": 644,
    "title": "A.I. Artificial Intelligence",
    "original_language": "en",
    "original_title": "A.I. Artificial Intelligence",
    "overview": "David, a robotic boy—the first of his kind programmed to love—is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David.",
    "poster_path": "/8MZSGX5JORoO72EfuAEcejH5yHn.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      878,
      12
    ],
    "popularity": 35.071,
    "release_date": "2001-06-29",
    "video": false,
    "vote_average": 7.041,
    "vote_count": 5754
  },
  {
    "adult": false,
    "backdrop_path": "/u9ZLyLvqHY5VDjn0Rs4LKAklsAV.jpg",
    "id": 840,
    "title": "Close Encounters of the Third Kind",
    "original_language": "en",
    "original_title": "Close Encounters of the Third Kind",
    "overview": "After an encounter with UFOs, an electricity linesman feels undeniably drawn to an isolated area in the wilderness where something spectacular is about to happen.",
    "poster_path": "/4zfedS25uMAhgm6YQhc9bhKHbLl.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      18
    ],
    "popularity": 24.341,
    "release_date": "1977-12-14",
    "video": false,
    "vote_average": 7.358,
    "vote_count": 3875
  },
  {
    "adult": false,
    "backdrop_path": "/9RNJ0pKYA8EQiMa0lFZ68gzeElH.jpg",
    "id": 1381,
    "title": "The Fountain",
    "original_language": "en",
    "original_title": "The Fountain",
    "overview": "Spanning over one thousand years, and three parallel stories, The Fountain is a story of love, death, spirituality, and the fragility of our existence in this world.",
    "poster_path": "/kwh3mq2HNvf4AHAZSNyJsdVx0uJ.jpg",
    "media_type": "movie",
    "genre_ids": [
      18,
      12,
      878,
      10749
    ],
    "popularity": 19.204,
    "release_date": "2006-11-22",
    "video": false,
    "vote_average": 6.953,
    "vote_count": 2561
  },
  {
    "adult": false,
    "backdrop_path": "/yxlGeAK6BrbKng8VSJSKTpSXSsL.jpg",
    "id": 14337,
    "title": "Primer",
    "original_language": "en",
    "original_title": "Primer",
    "overview": "Friends and fledgling entrepreneurs invent a device in their garage which reduces the apparent mass of any object placed inside it, but they discover that it has some highly unexpected capabilities - ones that could enable them to do and to have seemingly anything they want. Taking advantage of this unique opportunity is the first challenge they face. Dealing with the consequences is the next.",
    "poster_path": "/xEoq2WmDzpzxhkHEsmOYOg6BPg6.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      18,
      53
    ],
    "popularity": 20.927,
    "release_date": "2004-10-08",
    "video": false,
    "vote_average": 6.786,
    "vote_count": 1986
  },
  {
    "adult": false,
    "backdrop_path": "/PN7yjmQdmG0J62jsrtmrPi8ezK.jpg",
    "id": 1562,
    "title": "28 Weeks Later",
    "original_language": "en",
    "original_title": "28 Weeks Later",
    "overview": "The inhabitants of the British Isles have lost their battle against the onslaught of disease, as the deadly rage virus has killed every citizen there. Six months later, a group of Americans dare to set foot on the isles, convinced the danger has come and gone. But it soon becomes all too clear that the scourge continues to live, waiting to pounce on its next victims.",
    "poster_path": "/ja8nzgtzhJq0vtX3BJcnbceIxCF.jpg",
    "media_type": "movie",
    "genre_ids": [
      27,
      53,
      878
    ],
    "popularity": 27.845,
    "release_date": "2007-04-26",
    "video": false,
    "vote_average": 6.584,
    "vote_count": 3936
  },
  {
    "adult": false,
    "backdrop_path": "/cCjzu6OZIUDWowadzexCHNBTmjH.jpg",
    "id": 19959,
    "title": "Surrogates",
    "original_language": "en",
    "original_title": "Surrogates",
    "overview": "Set in a futuristic world where humans live in isolation and interact through surrogate robots, a cop is forced to leave his home for the first time in years in order to investigate the murders of others' surrogates.",
    "poster_path": "/3SDUkTsYPDZZQotR2ggxjIH0zsW.jpg",
    "media_type": "movie",
    "genre_ids": [
      878,
      28,
      53
    ],
    "popularity": 27.838,
    "release_date": "2009-09-24",
    "video": false,
    "vote_average": 6.099,
    "vote_count": 2940
  }
],
"total_pages": 2,
"total_results": 40
});
});

router.get('/person/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "gender": 1,
    "id": 3194176,
    "known_for_department": "Acting",
    "name": "Angeli Khang",
    "original_name": "Angeli Khang",
    "popularity": 216.121,
    "profile_path": "/7vrTWF8PxQogF6o9ORZprYQoDOr.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/27bkw4o1zhjQAM4WIFQPohiph1X.jpg",
        "id": 931599,
        "title": "Silip Sa Apoy",
        "original_language": "tl",
        "original_title": "Silip Sa Apoy",
        "overview": "Take a peek at the life of an unhappy housewife who finds passionate love from her neighbor and how their affair brings them closer to fire.",
        "poster_path": "/9grG4PVppBWqKs2hrKMEr6j3RWS.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          53
        ],
        "popularity": 21.596,
        "release_date": "2022-01-28",
        "video": false,
        "vote_average": 6,
        "vote_count": 27
      },
      {
        "adult": false,
        "backdrop_path": "/ru5zAV1Ij6bQGedBkczqhiBmjzn.jpg",
        "id": 1029446,
        "title": "Selina's Gold",
        "original_language": "tl",
        "original_title": "Selina's Gold",
        "overview": "Selina's father sells her to Tiago who makes her a sex slave. With the help of Domeng, Tiago's blind slave, she plans their way out of this living hell.",
        "poster_path": "/4a0X2GKDmhhp1U2FUKtKY6uNQHL.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 15.976,
        "release_date": "2022-10-28",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 25
      },
      {
        "adult": false,
        "backdrop_path": "/ougkufYSiruP8jrEHQanXN7DxRv.jpg",
        "id": 893694,
        "title": "Eva",
        "original_language": "tl",
        "original_title": "Eva",
        "overview": "When Eva gets involved in a steamy threesome with a houseboy and her lady boss, she realizes she has to choose only one between them.",
        "poster_path": "/bXZ3j3kQgCRZj7KD4Q5F9m5ABaQ.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          10749
        ],
        "popularity": 32.231,
        "release_date": "2021-12-24",
        "video": false,
        "vote_average": 5.7,
        "vote_count": 10
      }
    ]
  },
  {
    "adult": false,
    "gender": 0,
    "id": 3234630,
    "known_for_department": "Acting",
    "name": "Sangeeth Shobhan",
    "original_name": "Sangeeth Shobhan",
    "popularity": 173.275,
    "profile_path": "/7Vox31bH7XmgPNJzMKGa4uGyjW8.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/jBnnkkXRZ0pV3Tw31Z2ALO638wA.jpg",
        "id": 1187075,
        "title": "MAD",
        "original_language": "te",
        "original_title": "MAD",
        "overview": "Set in an engineering college and revolves around the antics of the students there, primarily the boys, who get a kick out of torturing the hostel warden.",
        "poster_path": "/nDpOmgBfQZwOpFBcgokQGqd74r1.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          10749,
          18
        ],
        "popularity": 7.088,
        "release_date": "2023-10-06",
        "video": false,
        "vote_average": 7,
        "vote_count": 4
      },
      {
        "adult": false,
        "backdrop_path": "/1jof3bGVg67HLmvRHfTzqb2IODO.jpg",
        "id": 138179,
        "name": "Oka Chinna Family Story",
        "original_language": "te",
        "original_name": "ఒక చిన్న Family Story",
        "overview": "Mahesh and his mother embark on an adventurous journey filled with hilarious situations as they try to make quick money to repay a huge loan.",
        "poster_path": "/u1Tq2Qqb1oUJ6WSzVJqWk03LzEl.jpg",
        "media_type": "tv",
        "genre_ids": [
          35,
          10751
        ],
        "popularity": 10.204,
        "first_air_date": "2021-11-19",
        "vote_average": 7.5,
        "vote_count": 2,
        "origin_country": [
          "IN"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/d7jfcyPb5ZncLyhPFNjpuIeeZ1y.jpg",
        "id": 1119091,
        "title": "Prema Vimanam",
        "original_language": "te",
        "original_title": "ప్రేమ విమానం",
        "overview": "Two kids with a dream to board a flight cross paths with a young couple who must urgently catch the flight to start a new life.",
        "poster_path": "/9eljOANAd6HafUDdmp3xnmkpnt8.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          35
        ],
        "popularity": 4.019,
        "release_date": "2023-10-13",
        "video": false,
        "vote_average": 7,
        "vote_count": 1
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 974169,
    "known_for_department": "Acting",
    "name": "Jenna Ortega",
    "original_name": "Jenna Ortega",
    "popularity": 160.716,
    "profile_path": "/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
        "id": 119051,
        "name": "Wednesday",
        "original_language": "en",
        "original_name": "Wednesday",
        "overview": "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.",
        "poster_path": "/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
        "media_type": "tv",
        "genre_ids": [
          10765,
          9648,
          35
        ],
        "popularity": 504.76,
        "first_air_date": "2022-11-23",
        "vote_average": 8.533,
        "vote_count": 7670,
        "origin_country": [
          "US"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
        "id": 646385,
        "title": "Scream",
        "original_language": "en",
        "original_title": "Scream",
        "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
        "poster_path": "/971Kqs1q4nuSc9arn1QAuKYbfxy.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          9648,
          53
        ],
        "popularity": 85.615,
        "release_date": "2022-01-12",
        "video": false,
        "vote_average": 6.699,
        "vote_count": 2868
      },
      {
        "adult": false,
        "backdrop_path": "/70Rm9ItxKuEKN8iu6rNjfwAYUCJ.jpg",
        "id": 760104,
        "title": "X",
        "original_language": "en",
        "original_title": "X",
        "overview": "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
        "poster_path": "/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          53,
          9648
        ],
        "popularity": 115.685,
        "release_date": "2022-03-17",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 2383
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 976,
    "known_for_department": "Acting",
    "name": "Jason Statham",
    "original_name": "Jason Statham",
    "popularity": 148.571,
    "profile_path": "/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/ysKahAEPP8h6MInuLjr0xuZOTjh.jpg",
        "id": 107,
        "title": "Snatch",
        "original_language": "en",
        "original_title": "Snatch",
        "overview": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
        "poster_path": "/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
        "media_type": "movie",
        "genre_ids": [
          80,
          35
        ],
        "popularity": 37.936,
        "release_date": "2000-09-01",
        "video": false,
        "vote_average": 7.805,
        "vote_count": 8397
      },
      {
        "adult": false,
        "backdrop_path": "/6bAjogOzrB9xbmIaY3BRpZZgn5Q.jpg",
        "id": 345940,
        "title": "The Meg",
        "original_language": "en",
        "original_title": "The Meg",
        "overview": "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
        "poster_path": "/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          878,
          27
        ],
        "popularity": 95.027,
        "release_date": "2018-08-09",
        "video": false,
        "vote_average": 6.254,
        "vote_count": 7138
      },
      {
        "adult": false,
        "backdrop_path": "/kWt1OcPgwO1ssu57wgTKmq38JYw.jpg",
        "id": 4108,
        "title": "The Transporter",
        "original_language": "en",
        "original_title": "The Transporter",
        "overview": "Former Special Forces officer, Frank Martin will deliver anything to anyone for the right price, and his no-questions-asked policy puts him in high demand. But when he realizes his latest cargo is alive, it sets in motion a dangerous chain of events. The bound and gagged Lai is being smuggled to France by a shady American businessman, and Frank works to save her as his own illegal activities are uncovered by a French detective.",
        "poster_path": "/v3QIFUWgtVN4wejVuDZowuyJ20W.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          80,
          53
        ],
        "popularity": 33.97,
        "release_date": "2002-10-02",
        "video": false,
        "vote_average": 6.696,
        "vote_count": 4958
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2359226,
    "known_for_department": "Acting",
    "name": "Aya Asahina",
    "original_name": "Aya Asahina",
    "popularity": 145.426,
    "profile_path": "/zF3la0KvayUV3uACYPiBgCRIQcI.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg",
        "id": 110316,
        "name": "Alice in Borderland",
        "original_language": "ja",
        "original_name": "今際の国のアリス",
        "overview": "With his two friends, a video-game-obsessed young man finds himself in a strange version of Tokyo where they must compete in dangerous games to win.",
        "poster_path": "/20mOwAAPwZ1vLQkw0fvuQHiG7bO.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          9648,
          10759
        ],
        "popularity": 446.627,
        "first_air_date": "2020-12-10",
        "vote_average": 8.184,
        "vote_count": 1700,
        "origin_country": [
          "JP"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/d8BfGEG89KIinlIYKYVinihaysx.jpg",
        "id": 677602,
        "title": "Grand Blue",
        "original_language": "ja",
        "original_title": "ぐらんぶる",
        "overview": "Iori’s only dream is to go to college on a remote island—but when he gets roped into the school’s debaucherous, alcohol-indulgent diving club his hope for a sparkling campus life is thrown into chaos.",
        "poster_path": "/iZGnDnstcdorT0zJRpWzSQlMNz6.jpg",
        "media_type": "movie",
        "genre_ids": [
          35
        ],
        "popularity": 9.416,
        "release_date": "2020-08-07",
        "video": false,
        "vote_average": 6,
        "vote_count": 12
      },
      {
        "adult": false,
        "backdrop_path": "/iNpbnWI2vQWGdPC9Pbt1RnV71R5.jpg",
        "id": 91414,
        "name": "Runway 24",
        "original_language": "ja",
        "original_name": "ランウェイ 24",
        "overview": "Inoue Momoko admires her late father, who was a pilot. She begins work as a co-pilot at a low-cost airline. Under Captain Shinkai Kohei’s instructions, who knew her father, Inoue Momoko works hard to become a captain and her boyfriend Umino Daisuke supports her dream too.\n\nOne day, Inoue Momoko has a problem with a passenger complaining about the limit for carry-on baggage. At that time, Katsuki Tetsuya looks at the situation.",
        "poster_path": "/2j2p3MF2GpSMHAFaYTgIRQeVOHa.jpg",
        "media_type": "tv",
        "genre_ids": [
          10751,
          18
        ],
        "popularity": 8.935,
        "first_air_date": "2019-07-06",
        "vote_average": 6.7,
        "vote_count": 3,
        "origin_country": [
          "JP"
        ]
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1524100,
    "known_for_department": "Acting",
    "name": "Tom Blyth",
    "original_name": "Tom Blyth",
    "popularity": 145.193,
    "profile_path": "/f79K22TIISJz4WILONN7gOCfETs.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
        "id": 695721,
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          878
        ],
        "popularity": 734.432,
        "release_date": "2023-11-15",
        "video": false,
        "vote_average": 7.375,
        "vote_count": 177
      },
      {
        "adult": false,
        "backdrop_path": "/wk00DBQ4hmAInKSDw4s7eX3jCAj.jpg",
        "id": 138971,
        "name": "Billy the Kid",
        "original_language": "en",
        "original_name": "Billy the Kid",
        "overview": "An epic romantic adventure series based on the life of famous American outlaw Billy the Kid — from his humble Irish roots, to his early days as a cowboy and gunslinger in the American frontier, to his pivotal role in the Lincoln County War and beyond.",
        "poster_path": "/3JyuHbdVIhBoArxEtifLrzodUEM.jpg",
        "media_type": "tv",
        "genre_ids": [
          37,
          18
        ],
        "popularity": 201.443,
        "first_air_date": "2022-04-24",
        "vote_average": 7.4,
        "vote_count": 81,
        "origin_country": [
          "US"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/h7AKqgIh86HDgJIzENeR2ng1Knn.jpg",
        "id": 20662,
        "title": "Robin Hood",
        "original_language": "en",
        "original_title": "Robin Hood",
        "overview": "When soldier Robin happens upon the dying Robert of Loxley, he promises to return the man's sword to his family in Nottingham. There, he assumes Robert's identity; romances his widow, Marion; and draws the ire of the town's sheriff and King John's henchman, Godfrey.",
        "poster_path": "/9NS5QGOfck24yL3bZqWeW06PgPC.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          18
        ],
        "popularity": 28.453,
        "release_date": "2010-05-12",
        "video": false,
        "vote_average": 6.388,
        "vote_count": 4300
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 4068148,
    "known_for_department": "Acting",
    "name": "Madeleine Yuna Voyles",
    "original_name": "Madeleine Yuna Voyles",
    "popularity": 137.633,
    "profile_path": "/mLKvNuCJSgyK0WdLd4ogO81sOO1.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
        "id": 670292,
        "title": "The Creator",
        "original_language": "en",
        "original_title": "The Creator",
        "overview": "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
        "poster_path": "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          28,
          53
        ],
        "popularity": 1595.817,
        "release_date": "2023-09-27",
        "video": false,
        "vote_average": 7.213,
        "vote_count": 834
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 2283930,
    "known_for_department": "Acting",
    "name": "Piper Rubio",
    "original_name": "Piper Rubio",
    "popularity": 137.035,
    "profile_path": "/x8tDKAgxMKwaNJSd9RB75EIJnOD.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
        "id": 507089,
        "title": "Five Nights at Freddy's",
        "original_language": "en",
        "original_title": "Five Nights at Freddy's",
        "overview": "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        "poster_path": "/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          9648
        ],
        "popularity": 1617.893,
        "release_date": "2023-10-25",
        "video": false,
        "vote_average": 7.946,
        "vote_count": 2320
      },
      {
        "adult": false,
        "backdrop_path": "/itLnzp64tAr6beI5LDo3mdkExZA.jpg",
        "id": 737793,
        "title": "Holly & Ivy",
        "original_language": "en",
        "original_title": "Holly & Ivy",
        "overview": "When Melody’s neighbor, Nina, learns that her illness has returned, Melody promises to keep Nina’s kids, Holly & Ivy, together. To adopt the children, she must renovate her new fixer-upper, which she does with the help of contractor, Adam.",
        "poster_path": "/9BTjwJbLrFfgsJyEmq5zLTQEPCA.jpg",
        "media_type": "movie",
        "genre_ids": [
          10749,
          10770
        ],
        "popularity": 6.47,
        "release_date": "2020-11-01",
        "video": false,
        "vote_average": 7.273,
        "vote_count": 22
      },
      {
        "adult": false,
        "backdrop_path": "/ea88TCklx7FNBxbtWdH9ioMohaM.jpg",
        "id": 87917,
        "name": "For All Mankind",
        "original_language": "en",
        "original_name": "For All Mankind",
        "overview": "Explore an aspirational world where NASA and the space program remained a priority and a focal point of our hopes and dreams as told through the lives of NASA astronauts, engineers, and their families.",
        "poster_path": "/mNXT1QjRCEasXGH3rHCTQm0A0Su.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10765,
          10768
        ],
        "popularity": 261.013,
        "first_air_date": "2019-11-01",
        "vote_average": 7.731,
        "vote_count": 535,
        "origin_country": [
          "US"
        ]
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 27972,
    "known_for_department": "Acting",
    "name": "Josh Hutcherson",
    "original_name": "Josh Hutcherson",
    "popularity": 131.972,
    "profile_path": "/npowygg8rH7uJ4v7rAoDMsHBhNq.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/yDbyVT8tTOgXUrUXNkHEUqbxb1K.jpg",
        "id": 70160,
        "title": "The Hunger Games",
        "original_language": "en",
        "original_title": "The Hunger Games",
        "overview": "Every year in the ruins of what was once North America, the nation of Panem forces each of its twelve districts to send a teenage boy and girl to compete in the Hunger Games.  Part twisted entertainment, part government intimidation tactic, the Hunger Games are a nationally televised event in which “Tributes” must fight with one another until one survivor remains.  Pitted against highly-trained Tributes who have prepared for these Games their entire lives, Katniss is forced to rely upon her sharp instincts as well as the mentorship of drunken former victor Haymitch Abernathy.  If she’s ever to return home to District 12, Katniss must make impossible choices in the arena that weigh survival against humanity and life against love. The world will be watching.",
        "poster_path": "/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          12,
          14
        ],
        "popularity": 125.641,
        "release_date": "2012-03-12",
        "video": false,
        "vote_average": 7.196,
        "vote_count": 20797
      },
      {
        "adult": false,
        "backdrop_path": "/dIi0De3LzEVSQHEUlh0Q2zUpmeW.jpg",
        "id": 101299,
        "title": "The Hunger Games: Catching Fire",
        "original_language": "en",
        "original_title": "The Hunger Games: Catching Fire",
        "overview": "Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a \"Victor's Tour\" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.",
        "poster_path": "/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
        "media_type": "movie",
        "genre_ids": [
          12,
          28,
          878
        ],
        "popularity": 175.539,
        "release_date": "2013-11-15",
        "video": false,
        "vote_average": 7.421,
        "vote_count": 16320
      },
      {
        "adult": false,
        "backdrop_path": "/tFlSDoWQsAZ2qjICKzfP5Yw6zM5.jpg",
        "id": 131631,
        "title": "The Hunger Games: Mockingjay - Part 1",
        "original_language": "en",
        "original_title": "The Hunger Games: Mockingjay - Part 1",
        "overview": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
        "poster_path": "/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          12,
          53
        ],
        "popularity": 269.303,
        "release_date": "2014-11-19",
        "video": false,
        "vote_average": 6.8,
        "vote_count": 14851
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 18897,
    "known_for_department": "Acting",
    "name": "Jackie Chan",
    "original_name": "Jackie Chan",
    "popularity": 126.516,
    "profile_path": "/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/r4yFYBEcV247B9VXi1307fIhVqN.jpg",
        "id": 2109,
        "title": "Rush Hour",
        "original_language": "en",
        "original_title": "Rush Hour",
        "overview": "When Hong Kong Inspector Lee is summoned to Los Angeles to investigate a kidnapping, the FBI doesn't want any outside help and assigns cocky LAPD Detective James Carter to distract Lee from the case. Not content to watch the action from the sidelines, Lee and Carter form an unlikely partnership and investigate the case themselves.",
        "poster_path": "/we7wOLVFgxhzLzUt0qNe50xdIQZ.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          35,
          80
        ],
        "popularity": 47.164,
        "release_date": "1998-09-18",
        "video": false,
        "vote_average": 7.02,
        "vote_count": 4441
      },
      {
        "adult": false,
        "backdrop_path": "/zzFTSEAZcLGSbGipQVflSNUqpij.jpg",
        "id": 5175,
        "title": "Rush Hour 2",
        "original_language": "en",
        "original_title": "Rush Hour 2",
        "overview": "It's vacation time for Carter as he finds himself alongside Lee in Hong Kong wishing for more excitement. While Carter wants to party and meet the ladies, Lee is out to track down a Triad gang lord who may be responsible for killing two men at the American Embassy. Things get complicated as the pair stumble onto a counterfeiting plot. The boys are soon up to their necks in fist fights and life-threatening situations. A trip back to the U.S. may provide the answers about the bombing, the counterfeiting, and the true allegiance of sexy customs agent Isabella.",
        "poster_path": "/aBQf2vMiCINeVC9v6BGVYKXurTh.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          35,
          80
        ],
        "popularity": 48.557,
        "release_date": "2001-08-03",
        "video": false,
        "vote_average": 6.718,
        "vote_count": 3732
      },
      {
        "adult": false,
        "backdrop_path": "/ozsLB1HRCN6ZAmJN89pWtoiAwnb.jpg",
        "id": 5174,
        "title": "Rush Hour 3",
        "original_language": "en",
        "original_title": "Rush Hour 3",
        "overview": "After a botched assassination attempt, the mismatched duo finds themselves in Paris, struggling to retrieve a precious list of names, as the murderous crime syndicate's henchmen try their best to stop them. Once more, Lee and Carter must fight their way through dangerous gangsters; however, this time, the past has come back to haunt Lee. Will the boys get the job done once and for all?",
        "poster_path": "/iXsbAIZezI0gh0dnOnBbeFuG3AO.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          35,
          80
        ],
        "popularity": 45.886,
        "release_date": "2007-08-08",
        "video": false,
        "vote_average": 6.436,
        "vote_count": 2951
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 6161,
    "known_for_department": "Acting",
    "name": "Jennifer Connelly",
    "original_name": "Jennifer Connelly",
    "popularity": 112.96,
    "profile_path": "/p17ymzw1sb9eo2SOp88jnwyryan.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/zbpZOYrRCxEF8lFT5JC8XodEggC.jpg",
        "id": 453,
        "title": "A Beautiful Mind",
        "original_language": "en",
        "original_title": "A Beautiful Mind",
        "overview": "John Nash is a brilliant but asocial mathematician fighting schizophrenia. After he accepts secret work in cryptography, his life takes a turn for the nightmarish.",
        "poster_path": "/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          10749
        ],
        "popularity": 98.278,
        "release_date": "2001-12-14",
        "video": false,
        "vote_average": 7.854,
        "vote_count": 9555
      },
      {
        "adult": false,
        "backdrop_path": "/s5R6kTMfOxkGit96A8lqcDL4uVk.jpg",
        "id": 641,
        "title": "Requiem for a Dream",
        "original_language": "en",
        "original_title": "Requiem for a Dream",
        "overview": "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
        "poster_path": "/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
        "media_type": "movie",
        "genre_ids": [
          80,
          18
        ],
        "popularity": 15.577,
        "release_date": "2000-10-06",
        "video": false,
        "vote_average": 8.026,
        "vote_count": 9270
      },
      {
        "adult": false,
        "backdrop_path": "/5z75Q6nqgwgYfpMB9fVHQcw9gMz.jpg",
        "id": 86834,
        "title": "Noah",
        "original_language": "en",
        "original_title": "Noah",
        "overview": "A man who suffers visions of an apocalyptic deluge takes measures to protect his family from the coming flood.",
        "poster_path": "/trtD17IqSWV9Nbn4OILztc9GuCX.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          12
        ],
        "popularity": 34.183,
        "release_date": "2014-03-07",
        "video": false,
        "vote_average": 5.658,
        "vote_count": 5889
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 192,
    "known_for_department": "Acting",
    "name": "Morgan Freeman",
    "original_name": "Morgan Freeman",
    "popularity": 110.82,
    "profile_path": "/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/dYjZ27hDw2QFaEIfzbNGwW0IkV9.jpg",
        "id": 807,
        "title": "Se7en",
        "original_language": "en",
        "original_title": "Se7en",
        "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
        "poster_path": "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        "media_type": "movie",
        "genre_ids": [
          80,
          9648,
          53
        ],
        "popularity": 66.349,
        "release_date": "1995-09-22",
        "video": false,
        "vote_average": 8.37,
        "vote_count": 19629
      },
      {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "id": 278,
        "title": "The Shawshank Redemption",
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          80
        ],
        "popularity": 129.413,
        "release_date": "1994-09-23",
        "video": false,
        "vote_average": 8.704,
        "vote_count": 24944
      },
      {
        "adult": false,
        "backdrop_path": "/ozVwXlfxqNsariipatGwa5px3Pm.jpg",
        "id": 240832,
        "title": "Lucy",
        "original_language": "en",
        "original_title": "Lucy",
        "overview": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
        "poster_path": "/dhjyfcwEoW6jJ4Q7DpZTp6E58GA.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          878
        ],
        "popularity": 46.281,
        "release_date": "2014-07-25",
        "video": false,
        "vote_average": 6.441,
        "vote_count": 15266
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 556356,
    "known_for_department": "Acting",
    "name": "Vanessa Kirby",
    "original_name": "Vanessa Kirby",
    "popularity": 105.875,
    "profile_path": "/5fbvIkZ02RdcXfZHUUk4cQ9kILK.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
        "id": 384018,
        "title": "Fast & Furious Presents: Hobbs & Shaw",
        "original_language": "en",
        "original_title": "Fast & Furious Presents: Hobbs & Shaw",
        "overview": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
        "poster_path": "/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          35
        ],
        "popularity": 85.331,
        "release_date": "2019-08-01",
        "video": false,
        "vote_average": 6.869,
        "vote_count": 6682
      },
      {
        "adult": false,
        "backdrop_path": "/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg",
        "id": 296096,
        "title": "Me Before You",
        "original_language": "en",
        "original_title": "Me Before You",
        "overview": "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
        "poster_path": "/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          10749
        ],
        "popularity": 143.946,
        "release_date": "2016-06-01",
        "video": false,
        "vote_average": 7.917,
        "vote_count": 11515
      },
      {
        "adult": false,
        "backdrop_path": "/izNpxVcjKbF9BiYF4GVqxCOfewL.jpg",
        "id": 641662,
        "title": "Pieces of a Woman",
        "original_language": "en",
        "original_title": "Pieces of a Woman",
        "overview": "When a young mother's home birth ends in unfathomable tragedy, she begins a year-long odyssey of mourning that fractures relationships with loved ones in this deeply personal story of a woman learning to live alongside her loss.",
        "poster_path": "/OgUfLlhfBFx5BPK6LzBWFvBW1w.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 16.793,
        "release_date": "2020-12-30",
        "video": false,
        "vote_average": 7.044,
        "vote_count": 1125
      }
    ]
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1613836,
    "known_for_department": "Acting",
    "name": "Rowoon",
    "original_name": "Rowoon",
    "popularity": 103.969,
    "profile_path": "/sOTYcl8SGmtxpWq0EQKJhX8dztr.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/2lQ1PwGFZKM9EakCw1j4NShEuuj.jpg",
        "id": 136369,
        "name": "Tomorrow",
        "original_language": "ko",
        "original_name": "내일",
        "overview": "Made half-human and half-spirit by accident, a young man is employed by a company of grim reapers in the underworld to carry out special missions.",
        "poster_path": "/7pOC2Wr6aavn6OPkFJ9YqhCV5hW.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          10765,
          10759
        ],
        "popularity": 31.098,
        "first_air_date": "2022-04-01",
        "vote_average": 8.591,
        "vote_count": 154,
        "origin_country": [
          "KR"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/4r7scgI5aUrShN0YzriAatWd15e.jpg",
        "id": 129478,
        "name": "The King's Affection",
        "original_language": "ko",
        "original_name": "연모",
        "overview": "When the crown prince is killed, his twin sister assumes the throne while trying to keep her identity and affection for her first love a royal secret.",
        "poster_path": "/mcfX0IqWibPhF5H4i2Q5gUlwwxk.jpg",
        "media_type": "tv",
        "genre_ids": [
          18
        ],
        "popularity": 115.396,
        "first_air_date": "2021-10-11",
        "vote_average": 8.306,
        "vote_count": 237,
        "origin_country": [
          "KR"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/hkCgcNx5khFuKroiVKFRRHTEpHg.jpg",
        "id": 93657,
        "name": "Extraordinary You",
        "original_language": "ko",
        "original_name": "어쩌다 발견한 하루",
        "overview": "When a high-school girl finds that she is merely a character from a comic book whose destiny is decided by the writer, she decides to change the plot to suit her desires and find the love of her life.",
        "poster_path": "/vse6Aq2BGz1CI2pa1JbOmyjXM37.jpg",
        "media_type": "tv",
        "genre_ids": [
          10765,
          35,
          10759
        ],
        "popularity": 27.908,
        "first_air_date": "2019-10-02",
        "vote_average": 8.5,
        "vote_count": 127,
        "origin_country": [
          "KR"
        ]
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1373737,
    "known_for_department": "Acting",
    "name": "Florence Pugh",
    "original_name": "Florence Pugh",
    "popularity": 101.976,
    "profile_path": "/ogoAeJyLzam5m3JvBFg6vwI8p0I.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/aAM3cQmYGjjLQ24m0F0RWfjKQ57.jpg",
        "id": 530385,
        "title": "Midsommar",
        "original_language": "en",
        "original_title": "Midsommar",
        "overview": "Several friends travel to Sweden to study as anthropologists a summer festival that is held every ninety years in the remote hometown of one of them. What begins as a dream vacation in a place where the sun never sets, gradually turns into a dark nightmare as the mysterious inhabitants invite them to participate in their disturbing festive activities.",
        "poster_path": "/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
        "media_type": "movie",
        "genre_ids": [
          27,
          18,
          9648
        ],
        "popularity": 56.551,
        "release_date": "2019-07-03",
        "video": false,
        "vote_average": 7.163,
        "vote_count": 6327
      },
      {
        "adult": false,
        "backdrop_path": "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
        "id": 497698,
        "title": "Black Widow",
        "original_language": "en",
        "original_title": "Black Widow",
        "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
        "poster_path": "/kwB7d51AIcyzPOBOHLCEZJkmPhQ.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          878
        ],
        "popularity": 86.583,
        "release_date": "2021-07-07",
        "video": false,
        "vote_average": 7.293,
        "vote_count": 9413
      },
      {
        "adult": false,
        "backdrop_path": "/lqxxwTRk0l7CubY6JkJdhnwJEkn.jpg",
        "id": 331482,
        "title": "Little Women",
        "original_language": "en",
        "original_title": "Little Women",
        "overview": "Four sisters come of age in America in the aftermath of the Civil War.",
        "poster_path": "/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          10749
        ],
        "popularity": 43.79,
        "release_date": "2019-12-25",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 5776
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 224513,
    "known_for_department": "Acting",
    "name": "Ana de Armas",
    "original_name": "Ana de Armas",
    "popularity": 99.142,
    "profile_path": "/3vxvsmYLTf4jnr163SUlBIw51ee.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/uKbX1ha7KWyTecvpPpRCB3iFfj3.jpg",
        "id": 335984,
        "title": "Blade Runner 2049",
        "original_language": "en",
        "original_title": "Blade Runner 2049",
        "overview": "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        "poster_path": "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        "media_type": "movie",
        "genre_ids": [
          878,
          18
        ],
        "popularity": 130.004,
        "release_date": "2017-10-04",
        "video": false,
        "vote_average": 7.548,
        "vote_count": 12509
      },
      {
        "adult": false,
        "backdrop_path": "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
        "id": 546554,
        "title": "Knives Out",
        "original_language": "en",
        "original_title": "Knives Out",
        "overview": "When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.",
        "poster_path": "/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          80,
          9648
        ],
        "popularity": 89.004,
        "release_date": "2019-11-27",
        "video": false,
        "vote_average": 7.845,
        "vote_count": 11306
      },
      {
        "adult": false,
        "backdrop_path": "/3Mnbw4gOYz5BNZB9PhZ2cyBSQum.jpg",
        "id": 308266,
        "title": "War Dogs",
        "original_language": "en",
        "original_title": "War Dogs",
        "overview": "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
        "poster_path": "/uH9qGH5XS1iZXCSb3tgu40dxQoh.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          80,
          18
        ],
        "popularity": 28.794,
        "release_date": "2016-08-18",
        "video": false,
        "vote_average": 6.904,
        "vote_count": 4551
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 115440,
    "known_for_department": "Acting",
    "name": "Sydney Sweeney",
    "original_name": "Sydney Sweeney",
    "popularity": 98.976,
    "profile_path": "/i3JIobJSDErUPwSU1phaO8R1T0q.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/oKt4J3TFjWirVwBqoHyIvv5IImd.jpg",
        "id": 85552,
        "name": "Euphoria",
        "original_language": "en",
        "original_name": "Euphoria",
        "overview": "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
        "poster_path": "/3Q0hd3heuWwDWpwcDkhQOA6TYWI.jpg",
        "media_type": "tv",
        "genre_ids": [
          18,
          80
        ],
        "popularity": 241.277,
        "first_air_date": "2019-06-16",
        "vote_average": 8.3,
        "vote_count": 9096,
        "origin_country": [
          "US"
        ]
      },
      {
        "adult": false,
        "backdrop_path": "/3rwszCm4XyBtIWSjbUbgNwJOidu.jpg",
        "id": 645710,
        "title": "The Voyeurs",
        "original_language": "en",
        "original_title": "The Voyeurs",
        "overview": "When Pippa and Thomas move into their dream apartment, they notice that their windows look directly into the apartment opposite – inviting them to witness the volatile relationship of the attractive couple across the street. But what starts as a simple curiosity turns into full-blown obsession with increasingly dangerous consequences.",
        "poster_path": "/8Y4XOIWhpOvSOEn8XrxbkH9yAXO.jpg",
        "media_type": "movie",
        "genre_ids": [
          53
        ],
        "popularity": 29.316,
        "release_date": "2021-08-25",
        "video": false,
        "vote_average": 6.661,
        "vote_count": 707
      },
      {
        "adult": false,
        "backdrop_path": "/oRiUKwDpcqDdoLwPoA4FIRh3hqY.jpg",
        "id": 466272,
        "title": "Once Upon a Time… in Hollywood",
        "original_language": "en",
        "original_title": "Once Upon a Time… in Hollywood",
        "overview": "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
        "poster_path": "/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          18,
          53
        ],
        "popularity": 71.978,
        "release_date": "2019-07-24",
        "video": false,
        "vote_average": 7.44,
        "vote_count": 12368
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 3904236,
    "known_for_department": "Acting",
    "name": "Azi Acosta",
    "original_name": "Azi Acosta",
    "popularity": 96.318,
    "profile_path": "/aB5zZ1O0O7GZPCki7wQv6PxHEMo.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/ru5zAV1Ij6bQGedBkczqhiBmjzn.jpg",
        "id": 1029446,
        "title": "Selina's Gold",
        "original_language": "tl",
        "original_title": "Selina's Gold",
        "overview": "Selina's father sells her to Tiago who makes her a sex slave. With the help of Domeng, Tiago's blind slave, she plans their way out of this living hell.",
        "poster_path": "/4a0X2GKDmhhp1U2FUKtKY6uNQHL.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 15.976,
        "release_date": "2022-10-28",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 25
      },
      {
        "adult": false,
        "backdrop_path": "/2xbuun5NQ1exyvDhxJyXPX2GBsw.jpg",
        "id": 1041898,
        "title": "Pamasahe",
        "original_language": "tl",
        "original_title": "Pamasahe",
        "overview": "A penniless mother, with her infant child, takes on a journey by land and sea to find her husband in Manila. But this trip won't be free for she has to use her body to get to her destination.",
        "poster_path": "/6spqXV5kgNkZBIwjuZkxIx8flfQ.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 9.023,
        "release_date": "2022-12-09",
        "video": false,
        "vote_average": 6.367,
        "vote_count": 15
      },
      {
        "adult": false,
        "backdrop_path": "/kd9eLNjJUPRuvO1gBXgMyq5XBS2.jpg",
        "id": 1103856,
        "title": "Sex Games",
        "original_language": "tl",
        "original_title": "Sex Games",
        "overview": "A rich couple often spices up their sexual relationship by doing their so-called Sex Games. But when they meet a new set of \"playmates\"- a conservative couple, their game becomes more challenging.",
        "poster_path": "/sRrIKxj9aehQKio2oN1C4fMgtV6.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 38.667,
        "release_date": "2023-04-28",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 4
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 3371806,
    "known_for_department": "Acting",
    "name": "Robb Guinto",
    "original_name": "Robb Guinto",
    "popularity": 95.489,
    "profile_path": "/gYs7kSFwr89BOHG2rxEOet17C2y.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/Aonu1gc194UVVmag8krCqfeBrM6.jpg",
        "id": 949977,
        "title": "X-Deal 2",
        "original_language": "tl",
        "original_title": "X-Deal 2",
        "overview": "In an island, a young couple, Emily and Peter, offers a sex swap with fellow guest Olivia, a hot lesbian. What starts as a mutually-beneficial deal turns rough and tumble when Peter demands more than what he bargained for.",
        "poster_path": "/qYy3wEFzbhiqX3SUF27Bvo1ptLn.jpg",
        "media_type": "movie",
        "genre_ids": [
          18
        ],
        "popularity": 18.049,
        "release_date": "2022-03-25",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 7
      },
      {
        "adult": false,
        "backdrop_path": "/1N7IexWDCWRzMynWyjESakKg8Eb.jpg",
        "id": 1034662,
        "title": "Showroom",
        "original_language": "tl",
        "original_title": "Showroom",
        "overview": "Liezl, an ambitious agent, learns that her colleague, Susanah, uses her body to sell condo units; so she imitates her scheme. When the tables turn, Liezl begins to face her punishments one by one.",
        "poster_path": "/rMtfinteQu34A9mGKBOW0BY7zT0.jpg",
        "media_type": "movie",
        "genre_ids": [
          18,
          53
        ],
        "popularity": 22.435,
        "release_date": "2022-11-11",
        "video": false,
        "vote_average": 5.2,
        "vote_count": 5
      },
      {
        "adult": false,
        "backdrop_path": "/n5QtdxCS75UXSNzFCviXmgpysZA.jpg",
        "id": 985932,
        "title": "Virgin Forest",
        "original_language": "tl",
        "original_title": "Virgin Forest",
        "overview": "A photographer is tasked to take a photo of a rare flower thriving in the mountain, but he discovers women trapped in a hidden brothel for illegal loggers.",
        "poster_path": "/6JsAHnDolJDCid4vCUO0JsSy997.jpg",
        "media_type": "movie",
        "genre_ids": [
          53,
          80,
          18
        ],
        "popularity": 29.288,
        "release_date": "2022-06-24",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 11
      }
    ]
  },
  {
    "adult": false,
    "gender": 1,
    "id": 1813,
    "known_for_department": "Acting",
    "name": "Anne Hathaway",
    "original_name": "Anne Hathaway",
    "popularity": 88.831,
    "profile_path": "/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg",
    "known_for": [
      {
        "adult": false,
        "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        "id": 157336,
        "title": "Interstellar",
        "original_language": "en",
        "original_title": "Interstellar",
        "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "media_type": "movie",
        "genre_ids": [
          12,
          18,
          878
        ],
        "popularity": 136.87,
        "release_date": "2014-11-05",
        "video": false,
        "vote_average": 8.42,
        "vote_count": 32921
      },
      {
        "adult": false,
        "backdrop_path": "/CpLAfXgSNeNRRbRzPrTuzKmIHO.jpg",
        "id": 350,
        "title": "The Devil Wears Prada",
        "original_language": "en",
        "original_title": "The Devil Wears Prada",
        "overview": "Andy moves to New York to work in the fashion industry. Her boss is extremely demanding, cruel and won't let her succeed if she doesn't fit into the high class elegant look of their magazine.",
        "poster_path": "/8912AsVuS7Sj915apArUFbv6F9L.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "popularity": 73.113,
        "release_date": "2006-06-29",
        "video": false,
        "vote_average": 7.388,
        "vote_count": 11192
      },
      {
        "adult": false,
        "backdrop_path": "/A6d09KtZKdVGSg0gzsldjDwwvhD.jpg",
        "id": 241259,
        "title": "Alice Through the Looking Glass",
        "original_language": "en",
        "original_title": "Alice Through the Looking Glass",
        "overview": "Alice Kingsleigh returns to Underland and faces a new adventure in saving the Mad Hatter.",
        "poster_path": "/4g043PWVXkjHkxEEsEfwuAxlM8i.jpg",
        "media_type": "movie",
        "genre_ids": [
          12,
          10751,
          14
        ],
        "popularity": 49.67,
        "release_date": "2016-05-25",
        "video": false,
        "vote_average": 6.551,
        "vote_count": 6065
      }
    ]
  }
],
"total_pages": 156186,
"total_results": 3123718
});
});

router.get('/movie/latest', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": null,
"belongs_to_collection": null,
"budget": 0,
"genres": [],
"homepage": "",
"id": 1207469,
"imdb_id": null,
"original_language": "en",
"original_title": "The 5th Wheel",
"overview": "Plot unknown. Female driven comedy.",
"popularity": 0,
"poster_path": null,
"production_companies": [],
"production_countries": [],
"release_date": "",
"revenue": 0,
"runtime": 0,
"spoken_languages": [],
"status": "Released",
"tagline": "",
"title": "The 5th Wheel",
"video": false,
"vote_average": 0,
"vote_count": 0
});
});

router.get('/movie/:movie_id/reviews', function(req, res, next) {
  res.json({
"id": 1272,
"page": 1,
"results": [
  {
    "author": "John Chard",
    "author_details": {
      "name": "",
      "username": "John Chard",
      "avatar_path": "/utEXl2EDiXBK6f41wCLsvprvMg4.jpg",
      "rating": 9
    },
    "content": "Are you an angel? Has the time come? I've been waiting so long.  \r\n\r\nWe are in the not too distant future and the Sun is fading out. After a first mission to reignite it with a nuclear bomb fails, with the ship apparently lost in space, a new team are sent to try again. But it really isn't as simple as that...\r\n\r\nDirector Danny Boyle and writer Alex Garland team up once again for this sci-fi adventure thriller. For as long as I can personally remember, outer space and the planets that dwell within it, have always served us well for cinematic treats. Fears of the unknown and worries over the destruction of Earth, by and large make for great premise's. Not all films realise this potential of course, but it always makes for a great starting point. For his first venture into this realm, Boyle has gone for the Sun as his point of reference, and it makes for a marvellously claustrophobic picture that poses as many questions as it does answers. And even tho ultimately the science fiction aspects of it do not naturally add up, it's dazzling in its visuals and thought provoking into the bargain.\r\n\r\nBoyle has never hid his influences and favourites from the public, and here he homages everything from Alien to Event Horizon, stopping for tea and crumpets at 2001s house along the way. But that is no bad thing, molding elements from great sci-fi past with his own intriguing story has given Sunshine a tremendous heart, to which Boyle then manages to cloak it with high quality drama. The crew are up there and we know that this is a genre piece and things invariably go wrong, this gives the discerning viewer an eager anticipation, a sense that one shouldn't go to the toilet for something will be missed. And Boyle lives up to the promise showed, such a pity then, that Boyle didn't let us get better acquainted with his characters at the start. Because then the impact would surely have doubled as each perilous and wrought scenario unfolded.\r\n\r\nHaving racked up the tension and intrigued us with the premise, expertly fusing CGI with his own craft work along the way, Boyle's Sunshine lives or dies by it's last quarter; depending on your proclivity of course. It has proved to be a most divisive point with critics and fans alike. To say it's a genre shift accompanied with implausibility is being a touch unkind I feel, this is after all a sci-fi picture about a ship going to reignite the Sun! Never the less it doesn't quite close the film triumphantly after the twists that preceded it, turns and explosions have lulled the viewers in, but personally it satisfies this entertained observer. Not in a big bang dynamic way, but in the way that asks me for a further thought process, and that may just be what Boyle and Garland envisaged when they sat down to make the film? Again, depending on your proclivity of course! 8.5/10",
    "created_at": "2019-05-30T19:04:12.686Z",
    "id": "5cf0292c92514135b6b99439",
    "updated_at": "2021-06-23T15:58:22.762Z",
    "url": "https://www.themoviedb.org/review/5cf0292c92514135b6b99439"
  },
  {
    "author": "CinemaSerf",
    "author_details": {
      "name": "CinemaSerf",
      "username": "Geronimo1967",
      "avatar_path": "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
      "rating": null
    },
    "content": "Danny Boyle has assembled a stellar (had to be said) cast for this rather far-fetched story. The crew of the \"Icarus II\" are charged with dragging a massive nuclear bomb towards the sun with a view to giving it a bit of a pick-me-up. It's dying, you see. Needless to say their journey is fraught with danger, made worse when they discover the wreckage of a previous ship sent on a similar mission many years earlier. When they board it, though, all is not as it seems and danger lurks! Alex Garland knows how to write a good story and Cillian Murphy, Rose Byrne and Chris Evans work quite well together as the extra-terrestrial adventure gathers pace. The dialogue is not the best and the score overwhelms at times, but Boyle still manages to create quite a decent degree of peril mixing well the high quality special effects, a bit of sabotage, sexual tension and a good old-fashioned baddie.",
    "created_at": "2022-03-26T17:00:23.143Z",
    "id": "623f46a71cfe3a004768b58e",
    "updated_at": "2022-03-26T17:00:23.143Z",
    "url": "https://www.themoviedb.org/review/623f46a71cfe3a004768b58e"
  }
],
"total_pages": 1,
"total_results": 2
});
});

router.get('/movie/:movie_id/videos', function(req, res, next) {
    res.json({
        "id": 203281,
        "results": [
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Complex Crime - Trailer",
            "key": "Ie7oUZxhu08",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "763cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Delito Continuado - Trailer",
            "key": "DmJLp1fsFjs",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "863cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Falsification Malversation of Funds Estafa Theft - Trailer",
            "key": "hkEeuD78pOsjs",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "963cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Bigamy Illegal Marriage Performance of Illegal Marriage - Trailer",
            "key": "3332tdEQq34",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "1063cf1f8ed6c3000096d5629f"
          },
          {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Three fold rule and GCTA - Trailer",
            "key": "eYy-PYBlWQ8",
            "site": "YouTube",
            "size": 1080,
            "type": "Trailer",
            "official": false,
            "published_at": "2022-08-24T13:00:27.000Z",
            "id": "1163cf1f8ed6c3000096d5629f"
          }
        ]
        });
  }
);

router.get('/review/:review_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/search/movie', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/search/tv', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/tv/airing_today', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.167,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/1k2Xaetf31vXEg4oAEKJzzK5aBa.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.667,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  },
  {
    "adult": false,
    "backdrop_path": "/4zv4RYmXNqvNmKEVINksgIgmvUJ.jpg",
    "genre_ids": [
      16
    ],
    "id": 79481,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "斗破苍穹",
    "overview": "In a land where no magic is present. A land where the strong make the rules and weak have to obey. A land filled with alluring treasures and beauty, yet also filled with unforeseen danger. Three years ago, Xiao Yan, who had shown talents none had seen in decades, suddenly lost everything. His powers, his reputation, and his promise to his mother. What sorcery has caused him to lose all of his powers? And why has his fiancee suddenly shown up?",
    "popularity": 636.191,
    "poster_path": "/a9bJPlezCXF6u0siDxf7cZaSXaJ.jpg",
    "first_air_date": "2017-01-07",
    "name": "Fights Break Sphere",
    "vote_average": 8.694,
    "vote_count": 36
  },
  {
    "adult": false,
    "backdrop_path": "/5s0VnyIk2nArAhVnIGVYQiElmea.jpg",
    "genre_ids": [
      10759,
      18
    ],
    "id": 62286,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Fear the Walking Dead",
    "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
    "popularity": 620.056,
    "poster_path": "/l7N9aS6VyYvjelKoCB2eZge0Qky.jpg",
    "first_air_date": "2015-08-23",
    "name": "Fear the Walking Dead",
    "vote_average": 7.692,
    "vote_count": 4636
  },
  {
    "adult": false,
    "backdrop_path": "/f9ZGy1xMbrp7N9rrv0WoFG8Iw3D.jpg",
    "genre_ids": [
      18
    ],
    "id": 238469,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "无所畏惧",
    "overview": "Luo Yingwei used to be a staff member of the government, and passed the judicial examination by self-studying the law. However, she suffered a blow: her husband Liu Ming broke up with her, and Liu Ming owed a huge amount of usury in China, which made Luo Yingwei deeply involved in a debt crisis. But Luo Yingwei did not give up, she chose to fight back with legal means. As a newcomer to the law firm, Luo Yingwei is burdened with huge debts on one hand and faces pressure in the workplace on the other. Fortunately, she met like-minded partners - Qiu Hua and Xia Shu. They always adhere to their faith in the law and uphold justice. Together, they witness the diversity of human nature and the warmth of society through different cases.",
    "popularity": 597.726,
    "poster_path": "/oQgga07JBpi8EQtr266VLW2JYie.jpg",
    "first_air_date": "2023-11-03",
    "name": "Fearless",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/aCiXh5QX6bg0BtpFEBXKaZYScB4.jpg",
    "genre_ids": [
      10763,
      10764,
      99
    ],
    "id": 203599,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "東張西望",
    "overview": "Scoop is a comprehensive information programme of Television Broadcasts Limited.\n\nThe content of the program is mainly based on entertainment news and personal follow-up of the artists, and will also be interspersed with the latest trends of TVB dramas and artists. Some entertainment news content clips will be rebroadcast on the next day's \"Entertainment Live\".\n\nThis program will be broadcast on Jade Channel from 19:30-20:00 (Hong Kong time) from June 6, 2005, and will be broadcast every day from March 3, 2019, and will be broadcast on myTV (later myTV SUPER) to provide \"Program Review\".",
    "popularity": 436.154,
    "poster_path": "/qo6y0XvSBlKM3XCbYVdcR3a6qyQ.jpg",
    "first_air_date": "2005-06-06",
    "name": "Scoop",
    "vote_average": 6.714,
    "vote_count": 14
  },
  {
    "adult": false,
    "backdrop_path": "/fvBkMzrgrh1lTMczKipnH9Ud6A1.jpg",
    "genre_ids": [
      18,
      10765
    ],
    "id": 237859,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "山有木兮木有心",
    "overview": "Taichu, ancient sacred tree of Xuefeng mountain, and Xinyue, the saint of Snowluo tribe, help Donglin Wang Guangye in competitions. Disputes between countries, including King Beirong, Princess Regent of Nanchu, and others. Who will dominate the Central Plains? Masters like Shangguan Zui, Meng Yilang and Yanshi Meng Ji enter the scene with cunning strategies and chess figures. What will this bring to Bo Yun's chaotic world?",
    "popularity": 426.947,
    "poster_path": "/g99KfIA4XNnoR2jq2x5Wm7xyKtw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Sacred Tree Has Heart",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/4GVXeBUUkJ0UPhRVWZs1ng62Gj.jpg",
    "genre_ids": [
      35,
      10764
    ],
    "id": 33238,
    "origin_country": [
      "KR"
    ],
    "original_language": "ko",
    "original_name": "런닝맨",
    "overview": "These days, variety entertainment is gradually disappearing. It is one of Korea's representative variety entertainment shows that has been in charge of Sunday evenings for over 10 years. In this program, many stars and members play games and missions together. It is characterized by going around several places. In particular, this program focuses solely on laughter among the many fun elements of entertainment.\n\nOpen your eyes! Big fun enters!\n\nOpen your mouth!  A big smile enters!\n\nOpen your mind! Instructive lesson enters!",
    "popularity": 423.828,
    "poster_path": "/2Wmmu1MkqxJ48J7aySET9EKEjXz.jpg",
    "first_air_date": "2010-07-11",
    "name": "Running Man",
    "vote_average": 8.3,
    "vote_count": 167
  },
  {
    "adult": false,
    "backdrop_path": "/11nGiX6hLdexBD4TVUAAVzSIAQy.jpg",
    "genre_ids": [
      10751,
      18
    ],
    "id": 14929,
    "origin_country": [
      "CA"
    ],
    "original_language": "en",
    "original_name": "Heartland",
    "overview": "Life is hard on the Flemings' ranch in the Alberta foothills where abused or neglected horses find refuge with a kind, hard-working family. Debts abound and the bank is about to foreclose. Can they keep the ranch running?",
    "popularity": 409.296,
    "poster_path": "/uc2gtWczT58BiAUJWFz9P5aZmNF.jpg",
    "first_air_date": "2007-10-14",
    "name": "Heartland",
    "vote_average": 8.286,
    "vote_count": 536
  },
  {
    "adult": false,
    "backdrop_path": "/xAEfikFqZueBHh1LJXwPQidq6sg.jpg",
    "genre_ids": [],
    "id": 220285,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Spy Ninjas: Corruption",
    "overview": "The Spy Ninjas are back. The legends of the past and young heroes of the future must unite to defend their home from a threat that corrupts anything in its way. Join the Spy Ninjas on their quest to ensure their existence isn't erased from the internet.",
    "popularity": 394.713,
    "poster_path": "/eXKl6qhZMwLPYjROYjHBShv3ugq.jpg",
    "first_air_date": "2023-11-11",
    "name": "Spy Ninjas: Corruption",
    "vote_average": 0,
    "vote_count": 0
  }
],
"total_pages": 13,
"total_results": 252
});
});

router.get('/tv/on_the_air', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.155,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/stAFsiKB8No9wYtNpX6yyjRgrkO.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.7,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/218ZehBKlH8efPRRccmB7bu0oLQ.jpg",
    "genre_ids": [
      35,
      9648,
      10766,
      18
    ],
    "id": 219109,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Elas por Elas",
    "overview": "Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.",
    "popularity": 1836.795,
    "poster_path": "/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg",
    "first_air_date": "2023-09-25",
    "name": "Elas por Elas",
    "vote_average": 7.364,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
    "genre_ids": [
      10751,
      35,
      18
    ],
    "id": 91759,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "愛·回家之開心速遞",
    "overview": "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
    "popularity": 1333.13,
    "poster_path": "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
    "first_air_date": "2017-02-06",
    "name": "Come Home Love: Lo and Behold",
    "vote_average": 5.032,
    "vote_count": 32
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
    "genre_ids": [
      18,
      80,
      10766
    ],
    "id": 209265,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Terra e Paixão",
    "overview": "When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.",
    "popularity": 1264.527,
    "poster_path": "/6SgKArqMYmqSl5XlHEucGXvotw.jpg",
    "first_air_date": "2023-05-08",
    "name": "Land of Desire",
    "vote_average": 6.541,
    "vote_count": 123
  },
  {
    "adult": false,
    "backdrop_path": "/pEJL28C17jVPCwUipGO0JdTUobO.jpg",
    "genre_ids": [
      35,
      10766
    ],
    "id": 213026,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Fuzuê",
    "overview": "The department store Fuzue, specialized in popular items, is a success led by Nero Braga e Silva. Little does he know that the store's grounds have hidden relics for over 300 years.",
    "popularity": 1147.757,
    "poster_path": "/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
    "first_air_date": "2023-08-14",
    "name": "Fuzue",
    "vote_average": 5.8,
    "vote_count": 20
  },
  {
    "adult": false,
    "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
    "genre_ids": [
      10751,
      35
    ],
    "id": 218145,
    "origin_country": [
      "SK"
    ],
    "original_language": "sk",
    "original_name": "Mama na prenájom",
    "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
    "popularity": 1136.182,
    "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
    "first_air_date": "2023-01-09",
    "name": "Mom for rent",
    "vote_average": 6.083,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  },
  {
    "adult": false,
    "backdrop_path": "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 95479,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "呪術廻戦",
    "overview": "Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.",
    "popularity": 971.05,
    "poster_path": "/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
    "first_air_date": "2020-10-03",
    "name": "Jujutsu Kaisen",
    "vote_average": 8.567,
    "vote_count": 2907
  },
  {
    "adult": false,
    "backdrop_path": "/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg",
    "genre_ids": [
      10763,
      10767
    ],
    "id": 101463,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Al rojo vivo",
    "overview": "\"Al rojo vivo\" is a program on laSexta focused on the analysis and debate of national and international political current affairs. The format is hosted and directed by Antonio García Ferreras and produced by the News Services of laSexta.",
    "popularity": 920.828,
    "poster_path": "/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
    "first_air_date": "2011-01-10",
    "name": "Al rojo vivo",
    "vote_average": 3.262,
    "vote_count": 21
  },
  {
    "adult": false,
    "backdrop_path": "/2GflJk6Hm1L3FFVWIvnuOskDFGv.jpg",
    "genre_ids": [
      18,
      9648
    ],
    "id": 226773,
    "origin_country": [
      "PH"
    ],
    "original_language": "tl",
    "original_name": "Senior High",
    "overview": "A student’s death causes a scandal at the prestigious Northford High. Investigations conclude it was a suicide. The victim’s twin sister thinks otherwise. As she searches for truth, she will unravel secrets that are far more shocking and dangerous.",
    "popularity": 863.95,
    "poster_path": "/k285iD6gZIoLsVSczSjc4WIXkdc.jpg",
    "first_air_date": "2023-08-28",
    "name": "Senior High",
    "vote_average": 0,
    "vote_count": 0
  }
],
"total_pages": 63,
"total_results": 1250
});
});

router.get('/tv/popular', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
    "genre_ids": [
      10763
    ],
    "id": 94722,
    "origin_country": [
      "DE"
    ],
    "original_language": "de",
    "original_name": "Tagesschau",
    "overview": "German daily news program, the oldest still existing program on German television.",
    "popularity": 3276.253,
    "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    "first_air_date": "1952-12-26",
    "name": "Tagesschau",
    "vote_average": 7.155,
    "vote_count": 165
  },
  {
    "adult": false,
    "backdrop_path": "/ugcdRKcOyUMAr9hAsL058cAX2vj.jpg",
    "genre_ids": [
      10764
    ],
    "id": 12409,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Star Academy",
    "overview": "Star Academy is a French reality television show produced by the Dutch company Endemol. It consists of a contest of young singers. It spawned an equally successful show in Quebec called Star Académie. It is broadcast on NRJ12. At the end of each season, selected contestants would go on tour around France, Morocco, Switzerland, Belgium, Tunisia, and other French-speaking countries.\n\nThe contestants stayed in the Dammarie-lès-Lys castle: The Vives-Eaux castle.\n\nThe reality show was hosted by Nikos Aliagas and featured guest stars such as Madonna, Alizée, Céline Dion, Tina Arena, Nelly Furtado, Tokio Hotel, Andrea Bocelli, Charles Aznavour, Hélène Ségara, Peter Kingsbery, Phil Collins, Laura Pausini, Kylie Minogue, Dannii Minogue, Tina Turner, Mariah Carey, Lara Fabian, Rihanna, Shania Twain, Moby, Avril Lavigne, Anastacia, Alicia Keys, Craig David, 50 Cent, will.i.am, James Blunt, Diddy, Sting, David Guetta, Lenny Kravitz, Janet Jackson, Britney Spears, Liza Minnelli, Johnny Hallyday, Paul Anka, Lionel Richie, Alanis Morissette, Ray Charles, Stevie Wonder, Elton John, Bee Gees, Ricky Martin, and Beyoncé.",
    "popularity": 2193.914,
    "poster_path": "/80BP36meHtHF2UuDBgvAJxgFo5V.jpg",
    "first_air_date": "2001-10-20",
    "name": "Star Academy",
    "vote_average": 6.563,
    "vote_count": 8
  },
  {
    "adult": false,
    "backdrop_path": "/aDRIKJuB63tuJUZf1O4mRmbMTVw.jpg",
    "genre_ids": [
      10764,
      99
    ],
    "id": 6480,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House Hunters",
    "overview": "Hosted by Suzanne Whang, the show takes viewers behind the scenes as individuals, couples and families learn what to look for and decide whether or not a home is meant for them. Focusing on the emotional experience of finding and purchasing a new home, each episode follows a prospective buyer and real estate agent through the home-buying process, from start to finish.",
    "popularity": 2123.248,
    "poster_path": "/7Bsr9ogG0q6yHtNuIp6bJ6EFpbH.jpg",
    "first_air_date": "1999-09-30",
    "name": "House Hunters",
    "vote_average": 5.1,
    "vote_count": 25
  },
  {
    "adult": false,
    "backdrop_path": "/g8sQ4wCNGYLIkVok5aQsX0WYyMr.jpg",
    "genre_ids": [
      80,
      9648
    ],
    "id": 231454,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "宣判",
    "overview": "",
    "popularity": 2091.944,
    "poster_path": "/stAFsiKB8No9wYtNpX6yyjRgrkO.jpg",
    "first_air_date": "2023-10-30",
    "name": "The Justice",
    "vote_average": 7.7,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/hwUQsL1cWt0bmbTxzCompqqvTH9.jpg",
    "genre_ids": [
      10764
    ],
    "id": 82250,
    "origin_country": [
      "ES"
    ],
    "original_language": "es",
    "original_name": "Gran hermano VIP",
    "overview": "",
    "popularity": 1864.387,
    "poster_path": "/9269PATr0bmEXKjkpR88mzGmNYI.jpg",
    "first_air_date": "2004-01-22",
    "name": "Gran hermano VIP",
    "vote_average": 4.1,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/7F9pXKnGsjPRiHGi14xKVlIxUI3.jpg",
    "genre_ids": [
      18
    ],
    "id": 152551,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "我要逆风去",
    "overview": "Xu Si (Gong Jun), an investment professional who moves back to mainland China from a Hong Kong investment bank, meets Jiang Hu (Zhong Chuxi), the only daughter of the chairman of a national clothing conglomerate. Due to their differing business philosophies, the two are at odds with each other. When Jiang Hu's father's company suddenly goes bankrupt, she finds herself plummeting from the heights of success. Meanwhile, Xu Si, who has always been ambitious, sets his sights on the rubber-soled shoe brand \"Tengyue,\" which was once created by Jiang Hu's father. Determined to save \"Tengyue\" at all costs, Jiang Hu, despite her downfall, engages in a fierce battle with Xu Si.\n\nUltimately, their interactions and struggles will determine the fate of \"Tengyue\" and whether it can be revived.",
    "popularity": 1862.213,
    "poster_path": "/cZSb43j1O1pRZIwwn0fgCx5XJIP.jpg",
    "first_air_date": "2023-10-30",
    "name": "Rising With the Wind",
    "vote_average": 0,
    "vote_count": 0
  },
  {
    "adult": false,
    "backdrop_path": "/218ZehBKlH8efPRRccmB7bu0oLQ.jpg",
    "genre_ids": [
      35,
      9648,
      10766,
      18
    ],
    "id": 219109,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Elas por Elas",
    "overview": "Seven friends who met in their youth at an English course meet again 25 years later; Lara, Taís, Helena, Adriana, Renée, Natália and Carol, each of them has a different personality and origin, but they share a deep affection.",
    "popularity": 1836.795,
    "poster_path": "/m0cvvnhnRXdQhLARx7qt9lz7hTE.jpg",
    "first_air_date": "2023-09-25",
    "name": "Elas por Elas",
    "vote_average": 7.364,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/zvQY9Ddg0JUXs0HNIZ3moj2DZth.jpg",
    "genre_ids": [
      18
    ],
    "id": 117685,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "风起霓裳",
    "overview": "In the reign of Emperor Taizong (627—649), which was called the Prosperity of Zhenguan, former clothing maker An is framed and imprisoned. When she was in danger, she entrusts her young daughter Liu Li to an old friend in the palace. Liu Li grows up in the palace and becomes a medical officer, responsible for epidemic prevention.",
    "popularity": 1772.978,
    "poster_path": "/96xFaFO71aYXcDEbiNd9tmWSKV9.jpg",
    "first_air_date": "2021-01-27",
    "name": "Weaving a Tale of Love",
    "vote_average": 5.5,
    "vote_count": 6
  },
  {
    "adult": false,
    "backdrop_path": "/nbFV7KIU22WHmgyPe89DytZhL03.jpg",
    "genre_ids": [
      10764
    ],
    "id": 233816,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Love Island Games",
    "overview": "In this cheeky new iteration, romance meets reality as fan-favorite Islanders are faced with both team and couples' challenges, all while navigating dating, eliminations, recoupling, dramatic arrivals and new competition twists and turns like never before.",
    "popularity": 1604.52,
    "poster_path": "/1ACzNV3c4alBW7rUyo51n8uGoJw.jpg",
    "first_air_date": "2023-11-01",
    "name": "Love Island Games",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": null,
    "genre_ids": [],
    "id": 237200,
    "origin_country": [
      "CZ"
    ],
    "original_language": "cs",
    "original_name": "Stardance XII ...kolem dokola",
    "overview": "",
    "popularity": 1529.448,
    "poster_path": "/ot9MBwaVWb8vJU3mrUPXSuIcxUP.jpg",
    "first_air_date": "2023-10-15",
    "name": "Stardance XII ...kolem dokola",
    "vote_average": 10,
    "vote_count": 1
  },
  {
    "adult": false,
    "backdrop_path": "/hCu11X8wCvloA49xzZQKZ9GdXcQ.jpg",
    "genre_ids": [
      18
    ],
    "id": 225929,
    "origin_country": [
      "CN"
    ],
    "original_language": "zh",
    "original_name": "治愈系恋人",
    "overview": "When Gu Yunzheng, an associate professor of neurosurgery, goes on a medical aid mission in Lacaya, he meets Su Wei'an, a \"deserter\" who has abandoned her medical career to become a businessperson. From bickering all the time to falling in love with each other, he gradually discovers that all her abnormal behavior is caused by a genetic disease called Huntington's disease. The love for his beloved one makes him empathize with the sadness and despair of this incurable disease faced by 30,000 patients and their families across the country. Finally, Gu Yunzheng decides to give up his promising career and devote his life to the research of curing this rare disease, fighting alongside his lover to carve light out of the darkness.",
    "popularity": 1472.728,
    "poster_path": "/d2FwkOhWrimCjqhi6P0YUEPeVH9.jpg",
    "first_air_date": "2023-11-02",
    "name": "Love is Panacea",
    "vote_average": 6.667,
    "vote_count": 3
  },
  {
    "adult": false,
    "backdrop_path": "/N1hWzVPpZ8lIQvQskgdQogxdsc.jpg",
    "genre_ids": [
      18,
      10765
    ],
    "id": 84958,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Loki",
    "overview": "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant” or help fix the timeline and stop a greater threat.",
    "popularity": 1370.678,
    "poster_path": "/voHUmluYmKyleFkTu3lOXQG702u.jpg",
    "first_air_date": "2021-06-09",
    "name": "Loki",
    "vote_average": 8.18,
    "vote_count": 10732
  },
  {
    "adult": false,
    "backdrop_path": "/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
    "genre_ids": [
      10751,
      35,
      18
    ],
    "id": 91759,
    "origin_country": [
      "HK"
    ],
    "original_language": "cn",
    "original_name": "愛·回家之開心速遞",
    "overview": "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
    "popularity": 1333.13,
    "poster_path": "/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
    "first_air_date": "2017-02-06",
    "name": "Come Home Love: Lo and Behold",
    "vote_average": 5.032,
    "vote_count": 32
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
    "genre_ids": [
      18,
      80,
      10766
    ],
    "id": 209265,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Terra e Paixão",
    "overview": "When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.",
    "popularity": 1264.527,
    "poster_path": "/6SgKArqMYmqSl5XlHEucGXvotw.jpg",
    "first_air_date": "2023-05-08",
    "name": "Land of Desire",
    "vote_average": 6.541,
    "vote_count": 123
  },
  {
    "adult": false,
    "backdrop_path": "/pEJL28C17jVPCwUipGO0JdTUobO.jpg",
    "genre_ids": [
      35,
      10766
    ],
    "id": 213026,
    "origin_country": [
      "BR"
    ],
    "original_language": "pt",
    "original_name": "Fuzuê",
    "overview": "The department store Fuzue, specialized in popular items, is a success led by Nero Braga e Silva. Little does he know that the store's grounds have hidden relics for over 300 years.",
    "popularity": 1147.757,
    "poster_path": "/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
    "first_air_date": "2023-08-14",
    "name": "Fuzue",
    "vote_average": 5.8,
    "vote_count": 20
  },
  {
    "adult": false,
    "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
    "genre_ids": [
      10751,
      35
    ],
    "id": 218145,
    "origin_country": [
      "SK"
    ],
    "original_language": "sk",
    "original_name": "Mama na prenájom",
    "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
    "popularity": 1136.182,
    "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
    "first_air_date": "2023-01-09",
    "name": "Mom for rent",
    "vote_average": 6.083,
    "vote_count": 12
  },
  {
    "adult": false,
    "backdrop_path": "/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 72879,
    "origin_country": [
      "FR"
    ],
    "original_language": "fr",
    "original_name": "Demain nous appartient",
    "overview": "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
    "popularity": 1058.895,
    "poster_path": "/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
    "first_air_date": "2017-07-17",
    "name": "Tomorrow is Ours",
    "vote_average": 6.216,
    "vote_count": 44
  },
  {
    "adult": false,
    "backdrop_path": "/wU1y7snEVYiJBpZ2k1DjIpHgJbx.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 1434,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Family Guy",
    "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
    "popularity": 1034.788,
    "poster_path": "/hw2vi8agaJZ7oeSvS8uEYgOtK32.jpg",
    "first_air_date": "1999-01-31",
    "name": "Family Guy",
    "vote_average": 7.3,
    "vote_count": 3951
  },
  {
    "adult": false,
    "backdrop_path": "/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg",
    "genre_ids": [
      10751,
      16,
      35
    ],
    "id": 456,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Simpsons",
    "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
    "popularity": 990.737,
    "poster_path": "/vHqeLzYl3dEAutojCO26g0LIkom.jpg",
    "first_air_date": "1989-12-17",
    "name": "The Simpsons",
    "vote_average": 7.998,
    "vote_count": 9244
  }
],
"total_pages": 7973,
"total_results": 159444
});
});

router.get('/tv/top_rated', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 1396,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Breaking Bad",
    "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    "popularity": 422.169,
    "poster_path": "/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    "first_air_date": "2008-01-20",
    "name": "Breaking Bad",
    "vote_average": 8.894,
    "vote_count": 12647
  },
  {
    "adult": false,
    "backdrop_path": "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    "genre_ids": [
      16,
      18,
      10765,
      10759
    ],
    "id": 94605,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Arcane",
    "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
    "popularity": 93.725,
    "poster_path": "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "first_air_date": "2021-11-06",
    "name": "Arcane",
    "vote_average": 8.7,
    "vote_count": 3426
  },
  {
    "adult": false,
    "backdrop_path": "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
    "genre_ids": [
      10759,
      35,
      16
    ],
    "id": 37854,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "ワンピース",
    "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
    "popularity": 162.281,
    "poster_path": "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    "first_air_date": "1999-10-20",
    "name": "One Piece",
    "vote_average": 8.7,
    "vote_count": 4165
  },
  {
    "adult": false,
    "backdrop_path": "/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg",
    "genre_ids": [
      16,
      35,
      10765,
      10759
    ],
    "id": 60625,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1282.049,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "first_air_date": "2013-12-02",
    "name": "Rick and Morty",
    "vote_average": 8.701,
    "vote_count": 8776
  },
  {
    "adult": false,
    "backdrop_path": "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
    "genre_ids": [
      18,
      10751
    ],
    "id": 70785,
    "origin_country": [
      "CA"
    ],
    "original_language": "en",
    "original_name": "Anne with an E",
    "overview": "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
    "popularity": 93.108,
    "poster_path": "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
    "first_air_date": "2017-03-19",
    "name": "Anne with an E",
    "vote_average": 8.694,
    "vote_count": 4412
  },
  {
    "adult": false,
    "backdrop_path": "/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg",
    "genre_ids": [
      10759,
      16,
      10765
    ],
    "id": 31911,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "overview": "Disregard for alchemy’s laws ripped half of Ed Elric’s limbs from his body and left Al’s soul clinging to a suit of armor. To restore what was lost, the brothers seek the Philosopher’s Stone. Enemies and allies – the corrupt military, the Homunculi, and foreign alchemists – will alter the Elric’s course, but their purpose will remain unchanged and their bond unbreakable.",
    "popularity": 115.005,
    "poster_path": "/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    "first_air_date": "2009-04-05",
    "name": "Fullmetal Alchemist: Brotherhood",
    "vote_average": 8.693,
    "vote_count": 1793
  },
  {
    "adult": false,
    "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 246,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Avatar: The Last Airbender",
    "overview": "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
    "popularity": 97.788,
    "poster_path": "/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg",
    "first_air_date": "2005-02-21",
    "name": "Avatar: The Last Airbender",
    "vote_average": 8.7,
    "vote_count": 3556
  },
  {
    "adult": false,
    "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
    "genre_ids": [
      16,
      10759,
      10765
    ],
    "id": 85937,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "鬼滅の刃",
    "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
    "popularity": 93.17,
    "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
    "first_air_date": "2019-04-06",
    "name": "Demon Slayer: Kimetsu no Yaiba",
    "vote_average": 8.683,
    "vote_count": 5713
  },
  {
    "adult": false,
    "backdrop_path": "/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg",
    "genre_ids": [
      16,
      10765,
      10759,
      18
    ],
    "id": 95557,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Invincible",
    "overview": "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.",
    "popularity": 822.277,
    "poster_path": "/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg",
    "first_air_date": "2021-03-25",
    "name": "Invincible",
    "vote_average": 8.671,
    "vote_count": 3860
  },
  {
    "adult": false,
    "backdrop_path": "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
    "genre_ids": [
      16,
      10765,
      10759
    ],
    "id": 1429,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "進撃の巨人",
    "overview": "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
    "popularity": 200.317,
    "poster_path": "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
    "first_air_date": "2013-04-07",
    "name": "Attack on Titan",
    "vote_average": 8.665,
    "vote_count": 5674
  },
  {
    "adult": false,
    "backdrop_path": "/jsXKG9uppnPrhqFNhImllyCfLhl.jpg",
    "genre_ids": [
      10759,
      16
    ],
    "id": 65930,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "僕のヒーローアカデミア",
    "overview": "A superhero-admiring boy without any powers enrolls in a prestigious hero academy and learns what it really means to be a hero.",
    "popularity": 44.552,
    "poster_path": "/ivOLM47yJt90P19RH1NvJrAJz9F.jpg",
    "first_air_date": "2016-04-03",
    "name": "My Hero Academia",
    "vote_average": 8.664,
    "vote_count": 4546
  },
  {
    "adult": false,
    "backdrop_path": "/900tHlUYUkp7Ol04XFSoAaEIXcT.jpg",
    "genre_ids": [
      18
    ],
    "id": 87108,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Chernobyl",
    "overview": "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
    "popularity": 96.227,
    "poster_path": "/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    "first_air_date": "2019-05-06",
    "name": "Chernobyl",
    "vote_average": 8.654,
    "vote_count": 5489
  },
  {
    "adult": false,
    "backdrop_path": "/uoA7xBzCt3XXqL5fMmB8pmYgABJ.jpg",
    "genre_ids": [
      18,
      10765,
      35
    ],
    "id": 67915,
    "origin_country": [
      "KR"
    ],
    "original_language": "ko",
    "original_name": "쓸쓸하고 찬란하神-도깨비",
    "overview": "In his quest for a bride to break his immortal curse, a 939-year-old guardian of souls meets a grim reaper and a sprightly student with a tragic past.",
    "popularity": 79.054,
    "poster_path": "/sPkxHNw5BFvuCFGWw825TS7n6X3.jpg",
    "first_air_date": "2016-12-02",
    "name": "Goblin",
    "vote_average": 8.652,
    "vote_count": 2555
  },
  {
    "adult": false,
    "backdrop_path": "/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 60059,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Better Call Saul",
    "overview": "Six years before Saul Goodman meets Walter White. We meet him when the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and, often, against Jimmy, is “fixer” Mike Ehrmantraut. The series tracks Jimmy’s transformation into Saul Goodman, the man who puts criminal in criminal lawyer.",
    "popularity": 248.451,
    "poster_path": "/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg",
    "first_air_date": "2015-02-08",
    "name": "Better Call Saul",
    "vote_average": 8.652,
    "vote_count": 4482
  },
  {
    "adult": false,
    "backdrop_path": "/5iWJwQPBusPTV7G7n5TABNRP7tO.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 31132,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Regular Show",
    "overview": "Two bored groundskeepers, Mordecai (a six-foot-tall blue jay) and Rigby (a hyperactive raccoon) are best friends who spend their days trying to entertain themselves by any means necessary, much to the displeasure of their boss. Their everyday pursuits often lead to things spiraling out of control and into the surreal.",
    "popularity": 309.9,
    "poster_path": "/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg",
    "first_air_date": "2010-09-06",
    "name": "Regular Show",
    "vote_average": 8.648,
    "vote_count": 1806
  },
  {
    "adult": false,
    "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
    "genre_ids": [
      18
    ],
    "id": 100088,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Last of Us",
    "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
    "popularity": 208.901,
    "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    "first_air_date": "2023-01-15",
    "name": "The Last of Us",
    "vote_average": 8.643,
    "vote_count": 4217
  },
  {
    "adult": false,
    "backdrop_path": "/cHyY5z4txdVyGtYMvBJhCqCcJso.jpg",
    "genre_ids": [
      16,
      10765,
      18,
      10759,
      35
    ],
    "id": 92685,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Owl House",
    "overview": "An animated fantasy-comedy series that follows Luz, a self-assured teenage girl who accidentally stumbles upon a portal to a magical world where she befriends a rebellious witch, Eda, and an adorably tiny warrior, King. Despite not having magical abilities, Luz pursues her dream of becoming a witch by serving as Eda's apprentice at the Owl House and ultimately finds a new family in an unlikely setting.",
    "popularity": 160.734,
    "poster_path": "/zhdy3PcNVE15wj1wrxn45ARZBnx.jpg",
    "first_air_date": "2020-01-10",
    "name": "The Owl House",
    "vote_average": 8.64,
    "vote_count": 1398
  },
  {
    "adult": false,
    "backdrop_path": "/gDDwXPs53PYNVM8LASxXOxtxmX5.jpg",
    "genre_ids": [
      35,
      10751
    ],
    "id": 72637,
    "origin_country": [
      "AR"
    ],
    "original_language": "es",
    "original_name": "O11CE",
    "overview": "The series revolves around Gabo, a soccer-loving teenager who, upon receiving a scholarship from the prestigious Sports Academic Institute (IAD) of Buenos Aires, will see his dream of playing at Los Halcones Dorados, the renowned amateur team of the school, and also his longing to become a professional footballer.",
    "popularity": 118.927,
    "poster_path": "/sen4We5WQCRsGZe82ohTEmxFD06.jpg",
    "first_air_date": "2017-06-19",
    "name": "Once",
    "vote_average": 8.64,
    "vote_count": 1372
  },
  {
    "adult": false,
    "backdrop_path": "/2Yfzm5857lprGonYPl30XgEpTry.jpg",
    "genre_ids": [
      16,
      9648,
      10765
    ],
    "id": 13916,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "DEATH NOTE",
    "overview": "Light Yagami is an ace student with great prospects—and he’s bored out of his mind. But all that changes when he finds the Death Note, a notebook dropped by a rogue Shinigami death god. Any human whose name is written in the notebook dies, and Light has vowed to use the power of the Death Note to rid the world of evil. But will Light succeed in his noble goal, or will the Death Note turn him into the very thing he fights against?",
    "popularity": 95.342,
    "poster_path": "/iigTJJskR1PcjjXqxdyJwVB3BoU.jpg",
    "first_air_date": "2006-10-04",
    "name": "Death Note",
    "vote_average": 8.639,
    "vote_count": 3683
  },
  {
    "adult": false,
    "backdrop_path": "/y8DX7y9vvUcc0uKYd7USO9QkTg6.jpg",
    "genre_ids": [
      16,
      35
    ],
    "id": 42573,
    "origin_country": [
      "JP"
    ],
    "original_language": "ja",
    "original_name": "スラムダンク",
    "overview": "Sakuragi Hanamichi is a junior high punk used to getting into fights and being rejected by girls but upon entering high school he meets the girl of his dreams, Haruko Akagi. He will do anything in order to win her heart including joining the school basketball team that is aiming to conquer the nation lead by Haruko's brother. The problem is that Sakuragi has never played basketball before and a freshman sensation is stealing the spotlight and Haruko's affection from him.",
    "popularity": 104.324,
    "poster_path": "/nOeEieXG63hck1mRGChcKBN2Obc.jpg",
    "first_air_date": "1993-10-16",
    "name": "Slam Dunk",
    "vote_average": 8.637,
    "vote_count": 811
  }
],
"total_pages": 93,
"total_results": 1845
});
});

router.get('/tv/:series_id', function(req, res, next) {
  res.json(
    {
"adult": false,
"backdrop_path": null,
"created_by": [
  {
    "id": 11834,
    "credit_id": "5307ee44c3a36841f00011b0",
    "name": "David Seltzer",
    "gender": 2,
    "profile_path": "/igRrhRzTQIzUIOzhmo3A1LwMHOI.jpg"
  }
],
"episode_run_time": [
  43
],
"first_air_date": "2005-04-13",
"genres": [
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10765,
    "name": "Sci-Fi & Fantasy"
  }
],
"homepage": "",
"id": 11122,
"in_production": false,
"languages": [
  "en"
],
"last_air_date": "2005-05-18",
"last_episode_to_air": {
  "id": 445341,
  "name": "Hour Six",
  "overview": "Dr. Massey (Bill Pullman) and Sister Jo (Natascha McElhone) translate the secret book they found hidden in the puzzle box, which leads them to Tiberias on a mission to find young Hawk (Mark Rendall) and stop the impending birth of the Anti-Christ. Haden (Michael Massee) and Dr. Massey enter a final showdown in the dramatic conclusion.",
  "vote_average": 0,
  "vote_count": 0,
  "air_date": "2005-05-18",
  "episode_number": 6,
  "episode_type": "finale",
  "production_code": "",
  "runtime": 43,
  "season_number": 1,
  "show_id": 11122,
  "still_path": null
},
"name": "Revelations",
"next_episode_to_air": null,
"networks": [
  {
    "id": 6,
    "logo_path": "/cm111bsDVlYaC1foL0itvEI4yLG.png",
    "name": "NBC",
    "origin_country": "US"
  }
],
"number_of_episodes": 6,
"number_of_seasons": 1,
"origin_country": [
  "US"
],
"original_language": "en",
"original_name": "Revelations",
"overview": "Set just before the start of Armageddon, the series will follow two central characters, a physicist and a nun, who are racing against the clock to see if the end of the world apocalypse can be averted. Bill Pullman plays Dr. Richard Massey, a Harvard professor whose daughter is murdered by satanists while McElhone stars as a nun who recruits Massey to help investigate whether what's told in the Book of Revelations is starting to come true. Seltzer and Polone with executive produce the project along with Pariah Television's Vivian Cannon and Jessika Borsiczky.",
"popularity": 23.139,
"poster_path": "/iiJ1La1Roicp1kHG99OTuL2g8H3.jpg",
"production_companies": [
  {
    "id": 11345,
    "logo_path": "/xhnnHfsqEimD4r0QeUz3GSvcv73.png",
    "name": "Stillking Films",
    "origin_country": "CZ"
  },
  {
    "id": 55683,
    "logo_path": null,
    "name": "NBC Enterprises",
    "origin_country": ""
  },
  {
    "id": 11733,
    "logo_path": null,
    "name": "Pariah",
    "origin_country": ""
  }
],
"production_countries": [
  {
    "iso_3166_1": "US",
    "name": "United States of America"
  }
],
"seasons": [
  {
    "air_date": "2006-12-22",
    "episode_count": 2,
    "id": 21591,
    "name": "Specials",
    "overview": "",
    "poster_path": null,
    "season_number": 0,
    "vote_average": 0
  },
  {
    "air_date": "2005-04-13",
    "episode_count": 6,
    "id": 21590,
    "name": "Season 1",
    "overview": "",
    "poster_path": "/keFARZE8NK3RcIuAGguhJcVwgx6.jpg",
    "season_number": 1,
    "vote_average": 0
  }
],
"spoken_languages": [
  {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
  }
],
"status": "Ended",
"tagline": "",
"type": "Miniseries",
"vote_average": 5.7,
"vote_count": 29
});
});

router.get('/tv/:series_id/account_states', function(req, res, next) {
  res.json({
"id": 12111,
"favorite": false,
"rated": false,
"watchlist": false
});
});

router.get('/tv/:series_id/aggregate_credits', function(req, res, next) {
  res.json({
"cast": [
  {
    "adult": false,
    "gender": 2,
    "id": 101975,
    "known_for_department": "Acting",
    "name": "William Jordan",
    "original_name": "William Jordan",
    "popularity": 5.307,
    "profile_path": "/6PtjpLaRV1aTG9AwrrrcQIKBfjg.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757294",
        "character": "",
        "episode_count": 26
      }
    ],
    "total_episode_count": 26,
    "order": 0
  },
  {
    "adult": false,
    "gender": 2,
    "id": 114961,
    "known_for_department": "Acting",
    "name": "Olan Soule",
    "original_name": "Olan Soule",
    "popularity": 15.06,
    "profile_path": "/eRfeczVvHN08blaAJIiWv2Kav1H.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756eee",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 500
  },
  {
    "adult": false,
    "gender": 1,
    "id": 83457,
    "known_for_department": "Acting",
    "name": "Donna Douglas",
    "original_name": "Donna Douglas",
    "popularity": 8.294,
    "profile_path": "/m81iRXtKxiNjyztDW3Cyde7lFMF.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756fda",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 501
  },
  {
    "adult": false,
    "gender": 2,
    "id": 160969,
    "known_for_department": "Acting",
    "name": "Lou Frizzell",
    "original_name": "Lou Frizzell",
    "popularity": 8.507,
    "profile_path": "/72Q2TeunDiewxaiixBp1BVpjmu2.jpg",
    "roles": [
      {
        "credit_id": "52a0733219c295119a08202c",
        "character": "",
        "episode_count": 2
      }
    ],
    "total_episode_count": 2,
    "order": 516
  },
  {
    "adult": false,
    "gender": 1,
    "id": 21458,
    "known_for_department": "Acting",
    "name": "Joan Freeman",
    "original_name": "Joan Freeman",
    "popularity": 10.905,
    "profile_path": "/vc1EIOhvqo6tcLqigF1xFPYdf2g.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756f81",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 502
  },
  {
    "adult": false,
    "gender": 2,
    "id": 10226,
    "known_for_department": "Acting",
    "name": "David Hedison",
    "original_name": "David Hedison",
    "popularity": 7.034,
    "profile_path": "/lLlEmLQQs61H0d4htGoba2p6qVe.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa757053",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 503
  },
  {
    "adult": false,
    "gender": 2,
    "id": 27012,
    "known_for_department": "Acting",
    "name": "Robert Ginty",
    "original_name": "Robert Ginty",
    "popularity": 4.336,
    "profile_path": "/jpPeOev6AMggRqlwikBOz4emSs.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa757076",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 504
  },
  {
    "adult": false,
    "gender": 1,
    "id": 38226,
    "known_for_department": "Acting",
    "name": "Caroline McWilliams",
    "original_name": "Caroline McWilliams",
    "popularity": 4.972,
    "profile_path": "/b3LbPRaeqTWP1YBZQzD3mDmZvGT.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa7570b0",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 505
  },
  {
    "adult": false,
    "gender": 2,
    "id": 51518,
    "known_for_department": "Acting",
    "name": "Allan Miller",
    "original_name": "Allan Miller",
    "popularity": 6.823,
    "profile_path": "/1PJ8Px5HKxhZZuLqtEazknCjCXr.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa7570f7",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 506
  },
  {
    "adult": false,
    "gender": 2,
    "id": 44728,
    "known_for_department": "Acting",
    "name": "Cameron Mitchell",
    "original_name": "Cameron Mitchell",
    "popularity": 9.59,
    "profile_path": "/niLc67b00QIa0oDWp47mXcv319e.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757132",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 507
  },
  {
    "adult": false,
    "gender": 1,
    "id": 41227,
    "known_for_department": "Acting",
    "name": "Anne Lockhart",
    "original_name": "Anne Lockhart",
    "popularity": 12.515,
    "profile_path": "/2S2Fg2ICuiEMUod9SFnOp2usJqX.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa757166",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 508
  },
  {
    "adult": false,
    "gender": 2,
    "id": 65508,
    "known_for_department": "Acting",
    "name": "James Olson",
    "original_name": "James Olson",
    "popularity": 5.051,
    "profile_path": "/poeGcRZH9GXvNCfqQn66STpMqhz.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571b2",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 509
  },
  {
    "adult": false,
    "gender": 2,
    "id": 140345,
    "known_for_department": "Acting",
    "name": "Mills Watson",
    "original_name": "Mills Watson",
    "popularity": 8.664,
    "profile_path": "/40HK1yTiHV4mwGyqX6CvYLX2lTP.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756f00",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 510
  },
  {
    "adult": false,
    "gender": 2,
    "id": 9601,
    "known_for_department": "Acting",
    "name": "Kenneth Mars",
    "original_name": "Kenneth Mars",
    "popularity": 9.872,
    "profile_path": "/5ueZGenOr87KfMENzffdtGn3AQ9.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756f93",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 511
  },
  {
    "adult": false,
    "gender": 1,
    "id": 153510,
    "known_for_department": "Acting",
    "name": "Marlyn Mason",
    "original_name": "Marlyn Mason",
    "popularity": 6.494,
    "profile_path": "/qGC0eYEWK0sr0wkDHrrI87MvMkx.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571c4",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 512
  },
  {
    "adult": false,
    "gender": 2,
    "id": 86369,
    "known_for_department": "Acting",
    "name": "Parley Baer",
    "original_name": "Parley Baer",
    "popularity": 13.607,
    "profile_path": "/a6b9pONRmi03ggBpHpevyGokxgJ.jpg",
    "roles": [
      {
        "credit_id": "52581cdd760ee36aaa756f12",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 513
  },
  {
    "adult": false,
    "gender": 2,
    "id": 157661,
    "known_for_department": "Acting",
    "name": "Edward Winter",
    "original_name": "Edward Winter",
    "popularity": 14.35,
    "profile_path": "/5i5G10prRVSV5ZFRwsY1cseEPgK.jpg",
    "roles": [
      {
        "credit_id": "52581cde760ee36aaa756fa5",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 514
  },
  {
    "adult": false,
    "gender": 2,
    "id": 40464,
    "known_for_department": "Acting",
    "name": "Cal Bellini",
    "original_name": "Cal Bellini",
    "popularity": 4.4,
    "profile_path": "/3GxcoD9KSB3MwuEZ3w4lQ8EeS7o.jpg",
    "roles": [
      {
        "credit_id": "52581cdf760ee36aaa7571d6",
        "character": "",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 515
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2031009,
    "known_for_department": "Acting",
    "name": "Hank Stohl",
    "original_name": "Hank Stohl",
    "popularity": 8.492,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "5ae39e8492514149e2004fb5",
        "character": "Pilot",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 517
  },
  {
    "adult": false,
    "gender": 2,
    "id": 2590971,
    "known_for_department": "Acting",
    "name": "Scott Mulhern",
    "original_name": "Scott Mulhern",
    "popularity": 6.532,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "6022fd6c9979d2003de43d4c",
        "character": "Sgt. Eddie Larkin",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 518
  },
  {
    "adult": false,
    "gender": 2,
    "id": 3845671,
    "known_for_department": "Acting",
    "name": "David Yanez",
    "original_name": "David Yanez",
    "popularity": 3.176,
    "profile_path": null,
    "roles": [
      {
        "credit_id": "63a96b3f15a4a10082d29704",
        "character": "Pauley Ramirez",
        "episode_count": 1
      }
    ],
    "total_episode_count": 1,
    "order": 519
  }
],
"crew": [
  {
    "adult": false,
    "gender": 2,
    "id": 97959,
    "known_for_department": "Directing",
    "name": "Dennis Donnelly",
    "original_name": "Dennis Donnelly",
    "popularity": 3.119,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa756fbb",
        "job": "Director",
        "episode_count": 4
      }
    ],
    "department": "Directing",
    "total_episode_count": 4
  },
  {
    "adult": false,
    "gender": 2,
    "id": 104019,
    "known_for_department": "Directing",
    "name": "John Patterson",
    "original_name": "John Patterson",
    "popularity": 9.256,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa7570d8",
        "job": "Director",
        "episode_count": 3
      }
    ],
    "department": "Directing",
    "total_episode_count": 3
  },
  {
    "adult": false,
    "gender": 0,
    "id": 1219262,
    "known_for_department": "Directing",
    "name": "Sigmund Neufeld Jr.",
    "original_name": "Sigmund Neufeld Jr.",
    "popularity": 7.463,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756f3f",
        "job": "Director",
        "episode_count": 2
      }
    ],
    "department": "Directing",
    "total_episode_count": 2
  },
  {
    "adult": false,
    "gender": 2,
    "id": 15625,
    "known_for_department": "Acting",
    "name": "Lawrence Dobkin",
    "original_name": "Lawrence Dobkin",
    "popularity": 10.421,
    "profile_path": "/ofKRDUDiEv4hxxjAF6scXP26tsh.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7571fd",
        "job": "Director",
        "episode_count": 1
      }
    ],
    "department": "Directing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 18907,
    "known_for_department": "Directing",
    "name": "Richard Quine",
    "original_name": "Richard Quine",
    "popularity": 6.148,
    "profile_path": "/6GgNKUTs8ElPPqi3FC7Jg3GUQd8.jpg",
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756ecf",
        "job": "Director",
        "episode_count": 1
      }
    ],
    "department": "Directing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1214371,
    "known_for_department": "Writing",
    "name": "Gene Levitt",
    "original_name": "Gene Levitt",
    "popularity": 6.574,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7572d0",
        "job": "Producer",
        "episode_count": 26
      }
    ],
    "department": "Production",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 8634,
    "known_for_department": "Acting",
    "name": "Jack Webb",
    "original_name": "Jack Webb",
    "popularity": 4.994,
    "profile_path": "/4X6wbZ9wDqVrpDP3WvIJZBLPsLh.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa7572ba",
        "job": "Producer",
        "episode_count": 26
      }
    ],
    "department": "Production",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 10077,
    "known_for_department": "Writing",
    "name": "Harold Jack Bloom",
    "original_name": "Harold Jack Bloom",
    "popularity": 3.202,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdd760ee36aaa756ebb",
        "job": "Writer",
        "episode_count": 26
      }
    ],
    "department": "Writing",
    "total_episode_count": 26
  },
  {
    "adult": false,
    "gender": 2,
    "id": 14840,
    "known_for_department": "Writing",
    "name": "T.S. Cook",
    "original_name": "T.S. Cook",
    "popularity": 4.659,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cde760ee36aaa75710b",
        "job": "Writer",
        "episode_count": 2
      }
    ],
    "department": "Writing",
    "total_episode_count": 2
  },
  {
    "adult": false,
    "gender": 2,
    "id": 19477,
    "known_for_department": "Writing",
    "name": "Robert C. Dennis",
    "original_name": "Robert C. Dennis",
    "popularity": 9.635,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa757191",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 1213036,
    "known_for_department": "Writing",
    "name": "Michael Donovan",
    "original_name": "Michael Donovan",
    "popularity": 7.531,
    "profile_path": null,
    "jobs": [
      {
        "credit_id": "57fad8069251414479001e1d",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  },
  {
    "adult": false,
    "gender": 2,
    "id": 47756,
    "known_for_department": "Production",
    "name": "Buck Houghton",
    "original_name": "Buck Houghton",
    "popularity": 1.075,
    "profile_path": "/awYLIMQA0KiIfMsFvmipseorWZv.jpg",
    "jobs": [
      {
        "credit_id": "52581cdf760ee36aaa75721e",
        "job": "Writer",
        "episode_count": 1
      }
    ],
    "department": "Writing",
    "total_episode_count": 1
  }
],
"id": 12111
});
});

router.get('/tv/:series_id/alternative_titles', function(req, res, next) {
  res.json({
"id": 12111,
"results": [
  {
    "iso_3166_1": "US",
    "title": "Project UFO",
    "type": "Alias"
  }
]
});
});

router.get('/tv/:series_id/changes', function(req, res, next) {
  res.json({
"changes": []
});
});

router.get('/tv/:series_id/content_ratings', function(req, res, next) {
  res.json({
"results": [],
"id": 101970
});
});

router.get('/tv/:series_id/credits', function(req, res, next) {
  res.json({
"cast": [],
"crew": [],
"id": 101970
});
});

router.get('/tv/:series_id/episode_groups', function(req, res, next) {
  res.json({
"results": [],
"id": 12751
});
});


router.get('/tv/:series_id/images', function(req, res, next) {
  res.json({
"backdrops": [
  {
    "aspect_ratio": 1.778,
    "height": 720,
    "iso_639_1": null,
    "file_path": "/4Dr7rvNyLmiHBvd2cpFCKCkreGF.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 1280
  },
  {
    "aspect_ratio": 1.778,
    "height": 720,
    "iso_639_1": null,
    "file_path": "/zcBS6kukiRZOBJRQDCLE4dt17a4.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 1280
  }
],
"id": 12751,
"logos": [],
"posters": [
  {
    "aspect_ratio": 0.709,
    "height": 1500,
    "iso_639_1": "en",
    "file_path": "/4dOlxvavpgpDyAFmLNIre1JmcCf.jpg",
    "vote_average": 5.172,
    "vote_count": 1,
    "width": 1063
  },
  {
    "aspect_ratio": 0.68,
    "height": 1000,
    "iso_639_1": null,
    "file_path": "/u3B62sum2inP3ut1v4bX3oR6Msy.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 680
  },
  {
    "aspect_ratio": 0.68,
    "height": 1000,
    "iso_639_1": "fr",
    "file_path": "/hPviX1p4VGxILnlvQUk24p123ez.jpg",
    "vote_average": 0,
    "vote_count": 0,
    "width": 680
  }
]
});
});

router.get('/tv/:series_id/keywords', function(req, res, next) {
  res.json({
"id": 12751,
"results": []
});
});

router.get('/tv/latest', function(req, res, next) {
  res.json({
"adult": false,
"backdrop_path": null,
"created_by": [],
"episode_run_time": [],
"first_air_date": "",
"genres": [],
"homepage": "",
"id": 239901,
"in_production": true,
"languages": [],
"last_air_date": null,
"last_episode_to_air": null,
"name": "The Legend of Rosy Clouds",
"next_episode_to_air": null,
"networks": [],
"number_of_episodes": 1,
"number_of_seasons": 1,
"origin_country": [
  "CN"
],
"original_language": "zh",
"original_name": "云秀行",
"overview": "~~ Adapted from the novel series ”Saiunkoku Monogatari” (彩雲国物語) by Yukino Sai (雪乃紗衣).",
"popularity": 0,
"poster_path": null,
"production_companies": [],
"production_countries": [],
"seasons": [
  {
    "air_date": null,
    "episode_count": 1,
    "id": 366477,
    "name": "Season 1",
    "overview": "",
    "poster_path": null,
    "season_number": 1,
    "vote_average": 0
  }
],
"spoken_languages": [],
"status": "Returning Series",
"tagline": "",
"type": "Scripted",
"vote_average": 0,
"vote_count": 0
});
});

router.get('/tv/:series_id/recommendations', function(req, res, next) {
  res.json({
"page": 1,
"results": [
  {
    "adult": false,
    "backdrop_path": "/fmPo20ZTzxNketxL2jt6ZX6KSPi.jpg",
    "id": 2384,
    "name": "Knight Rider",
    "original_language": "en",
    "original_name": "Knight Rider",
    "overview": "Michael Long, an undercover police officer, is shot while investigating a case and left for dead by his assailants. He is rescued by Wilton Knight, a wealthy, dying millionaire and inventor who arranges life-saving surgery, including a new face and a new identity--that of Michael Knight. Michael is then given a special computerized and indestructible car called the Knight Industries Two Thousand (nicknamed KITT), and a mission: apprehend criminals who are beyond the reach of the law. The series depicts Michael's exploits as he and KITT battle the forces of evil on behalf of the Foundation for Law and Government.",
    "poster_path": "/t57NXzTrwp5rnPXiaX4BThrDxt1.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      18,
      10765
    ],
    "popularity": 284.25,
    "first_air_date": "1982-09-26",
    "vote_average": 7.53,
    "vote_count": 1148,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/wkE9IUAKemdWGWOad3D0jTi0LVi.jpg",
    "id": 14141,
    "name": "V",
    "original_language": "en",
    "original_name": "V",
    "overview": "Fifty spaceships, each three miles across, hover ominously above Earth's major cities. The Visitors that emerge are humanlike in appearance and extend the hand of friendship. Our planet's resources are just what these aliens need to survive. And for its future survival, unsuspecting humankind will need... a miracle!",
    "poster_path": "/fV5U1eWPC8Dvxq0BUIoF7cvBK1o.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      18,
      10765
    ],
    "popularity": 34.204,
    "first_air_date": "1983-05-01",
    "vote_average": 7.734,
    "vote_count": 858,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/vNnLAKmoczRlNarxyGrrw0KSOeX.jpg",
    "id": 1412,
    "name": "Arrow",
    "original_language": "en",
    "original_name": "Arrow",
    "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
    "poster_path": "/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
    "media_type": "tv",
    "genre_ids": [
      80,
      18,
      9648,
      10759
    ],
    "popularity": 318.977,
    "first_air_date": "2012-10-10",
    "vote_average": 6.798,
    "vote_count": 5619,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
    "id": 82856,
    "name": "The Mandalorian",
    "original_language": "en",
    "original_name": "The Mandalorian",
    "overview": "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
    "poster_path": "/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      10759,
      18
    ],
    "popularity": 181.254,
    "first_air_date": "2019-11-12",
    "vote_average": 8.5,
    "vote_count": 9455,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/t0RbyVHtPMkDGkQ7EAQpAf9syMp.jpg",
    "id": 1516,
    "name": "The A-Team",
    "original_language": "en",
    "original_name": "The A-Team",
    "overview": "A fictional group of ex-United States Army Special Forces personnel work as soldiers of fortune while on the run from the Army after being branded as war criminals for a crime they didn't commit.",
    "poster_path": "/p2qWJJ7Wyaq2xvgIHuBw4zVNBij.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759
    ],
    "popularity": 224.301,
    "first_air_date": "1983-01-23",
    "vote_average": 7.472,
    "vote_count": 879,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/s0w8JbuNNxL1YgaHeDWih12C3jG.jpg",
    "id": 63926,
    "name": "One-Punch Man",
    "original_language": "ja",
    "original_name": "ワンパンマン",
    "overview": "Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong — even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?",
    "poster_path": "/bS6GeCRInMRl6oQN6czCqPFdcHN.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      16,
      35
    ],
    "popularity": 106.468,
    "first_air_date": "2015-10-05",
    "vote_average": 8.381,
    "vote_count": 3250,
    "origin_country": [
      "JP"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/rX5hvSRB2k4YoIvRg6Zky52rWk0.jpg",
    "id": 63247,
    "name": "Westworld",
    "original_language": "en",
    "original_name": "Westworld",
    "overview": "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.",
    "poster_path": "/8MfgyFHf7XEboZJPZXCIDqqiz6e.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      37
    ],
    "popularity": 213.763,
    "first_air_date": "2016-10-02",
    "vote_average": 8.071,
    "vote_count": 5018,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/fHnxEuTV8oSA6uMKQdEbOBmAzn8.jpg",
    "id": 10545,
    "name": "True Blood",
    "original_language": "en",
    "original_name": "True Blood",
    "overview": "Thanks to a Japanese scientist's invention of synthetic, blood vampires have progressed from legendary monsters to fellow citizens overnight. And while humans have been safely removed from the menu, many remain apprehensive about these creatures coming out of the coffin. Religious leaders, government officials, and vampire fundamentalists around the world have chosen their sides, but in the small Louisiana town of Bon Temps, the jury is still out.",
    "poster_path": "/ktEp6fzL4xzCWsSVtrcH8JaQNQy.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      18,
      9648
    ],
    "popularity": 301.148,
    "first_air_date": "2008-09-07",
    "vote_average": 7.614,
    "vote_count": 1682,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/1F2RnXLc0fmRt7iWfBK4mNVsjno.jpg",
    "id": 34524,
    "name": "Teen Wolf",
    "original_language": "en",
    "original_name": "Teen Wolf",
    "overview": "Scott McCall, a high school student living in the town of Beacon Hills has his life drastically changed when he's bitten by a werewolf, becoming one himself. He must henceforth learn to balance his problematic new identity with his day-to-day teenage life. The following characters are instrumental to his struggle: Stiles, his best friend; Allison, his love interest who comes from a family of werewolf hunters; and Derek, a mysterious werewolf with a dark past. Throughout the series, he strives to keep his loved ones safe while maintaining normal relationships with them.",
    "poster_path": "/fmlMmxSBgPEunHS5gjokIej048g.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      18
    ],
    "popularity": 262.933,
    "first_air_date": "2011-06-05",
    "vote_average": 8.563,
    "vote_count": 3859,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/mc3rG5M9dFVjMfaCFNfbD5gu2pK.jpg",
    "id": 1433,
    "name": "American Dad!",
    "original_language": "en",
    "original_name": "American Dad!",
    "overview": "The series focuses on an eccentric motley crew that is the Smith family and their three housemates: Father, husband, and breadwinner Stan Smith; his better half housewife, Francine Smith; their college-aged daughter, Hayley Smith; and their high-school-aged son, Steve Smith. Outside of the Smith family, there are three additional main characters, including Hayley's boyfriend turned husband, Jeff Fischer; the family's man-in-a-goldfish-body pet, Klaus; and most notably the family's zany alien, Roger, who is full of masquerades, brazenness, and shocking antics.",
    "poster_path": "/xnFFz3etm1vftF0ns8RMHA8XdqT.jpg",
    "media_type": "tv",
    "genre_ids": [
      16,
      35
    ],
    "popularity": 505.464,
    "first_air_date": "2005-02-06",
    "vote_average": 6.958,
    "vote_count": 1899,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/5mXZ0sdVPfj4bSkhPSWwTX2LcM5.jpg",
    "id": 4629,
    "name": "Stargate SG-1",
    "original_language": "en",
    "original_name": "Stargate SG-1",
    "overview": "The story of Stargate SG-1 begins about a year after the events of the feature film, when the United States government learns that an ancient alien device called the Stargate can access a network of such devices on a multitude of planets. SG-1 is an elite Air Force special operations team, one of more than two dozen teams from Earth who explore the galaxy and defend against alien threats such as the Goa'uld, Replicators, and the Ori.",
    "poster_path": "/dQjmI7XxI47v8IM2MUysHG0LuU2.jpg",
    "media_type": "tv",
    "genre_ids": [
      10765,
      10759,
      9648
    ],
    "popularity": 325.881,
    "first_air_date": "1997-07-27",
    "vote_average": 8.248,
    "vote_count": 1389,
    "origin_country": [
      "CA",
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/wNKwOtq27yfN13SKKV07NwkpBA3.jpg",
    "id": 80752,
    "name": "See",
    "original_language": "en",
    "original_name": "See",
    "overview": "A virus has decimated humankind. Those who survived emerged blind. Centuries later when twins are born with the mythic ability to see, their father must protect his tribe against a threatened queen.",
    "poster_path": "/1kZdBrH1C07Zf2131QUpmju3kO6.jpg",
    "media_type": "tv",
    "genre_ids": [
      18,
      10765,
      10759
    ],
    "popularity": 149.778,
    "first_air_date": "2019-11-01",
    "vote_average": 8.179,
    "vote_count": 2211,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/2PrYnQR8YPei5vCVRwJXnwMqMyR.jpg",
    "id": 61889,
    "name": "Marvel's Daredevil",
    "original_language": "en",
    "original_name": "Marvel's Daredevil",
    "overview": "Lawyer-by-day Matt Murdock uses his heightened senses from being blinded as a young boy to fight crime at night on the streets of Hell’s Kitchen as Daredevil.",
    "poster_path": "/p7oImOiZAUF4DCreZuE11hWJRyA.jpg",
    "media_type": "tv",
    "genre_ids": [
      80,
      18,
      10759
    ],
    "popularity": 144.474,
    "first_air_date": "2015-04-10",
    "vote_average": 8.2,
    "vote_count": 4097,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/7PYAUaJzzUVxS4xiJHFe338vJd1.jpg",
    "id": 67466,
    "name": "Marvel's Runaways",
    "original_language": "en",
    "original_name": "Marvel's Runaways",
    "overview": "Every teenager thinks their parents are evil. What if you found out they actually were? Six diverse teenagers who can barely stand each other must unite against a common foe – their parents.",
    "poster_path": "/zceMrfO17AQkeWJZNra4O90s1vE.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      80,
      18,
      10765
    ],
    "popularity": 103.038,
    "first_air_date": "2017-11-21",
    "vote_average": 7.458,
    "vote_count": 826,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/cjvyqIvCKQtUzd3J5TbVnCFbSNZ.jpg",
    "id": 240,
    "name": "Jackie Chan Adventures",
    "original_language": "en",
    "original_name": "Jackie Chan Adventures",
    "overview": "Jackie Chan teams up in this animé-style adventure with his 11-year-old niece, Jade, traveling the globe to locate a dozen magical talismans before the sinister Dark Hand does. Helping Jackie and Jade is Uncle, a cantankerous but wise antiquities expert. Though officially Jackie works as an archaeologist, in reality he also assists Captain Black, leader of the covert police squad Section 13.",
    "poster_path": "/by2GTFpd2BQ5uJxWPlfcmfrNrfB.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      16,
      35,
      10765
    ],
    "popularity": 112.201,
    "first_air_date": "2000-09-09",
    "vote_average": 8.2,
    "vote_count": 744,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/2sjy8Tu8PJGFQI4Foz4682qk8Mw.jpg",
    "id": 1620,
    "name": "CSI: Miami",
    "original_language": "en",
    "original_name": "CSI: Miami",
    "overview": "CSI: Miami follows Crime Scene Investigators working for the Miami-Dade Police Department as they use physical evidence, similar to their Las Vegas counterparts, to solve grisly murders. The series mixes deduction, gritty subject matter, and character-driven drama in the same vein as the original series in the CSI franchise, except that the Miami CSIs are cops first, scientists second.",
    "poster_path": "/pNW64pjaHvf6purNaFhq4SHYRfl.jpg",
    "media_type": "tv",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "popularity": 358.226,
    "first_air_date": "2002-09-23",
    "vote_average": 7.745,
    "vote_count": 1481,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/q18TcyP7w8yS44Sp6jW7kc3Buvm.jpg",
    "id": 62650,
    "name": "Chicago Med",
    "original_language": "en",
    "original_name": "Chicago Med",
    "overview": "An emotional thrill ride through the day-to-day chaos of the city's most explosive hospital and the courageous team of doctors who hold it together. They will tackle unique new cases inspired by topical events, forging fiery relationships in the pulse-pounding pandemonium of the emergency room.",
    "poster_path": "/gHP1tbA9XZ8rQTwgNpNKP8p3H9Z.jpg",
    "media_type": "tv",
    "genre_ids": [
      18
    ],
    "popularity": 261.174,
    "first_air_date": "2015-11-17",
    "vote_average": 8.318,
    "vote_count": 1027,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/lmlsqpAfDZnZumcFhbsTrOy9uNZ.jpg",
    "id": 84661,
    "name": "The Outsider",
    "original_language": "en",
    "original_name": "The Outsider",
    "overview": "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
    "poster_path": "/aMiPwPQjQI1EZN3xP2V0sSU37dc.jpg",
    "media_type": "tv",
    "genre_ids": [
      9648,
      18,
      80
    ],
    "popularity": 59.165,
    "first_air_date": "2020-01-12",
    "vote_average": 7.376,
    "vote_count": 1286,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/tqb56e4o7AMzyXZJF086sgkeqcb.jpg",
    "id": 4357,
    "name": "Mission: Impossible",
    "original_language": "en",
    "original_name": "Mission: Impossible",
    "overview": "Mission: Impossible is an American television series that was created and initially produced by Bruce Geller. It chronicles the missions of a team of secret government agents known as the Impossible Missions Force. In the first season, the team is led by Dan Briggs, played by Steven Hill; Jim Phelps, played by Peter Graves, takes charge for the remaining seasons. A hallmark of the series shows Briggs or Phelps receiving his instructions on a recording that then self-destructs, followed by the theme music composed by Lalo Schifrin.\n\nThe series aired on the CBS network from September 1966 to March 1973, then returned to television for two seasons on ABC, from 1988 to 1990, retaining only Graves in the cast. It later inspired a popular series of theatrical motion pictures starring Tom Cruise, beginning in 1996.",
    "poster_path": "/bAnCcwe70IXHRwUgsRJT4ZlQ47o.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      80,
      18,
      9648
    ],
    "popularity": 119.465,
    "first_air_date": "1966-09-17",
    "vote_average": 7.629,
    "vote_count": 245,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/sSPmVRgKLTerdyLVHxmF38DURUl.jpg",
    "id": 7842,
    "name": "The Tom and Jerry Show",
    "original_language": "en",
    "original_name": "The Tom and Jerry Show",
    "overview": "The New Tom & Jerry Show is an animated television series produced for Saturday mornings by Hanna-Barbera Productions in association with Metro-Goldwyn-Mayer Television in 1975 for ABC based on the theatrical shorts and characters Tom and Jerry.",
    "poster_path": "/qO0aveHUNqKciN9hO5EvBQGtZ3d.jpg",
    "media_type": "tv",
    "genre_ids": [
      16,
      35,
      10762,
      10751
    ],
    "popularity": 76.689,
    "first_air_date": "1975-09-06",
    "vote_average": 7.692,
    "vote_count": 1026,
    "origin_country": [
      "US"
    ]
  },
  {
    "adult": false,
    "backdrop_path": "/qgbJ0AySKABiTXHrxOyOhkXQImz.jpg",
    "id": 1649,
    "name": "Sliders",
    "original_language": "en",
    "original_name": "Sliders",
    "overview": "In his basement in San Francisco, boy-genius Quinn Mallory unlocks the doorway to an infinite number of Earths. During a test run, Quinn invites co-worker Wade Welles and his teacher Professor Maximillian Arturo to see his new invention. But an increase in power and an early departure leave all three, plus a washed-up soul singer named Rembrandt \"Crying Man\" Brown, lost in a parallel world. Now they must \"slide\" from world to world, not only adapting to their changing surroundings, but also trying to get back to their world. Will they ever make it home?",
    "poster_path": "/9cBXIPl83fE2yQusoEt6vMpSjIJ.jpg",
    "media_type": "tv",
    "genre_ids": [
      10759,
      10765
    ],
    "popularity": 146.068,
    "first_air_date": "1995-03-22",
    "vote_average": 7.614,
    "vote_count": 390,
    "origin_country": [
      "US"
    ]
  }
],
"total_pages": 2,
"total_results": 40
});
});

router.get('/tv/:series_id/reviews', function(req, res, next) {
  res.json({
"id": 12751,
"page": 1,
"results": [],
"total_pages": 0,
"total_results": 0
});
});

router.get('/tv/:series_id/screened_theatrically', function(req, res, next) {
  res.json({
"id": 12751,
"results": []
});
});

router.get('/tv/:series_id/similar', function(req, res, next) {
  res.json({
"page": 1,
"results": [],
"total_pages": 1,
"total_results": 0
});
});

router.get('/tv/:series_id/translations', function(req, res, next) {
  res.json({
"id": 12751,
"translations": [
  {
    "iso_3166_1": "US",
    "iso_639_1": "en",
    "name": "English",
    "english_name": "English",
    "data": {
      "name": "",
      "overview": "Automan is an American science fiction superhero television series produced by Glen A. Larson. It aired for only 12 episodes on ABC between 1983 and 1984.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "BS",
    "iso_639_1": "bs",
    "name": "Bosanski",
    "english_name": "Bosnian",
    "data": {
      "name": "",
      "overview": "",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "IT",
    "iso_639_1": "it",
    "name": "Italiano",
    "english_name": "Italian",
    "data": {
      "name": "Automan",
      "overview": "Automan è una serie televisiva di fantascienza creata nel 1983 da Glen A. Larson. Si avvicina molto dal punto di vista visivo al film Tron della Disney grazie agli effetti speciali applicati al vestiario e ai mezzi di locomozione legati al protagonista. La serie venne mandata in onda per intero (13 episodi) dapprima su Italia 1 a partire dal 5 gennaio 1985 poi replicata nel 1986; negli anni novanta ne furono trasmessi solo alcuni episodi su Videomusic e successivamente su TMC2.\n\nLa serie è composta soltanto da una stagione di tredici episodi della durata di circa 50 minuti perché negli Stati Uniti non ebbe un successo tale da giustificare la produzione di altre stagioni.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "FR",
    "iso_639_1": "fr",
    "name": "Français",
    "english_name": "French",
    "data": {
      "name": "Automan",
      "overview": "Informaticien au sein de la police, Walter Nebicher n'est pas le flic le plus populaire de son service. Seule sa collègue Roxanne semble remarquer qu'il existe. Désireux de faire ses preuves, Walter créé Automan, un hologramme capable de contrôler la matière et de se transformer à l'infini en voiture, hélicoptère... Cet être électronique, rebaptisé \"Otto J. Mann\" pour le commun des mortels, va faire équipe avec Walter pour ses enquêtes !",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "ES",
    "iso_639_1": "es",
    "name": "Español",
    "english_name": "Spanish",
    "data": {
      "name": "Automan",
      "overview": "Serie de TV (1983-1984). Walter Nebicher es un experto programador y agente de la policía. Para dar batalla contra el crimen organizado, Walter ha generado una nueva forma de vida de \"energía\", a partir del desarrollo de una inteligencia artificial tan potente que es capaz de traer mundo real un holograma que se asemeja a \"Tron\": su cuerpo brilla con patrones geométricos en neón azul. Se llama Automan y se exhibe como un superhéroe con habilidades en el mundo real, pero falla por completo en las relaciones humanas. Para trasladarse por la ciudad, lo ayuda su poliédrico y diminuto compañero llamado Cursor, quien puede materializar un coche, un avión y un helicóptero. El Lamborghini Countach que conduce Automan sólo puede girar en ángulos rectos, debido a que Walter ha utilizado un algoritmo que sacó del juego PacMan. A causa de que requiere grandes cantidades de energía, Automan emerge por las noches, cuando baja el consume energético de la ciudad, y coopera con el Departamento de Policía.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "MX",
    "iso_639_1": "es",
    "name": "Español",
    "english_name": "Spanish",
    "data": {
      "name": "",
      "overview": "",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "HR",
    "iso_639_1": "hr",
    "name": "Hrvatski",
    "english_name": "Croatian",
    "data": {
      "name": "Automan",
      "overview": "Walter Nebicher je policajac. Također je stručnjak za računala. Razvio je vrlo sofisticirani hologram po imenu Automan, koji mu pomaže u borbi protiv kriminala. Automan ima pomoćnika po imenu Cursor koji može stvoriti holografske objekte kao što su automobil, helikopter ili bilo koji drugi objekt potreban Walteru ili Automanu u borbi protiv kriminala.",
      "homepage": "",
      "tagline": ""
    }
  },
  {
    "iso_3166_1": "DE",
    "iso_639_1": "de",
    "name": "Deutsch",
    "english_name": "German",
    "data": {
      "name": "",
      "overview": "Walter Nebicher ist Computerfachmann im Police Department von Los Angeles. Gerne würde er aktiv an der Verbrechensbekämpfung auf den Straßen teilnehmen, doch sein Chef, Captain Boyd, pfeift ihn ständig zurück, und auch die anderen Polizisten nehmen Walter eigentlich nicht so richtig ernst. Ausgleich findet der Computerfreak in seiner Freizeit, wo er Computerspiele kreiert. Seine wichtigste Erfindung dabei ist „Automan“, bei dem es sich um ein dreidimensionales Hologramm handelt, das sogar ohne Bildschirm sichtbar wird. Da Walter ihn als elektronischen Superdetektiv programmiert hat, ist Automan nun der unübertroffene Verbrechensbekämpfer. Wichtige Dienste leistet Automan bei der Jagd nach Verbrechern sein Helfer „Cursor“, ein kleines, leuchtendes Sechseck, das alles hervorbringen kann, was der elektronische Verbrecherschreck gerade braucht. So zum Beispiel Automans imposantes computergesteuertes Auto… (Text: TV München)",
      "homepage": "",
      "tagline": "Automan - Der Superdetektiv"
    }
  }
]
});
});

router.get('/tv/:series_id/videos', function(req, res, next) {

   if (req.params.series_id == 2230088801){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "1. Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
          "key": "Gg60vbmUmaY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088802){
      res.json({
      "id": 223008880102,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "2. RA No. 11648 - statutory rape",
          "key": "DjHwll-HpeM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088803){
      res.json({
      "id": 223008880103,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "3. bigamy, illegal marriage _ performance of illegal marriage",
          "key": "DwOJ4hULUyo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088804){
      res.json({
      "id": 223008880104,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "4 error in personae, aberatiu ictus, praeter intentionem",
          "key": "Su8MATkGkVs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088805){
      res.json({
      "id": 223008880105,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "5. death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder, discharge of firearm",
          "key": "o9UuV-1dM1I",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088806){
      res.json({
      "id": 223018880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "6. Impossible crime",
          "key": "k3jYl_Mvazs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088807){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "7. Stages of felony",
          "key": "0CNnZU1w9BU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088808){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "8. Plunder",
          "key": "NAON0E2jQak",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 2230088809){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "9. Treason, Rebellion, coup detat, sedition",
          "key": "CSIH-4gVgbM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888010){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "10. Violence against women RA No. 9262",
          "key": "VK4r7_g6RJE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888011){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "11. Amnesty and pardon",
          "key": "fUK67vTHUDM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888012){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "12. Probation and community service",
          "key": "gqxQlZG22hk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888013){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "13. Three-fold rule and GCTA",
          "key": "UMQ0DySDM4E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888014){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "14. Principal, accomplice, accessory, fencing, obstruction of justice 1",
          "key": "l1G9L8dF6zQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888015){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "15. trafficking in person, child trafficking, child pornography, cyber sex",
          "key": "2NVM2K2ucJo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888016){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "16. special complex crime",
          "key": "fyFQiuUbixA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888017){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "17. Rape with homicide, robbery with homicide or rape",
          "key": "br1MFi8_rJg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888018){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "18. Kidnapping with homicide or rape",
          "key": "88B31z7Z29w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888019){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "19. Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
          "key": "nYkSb-Px7l8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888020){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "20. Theft and estafa",
          "key": "BGo08N73ARs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888021){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "21. Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
          "key": "dAHoNOPs7iQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888022){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "22. falsification, malversation, estafa, theft",
          "key": "WJ51r1JfU0k",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888023){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "23. Terrorism",
          "key": "ue5KIyFCXlY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888024){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "24. Generality and territoriality 1",
          "key": "-rxaYsUN3YY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888025){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "25. Territoriality, repeal and RA 10951-001_2",
          "key": "Xau1OihxAeA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888026){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "26. Culpa and mistake of fact",
          "key": "VRkwFCIpkq0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888027){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "27.  Penalties special law",
          "key": "HScUS6yhGhI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888028){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "28. Penalties for special law",
          "key": "81r6XN8OcQI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888029){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "29. Lawas principle",
          "key": "aEGVWsTneFI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888030){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "30. Carnapping and piracy",
          "key": "aa3iL9ZgadA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888031){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "31. Brigandage and hijacking",
          "key": "-SaHpgGlAac",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888032){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "32. Syndicated estafa",
          "key": "UryS3aRqRrY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888033){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "33. Voyuerism",
          "key": "GTxLKdTj2WQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888034){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "34. Hazing",
          "key": "p4Ehr1fxAbI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888035){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "35. Cyber-libel",
          "key": "PeRi98ktHpE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888036){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "36. complex crime",
          "key": "ftJ16-7QKnU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888037){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "37. Delito continuado",
          "key": "TbUsPpK71Rk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.series_id == 22300888038){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "38. Delito continuado 2",
          "key": "Gb_fIzBMLf0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
});

router.get('/tv/:series_id/watch/providers', function(req, res, next) {
  res.json({
"id": 12751,
"results": {}
});
});

router.get('/tv/episode_group/:tv_episode_group_id', function(req, res, next) {
  res.json({
"success": false,
"status_code": 34,
"status_message": "The resource you requested could not be found."
});
});

router.get('/movie/:movie_id/lists', function(req, res, next) {
  res.json({
"id": 343611,
"page": 1,
"results": [
  {
    "description": "Select a title for trailers and more.\r\n\r\nCain Cinema features a 4K UHD picture on a 120\" (16:9) screen, and a 7.2.4 Dolby Atmos audio experience. ",
    "favorite_count": 0,
    "id": 7081593,
    "item_count": 1161,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Now Showing at Cain Cinema",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8238235,
    "item_count": 5446,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "My Movie Library",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8168597,
    "item_count": 10936,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 103747,
    "item_count": 1082,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Grandma",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7102641,
    "item_count": 466,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Seen movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7144,
    "item_count": 9948,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Latest Releases",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8205193,
    "item_count": 576,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "***Acțiune***",
    "poster_path": null
  },
  {
    "description": "Master List In Progress",
    "favorite_count": 0,
    "id": 51108,
    "item_count": 10311,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "My Movies",
    "poster_path": null
  },
  {
    "description": "I watch way too much but not everything till the end",
    "favorite_count": 0,
    "id": 142064,
    "item_count": 2392,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watched",
    "poster_path": null
  },
  {
    "description": "bombs, guns, exitement  ",
    "favorite_count": 0,
    "id": 145374,
    "item_count": 426,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Action ",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8234057,
    "item_count": 2355,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Favorite Actresses",
    "poster_path": null
  },
  {
    "description": "https://www.imdb.com/list/ls027244689/",
    "favorite_count": 0,
    "id": 7057475,
    "item_count": 1780,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "IMDB: 027244689 [Movies]",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 104711,
    "item_count": 1013,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "watched movies",
    "poster_path": null
  },
  {
    "description": "desc",
    "favorite_count": 0,
    "id": 63036,
    "item_count": 11143,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "2010-2018;US;All",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 78677,
    "item_count": 8035,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 8203611,
    "item_count": 29822,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "list7",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 21427,
    "item_count": 3008,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "All Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 32023,
    "item_count": 2611,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Ush Kino",
    "poster_path": null
  },
  {
    "description": "All the Great Movies I've Watched So Far",
    "favorite_count": 0,
    "id": 7092449,
    "item_count": 712,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watched Movies",
    "poster_path": null
  },
  {
    "description": "",
    "favorite_count": 0,
    "id": 7113976,
    "item_count": 1035,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "list_type": "movie",
    "name": "Watchlist",
    "poster_path": null
  }
],
"total_pages": 18,
"total_results": 346
});
});

router.get('/tv/:tv_id/season/1', function(req, res, next) {
  
   if (req.params.tv_id == 2230088801){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "1. Robbery, kidnapping, arbitrary detention, unlawful arrest, arson",
          "key": "Gg60vbmUmaY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088802){
      res.json({
      "id": 223008880102,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "2. RA No. 11648 - statutory rape",
          "key": "DjHwll-HpeM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088803){
      res.json({
      "id": 223008880103,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "3. bigamy, illegal marriage _ performance of illegal marriage",
          "key": "DwOJ4hULUyo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088804){
      res.json({
      "id": 223008880104,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "4 error in personae, aberatiu ictus, praeter intentionem",
          "key": "Su8MATkGkVs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088805){
      res.json({
      "id": 223008880105,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "5. death under exceptional circumstance, tumultous affray, abortion, infanticide, parricide, murder, discharge of firearm",
          "key": "o9UuV-1dM1I",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088806){
      res.json({
      "id": 223018880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "6. Impossible crime",
          "key": "k3jYl_Mvazs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088807){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "7. Stages of felony",
          "key": "0CNnZU1w9BU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088808){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "8. Plunder",
          "key": "NAON0E2jQak",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 2230088809){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "9. Treason, Rebellion, coup detat, sedition",
          "key": "CSIH-4gVgbM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888010){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "10. Violence against women RA No. 9262",
          "key": "VK4r7_g6RJE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888011){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "11. Amnesty and pardon",
          "key": "fUK67vTHUDM",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888012){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "12. Probation and community service",
          "key": "gqxQlZG22hk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888013){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "13. Three-fold rule and GCTA",
          "key": "UMQ0DySDM4E",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888014){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "14. Principal, accomplice, accessory, fencing, obstruction of justice 1",
          "key": "l1G9L8dF6zQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888015){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "15. trafficking in person, child trafficking, child pornography, cyber sex",
          "key": "2NVM2K2ucJo",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888016){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "16. special complex crime",
          "key": "fyFQiuUbixA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888017){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "17. Rape with homicide, robbery with homicide or rape",
          "key": "br1MFi8_rJg",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888018){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "18. Kidnapping with homicide or rape",
          "key": "88B31z7Z29w",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888019){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "19. Kidnapping with rape, rape through forcible abduction, kidnapping and robbery",
          "key": "nYkSb-Px7l8",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888020){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "20. Theft and estafa",
          "key": "BGo08N73ARs",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888021){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "21. Rape, sexual assault, acts of lasciviouness, sexual abuse, child prostituiton, child cohabitation",
          "key": "dAHoNOPs7iQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888022){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "22. falsification, malversation, estafa, theft",
          "key": "WJ51r1JfU0k",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888023){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "23. Terrorism",
          "key": "ue5KIyFCXlY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888024){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "24. Generality and territoriality 1",
          "key": "-rxaYsUN3YY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888025){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "25. Territoriality, repeal and RA 10951-001_2",
          "key": "Xau1OihxAeA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888026){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "26. Culpa and mistake of fact",
          "key": "VRkwFCIpkq0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888027){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "27.  Penalties special law",
          "key": "HScUS6yhGhI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888028){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "28. Penalties for special law",
          "key": "81r6XN8OcQI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888029){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "29. Lawas principle",
          "key": "aEGVWsTneFI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888030){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "30. Carnapping and piracy",
          "key": "aa3iL9ZgadA",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888031){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "31. Brigandage and hijacking",
          "key": "-SaHpgGlAac",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888032){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "32. Syndicated estafa",
          "key": "UryS3aRqRrY",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888033){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "33. Voyuerism",
          "key": "GTxLKdTj2WQ",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888034){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "34. Hazing",
          "key": "p4Ehr1fxAbI",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888035){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "35. Cyber-libel",
          "key": "PeRi98ktHpE",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888036){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "36. complex crime",
          "key": "ftJ16-7QKnU",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888037){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "37. Delito continuado",
          "key": "TbUsPpK71Rk",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
   if (req.params.tv_id == 22300888038){
      res.json({
      "id": 223008880101,
      "results": [
        {
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "name": "38. Delito continuado 2",
          "key": "Gb_fIzBMLf0",
          "site": "YouTube",
          "size": 480,
          "type": "Trailer",
          "official": false,
          "published_at": "2015-08-04T13:24:39.000Z",
          "id": "613bba4b322b2b0029644ad8"
        }
      ]
      });
    }
  
});

module.exports = router;
