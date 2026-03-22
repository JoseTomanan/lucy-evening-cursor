import { writeFile } from 'fs'
import { promisify } from 'util'
import theme from './evening-lucy/theme.mjs'
import colors from './evening-lucy/colors.mjs'

const promisifiedWriteFile = promisify(writeFile);

const buildTheme = async () => {
  try {
    const themeWithColors = theme({
      'name': 'Evening Lucy',
      'colors': colors
    });

    await promisifiedWriteFile(
      './dist/evening-lucy.json',
      JSON.stringify(themeWithColors, null, 2)
    );
    console.log('🌺 Theme built. 💅');
  } catch (error) {
    console.log(error);
  }
};

buildTheme()
