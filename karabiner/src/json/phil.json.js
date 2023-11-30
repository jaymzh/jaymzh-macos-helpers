function main() {
    console.log(
        JSON.stringify(
            {
                "title": "Phil's make Mac more like Linux shortcuts",
                "rules": [
                    {
                        "description": "ctrl-enter to send in messenger",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "return_or_enter",
                                    "modifiers": {
                                        "mandatory": ["control"]
                                    }
                                },
                                "to": {
                                    "key_code": "return_or_enter"
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.facebook.archon.developerID"
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "return_or_enter"
                                },
                                "to": {
                                    "key_code": "return_or_enter",
                                    "modifiers": ["control"]
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.facebook.archon.developerID"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "F9 -> Raise window (useful for autoraise users)",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "f9"
                                },
                                "to": {
                                    "pointing_button": "button1"
                                }
                            },
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "2",
                                    "modifiers": {
                                        "mandatory": ["command"]
                                    }
                                },
                                "to": [
                                    {
                                        "key_code": "2",
                                        "modifiers": ["command"]
                                    },
                                    {
                                        "key_code": "4",
                                        "modifiers": ["command"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "Handle virtual desktops across screens",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "1",
                                    "modifiers": {
                                        "mandatory": ["command"]
                                    }
                                },
                                "to": [
                                    {
                                        "key_code": "1",
                                        "modifiers": ["command"]
                                    },
                                    {
                                        "key_code": "3",
                                        "modifiers": ["command"]
                                    }
                                ]
                            },
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "2",
                                    "modifiers": {
                                        "mandatory": ["command"]
                                    }
                                },
                                "to": [
                                    {
                                        "key_code": "2",
                                        "modifiers": ["command"]
                                    },
                                    {
                                        "key_code": "4",
                                        "modifiers": ["command"]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "ctrl+enter sends in Slack (markdown mode)",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "return_or_enter",
                                    "modifiers": {
                                        "mandatory": ["control"]
                                    }
                                },
                                "to": {
                                    "key_code": "return_or_enter",
                                    "modifiers": ["left_command"]
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.tinyspeck.slackmacgap"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "ctrl+t for new tab in terminal",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "t",
                                    "modifiers": {
                                        "mandatory": ["control"]
                                    }
                                },
                                "to": {
                                    "key_code": "t",
                                    "modifiers": ["command"]
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.apple.Terminal"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "Alt(command)+ctrl+c/v for copy/paste in Terminal",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "c",
                                    "modifiers": {
                                        "mandatory": [
                                            "command",
                                            "control"
                                        ]
                                    }
                                },
                                "to": {
                                    "key_code": "c",
                                    "modifiers": ["left_command"]
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.apple.Terminal"
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "v",
                                    "modifiers": {
                                        "mandatory": [
                                            "command",
                                            "control"
                                        ]
                                    }
                                },
                                "to": {
                                    "key_code": "v",
                                    "modifiers": ["left_command"]
                                },
                                "conditions": [
                                    {
                                        "type": "frontmost_application_if",
                                        "bundle_identifiers": [
                                            "com.apple.Terminal"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "description": "Open terminal with command-t",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "t",
                                    "modifiers": {
                                        "mandatory": ["command"]
                                    }
                                },
                                "to": {
                                    "shell_command": "open -a Terminal ~"
                                }
                            }
                        ]
                    },
                    {
                        "description": "alt-ctrl-delete to lock",
                        "manipulators": [
                            {
                                "type": "basic",
                                "from": {
                                    "key_code": "delete_forward",
                                    "modifiers": {
                                        "mandatory": [
                                            "control",
                                            "command"
                                        ]
                                    }
                                },
                                "to": [
                                    {
                                        "key_code": "power",
                                        "modifiers": [
                                            "left_control",
                                            "left_shift"
                                        ]
                                    }
                                ],
                                "conditions": [
                                    {
                                        "type": "frontmost_application_unless",
                                        "bundle_identifiers": [
                                            "^com\\.microsoft\\.rdc$",
                                            "^com\\.microsoft\\.rdc\\.",
                                            "^net\\.sf\\.cord$",
                                            "^com\\.thinomenon\\.RemoteDesktopConnection$",
                                            "^com\\.itap-mobile\\.qmote$",
                                            "^com\\.nulana\\.remotixmac$",
                                            "^com\\.p5sys\\.jump\\.mac\\.viewer$",
                                            "^com\\.p5sys\\.jump\\.mac\\.viewer\\.",
                                            "^com\\.teamviewer\\.TeamViewer$",
                                            "^com\\.vmware\\.horizon$",
                                            "^com\\.2X\\.Client\\.Mac$",
                                            "^com\\.OpenText\\.Exceed-TurboX-Client$",
                                            "^com\\.realvnc\\.vncviewer$",
                                            "^com\\.citrix\\.receiver\\.icaviewer",
                                            "^com\\.vmware\\.fusion$",
                                            "^com\\.vmware\\.horizon$",
                                            "^com\\.vmware\\.view$",
                                            "^com\\.parallels\\.desktop$",
                                            "^com\\.parallels\\.vm$",
                                            "^com\\.parallels\\.desktop\\.console$",
                                            "^org\\.virtualbox\\.app\\.VirtualBoxVM$",
                                            "^com\\.citrix\\.XenAppViewer$",
                                            "^com\\.vmware\\.proxyApp\\.",
                                            "^com\\.parallels\\.winapp\\.",
                                            "^com\\.utmapp\\.UTM$"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        )
    )
}

main()