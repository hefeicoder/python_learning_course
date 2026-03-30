#!/usr/bin/env python3
import http.server
import socket
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "unknown"

handler = http.server.SimpleHTTPRequestHandler
handler.log_message = lambda *args: None  # silence per-request logs

local_ip = get_local_ip()
print(f"Learn Python! is running.")
print(f"  Local:   http://localhost:{PORT}")
print(f"  Network: http://{local_ip}:{PORT}")
print(f"\nPress Ctrl+C to stop.\n")

with http.server.HTTPServer(("0.0.0.0", PORT), handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
