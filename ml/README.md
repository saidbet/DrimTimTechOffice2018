# python - 2 tools
 
## usage

```bash
# configuration
# change in subject.py
#  CONST_TIME = 2 -> period of analysis
#  CONST_TREESHOLD = 80 -> wanted mean of happiness 
#  CONST_BUZZ = "http://10.100.3.48/on/3" -> web address to wake up collaboratpor
#  MONGO_CONNECTION = "mongodb://localhost:27017" -> connection for db
#  MONGO_DATABASE = "angularfullstack" -> database
#  COLLABORATOR = "christof" -> name of the collaborator
#  COLLECTION = "mood" -> collection

#  2 cameras must be connected

# launch analyser (must be launch from src directory)
# camera 0 
python3 emotion.py

# launch server (allow streaming to manager - must be launch from src directory)
# expose port 8080
# camera 1 
python3 server.py 

```

sudo apt install python-pip3 python-opencv
pip3 install pymongo