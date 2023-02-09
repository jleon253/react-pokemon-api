export const env = import.meta.env;

export const COLUMNS_TABLE = {
  name: 'name',
  picture: 'picture',
  hp: 'HP (Hit Points)',
  attack: 'attack',
  defense: 'defense',
  actions: 'actions'
};

export const LABELS = {
  POINTS: 'pts',
  POKE_FORM: {
    TITLE: 'Add a new pokemon',
    NAME: {
      ID: 'name',
      LABEL: 'Name',
      PLACEHOLDER: 'e.g: Pikachu'
    },
    URL: {
      ID: 'image',
      LABEL: 'URL picture',
      PLACEHOLDER: 'e.g: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    },
    TYPE: {
      ID: 'type',
      LABEL: 'Type',
      PLACEHOLDER: 'e.g: fire'
    },
    ATTACK: {
      ID: 'attack',
      LABEL: 'Attack',
      PLACEHOLDER: null
    },
    DEFENSE: {
      ID: 'defense',
      LABEL: 'Defense',
      PLACEHOLDER: null
    },
    HP: {
      ID: 'hp',
      LABEL: 'Hp',
      PLACEHOLDER: null
    },
    ACTIONS: {
      PRIMARY: 'Catch',
      SECONDARY: 'Cancel'
    },
    VALIDATIONS: {
      MSG_REQUIRED: 'This field is required!',
      MSG_PATTERN: 'The url pattern don\'t match!',
      URL_PATTERN: RegExp(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i)
    }
  }
};