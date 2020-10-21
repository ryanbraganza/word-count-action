const core = require('@actions/core');

try {
  const words = core.getInput('words').trim();
  const count = words.length === 0 ? 0 : words.split(/\s+/).length;
  core.setOutput('count', String(count));
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}
