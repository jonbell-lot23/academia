#!/bin/bash

# Get the current date in yyyy-mm-dd format
current_date=$(date +"%Y-%m-%d")

# Define the source file
source_file="/Users/jon/Documents/the-grand-library/docs/Phase Two/Active Projects/Academia/BigDoc.md"

# Define the destination directory and file
destination_file="/Users/jon/cmd/academia/versions/${current_date}.md"

# Copy the source file to the destination
cp "$source_file" "$destination_file"
