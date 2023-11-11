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
data = annotations

# Extract unique values from full_matches and ngram_scored
doc_node_values = set()

for match in data['results']['full_matches']:
    doc_node_values.add(match['doc_node_value'])

for scored in data['results']['ngram_scored']:
    doc_node_values.add(scored['doc_node_value'])

# Additional processing to standardize skill names and remove duplicates
standardized_values = set()
for value in doc_node_values:
    standardized_value = value.lower().replace(' ', '')
    standardized_values.add(standardized_value)

# Convert the set to a list if needed
unique_values_list = list(standardized_values)

# Print the result
print(unique_values_list)
