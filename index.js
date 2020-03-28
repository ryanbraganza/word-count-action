const core = require('@actions/core');

try {
  const words = core.getInput('words');
  const count = words.split(/\s+/).length;
  core.setOutput('count', count);
} catch (error) {
  console.log(error);
  core.setFailed(error.message);
}
