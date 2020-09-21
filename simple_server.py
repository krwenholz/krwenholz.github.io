#! /usr/bin/env python3

from http import server
import socketserver

PORT = 8000


class Handler(server.SimpleHTTPRequestHandler):
    pass


Handler.extensions_map[".js"] = "text/script"
Handler.extensions_map[".wasm"] = "text/script"

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
