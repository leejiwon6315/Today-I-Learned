import numpy as np
import imutils
import cv2

ratio=0.75
reprojThresh=4.0

imgL = cv2.imread('./img/sedona_left_01.png')
imgR = cv2.imread('./img/sedona_right_01.png')

imgL = imutils.resize(imgL, width=400)
imgR = imutils.resize(imgR, width=400)

descriptor = cv2.xfeatures2d.SIFT_create()

kpsL, featuresL = descriptor.detectAndCompute(imgL, None)
kpsR, featuresR = descriptor.detectAndCompute(imgR, None)
kpsL = np.float32([kp.pt for kp in kpsL])
kpsR = np.float32([kp.pt for kp in kpsR])

matcher = cv2.BFMatcher()
matches = matcher.knnMatch(featuresR, featuresL, k=2) ## queryIdx, trainIdx, k 순서로 입력

goodMatches = []

for m in matches:
	if m[0].distance < m[1].distance * ratio:
		goodMatches.append((m[0].trainIdx, m[0].queryIdx))

ptsL = np.float32([kpsL[i] for (i, _) in goodMatches])
ptsR = np.float32([kpsR[i] for (_, i) in goodMatches])

(H, status) = cv2.findHomography(ptsR, ptsL, cv2.RANSAC, reprojThresh)

result = cv2.warpPerspective(imgL, H, (imgR.shape[1]+imgL.shape[1], imgL.shape[0]))

result[:imgR.shape[0], imgR.shape[1]-175:imgR.shape[1]*2-175] = imgR # 이미지 삽입

cv2.imshow("Left Image", imgL)
cv2.imshow("Right Image", imgR)
cv2.imshow("Stitched Image", result)
cv2.waitKey(0)
