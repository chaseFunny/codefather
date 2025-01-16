const fs = require('fs');
const path = require('path');

/**
 * 递归遍历目录，将 README.md 重命名为 index.md
 * @param {string} dir - 目标目录路径
 */
function renameReadmeToIndex(dir) {
  // 读取目录内容
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // 如果是目录，递归调用
      renameReadmeToIndex(fullPath);
    } else if (item.isFile() && item.name.toLowerCase() === 'readme.md') {
      // 如果是 README.md 文件，重命名为 index.md
      const newPath = path.join(dir, 'index.md');

      // 检查是否已经存在 index.md
      if (fs.existsSync(newPath)) {
        console.warn(`⚠️ 文件已存在，跳过重命名: ${newPath}`);
      } else {
        fs.renameSync(fullPath, newPath);
        console.log(`✅ 重命名完成: ${fullPath} -> ${newPath}`);
      }
    }
  }
}

// 从命令行参数获取目标目录
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('错误：请提供目标目录路径作为参数');
  process.exit(1);
}

// 检查目标目录是否存在
if (!fs.existsSync(targetDir)) {
  console.error(`错误：目录 "${targetDir}" 不存在`);
  process.exit(1);
}

// 调用函数，开始重命名
renameReadmeToIndex(targetDir);