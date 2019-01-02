/**
 * Webpack loader to remove unnecessary spaces from Handlebars templates
 */
const loader = source => source
    .replace(/[\r\n]+/g, '') // Remove new lines
    .replace(/>\s+/g, '>') // Remove white space after tags
    .replace(/\s+</g, '<') // Remove white space before tags
    .replace(/\s+/g, ' ') // Collapse white space into one space
    .trim(); // Remove whitespace from file beginning and end
module.exports = loader;
module.exports.default = loader;
