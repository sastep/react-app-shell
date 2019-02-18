module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "react-app",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "babel",
        "flowtype"
    ],
    "rules": {
        "babel/new-cap": 0,
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "flowtype/boolean-style": [
            0,
            "boolean"
        ],
        "flowtype/define-flow-type": 1,
        "flowtype/delimiter-dangle": [
            0,
            "never"
        ],
        "flowtype/generic-spacing": [
            0,
            "never"
        ],
        "flowtype/no-primitive-constructor-types": 0,
        "flowtype/no-types-missing-file-annotation": 0,
        "flowtype/no-weak-types": 0,
        "flowtype/object-type-delimiter": [
            0,
            "comma"
        ],
        "flowtype/require-parameter-type": 0,
        "flowtype/require-return-type": [
            0,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/require-valid-file-annotation": 2,
        "flowtype/semi": [
            0,
            "always"
        ],
        "flowtype/space-after-type-colon": [
            0,
            "always"
        ],
        "flowtype/space-before-generic-bracket": [
            0,
            "never"
        ],
        "flowtype/space-before-type-colon": [
            0,
            "never"
        ],
        "flowtype/type-id-match": [
            0,
            "^([A-Z][a-z0-9]+)+Type$"
        ],
        "flowtype/union-intersection-spacing": [
            0,
            "always"
        ],
        "flowtype/use-flow-type": 1,
        "flowtype/valid-syntax": 1,
        "jsx-a11y/href-no-hash": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ]
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    }
};