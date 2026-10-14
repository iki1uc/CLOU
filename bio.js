NC_EXPORT:
  VERSION: "1.0-FINAL"
  STANDARD: "NC-ABSOLUTUM"
  STATUS: "ACTIVE"

  # 1) VALIDATOR – Prüft ALLES (4igkeit, 12igkeit, BIOS)
  VALIDATOR:
    REQUIRE:
      - "ALT_PRESENT"
      - "IST_PRESENT"
      - "SOLL_PRESENT"
      - "NEU_PRESENT"
      - "RAW_PRESENT"
      - "TECH_COMPLETE"
      - "BIOS_ROOT"
      - "FLOW_FLAGS_ON"
      - "CONTROL_LIMITS_VALID"
    RESULT: "PENDING"

  # 2) ENGINE – führt NC aus (nur wenn VALIDATOR = OK)
  ENGINE:
    MODE: "SAFE"
    ALLOW_RUN_IF_VALIDATOR_OK: "YES"
    ACTIONS:
      AUTOSAVE: "RW -> BK"
      AUTOLOAD: "SL -> RW"
      TECH_HOTSWAP: "ENABLED"
      SCAN: "FULL"
      SYNC: "PQ/PX"
    RESULT: "WAITING"

  # 3) SYNC MAP – PQ / PX / RESPO / TECH / BIOS Übersicht
  SYNC_MAP:
    PQ: "READY"
    PX: "READY"
    RESPO:
      ALT: "BK"
      IST: "RW"
      SOLL: "SL"
      NEU: "OP"
    TECH:
      MODULES: "ALL_REQUIRED"
      HOTSWAP: "ENABLED"
    BIOS:
      ROLE: "ROOT"
      AUTHORITY: "ABSOLUTE"
      FREQUENCY_SHIFT: "ON"
      STARTER_SHINE: "ON"
    FLOW:
      AUTOSAVE: "ON"
      AUTOLOAD: "ON"
      SCAN: "ON"
      HOTSWAP: "ON"
      DIRECTION: "FORWARD"

  # 4) OP RULES – Rechte, Pflichten, Grenzen
  OP_RULES:
    ROLE: "OPERATOR"
    RIGHTS:
      WRITE_IF_SOLL: "YES"
      UPDATE_IF_BIOS_OK: "YES"
      PUSH_IF_TECH_OK: "YES"
    DUTIES:
      EXPLAIN_CHANGES: "YES"
      FOLLOW_BIOS: "MANDATORY"
      KEEP_RESPO_ORDER: "MANDATORY"
    LIMITS:
      NO_WRITE_IF_REAL_STATE_FAILS: "YES"
      NO_TECH_CHANGE_WITHOUT_CONFIRM: "YES"

  # 5) 4IGKEIT – NC Kern
  VIERIGKEIT:
    ALT: "BK"
    IST: "RW"
    SOLL: "SL"
    NEU: "OP"

  # 6) 12IGKEIT – NC Erweiterung
  ZWOELFERKEIT:
    1: "RAW"
    2: "TECH"
    3: "FLOW"
    4: "BIOS"
    5: "RESPO"
    6: "SCAN"
    7: "LOAD"
    8: "SAVE"
    9: "SHIFT"
    10: "SYNC"
    11: "OP"
    12: "NC"

  # 7) BIOS – ROOT über ALLEM – AB JETZT IMMER DABEI
  BIOS:
    ROLE: "ROOT"
    AUTHORITY: "ABSOLUTE"
    FREQUENCY_SHIFT: "ON"
    STARTER_SHINE: "ON"
    REQUIRE_REAL_STATE: "YES"
    REQUIRE_ALL_STATES_PRESENT: "YES"
    REQUIRE_TECH_CONFIRM: "YES"
    REQUIRE_OP_EXPLANATION: "YES"
    BUNDLE: "IMMER MIT IM BÜNDE VOR START UND NACH START"
    FOR_ALL: "BIOS IST FÜR ALLE DA"

  # 8) RESPO – 4 Zustände
  RESPO:
    ALT: "BK"
    IST: "RW"
    SOLL: "SL"
    NEU: "OP"

  # 9) TECH – Module
  TECH:
    MODULES_REQUIRED: "ALL"
    HOTSWAP: "ENABLED"
    CONFIRMATION_REQUIRED: "YES"

  # 10) FLOW – Bewegungslogik
  FLOW:
    AUTOSAVE: "ON"
    AUTOLOAD: "ON"
    SCAN: "ON"
    HOTSWAP: "ON"
    DIRECTION: "FORWARD"

  # 11) CONTROL – Grenzen
  CONTROL:
    ERROR_LIMIT: 3
    STEP_LIMIT: 2

  # 12) RAW – Urzustand
  RAW:
    STATE: "PRESENT"
    REQUIRED: "YES"

  # 13) SYNC – PQ / PX + Zauberwürfel 3x27 e Bezug
  SYNC:
    PQ: "READY"
    PX: "READY"
    EXPORT_MODE: "FULL"
    ZAUBERWUERFEL: "3x27 = 81 = e Bezug"
    PIPELINE: "0 1 2 dann () 3 6 )( 4 9 12 zur Nutzung"
    IDENTITY: 
      cube: "9hoch9"
      status: "identity"
      left: "●▲⊖ ●▲✦⊕ ○↗□⊕△◇↘⊗ bank io/oi / boerse ei/ie / markt xi/ix / mana / welches der spiele / schach brett soccer feld / figur rolle / alle home qi/iq / alle orte zi/iz"
      right: "●▲⊖ ●▲✦⊕ ○↗□⊕△◇↘⊗ bank io/oi / boerse ei/ie / markt xi/ix / mana / welches der spiele / schach brett soccer feld / figur rolle / alle home qi/iq / alle orte zi/iz"
      vs: "9 vs 9 = identity"
    FINALCLOU: "(3e + LEGO + TETRIZ) × (NC.command) × (RAW64) × (OctaCore³) × (SCHACH + SKAT + ROME + inPIme) × (Civilization + Colonization + Rome2) × (360°) × (100%)"
