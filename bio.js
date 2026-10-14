// bio.js - NC EXPORT FINAL - MASTER DOCUMENT - penibel getimmt
// biomisieren b.i.o miseren atomiesieren würfeliesieren uefisieren os iesieren essensieren portionieren

export const NC_EXPORT = {
  VERSION: "1.0-FINAL",
  STANDARD: "NC-ABSOLUTUM",
  STATUS: "ACTIVE",

  VALIDATOR: {
    REQUIRE: ["ALT_PRESENT","IST_PRESENT","SOLL_PRESENT","NEU_PRESENT","RAW_PRESENT","TECH_COMPLETE","BIOS_ROOT","FLOW_FLAGS_ON","CONTROL_LIMITS_VALID"],
    RESULT: "PENDING"
  },

  ENGINE: {
    MODE: "SAFE",
    ALLOW_RUN_IF_VALIDATOR_OK: "YES",
    ACTIONS: { AUTOSAVE: "RW -> BK", AUTOLOAD: "SL -> RW", TECH_HOTSWAP: "ENABLED", SCAN: "FULL", SYNC: "PQ/PX" },
    RESULT: "WAITING"
  },

  SYNC_MAP: {
    PQ: "READY", PX: "READY",
    RESPO: { ALT: "BK", IST: "RW", SOLL: "SL", NEU: "OP" },
    TECH: { MODULES: "ALL_REQUIRED", HOTSWAP: "ENABLED" },
    BIOS: { ROLE: "ROOT", AUTHORITY: "ABSOLUTE", FREQUENCY_SHIFT: "ON", STARTER_SHINE: "ON" },
    FLOW: { AUTOSAVE: "ON", AUTOLOAD: "ON", SCAN: "ON", HOTSWAP: "ON", DIRECTION: "FORWARD" }
  },

  OP_RULES: {
    ROLE: "OPERATOR",
    RIGHTS: { WRITE_IF_SOLL: "YES", UPDATE_IF_BIOS_OK: "YES", PUSH_IF_TECH_OK: "YES" },
    DUTIES: { EXPLAIN_CHANGES: "YES", FOLLOW_BIOS: "MANDATORY", KEEP_RESPO_ORDER: "MANDATORY" },
    LIMITS: { NO_WRITE_IF_REAL_STATE_FAILS: "YES", NO_TECH_CHANGE_WITHOUT_CONFIRM: "YES" }
  },

  VIERIGKEIT: { ALT: "BK", IST: "RW", SOLL: "SL", NEU: "OP" },

  ZWOELFERKEIT: {
    1: "RAW", 2: "TECH", 3: "FLOW", 4: "BIOS", 5: "RESPO", 6: "SCAN",
    7: "LOAD", 8: "SAVE", 9: "SHIFT", 10: "SYNC", 11: "OP", 12: "NC"
  },

  BIOS: {
    ROLE: "ROOT", AUTHORITY: "ABSOLUTE",
    REQUIRE_REAL_STATE: "YES", REQUIRE_ALL_STATES_PRESENT: "YES",
    REQUIRE_TECH_CONFIRM: "YES", REQUIRE_OP_EXPLANATION: "YES",
    FREQUENCY_SHIFT: "ON", STARTER_SHINE: "ON",
    BUNDLE: "IMMER MIT IM BÜNDE VOR START UND NACH START",
    FOR_ALL: "BIOS IST FÜR ALLE DA - AB JETZT"
  },

  RESPO: { ALT: "BK", IST: "RW", SOLL: "SL", NEU: "OP" },
  TECH: { MODULES_REQUIRED: "ALL", HOTSWAP: "ENABLED", CONFIRMATION_REQUIRED: "YES" },
  FLOW: { AUTOSAVE: "ON", AUTOLOAD: "ON", SCAN: "ON", HOTSWAP: "ON", DIRECTION: "FORWARD" },
  CONTROL: { ERROR_LIMIT: 3, STEP_LIMIT: 2 },
  RAW: { STATE: "PRESENT", REQUIRED: "YES" },

  // Zauberwürfel 3x27 e Bezug = 81
  ZAUBERWUERFEL: {
    "3x27": 81,
    PIPELINE: "0 1 2 dann () 3 6 )( 4 9 12 zur Nutzung",
    IDENTITY: {
      left: "●▲⊖ ●▲✦⊕ ○↗□⊕△◇↘⊗ bank io/oi / boerse ei/ie / markt xi/ix / mana / welches der spiele / schach brett soccer feld / figur rolle / alle home qi/iq / alle orte zi/iz",
      right: "●▲⊖ ●▲✦⊕ ○↗□⊕△◇↘⊗ bank io/oi / boerse ei/ie / markt xi/ix / mana / welches der spiele / schach brett soccer feld / figur rolle / alle home qi/iq / alle orte zi/iz",
      vs: "9 vs 9 = identity",
      cube: { cube: "9hoch9", status: "identity", value: 387420489 }
    },
    FINALCLOU: "(3e + 【entity-LEGO¦canonical_name=LEGO】 + TETRIZ) × (NC.command) × (RAW64) × (OctaCore³) × (SCHACH + SKAT + ROME + inPIme) × (Civilization + Colonization + Rome2) × (360°) × (100%)"
  },

  // biomisieren chain
  BIOMISIEREN: {
    "b.i.o": "bio = vital = ●",
    miseren: "mise en place = sortieren = ▲",
    atomiesieren: "81 → 81 Atome = ⊖",
    wuerfeliesieren: "Würfel = 3×3 = 9 = 27 = 3hoch3",
    uefisieren: "UEFI = Boot = io/oi = bank.ni.in",
    osiesieren: "OS = ei/ie = boerse.ni.in",
    essensieren: "Essen = xi/ix = markt.ni.in = mystery",
    portionieren: "Portion = qi/iq + zi/iz = alle home + alle orte",
    tupfen: "Jungbrunnen Weisheit nach und nach tupfen = immer nur 3 oder 9 Tupfen, kein Leopard 2"
  }
};

export function interpret(input){
  const D = {
    mech: ["3x6","3x9","PI-3x9","P-3xX"],
    cmp: ["3x4","3x1","parse3x1"],
    time: ["TIME-3x11","TIME-3x10","TIME-3x5"],
    meta: ["3x13","3x12","3x11","3x10"],
    op: ["AXXX","3x3","3x2","3x1"],
    rt: ["AXIS","borgProtocol"]
  };
  const parts = input.split("+").map(s=>s.trim());
  const found = [];
  for(const p of parts){
    let matched = false;
    for(const key in D){ if(D[key].includes(p)){ found.push(key); matched = true; } }
    if(!matched){ return { status:"DEFECT", reason:"UNKNOWN_ELEMENT", element:p, action:"NEUTRALIZE", method:"UNK-PROTO" }; }
  }
  const unique = [...new Set(found)];
  if(unique.length === 1){ return { status:"OK", discipline:unique[0].toUpperCase(), messID:unique[0].toUpperCase()+"-ID-X", method:unique[0].toUpperCase()+"-PROTO", action:"PROCESS" }; }
  return { status:"DEFECT", reason:"MIXED_DISCIPLINES", disciplines:unique, action:"SEPARATE", method:"META-PROTO" };
}

export default NC_EXPORT;
