import sys, re

filename = sys.argv[1]

out_name = filename.split('.')[0] + '.html'

lines = open(filename, 'r').readlines()

article_lines = []

footnote_num = 1
doc_notes = []
footnote_hovers = []

for line in lines:
    # Basic p
    line = re.subn(
        r"^([^#>\n].*)$",
        r"<p>\1</p>",
        line,
    )[0]

    # h1
    line = re.subn(
        r"^# (.*)$",
        r"<h1>\1</h1>",
        line,
    )[0]

    # h2
    line = re.subn(
        r"^## (.*)$",
        r"<h2>\1</h2>",
        line,
    )[0]

    # blockquote
    line = re.subn(
        r"^> (.*)$",
        r"<blockquote>\1</blockquote>",
        line,
    )[0]

    # i
    line = re.subn(
        r"\*([^*]+)\*",
        r"<i>\1</i>",
        line,
    )[0]

    # footnote
    footnotes = re.findall(r"\[FN:(.*?)\]", line)
    for footnote in footnotes:
        doc_notes.append(footnote)
        # print(f"[FN:{footnote}]")
        line = line.replace(f"[FN:{footnote}]", f"<span id=f-body-{footnote_num}><sup><a href=\"#f-end-{footnote_num}\">{footnote_num}</a></sup><span class=\"f-hover\" id=\"f-hover-{footnote_num}\">{footnote}</span>\n</span>")
        
        footnote_hovers.append(f"")
        footnote_hovers.append(f"<style>#f-body-{footnote_num}:hover #f-hover-{footnote_num} {{visibility:visible}}</style>\n")

        footnote_num += 1

    article_lines.append(line)

footer_lines = []

footer_lines.append("<hr><ol>\n")

footnote_num = 1
for footnote in doc_notes:
    line = f"<li id=f-end-{footnote_num}>{footnote} <a href=\"#f-body-{footnote_num}\">↩</a></li>\n"
    footer_lines.append(line)
    footnote_num += 1

footer_lines.append("</ol>\n")

with open('template.0', 'r') as template:
    template_0 = template.readlines()

with open('template.1', 'r') as template:
    template_1 = template.readlines()

with open('template.2', 'r') as template:
    template_2 = template.readlines()

with open(out_name, 'w') as out:
    out.writelines(template_0 + footnote_hovers + template_1 + article_lines + footer_lines + template_2)
