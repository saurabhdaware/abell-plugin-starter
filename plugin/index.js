/*
  This file contains all the functions that plugins offer.
  You can delete the functions that are not needed for your plugin.
*/

/**
 * Executes before build. Access to createContent function makes it ideal for source plugins.
 * @param {import('abell').ProgramInfo} programInfo
 * @param {object} options
 * @param {Function} options.createContent
 */
function beforeBuild(programInfo, { createContent }) {
  console.log('I am executed before the build starts.');
  console.log('I can also add new blog, look!');

  // For Source Plugins

  // slug, title, content, createdAt, modifiedAt are required values
  const sourceNode = {
    slug: 'blog-from-plugin',
    title: 'Hi, This blog comes from plugin',
    content: `# Hello\nCheck out your './plugin/index.js' file.`,
    createdAt: new Date('13 May 2019'),
    modifiedAt: new Date('13 May 2019'),
    foo: 'bar' // can be accessed with meta.foo
  };

  createContent(sourceNode);
}

/**
 * Executes after build. Ideal for generating rss, sitemap, etc.
 * @param {import('abell').ProgramInfo} programInfo
 */
function afterBuild(programInfo) {
  console.log('I am executed after the build');
}


/**
 * Executes before write of every HTML file in the output
 * 
 * Ideal if you want to alter the HTML output. 
 * E.g. Minifier plugin, Obfuscators, etc.
 * 
 * @param {string} htmlText HTML Code in String
 * @param {import('abell').ProgramInfo} programInfo
 * @return {string} New HTML Text
 */
function beforeHTMLWrite(htmlText, programInfo) {
  // This plugin replaces all the 'foo' from your HTML code with 'bar'
  // There are zero reasons to use this plugin. This is just for an example
  const newHTMLText = htmlText.replace(/foo/g, 'bar');
  return newHTMLText;
}


module.exports = { beforeBuild, afterBuild, beforeHTMLWrite }