'use strict';

module.exports = [
    { 
        name: 'help', 
        alias: 'h', 
        type: Boolean, 
        description: 'Display this usage guide.'
    },
    { 
        name: 'dark', 
        alias: 'd', 
        type: Boolean, 
        defaultOption: false,
        description: 'Use the dark theme.'
    },
    {
        name: 'url', 
        alias: 'u', 
        type: String, 
        defaultOption: true,
        description: 'Open this url instead.'
    },
    {
        name: 'version',
        alias: 'v',
        type: Boolean,
        description: 'Print the program version.'
    }
]