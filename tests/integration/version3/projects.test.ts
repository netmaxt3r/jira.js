import { Constants } from '../constants';
import test from 'ava';
import {
  cleanupEnvironment,
  getVersion3Client,
  prepareEnvironment,
} from '../utils';

test.before(async (t) => {
  await prepareEnvironment();

  t.pass();
});

test.after(async (t) => {
  await cleanupEnvironment();

  t.pass();
});

test.serial(`should search ${Constants.testProjectKey} project`, async (t) => {
  const client = getVersion3Client();

  const projects = await client.projects.searchProjects({
    query: Constants.testProjectKey,
  });

  t.is(projects.total, 1);
  t.truthy(projects.isLast);

  const project = projects.values[0];

  t.is(project.key, Constants.testProjectKey);
  t.is(project.name, Constants.testProjectName);
});
