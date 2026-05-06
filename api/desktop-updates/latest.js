const RELEASE_BASE =
  'https://github.com/jtmaker002-blip/wuxianhuabu5.1-1.0.0-/releases/download/v1.0.2';

const DOWNLOADS = {
  darwin: `${RELEASE_BASE}/OpenAiTeach-1.0.2-mac-arm64.dmg`,
  mac: `${RELEASE_BASE}/OpenAiTeach-1.0.2-mac-arm64.dmg`,
  win32: `${RELEASE_BASE}/OpenAiTeach-1.0.2-win-x64.exe`,
  win: `${RELEASE_BASE}/OpenAiTeach-1.0.2-win-x64.exe`,
  windows: `${RELEASE_BASE}/OpenAiTeach-1.0.2-win-x64.exe`,
};

function pickDownloadUrl(platform) {
  const key = String(platform || '').toLowerCase();
  return DOWNLOADS[key] || DOWNLOADS.win32;
}

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300');
  res.status(200).json({
    latestVersion: '1.0.2',
    title: 'OpenAiTeach 有新版本',
    summary: 'OpenAiTeach 1.0.2 已发布。',
    features: [
      '更新到 1.0.2',
      '包含 Windows x64 和 macOS arm64 安装包',
      '补充桌面端更新提醒与下载入口',
    ],
    downloadUrl: pickDownloadUrl(req.query?.platform),
    publishedAt: '2026-05-06T09:18:00.000Z',
  });
}
