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
	
	System_Clock_Init(); // Switch System Clock = 80 MHz

	// Initialize UART -- change the argument depending on the part you are working on
	Init_USARTx(1);
	
	volatile char rxByte = 'a';
	while(1) {
		// [TODO]
		printf("Gimme an input:\n");
		scanf("%c",&rxByte);
		if (rxByte == 'y' || rxByte == 'Y') {
				Full_Stepping_Clockwise();
		}
		else {
			printf("Invald input, please try again.");
		}
	}
	

	
	
}
