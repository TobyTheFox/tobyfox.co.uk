export function setDocumentTitle(title) {
  document.title = title;
}

export function setFavicon(iconPath) {
  let link = document.querySelector("link[rel='icon']") || document.querySelector("link[rel='shortcut icon']");

  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }

  const resolvedPath = iconPath.startsWith('/') ? iconPath : `/${iconPath}`;
  link.href = resolvedPath;
}