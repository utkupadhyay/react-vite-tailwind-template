#!/bin/bash
echo "🚀 Setting up development environment..."

# Set up git commit template
git config commit.template .gitmessage
echo "✅ Commit template configured"

# Set up editor (if VS Code is available)
if command -v code &> /dev/null; then
    git config core.editor "code --wait"
    echo "✅ VS Code configured as git editor"
fi

echo "🎉 Development setup complete!"
echo "Run 'git commit' to see the beautiful commit template in action"