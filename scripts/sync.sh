#!/bin/bash

# Get the current date in yyyy-mm-dd format
current_date=$(date +"%Y-%m-%d")

# source 1
source_file_1="/Users/jon/Documents/the-grand-library/docs/Phase Two/Active Projects/Academia/BigDoc.md"
destination_file_1="/Users/jon/cmd/academia/versions/narrative/${current_date}.md"
cp "$source_file_1" "$destination_file_1"

# source 2
source_file_2="/Users/jon/Documents/the-grand-library/docs/Phase Two/Active Projects/Academia/ResearchPaper.md"
destination_file_2="/Users/jon/cmd/academia/versions/researchpaper/${current_date}.md"
cp "$source_file_2" "$destination_file_2"
