# 📚 Book Finder - GitHub Setup Guide

## 🎯 Step 1: Create GitHub Repository

1. **Go to GitHub**: [github.com](https://github.com)
2. **Sign in** to your account
3. **Click** the "+" icon → "New repository"
4. **Repository name**: `book-finder`
5. **Description**: `Modern React book search app with Tailwind CSS - search millions of books using Open Library API`
6. **Visibility**: Public (recommended for CodeSandbox integration)
7. **Initialize**: Leave unchecked (we already have files)
8. **Click**: "Create repository"

## 🚀 Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/book-finder.git

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 📋 Step 3: Verify Upload

Your repository should contain:
- ✅ `src/` folder with all React components
- ✅ `package.json` with dependencies
- ✅ `README.md` with project documentation
- ✅ Configuration files (Vite, Tailwind, PostCSS)
- ✅ `.gitignore` file
- ✅ `LICENSE` file

## 🎉 Step 4: Deploy to CodeSandbox

Once on GitHub:

1. **Go to**: [codesandbox.io](https://codesandbox.io)
2. **Click**: "Create Sandbox"
3. **Select**: "Import from GitHub"
4. **Enter URL**: `https://github.com/YOUR_USERNAME/book-finder`
5. **Wait**: For automatic setup and dependency installation
6. **Done**: Your app is live!

## 🔗 Step 5: Update README

After deployment, update your README.md with:
- Live CodeSandbox URL
- GitHub repository URL
- Screenshots (optional)

## ✨ Expected Result

- **GitHub Repository**: Clean, professional repo with all files
- **CodeSandbox**: Live, interactive demo
- **Shareable Links**: Easy to share with others
- **Auto-deployment**: Changes to GitHub auto-update CodeSandbox

## 🛠️ Troubleshooting

**If git push fails:**
```bash
# Check remote URL
git remote -v

# Re-add remote if needed
git remote set-url origin https://github.com/YOUR_USERNAME/book-finder.git
```

**If CodeSandbox import fails:**
- Ensure repository is public
- Check that package.json exists
- Try direct URL: `https://codesandbox.io/s/github/YOUR_USERNAME/book-finder`

Your Book Finder app will be live and ready to share! 🚀