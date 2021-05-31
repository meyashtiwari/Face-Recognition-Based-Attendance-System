from modules import vision
import sys, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))
Id = sys.argv[1]
Name = sys.argv[2]

try:
    vision.TakeImages(Id, Name)
    print("success")
except:
    print("failed")
