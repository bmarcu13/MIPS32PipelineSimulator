import re
from typing import Callable
import os


class HtmlObj:
    """
    Wrapper class to allow chaining of multiple formatting calls for increased readability.
    """
    def __init__(self, content: str):
        self.__content = content

    def format (self, keyword: str, replacement: str) -> str:
        self.__content.replace(keyword, replacement)

    def format (self, pattern: str, formatter: Callable[[re.Match], str]) -> "HtmlObj":
        """
        Formats a HtmlObj accoring to a regex pattern

        Args:
            pattern (str): A regex pattern
            formatter (Callable[[re.Match], str]): A function that takes a re.Match object as its only parameter and returns a replacement string 

        Returns:
            HtmlObj: The same object with the updated content
        """
        temp = re.sub(pattern, formatter, self.__content)
        self.__content = temp
        return self
    
    def collect (self) -> str:
        return self.__content
    
    def html2jsxProp(match: re.Match):
        m = str(match.group(0))
        if(m[0:5] != "style"):
            return m
        
        res = m[0:6] + "{{" + m[7:-1]
        
        def helper(match: re.Match):
            result = match.group(1)
            if(match.group(2) is not None):
                result += str(match.group(2))[1].upper() + str(match.group(2))[2:]
            
            g3 = " ".join(str(match.group(3)).split())

            result += f': \'{g3}\','
            return result

        return re.sub(r'(\w+)(-\w+)*:\s*([^;\"]*)\s*(;)?', helper, res) + "}}"


with open('./diagram.html', 'r') as inputFile:
    originalContent = inputFile.read()
    html = HtmlObj(originalContent)

    output = (
        html
            .format('style=\"[^\"]*\"', HtmlObj.html2jsxProp)
            .format(r'plh_([a-zA-z._1-9]+)\s*</div>', lambda match: '{values.' + match.group(1) + '}\n</div>')
            .collect()
    )

    outputFile = open('output.html', 'w')
    outputFile.write(output)
    
    outputFile.close()