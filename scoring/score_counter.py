import pandas as pd
domains = [
        "Frontend",
        "Backend",
        "Mobile Dev",
        "Game Dev",
        "Data Science",
        "AI",
        "QA",
        "DevOps",
        "Cybersecurity",
        "DB Admin",
        "Networking",
        "Embedded",
    ]

def calculate_domain_sums(languages):
    # Load the Excel file
    file_path = "programming_languages.xlsx"  # Replace with the path to your Excel file
    df = pd.read_excel(file_path)

    # Group by domain and calculate the sum
    

    domain_sums = {domain: 0 for domain in domains}

    for language in languages:
        if language in df['Programming Language'].tolist():
            selected_language = df[df['Programming Language'] == language]
            for domain in domains:
                domain_sums[domain] += selected_language[domain].values[0]

    return [domain_sums[domain] for domain in domains]

# Example usage:
input_languages = ["Python", "JavaScript", "Java", "C++"]

domain_scores = calculate_domain_sums(input_languages)
print(domains)
print("Domain Scores:", domain_scores)
