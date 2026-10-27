const { execSync } = require('child_process');

async function main() {
  const output = execSync('git credential fill', {
    input: 'protocol=https\nhost=github.com\n\n',
    encoding: 'utf-8'
  });
  const pass = output.split('\n').find(l => l.startsWith('password='))?.split('=')[1]?.trim();
  const username = output.split('\n').find(l => l.startsWith('username='))?.split('=')[1]?.trim();

  if (!pass || !username) {
    throw new Error('Could not find GitHub credentials');
  }

  console.log(`Using authenticated GitHub user: ${username}`);
  const repoName = 'anisa-health';

  // 1. Create the repository on GitHub
  console.log(`Creating repository ${repoName} on GitHub...`);
  const createRes = await fetch('https://api.github.com/user/repos', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${pass}`,
      'User-Agent': 'NodeJS',
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: repoName,
      description: 'Anisa Health (أنيسة) — Human-centered conversational clinical discharge & post-acute patient recovery platform.',
      private: false,
      has_issues: true,
      has_projects: true,
      has_wiki: true
    })
  });

  const createData = await createRes.json();
  if (createRes.status === 201) {
    console.log(`Repository successfully created: ${createData.html_url}`);
  } else if (createRes.status === 422) {
    console.log('Repository already exists on GitHub, proceeding to push...');
  } else {
    console.error('GitHub API error:', createData);
    throw new Error(`Failed to create repository: ${createRes.status}`);
  }

  // 2. Setup git repository locally
  console.log('Initializing git repository...');
  execSync('git init -b main', { stdio: 'inherit' });
  execSync(`git config user.name "${username}"`, { stdio: 'inherit' });
  execSync(`git config user.email "${username}@users.noreply.github.com"`, { stdio: 'inherit' });

  // 3. Add and commit
  console.log('Staging files...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Initial commit: Anisa Health - Human-centered conversational clinical discharge platform for healthcare innovation"', { stdio: 'inherit' });

  // 4. Remote setup and push
  const remoteUrl = `https://${username}:${pass}@github.com/${username}/${repoName}.git`;
  try {
    execSync('git remote remove origin', { stdio: 'ignore' });
  } catch (e) {}

  execSync(`git remote add origin ${remoteUrl}`, { stdio: 'inherit' });
  console.log('Pushing to GitHub (main branch)...');
  execSync('git push -u origin main --force', { stdio: 'inherit' });

  // Clean remote URL
  execSync(`git remote set-url origin https://github.com/${username}/${repoName}.git`, { stdio: 'inherit' });

  console.log(`\n🎉 Successfully pushed to GitHub: https://github.com/${username}/${repoName}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
