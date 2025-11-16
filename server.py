from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

# Muda para o diretório do projeto
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Configurações do servidor
HOST = 'localhost'
PORT = 8000

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super().end_headers()

# Cria e inicia o servidor
server = HTTPServer((HOST, PORT), MyHTTPRequestHandler)
print(f'✅ Servidor rodando em http://{HOST}:{PORT}')
print('Pressione Ctrl+C para parar o servidor')

try:
    server.serve_forever()
except KeyboardInterrupt:
    print('\n🛑 Servidor parado')
    server.server_close()
