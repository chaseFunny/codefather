const fs = require('fs');
const path = require('path');

/**
 * 生成侧边栏配置
 * @param {string} dirPath 目录路径
 * @param {string} basePath 相对路径，用于生成链接
 * @returns {Array} 生成的侧边栏配置
 */
function generateSidebar(dirPath, basePath = '') {
  // 获取当前目录的文件和子目录
  const items = fs.readdirSync(dirPath).map((item) => {
    const fullPath = path.join(dirPath, item);
    const relativeLink = path.join(basePath, item).replace(/\\/g, '/'); // Windows兼容性处理
    const stat = fs.statSync(fullPath);

    // 如果是目录，递归处理
    if (stat.isDirectory()) {
      return {
        text: item,
        items: generateSidebar(fullPath, path.join(basePath, item))
      };
    }

    // 如果是文件，添加链接
    if (stat.isFile() && item.endsWith('.md')) {
      if (item === 'index.md') { 
        return {
          text: '主页',
          link: `/${prefix}/${relativeLink.replace('index.md', '')}`
        };
      }
      
      return {
        text: item.replace('.md', ''), // 去除文件后缀
        link: `/${prefix}/${relativeLink.replace('.md', '')}`
      };
    }

    return null;
  }).filter(Boolean); // 过滤掉无效项

  return items;
}

/**
 * 生成并写入侧边栏配置
 * @param {string} dirPath 输入的目录路径
 */
function generateSiderbarConfig(dirPath) {
  const sidebar = generateSidebar(dirPath);

  // 输出到 temp.js 文件
  const outputPath = path.join(__dirname, 'temp.js');
  const content = `export default ${JSON.stringify(sidebar)}`;

  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`Sidebar config generated and written to ${outputPath}`);
}

// 获取命令行传入的目录路径
const dirPath = process.argv[2];
var prefix = path.basename(dirPath);

if (!dirPath) {
  console.error('请提供目录路径！');
  process.exit(1);
}

if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
  console.error('提供的路径无效或不是一个目录！');
  process.exit(1);
}

// 生成侧边栏配置
generateSiderbarConfig(dirPath);
