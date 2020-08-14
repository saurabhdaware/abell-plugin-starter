/**
 * Executed before build. Access to createContent function makes it ideal for source plugins.
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
 * Executed after build. Ideal for generating rss, sitemap, etc.
 * @param {import('abell').ProgramInfo} programInfo
 */
function afterBuild(programInfo) {
  console.log('I am executed after the build');
}


module.exports = { beforeBuild, afterBuild }