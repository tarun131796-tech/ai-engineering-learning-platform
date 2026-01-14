#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up AI Engineering Learning Platform...\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found. Please run this script from the project root.');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Check required dependencies
const requiredDeps = [
  'next',
  'react',
  'react-dom',
  'react-flow-renderer',
  'tailwindcss',
  'gray-matter',
  'remark',
  'remark-html',
  'zod',
  'lucide-react'
];

console.log('📦 Checking dependencies...');
const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);

if (missingDeps.length > 0) {
  console.log(`⚠️  Missing dependencies: ${missingDeps.join(', ')}`);
  console.log('Installing dependencies...');
  
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully!');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ All dependencies are installed.');
}

// Create necessary directories
console.log('\n📁 Creating directory structure...');
const directories = [
  'public',
  'app',
  'components',
  'content/topics',
  'lib',
  'types',
  'styles',
  'scripts'
];

directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`  Created: ${dir}/`);
  }
});

// Check if content files exist
console.log('\n📄 Checking content files...');
const contentFiles = [
  'content/topics/langchain.mdx',
  'content/topics/langgraph.mdx',
  'content/topics/langsmith.mdx',
  'content/topics/fastapi.mdx',
  'content/topics/streamlit.mdx',
  'content/topics/vector-databases.mdx',
  'content/topics/chroma.mdx',
  'content/topics/pinecone.mdx',
  'content/topics/faiss.mdx',
  'content/projects.json'
];

let missingContent = false;
contentFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  Missing: ${file}`);
    missingContent = true;
  }
});

if (missingContent) {
  console.log('\n⚠️  Some content files are missing. Please ensure all required content files are present.');
  console.log('The application will still run, but some features may not work correctly.');
}

// Verify TypeScript configuration
console.log('\n⚙️  Checking TypeScript configuration...');
if (!fs.existsSync('tsconfig.json')) {
  console.error('❌ Error: tsconfig.json not found.');
  process.exit(1);
}

// Verify Next.js configuration
console.log('🔧 Checking Next.js configuration...');
if (!fs.existsSync('next.config.js')) {
  console.error('❌ Error: next.config.js not found.');
  process.exit(1);
}

// Verify Tailwind configuration
console.log('🎨 Checking Tailwind CSS configuration...');
if (!fs.existsSync('tailwind.config.ts')) {
  console.error('❌ Error: tailwind.config.ts not found.');
  process.exit(1);
}

// Create .env.example if it doesn't exist
console.log('\n🔐 Creating environment template...');
const envExample = `# API Keys (optional for local development)
# OPENAI_API_KEY=your-openai-api-key
# LANGCHAIN_API_KEY=your-langsmith-api-key

# Application Settings
NEXT_PUBLIC_APP_NAME="AI Engineering Learning Platform"
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Development
NODE_ENV=development
`;

const envExamplePath = path.join(process.cwd(), '.env.example');
if (!fs.existsSync(envExamplePath)) {
  fs.writeFileSync(envExamplePath, envExample);
  console.log('  Created: .env.example');
}

// Check for .env.local
const envLocalPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envLocalPath)) {
  console.log('\n💡 Tip: Create a .env.local file for your local environment variables:');
  console.log('  cp .env.example .env.local');
  console.log('  # Then edit .env.local with your actual values');
}

// Run Next.js build check
console.log('\n🔨 Running build check...');
try {
  execSync('npx next build --dry-run', { stdio: 'pipe' });
  console.log('✅ Build check passed!');
} catch (error) {
  console.log('⚠️  Build check warnings (may be normal for first run):');
  console.log(error.stdout.toString());
}

console.log('\n🎉 Setup completed successfully!');
console.log('\nTo start the development server:');
console.log('  npm run dev');
console.log('\nThen open http://localhost:3000 in your browser.');
console.log('\n📚 Available scripts:');
console.log('  npm run dev     - Start development server');
console.log('  npm run build   - Build for production');
console.log('  npm start       - Start production server');
console.log('  npm run lint    - Run ESLint');
console.log('  npm run setup   - Run this setup script again');