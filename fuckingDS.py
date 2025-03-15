# Submission Code
# Lab 3-4: Encoding Categorical Data with Input Version

# Step 0: Get the list of animals from user input.
# Enter animals separated by commas (e.g., Dog, Cat, Fish, Dog, Cat, Crocodile)
input_str = input("")
animals = [x.strip() for x in input_str.split(",")]

# Step 1: Extract unique categories
unique_animals = list(dict.fromkeys(animals))
print("Unique animals:", unique_animals)

# Step 2: Build a dictionary mapping
animal_dict = dict.fromkeys(unique_animals, 0)
for idx, key in enumerate(animal_dict):
    animal_dict[key] = idx

print("Animal dictionary mapping:", animal_dict)

# Step 3: Encode each animal in the original list
encoded_animals = [animal_dict[animal] for animal in animals]


print("Encoded animals:", encoded_animals)
