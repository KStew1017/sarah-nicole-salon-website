const tailwindConfig = require('../tailwind.config.ts');

const tailwindCustomColors = {
    tan: tailwindConfig.theme.extend.colors['tan'],
    light: tailwindConfig.theme.extend.colors['light'],
    green: tailwindConfig.theme.extend.colors['green'],
    blue: tailwindConfig.theme.extend.colors['blue'],
};

export default tailwindCustomColors;