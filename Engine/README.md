# faceRecognition

If you are running this software for the first time then make sure to create a Python virtual environment and install all the dependencies.

1. open a terminal in current directory.
2. run command: python3 -m venv env
3. 3.1) On windows run: env\Scripts\activate.bat
   3.2) On Linux run: source env/bin/activate
4. Then run: pip install -r requirements.txt
5. Finally run: python3 train.py

facial recognition using openCV and python with a tkinter gui interface. To start the software run train.py file

Technology used :
-openCV (Opensource Computer Vision)
-Python
-tkinter GUI interface

This is a Face recognition based Attendance Management System by using OpenCV(Python). One can mark thier attendance by simply facing the camera.

How it works :

When we run train.py a window is opened and ask for Enter Id and Enter Name. After enter name and id then we have to click Take Images button. By clicking Take Images camera of running computer is opened and it start taking image sample of person.This Id and Name is stored in folder StudentDetails and file name is StudentDetails.csv. It takes 60 images as sample and store them in folder TrainingImage.After completion it notify that iamges saved.
After taking image sample we have to click Train Image button.Now it take few seconds to train machine for the images that are taken by clicking Take Image button and creates a Trainner.yml file and store in TrainingImageLabel folder.
Now all initial setups are done. By clicking Track Image button camera of running machine is opened again. If face is recognised by system then Id and Name of person is shown on Image. Press Q(or q) for quit this window. After quitting it attendance of person will be stored in Attendance folder as csv file with name, id, date and time and it is also available in window.

thanks
