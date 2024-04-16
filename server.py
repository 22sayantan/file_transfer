import socket

IP = socket.gethostbyname(socket.gethostname())
PORT = 4455
ADDR = (IP,PORT)
FORMAT = 'utf-8'
SIZE = 1024

def main():
    print('[STARTING] Server is starting')
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(ADDR)
    server.listen()
    print("[LISTENING] Server is listening")

    while True:
        conn,addr = server.accept()
        print(f'[NEW CONNECTION] {addr} connected')

        filename = conn.recv(SIZE).decode(FORMAT)
        print(filename)

if __name__ == '__main__':
    main()