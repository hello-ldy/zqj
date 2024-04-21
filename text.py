import json
import os
import re


def main():
    dirpath = r'D:\modeldata\最终html\tmp'
    result_path = r'D:\modeldata\最终html\tmp\result.json'
    result = []
    idnum = 1
    special_list = ["\\u0000", "\\u0001", "\\u0002", "􀳦", "●", "█", "◆", "◪", "►", "♒", "♉", "♋", "♔", "♖", "✓", "✕", "✗", "☐", "☒", "✔", "✖", "✘", "↓", "◇", "↑", "■", "☺", "✉", "☏", "☂", "☃", "✿", "❁", "❦", "❂", "☮", "☪", "✄", "☸", "☣", "⚡", "♻", "☠", "⇠", "←", "↑", "↔", "▲", "▼", "➔", "➨", "➜", "➟", "➤", "➦", "➵", "➼", "➺", "➾", "→", "↓", "↕", "►", "◄"]
    for filepath, dirnames, filenames in os.walk(dirpath):
        for filename in filenames:
            if filename.endswith(".txt"):
                now_path = os.path.join(filepath, filename)
                name = filename.split(".")[0]
                try:
                    with open(now_path, 'r', encoding='utf8') as file:
                        line = file.read().strip()
                    if line:
                        # 替换换行符为\n
                        line = line.replace("\n", "\\n")
                        # 替换多个连续\n为1个
                        line = re.sub(r"(\\n)+", r"\n", line)
                        # 替换特殊字符
                        for one in special_list:
                            line = line.replace(one, '')
                        # 四个字段均是必填字段
                        one_json = {
                            "id": idnum,
                            "name": name,
                            # url可存放在txt第一行，方便读取，也可自行安排位置。
                            "url" : ,
                            "text": line
                        }
                        result.append(one_json)
                        idnum += 1
                except Exception as e:
                    print(now_path)


    with open(result_path, 'w', encoding='utf-8') as f:
        f.write(json.dumps(result, ensure_ascii=False, indent=4))


if __name__ == '__main__':
    main()
