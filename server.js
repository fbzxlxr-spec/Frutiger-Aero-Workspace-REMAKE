import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.mp3':'audio/mpeg','.wav':'audio/wav','.webp':'image/webp'};
const server = http.createServer((req,res)=>{
  if (req.url === '/health') { res.writeHead(200,{'content-type':'application/json'}); res.end(JSON.stringify({ok:true,workspace:'13.0'})); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400); res.end('Bad request'); return; }
  if (pathname === '/') pathname = '/index.html';
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== path.join(root,'index.html')) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.stat(file,(err,stat)=>{
    if(err || !stat.isFile()){res.writeHead(404,{'content-type':'text/plain; charset=utf-8'});res.end('Not found');return;}
    res.writeHead(200,{'content-type':mime[path.extname(file).toLowerCase()]||'application/octet-stream','cache-control':'no-cache'});
    fs.createReadStream(file).pipe(res);
  });
});
server.listen(port,'0.0.0.0',()=>console.log(`Frutiger Aero Workspace 13.0 running on http://localhost:${port}`));
