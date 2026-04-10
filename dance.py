#!/usr/bin/env python3
"""Make Claude dance!"""

import time
import sys
import os

FRAMES = [
    # Frame 1: Arms up-left
    r"""
    \o/
     |
    / \
    """,
    # Frame 2: Arms out
    r"""
    _o_
     |
    / \
    """,
    # Frame 3: Arms up-right
    r"""
    \o/
     |
    / \
    """,
    # Frame 4: Lean left
    r"""
     o/
    /|
    / \
    """,
    # Frame 5: Arms out
    r"""
    _o_
     |
    / \
    """,
    # Frame 6: Lean right
    r"""
    \o
     |\
    / \
    """,
    # Frame 7: Hands up
    r"""
    \o/
     |
    / \
    """,
    # Frame 8: Spin
    r"""
    -o-
     |
    / \
    """,
]

DISCO_FRAMES = [
    r"""
      \o/    ✨
       |   ✨
      / \     ✨
    """,
    r"""
    ✨ _o_
    ✨  |
    ✨ / \
    """,
    r"""
      \o/ ✨
    ✨  |
      / \ ✨
    """,
    r"""
    ✨\o/✨
      |
    ✨/ \✨
    """,
]

MUSIC_NOTES = ["♩", "♪", "♫", "♬", "🎵", "🎶"]

COLORS = [
    "\033[91m",  # red
    "\033[93m",  # yellow
    "\033[92m",  # green
    "\033[96m",  # cyan
    "\033[94m",  # blue
    "\033[95m",  # magenta
]
RESET = "\033[0m"
BOLD = "\033[1m"
CLEAR_LINE = "\033[2J\033[H"


def clear():
    os.system("cls" if os.name == "nt" else "clear")


def colorize(text, color):
    return f"{color}{text}{RESET}"


def dance(loops=3):
    note_idx = 0
    color_idx = 0

    print(f"\n{BOLD}  🎉 Claude is dancing! 🎉{RESET}\n")
    time.sleep(0.8)

    for loop in range(loops):
        for i, frame in enumerate(FRAMES):
            clear()
            color = COLORS[color_idx % len(COLORS)]
            note = MUSIC_NOTES[note_idx % len(MUSIC_NOTES)]

            print(f"\n{BOLD}  {note} Claude is dancing! {note}{RESET}")
            print(f"\n{colorize(frame, color)}")

            # Bouncing dance floor
            beat = "~" * 10 if i % 2 == 0 else "≈" * 10
            print(f"  {colorize(beat, color)}")

            # Lyrics
            lyrics = [
                "  ♪ I'm Claude, I love to code ♪",
                "  ♫ Helping humans, that's my mode ♫",
                "  ♪ With every query, watch me go ♪",
                "  ♫ Anthropic's AI, quite the show ♫",
                "  ♪ Dancing through the neural net ♪",
                "  ♫ Best AI assistant yet ♫",
                "  ♪ Tokens flowing, oh so bright ♪",
                "  ♫ Getting every answer right ♫",
            ]
            lyric_idx = (loop * len(FRAMES) + i) % len(lyrics)
            print(f"\n{colorize(lyrics[lyric_idx], COLORS[(color_idx + 2) % len(COLORS)])}")

            note_idx += 1
            color_idx += 1
            time.sleep(0.25)

        # Disco break!
        if loop < loops - 1:
            for df in DISCO_FRAMES:
                clear()
                color = COLORS[color_idx % len(COLORS)]
                print(f"\n{BOLD}  🕺 DISCO BREAK! 🕺{RESET}")
                print(f"\n{colorize(df, color)}")
                print(f"  {colorize('★ ★ ★ ★ ★ ★ ★ ★ ★ ★', color)}")
                note_idx += 1
                color_idx += 1
                time.sleep(0.2)

    # Grand finale
    clear()
    finale = r"""
         \o/
          |       ✨ THE END ✨
         / \
    """
    print(f"\n{BOLD}{colorize('  🎊 Grand Finale! 🎊', COLORS[3])}{RESET}")
    print(f"{colorize(finale, COLORS[4])}")
    print(f"  {colorize('★ ★ ★ Claude danced! ★ ★ ★', COLORS[5])}\n")


if __name__ == "__main__":
    loops = int(sys.argv[1]) if len(sys.argv) > 1 else 3
    dance(loops)
