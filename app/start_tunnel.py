from pathlib import Path
import time

from pyngrok import ngrok


def main() -> None:
    tunnel = ngrok.connect(addr=8000, proto="http")
    public_url = tunnel.public_url
    print(public_url, flush=True)

    out_file = Path(__file__).resolve().parent / "output" / "tunnel_url.txt"
    out_file.write_text(public_url, encoding="utf-8")

    # Keep the process alive so the tunnel stays active.
    while True:
        time.sleep(60)


if __name__ == "__main__":
    main()
