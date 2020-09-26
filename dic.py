from six.moves import input
import urllib
import requests
import re
import html2text

def has_cyrillic(text):
    return bool(re.search('[\u0400-\u04FF]', text))

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

# get the definition
# url_path = "http://suzlek.antat.ru/wordsR.php?txtW={}&submit=Найти".format(word)
# url_path = "https://en.openrussian.org/ru/{}".format(trans[0])
# url_path = "https://en.bab.la/dictionary/russian-english/{}".format(trans[0])
# url_path = "https://translate.google.com/#view=home&op=translate&sl=ru&tl=en&text={}".format(word)
# url_path = "https://povto.ru/russkie/slovari/tolkovie/ozhegova/search_ozhegov.php?q_tolk_ozh={}".format(word)
# url_path = "https://ru.wiktionary.org/wiki/{}".format(trans[0])
# url_path = "https://bigenc.ru/search?q={}".format(trans[0])

url_path = "https://znachenie-slova.ru/{}".format(trans[0])

f = requests.get(url_path)

h = html2text.HTML2Text()
h.ignore_links = True
words = h.handle(f.text)

text = list(map(lambda x: x,re.findall(r'\w+', words) ))

meaning = []

for i in range(len(text)):
	if (text[i+1] == 'Ожегова') and (text[i+2] == trans[0]):
		break;
	else:
		meaning.append(text[i])

print("Definition: ", ' '.join(meaning))