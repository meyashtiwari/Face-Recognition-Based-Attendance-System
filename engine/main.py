from modules import trackImage, trainModel, vision

while(True):
    userInput = input('command: ')
    command = userInput.split().pop(0)

    if (command == 'addNewUser'):
        try:
            command, Id, Name = userInput.split()
            vision.TakeImages(Id, Name)
        except:
            print("Give me ID and Name")
    elif (command == 'trainModel'):
        trainModel.TrainImages()
    elif (command == 'markAttendance'):
        trackImage.TrackImages() 
    elif (command == 'quit'):
        exit()
    else:
        print("Command is not recognized")