const core = require('@actions/core');
const github = require('@actions/github');

try {
  const words = core.getInput('words');
  const count = words.trim().split(/\s+/).length;
  core.setOutput('count', count);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
