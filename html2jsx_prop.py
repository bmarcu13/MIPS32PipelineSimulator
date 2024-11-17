import re

def subHelper(match: re.Match):
    result = match.group(1)
    if(match.group(2) is not None):
        result += str(match.group(2))[1].upper() + str(match.group(2))[2:]
    
    g3 = " ".join(str(match.group(3)).split())

    result += f': \'{g3}\','
    return result

def sub(match: re.Match):
    m = str(match.group(0))
    if(m[0:5] != "style"):
        return m
    
    res = m[0:6] + "{{" + m[7:-1]
    # print(res)
    return re.sub('(\w+)(-\w+)*:\s*([^;\"]*)\s*(;)?', subHelper, res) + "}}"

with open('ui_diagram.html', 'r') as file:
    content = file.read()
    styles = re.sub('style=\"[^\"]*\"', sub, content)
    f2 = open('output.svg', 'w')
    f2.write(styles)
    f2.close()

