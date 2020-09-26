from six.moves import input
import urllib
import requests
import re

word = input()
url_path = "https://translate.tatar/translate?lang=1&text={}".format(word)

f = requests.get(url_path)

words = list(map(lambda x: x,re.findall(r'\w+', f.text) ))

trans = list()

for i in range(len(words)):
	if words[i] == 'translation': 
	    while words[i+1] != 'translation':
	    	trans.append(words[i+1])
	    	i+=1
	    break;

print("Translation(s): ")
for t in trans:
	print(t)