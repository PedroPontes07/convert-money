from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import socket

# Muda para o diretório do projeto
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Obtém o IP local
def obter_ip_local():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

HOST = obter_ip_local()
PORT = 8000

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

# Cria e inicia o servidor
server = HTTPServer((HOST, PORT), MyHTTPRequestHandler)
print(f'✅ Servidor rodando!')
print(f'📱 Local: http://localhost:{PORT}')
print(f'🌐 Rede: http://{HOST}:{PORT}')
print('Pressione Ctrl+C para parar')

try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\n🛑 Servidor parado')
    server.server_close()
