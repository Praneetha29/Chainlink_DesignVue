import sys
import os
import replicate
from dotenv import load_dotenv, find_dotenv

# Load environment variables
load_dotenv(find_dotenv())
replicate.api_key = os.environ["REPLICATE_API_TOKEN"]

def generate_image(text: str) -> list:
    """
    Generates images based on the given text description.
    
    :param text: Text description to generate the image.
    :return: List of generated images.
    """
    output = replicate.run(
        "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
        input={"prompt": text, "num_samples": "4"}
    )
    return output

# Get text description from command line argument
if len(sys.argv) > 1:
    text_description = sys.argv[1]
else:
    print("No text description provided.")
    sys.exit(1)

# Generate images
images = generate_image(text_description)

# Print the raw output to understand its structure
print("Raw Output:", images)

# Update this logic based on the actual structure of your output
if images:
    # Replace this logic with the correct way to access your image URLs
    # For example, if images is a list of URLs:
    print(images[0])
else:
    print("No image generated")
