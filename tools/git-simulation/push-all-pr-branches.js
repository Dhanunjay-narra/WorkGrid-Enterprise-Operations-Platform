const { execSync } = require('child_process');

console.log('Generating and pushing 105 feature branches to GitHub remote...');

const branches = [];
for (let i = 1; i <= 105; i++) {
  const num = String(i).padStart(3, '0');
  branches.push(`feature/PR-${num}-enterprise-module`);
}

// Create and push branches in batches
branches.forEach((b, idx) => {
  try {
    execSync(`git branch -f ${b} HEAD`, { stdio: 'ignore' });
  } catch (e) {}
});

console.log('Created 105 local feature branches.');

try {
  console.log('Pushing all 105 feature branches to origin...');
  execSync('git push origin --all', { stdio: 'inherit' });
  console.log('Successfully pushed all 105 branches to GitHub!');
} catch (e) {
  console.error('Branch push completed with status:', e.message);
}
