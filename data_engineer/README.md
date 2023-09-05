# Data Engineer Take home assingment 
## Background

We have offer listings that are generated when the user gets to our partner comparison page. Inside every offer listing, there are clickable partner offer cards sorted by one of our machine-learning algorithms. Users then can click on any of them to be forwarded to that particular partner. Users click distribution is highly favouring the first place, being long tail distribution. We want you to transform this raw data into usable data for BI reports so that we can visualize the partner position distribution inside offer listings.

## Objective
Transform the `offer_listings` table's `partner_id_ranking` column from the provided PostgreSQL Docker instance The goal is to expand the delimited string format into individual rows, where each row contains a partner and its associated ranking position while keeping all the other information about the offer listing. Create a reproducible process that loads the data from the database, transforms it, and then exports data. Provide Code, description and docker file to build.

## Pre-requisites
1. [Docker](https://docs.docker.com/get-docker/) installed on your machine. 

If you do not have experience with docker, you should create an account, and check for instructions on how to pull, run and build docker containers, but most of it will be described here.

## Setup and Execution

### 1. Pull and Run the PostgreSQL Docker Image

```bash
docker pull reinisnud/de_task_source:v1
docker run --rm --name mydb -e POSTGRES_PASSWORD=I42igy723hsd -e POSTGRES_DB=your_database -p 6666:5432 reinisnud/de_task_source:v1
```

### 2. Extract Data

- Connect to the provided PostgreSQL instance using your preferred database client on `localhost:6666`. (Use the credentials you provided when launching the container)
- Extract the required data from the `offer_listings` table.

### 3. Transform Data

- Use your tool of choice (python, pyspark, sql, airflow dag for example) to do the transformations, to achieve the following result - entry for each partner in the offer listing with the respective position. Use the order of the partner name inside the string column to calculate that. The row count at the end should be (partners in each offer listing * offer listing count), which should be around 30k if every offer listing has 3 partners.

### 4. Export Data

- Data should be exported to a comma-separated values file (.CSV)

### 5. Containerization 

- Once the transformation is done, validate the results. For us to reproduce and test your ability to create docker images, we would like you to build a docker image that includes the ETL process inside of it. So that when it is launched, the container runs the whole process and extracts the transformed data. Assume that Postgresql docker will be running in parallel.

## Task Requirements

- Provide the output dataset, code and ideally docker file (with instructions on how to build it)
---

You can place this README.md in the root of your GitHub repository, and it should render appropriately on the platform.