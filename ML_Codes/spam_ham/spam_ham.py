import sys
import re
import nltk
import numpy as np
import pickle

from nltk.stem.porter import PorterStemmer

ps = PorterStemmer()
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer()

o = open("./ML_Codes/spam_ham/stopwords.pkl", "rb")
stp = pickle.load(o)

string = sys.argv[1]
def text_pipeline(text):
  corpus1 = []
  review = re.sub('[^a-zA-Z]', ' ', text)
  review = review.lower()
  review = review.split()
  
  review = [ps.stem(word) for word in review if not word in stp]
  review = ' '.join(review)
  corpus1.append(review)

  m = open("./ML_Codes/spam_ham/tfidf.pkl", "rb")
  tfidf = pickle.load(m)
  X1 = tfidf.transform(corpus1)
  n = open("./ML_Codes/spam_ham/model.pkl", "rb")
  clf = pickle.load(n)
  output = clf.predict(X1)
  return output

num1 = text_pipeline(string)
print(num1[0])