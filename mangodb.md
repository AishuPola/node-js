how mangodb works:
database will have
tables==collevtions will have
documents=objects

advantages:
joins nit required.
why?
we dont nead to normalise.,so requirement of joins.
we cannot have row inside row in sql, but here we can have it.
we can have array of documents.

# schema:

1. different key
   . each document can have diff names.
2. extra key
3. consistent
   3 whenever we are unsure of what we get, we can use these mangodb.

# BSON FORMAT

json format will take more space, since the data is repeated.

so it will convert into bson formart
api --->for every adapter is called sdk
python has one js has one
aws can write in py or js

aws------->sdk------> electron db (easy)orms
------js
mongo db --------->sdk-----> mongoose

pk,sk ----> helps for indexing both together.
by default in sql what is order --> primary key
but in dynamo db we have 2 keys pk (primary key)and sk(some other key can be used for sorting purpose)
pk+sk----> primary key
sk-->any column(key)
entitity is schema ( optional but good practice to keep )
attributes are keys - cloumn names

two types to retrive the data

- query--->good--- if indexed then use query if not use scan
- scan --->bad(table scanning)---
  so this is reason we have multiple indexes

  gsi- globals secondary index (non clustered index 1)
  when i do index i need to do pk and sk

  # movies creating table in dynamo db

  - create test.js file-->npm i aws-sdk electrondb

  1. install as a dependency in your project
     > npm install electrodb --save

# embedded documents:

nested documents.

primary key :partition key +sort key

there are three data types:

1. scaler
2. document
3. set

# scaler:

string,
number,
boolean,
any(we dont use it)

# document:

1. list --->[Array]
2. Map

# Set

1. set of strings
2. set of numbers
   these wont allow the duplicate numbers.
