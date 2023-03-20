/*
 * ECE 153B - Winter 2023
 *
 * Name(s): Liam Pang-Naylor, Jacob Eisner
 * Section: Tuesday 7pm
 * Lab: Final Project
 */


#include "stm32l476xx.h"
#include "Motor.h"
#include "SysTimer.h"
#include "SysClock.h"
#include "UART.h"
#include "SPI.h"
#include "MY_ILI9341.h"
#include <string.h>
#include <stdio.h>

// Initializes USARTx
// USART2: UART Communication with Termite
// USART1: Bluetooth Communication with Phone
void Init_USARTx(int x) {
	if(x == 1) {
		UART1_Init();
		UART1_GPIO_Init();
		USART_Init(USART1);
	} else if(x == 2) {
		UART2_Init();
		UART2_GPIO_Init();
		USART_Init(USART2);
	} else {
		// Do nothing...
	}
}

int main(void) {
	GPIO_Init();
	SysTick_Init();
 	SysTick_Handler();
	Init_USARTx(1);
	SPI2_GPIO_Init();
	SPI_Init();
	System_Clock_Init();
	ILI9341_Init(SPI2, GPIOB, 11, GPIOB, 10, GPIOB, 12);
	ILI9341_Fill(COLOR_BLACK);
	
	volatile char rxByte = 'z';
	while(1) {
		// [TODO]
		printf("Snoring roommate? Type [t] to tickle them, [b] blind them, or [a] for all:\n");
		scanf("%c",&rxByte);
		if (rxByte == 't' || rxByte == 'T') {
			Annoy();
		}
		else if (rxByte == 'b' || rxByte == 'B') {
				for (int i = 0; i < 5; i++) {
				ILI9341_Fill(COLOR_CYAN);
				delay(2500);
				ILI9341_Fill(COLOR_YELLOW);
				delay(2500);
			}
				ILI9341_Fill(COLOR_BLACK);
		}
		else if (rxByte == 'a' || rxByte == 'A') {
			Annoy();
			for (int i = 0; i < 5; i++) {
				ILI9341_Fill(COLOR_CYAN);
				delay(2500);
				ILI9341_Fill(COLOR_YELLOW);
				delay(2500);
			}
			ILI9341_Fill(COLOR_BLACK);
			
		}
		else {
			printf("Invald input, please try again.");
		}
	}
}
