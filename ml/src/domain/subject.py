import numpy as np
import time
from apscheduler.scheduler import Scheduler

CONST_TIME = 2
CONST_TREESHOLD = 80

class Subject:
    def __init__(self):
        self.gender=0
        self.mood=[]
        self.scheduler=None

    def evaluate(self):
        current=int(time.time())

        timeView=list(filter(lambda element: current-CONST_TIME<=element[0], self.mood))
        happyView=list(filter(lambda element: element[1]=="happy", timeView))

        if(len(timeView)==0):
            self.unload()
        elif len(happyView)/len(timeView)*100<CONST_TREESHOLD:
            self.unload()
        
    def unload(self):
        print("unload")

    def start(self):
        self.scheduler = Scheduler()
        self.scheduler.start()
        self.scheduler.add_interval_job(self.evaluate, seconds = CONST_TIME)

    def stop(self):
        self.scheduler.shutdown()        

    def add(self, labels, mood, gender):
        labeledMoods=np.array(list(zip(labels,mood)))
        timestamp=int(time.time())

        self.gender=gender

        for labeledMood in labeledMoods:
            self.mood.append((timestamp, labeledMood[0], labeledMood[1]))

    def addMood(self, mood, gender):
        timestamp=int(time.time())

        self.gender=gender
        self.mood.append((timestamp, mood, 1))
