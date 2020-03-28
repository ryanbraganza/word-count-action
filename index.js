const core = require('@actions/core');
const github = require('@actions/github');

try {
  const words = core.getInput('words');
  const count = words.split(/\s+/).length;
  core.setOutput('count', count);
} catch (error) {
  core.setFailed(error.message);
}
