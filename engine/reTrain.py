import os
from modules import trainModel

os.chdir(os.path.dirname(os.path.abspath(__file__)))

try:
    trainModel.TrainImages()
    print("success")
except:
    print("failed")
