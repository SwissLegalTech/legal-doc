module.exports = {
    "good":
        [
            "sehr",
            "äusserst",
            "immer",
            "stets",
            "jederzeit",
            "absolut",
            "gleichermassen",
            "gleichermassen sehr",
            "ausserordentlich",
            "hoch",
            "weiterhin",
            "hohe",
            "gross"
        ],
    "bad":
        ["in der regel", "meist", "im Allgemeinen", "oft"],
    "special":
        new Map([
            ["meist zu unserer Zufriedenheit", -1],
            ["in der Regel zu unserer Zufriedenheit", -1],
            ["meist zu unserer vollen Zufriedenheit", -1],
            ["in der Regel zu unserer vollen Zufriedenheit", -1],
            ["zu unserer vollen Zufriedenheit", 1],
            ["zu unserer vollsten Zufriedenheit", 2],
            ["stets zu unserer vollen Zufriedenheit", 3],
            ["stets zu unserer vollsten Zufriedenheit", 4]
        ])

};
