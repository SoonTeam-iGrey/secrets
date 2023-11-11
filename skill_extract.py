# imports
import spacy
from spacy.matcher import PhraseMatcher

# load default skills data base
from skillNer.general_params import SKILL_DB
# import skill extractor
from skillNer.skill_extractor_class import SkillExtractor

# init params of skill extractor
nlp = spacy.load("en_core_web_lg")
# init skill extractor
skill_extractor = SkillExtractor(nlp, SKILL_DB, PhraseMatcher)

# extract skills from job_description
description = """
In this project I learned to link a database made in MySQL with the web application using JSP and Hibernate
technologies.
The frontend was made using bootstrap
C++
Python
javascript
java
"""

annotations = skill_extractor.annotate(description)

#print(annotations)

#INSTALL
######### pip install skillNer
######### python -m spacy download en_core_web_lg