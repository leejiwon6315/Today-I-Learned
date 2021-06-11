import cv2
import numpy as np

faces = []
labels = []

for i in range(1, 16):
    image = cv2.imread("./face/" + str(i) + ".jpg")
    image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    faces.append(image)

    f = open("./face/" + str(i) + ".txt", "r")
    line = int(f.readline())
    labels.append(line)

face_recognizer = cv2.face.EigenFaceRecognizer_create()
face_recognizer.train(faces, np.array(labels))

test_image = cv2.imread("./testt.jpg")

test_image = cv2.cvtColor(test_image, cv2.COLOR_BGR2GRAY)

predict_label, confidence = face_recognizer.predict(test_image)

if(predict_label == 1):
    print("이유현입니다.")
elif(predict_label == 2):
    print("이지원입니다.")
elif(predict_label == 3):
    print("이혜린입니다.")
    
print(confidence)

cv2.imshow("test_image", test_image)
cv2.waitKey()
