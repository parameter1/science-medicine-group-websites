const cases = new Map([
  ['16254', 'https://my.drbicuspid.com/cases/4-year-old-boy-with-oral-lesion/'],
  ['16242', 'https://my.drbicuspid.com/cases/9-year-old-boy-with-mild-macrocephaly/'],
  ['16236', 'https://my.drbicuspid.com/cases/41-year-old-man-seen-for-recall-exam/'],
  ['16229', 'https://my.drbicuspid.com/cases/67-year-old-woman-with-facial-pain,-swelling/'],
  ['16087', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-abscess-and-discolored-anterior-teeth/'],
  ['16073', 'https://my.drbicuspid.com/cases/40-year-old-woman-with-lesion/'],
  ['16070', 'https://my.drbicuspid.com/cases/19-year-old-woman-undergoing-a-recall-exam/'],
  ['16065', 'https://my.drbicuspid.com/cases/An-8-year-old-girl-with-a-lip-mass/'],
  ['16064', 'https://my.drbicuspid.com/cases/20-year-old-man-with-gingival-lesion/'],
  ['14115', 'https://my.drbicuspid.com/cases/65-year-old-man-with-mandibular-growths/'],
  ['16053', 'https://my.drbicuspid.com/cases/7-year-old-girl-with-a-radiographic-finding/'],
  ['16044', 'https://my.drbicuspid.com/cases/8-year-old-boy-with-unusually-shaped-incisors-and-missing-teeth/'],
  ['15998', 'https://my.drbicuspid.com/cases/1-month-old-girl-with-mandibular-lesion/'],
  ['15997', 'https://my.drbicuspid.com/cases/8-year-old-boy-with-discolored-teeth/'],
  ['15984', 'https://my.drbicuspid.com/cases/3-day-old-newborn-with-emerging-teeth/'],
  ['15951', 'https://my.drbicuspid.com/cases/49-year-old-woman-with-left-maxilla-lesion/'],
  ['15904', 'https://my.drbicuspid.com/cases/10-year-old-girl-with-pain-and-burning-of-the-tongue/'],
  ['15892', 'https://my.drbicuspid.com/cases/55-year-old-woman-with-unusual-posterior-neck-finding/'],
  ['15867', 'https://my.drbicuspid.com/cases/17-year-old-girl-with-anterior-mandible-lesion/'],
  ['15856', 'https://my.drbicuspid.com/cases/42-year-old-woman-with-radiolucency-on-mandible/'],
  ['15777', 'https://my.drbicuspid.com/cases/7-year-old-girl-with-mass-on-tongue/'],
  ['15756', 'https://my.drbicuspid.com/cases/13-year-old-girl-with-slow-bilateral-growth-of-the-face/'],
  ['15705', 'https://my.drbicuspid.com/cases/47-year-old-woman-with-tooth-pain/'],
  ['15659', 'https://my.drbicuspid.com/cases/37-year-old-man-with-bony-protuberance-on-buccal-side-of-maxilla/'],
  ['15633', 'https://my.drbicuspid.com/cases/14-year-old-boy-with-mandibular-lesion/'],
  ['15606', 'https://my.drbicuspid.com/cases/11-year-old-boy-with-unusual-finding-of-right-maxilla/'],
  ['15604', 'https://my.drbicuspid.com/cases/8-year-old-girl-with-growth-on-left-mandible/'],
  ['15517', 'https://my.drbicuspid.com/cases/Mid-30s-man-with-a-painless-lower-labial-lesion/'],
  ['15588', 'https://my.drbicuspid.com/cases/26-year-old-woman-with-unusual-radiographic-finding/'],
  ['15476', 'https://my.drbicuspid.com/cases/5-year-old-boy-with-raised-oral-lesions/'],
  ['15563', 'https://my.drbicuspid.com/cases/74-year-old-man-with-radiopacity-at-right-mandible/'],
  ['15479', 'https://my.drbicuspid.com/cases/8-year-old-boy-with-bleeding-gums-and-fever/'],
  ['15450', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-lesion-at-left-side-of-mandible/'],
  ['15446', 'https://my.drbicuspid.com/cases/53-year-old-man-with-radiolucency-at-left-mandible/'],
  ['15427', 'https://my.drbicuspid.com/cases/5-year-old-girl-with-a-growth-on-the-upper-right-maxilla/'],
  ['15352', 'https://my.drbicuspid.com/cases/2-month-old-boy-with-pedunculated-mass-on-palate/'],
  ['11794', 'https://my.drbicuspid.com/cases/7-year-old-boy-with-bone-loss-and-gingival-retraction/'],
  ['15346', 'https://my.drbicuspid.com/cases/8-year-old-girl-with-lesion-on-the-tongue/'],
  ['15331', 'https://my.drbicuspid.com/cases/36-year-old-woman-with-multiple-lesions/'],
  ['15254', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-bleeding-gums-and-fever/'],
  ['15249', 'https://my.drbicuspid.com/cases/27-year-old-woman-with-maxillary-lesion/'],
  ['15248', 'https://my.drbicuspid.com/cases/51-year-old-woman-with-radiopaque-lesion/'],
  ['15246', 'https://my.drbicuspid.com/cases/45-year-old-woman-with-a-lesion/'],
  ['15229', 'https://my.drbicuspid.com/cases/7-year-old-boy-with-multiple-oral-lesions/'],
  ['15159', 'https://my.drbicuspid.com/cases/5-year-old-boy-with-unusual-right-mandible-finding/'],
  ['15153', 'https://my.drbicuspid.com/cases/32-year-old-woman-with-lesion-on-the-left-mandible/'],
  ['15158', 'https://my.drbicuspid.com/cases/16-year-old-girl-with-radiopaque-area-at-left-mandible/'],
  ['15124', 'https://my.drbicuspid.com/cases/34-year-old-woman-with-mandibular-lymphadenopathy/'],
  ['14114', 'https://my.drbicuspid.com/cases/18-year-old-boy-with-hard-palate-lesion/'],
  ['14094', 'https://my.drbicuspid.com/cases/65-year-old-woman-with-oral-lesion/'],
  ['14049', 'https://my.drbicuspid.com/cases/11-year-old-boy-with-a-large-mass/'],
  ['14017', 'https://my.drbicuspid.com/cases/5-year-old-boy-with-unusually-shaped-incisors/'],
  ['14018', 'https://my.drbicuspid.com/cases/-22-year-old-woman-with-oral-lesion/'],
  ['13923', 'https://my.drbicuspid.com/cases/11-year-old-girl-with-gingival-lesion/'],
  ['13899', 'https://my.drbicuspid.com/cases/18-year-old-man-with-tongue-lesion/'],
  ['13895', 'https://my.drbicuspid.com/cases/15-year-old-girl-with-pedunculated-lesion/'],
  ['13894', 'https://my.drbicuspid.com/cases/1-month-old-girl-with-mandibular-incisor/'],
  ['13893', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-unusual-radiographic-finding/'],
  ['13892', 'https://my.drbicuspid.com/cases/8-year-old-girl-with-dark-lesion-at-gumline/'],
  ['13886', 'https://my.drbicuspid.com/cases/23-year-old-woman-with-mandibular-lesion/'],
  ['13854', 'https://my.drbicuspid.com/cases/18-year-old-woman-with-lip-nodule/'],
  ['13847', 'https://my.drbicuspid.com/cases/76-year-old-woman-with-pain-over-right-maxilla/'],
  ['13828', 'https://my.drbicuspid.com/cases/7-year-old-girl-with-discolored-teeth/'],
  ['13815', 'https://my.drbicuspid.com/cases/5-year-old-boy-with-gingival-overgrowth/'],
  ['13737', 'https://my.drbicuspid.com/cases/49-year-old-woman-with-maxillary-lesion/'],
  ['13731', 'https://my.drbicuspid.com/cases/7-year-old-boy-with-mandibular-radiolucency/'],
  ['13705', 'https://my.drbicuspid.com/cases/5-year-old-girl-with-dark-spot-at-gumline/'],
  ['13696', 'https://my.drbicuspid.com/cases/47-year-old-woman-with-tongue-lesion/'],
  ['13688', 'https://my.drbicuspid.com/cases/12-year-old-girl-with-maxillary-mass/'],
  ['13624', 'https://my.drbicuspid.com/cases/12-year-old-girl-with-red-area-in-soft-palate/'],
  ['13623', 'https://my.drbicuspid.com/cases/4-year-old-girl-with-mandibular-lesion/'],
  ['13619', 'https://my.drbicuspid.com/cases/5-year-old-boy-with-gingival-hyperplasia/'],
  ['13613', 'https://my.drbicuspid.com/cases/17-year-old-boy-with-palatal-lesion/'],
  ['13612', 'https://my.drbicuspid.com/cases/39-year-old-woman-with-mandibular-lesion/'],
  ['13559', 'https://my.drbicuspid.com/cases/11-month-old-with-lip-lesion/'],
  ['13557', 'https://my.drbicuspid.com/cases/24-year-old-woman-with-unusual-radiolucency/'],
  ['13543', 'https://my.drbicuspid.com/cases/9-year-old-girl-with-radiographic-finding/'],
  ['13541', 'https://my.drbicuspid.com/cases/17-year-old-girl-with-tooth-mobility/'],
  ['13487', 'https://my.drbicuspid.com/cases/4-year-old-boy-with-radiographic-findings/'],
  ['13483', 'https://my.drbicuspid.com/cases/15-week-old-girl-with-soft-oral-nodules/'],
  ['13475', 'https://my.drbicuspid.com/cases/70-year-old-woman-with-radiolucency-at-recall-exam/'],
  ['13474', 'https://my.drbicuspid.com/cases/7-year-old-with-teeth-mobility,-limited-mouth-opening/'],
  ['13390', 'https://my.drbicuspid.com/cases/25-month-old-boy-with-palatal-lesion/'],
  ['13394', 'https://my.drbicuspid.com/cases/10-month-old-boy-with-oral-lesions/'],
  ['13387', 'https://my.drbicuspid.com/cases/15-year-old-girl-with-facial-pain,-swelling/'],
  ['13381', 'https://my.drbicuspid.com/cases/67-year-old-woman-with-radiographic-finding/'],
  ['13377', 'https://my.drbicuspid.com/cases/44-year-old-woman-with-tongue-ulcer/'],
  ['13329', 'https://my.drbicuspid.com/cases/10-year-old-girl-with-gingival-lesion/'],
  ['13310', 'https://my.drbicuspid.com/cases/9-year-old-boy-with-painful-oral-ulcers/'],
  ['13299', 'https://my.drbicuspid.com/cases/11-month-old-girl-with-palatal-swelling/'],
  ['13285', 'https://my.drbicuspid.com/cases/7-year-old-boy-with-radiographic-finding/'],
  ['13281', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-bilateral-facial-enlargement/'],
  ['13239', 'https://my.drbicuspid.com/cases/4-year-old-girl-with-small-lesion/'],
  ['13225', 'https://my.drbicuspid.com/cases/18-year-old-woman-with-lesions-in-mandible/'],
  ['13221', 'https://my.drbicuspid.com/cases/39-year-old-man-with-tooth-displacement/'],
  ['13173', 'https://my.drbicuspid.com/cases/33-year-old-man-with-radiographic-finding/'],
  ['13161', 'https://my.drbicuspid.com/cases/9-year-old-girl-undergoing-recall-exam/'],
  ['13153', 'https://my.drbicuspid.com/cases/6-year-old-boy-with-early-tooth-exfoliation/'],
  ['13148', 'https://my.drbicuspid.com/cases/72-year-old-man-with-mandibular-lesion/'],
  ['13114', 'https://my.drbicuspid.com/cases/16-year-old-boy-undergoing-routine-dental-exam/'],
  ['13043', 'https://my.drbicuspid.com/cases/67-year-old-woman-with-temporomandibular-joint-pain/'],
  ['13041', 'https://my.drbicuspid.com/cases/18-year-old-woman-with-radiographic-finding/'],
  ['13039', 'https://my.drbicuspid.com/cases/31-year-old-woman-with-mandibular-lesion/'],
  ['13037', 'https://my.drbicuspid.com/cases/3-year-old-boy-with-bleeding-gums,-fever/'],
  ['13032', 'https://my.drbicuspid.com/cases/8-year-old-girl-with-discolored-teeth/'],
  ['13007', 'https://my.drbicuspid.com/cases/24-year-old-man-with-swollen-lower-lip/'],
  ['12996', 'https://my.drbicuspid.com/cases/8-year-old-boy-with-generalized-tooth-mobility/'],
  ['16254', 'https://my.drbicuspid.com/cases/4-year-old-boy-with-oral-lesion/'],
]);

module.exports = ({ from, req }) => {
  const { sub, sec, ce_id: ceId } = req.query;

  // Legacy case URLs
  if (ceId && sec === 'olce' && sub === 'cotx') {
    if (cases.has(ceId)) return { to: cases.get(ceId) };
    return { to: '/page/case-not-found', code: 301 };
  }

  // Old static files
  const staticImg = from.match(/^\/images\/(.*)/i);
  if (staticImg) {
    return {
      to: `https://img.drbicuspid.com/files/base/smg/all/image/static/drb/edt_virtual_sc/images/${staticImg[1]}`,
      code: 301,
    };
  }

  // Redirect old email links to homepage
  if (sec === 'eba') {
    return { to: '/' };
  }

  return false;
};
