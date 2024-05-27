import socket 

IP = '127.0.1.1'
PORT = 4455
ADDR = (IP,PORT)
FORMAT = "utf-8"

def main():
    client = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    client.connect(ADDR)

    file = open("data/yt.txt","r")
    data = file.read()

    client.send("yt.txt".encode(FORMAT))

if __name__ == "__main__":
    main()