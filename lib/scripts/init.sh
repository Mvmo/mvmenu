# TODO: Only get required information using jq
pgrep -x yabai > /dev/null

if [ $? -eq 1 ]; then
    echo "yabaiError"
    exit 0
fi

spaces=$(yabai -m query --spaces)
displays=$(yabai -m query --displays)

if [ -z "$displays" ]; then
  displays=$(yabai -m query --displays)
fi

echo $(cat <<-EOF
    {
        "displays": $displays,
        "spaces": $spaces
    }
EOF
)
