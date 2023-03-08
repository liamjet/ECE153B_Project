# ECE 153B Final Project: Snore Detector and Corrector
by Liam Pang-Naylor and Jacob Eisner

## Overview/Goal/Purpose

The Snore Detector and Corrector will detect the user's roommate’s snoring and provide the user with the necessary options to correct this behavior, in the form of flashing lights, loud noises, or both. The user may activate snore countermeasures through their phone, promptly waking the offender and ideally reducing snoring through any means necessary. It will also be able to auto-detect and suppress snoring using an onboard microphone and automatic snore countermeasures.

## Peripherals
### HC-05 Bluetooth Chip <br>
[Amazon](https://www.amazon.com/DSD-TECH-HC-05-Pass-through-Communication/dp/B01G9KSAF6/ref=sr_1_3?crid=3EHMG82OVCNDU&keywords=HC-05+Wireless&qid=1677540877&s=electronics&sprefix=hc-05+wireless%2Celectronics%2C197&sr=1-3) <br>
[Electronic Wings Documentation](https://www.electronicwings.com/sensors-modules/bluetooth-module-hc-05-) <br>
[ECE 153B Documentation](https://1drv.ms/b/s!Aqo-m-NuPRi-iO9lam0pB0y6UknUcQ?e=txWicT) <br>

### 2.8 TFT SPI 240X320 V1.2 <br>
[Amazon](https://www.amazon.com/HiLetgo-240X320-Resolution-Display-ILI9341/dp/B073R7BH1B) <br>
[LCD Wiki](http://www.lcdwiki.com/2.8inch_SPI_Module_ILI9341_SKU:MSP2807) <br>

### Adafruit I2S MEMS Microphone <br>
[Amazon](https://www.amazon.com/Adafruit-I2S-MEMS-Microphone-Breakout/dp/B06XNL2GBW) <br>
[Guide](https://learn.adafruit.com/adafruit-i2s-mems-microphone-breakout/) <br>

The Adafruit I2S MEMS Microphone is a pure digital microphone which can be interfaced to the STM board by using a SPI block as I2S. The STM board has seven SPI blocks so there will be no compatibility issues with the SPI Display.

### Adafruit I2C Stereo 2.8W Class D Audio Amplifier (SUBJECT TO CHANGE) <br>
[Amazon](https://www.amazon.com/Stereo-2-8W-Class-Audio-Amplifier/dp/B096YFBBFF) <br>

### uxcell a15080600ux0275 Metal Shell Round Internal Magnet Speaker 2W 8 Ohm
[Amazon](https://www.amazon.com/Uxcell-a15080600ux0275-Internal-Magnet-Speaker/dp/B0177ABRQ6/ref=sr_1_3?keywords=8+ohm+speaker&qid=1678050488&sr=8-3#customerReviews) <br>
[Guide](https://www.adafruit.com/product/1712)

## Block Diagram
<img width="500" alt="Picture1" src="https://user-images.githubusercontent.com/61168583/221713957-f15b9de0-710e-4668-9106-0fa8c4420742.png">

## Responsibilities
### Liam <br>
Hardware interfacing Research <br>
Hardware purchases <br>
### Jacob <br>
Website design <br>
### Shared Responsibilities <br>
Software setup <br>
Testing <br>
Demonstration/Presentation <br>

## Website
[Website](https://liamjet.github.io/ECE153B_Project/)

