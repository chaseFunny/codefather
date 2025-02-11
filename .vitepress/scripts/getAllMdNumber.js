const fs = require('fs');
const path = require('path');

/**
 * 递归获取目录下所有 .md 文件的数量
 * @param {string} dir - 目标目录路径
 * @returns {number} - .md 文件的数量
 */
function countMdFiles(dir) {
  let count = 0;

  // 读取目录内容
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // 如果是目录，递归调用
      count += countMdFiles(fullPath);
    } else if (item.isFile() && path.extname(item.name) === '.md') {
      // 如果是 .md 文件，计数加 1
      count++;
    }
  }

  return count;
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

// 统计 .md 文件数量
const mdFileCount = countMdFiles(targetDir);

// 输出结果
console.log(`当前目录及其子目录下的 .md 文件数量为：${mdFileCount}`);