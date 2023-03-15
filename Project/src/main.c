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
#include <string.h>
#include <stdio.h>

int main(void) {
	GPIO_init();
	SysTick_Init();
 	SysTick_Handler();
	if (/* detect snoring */)
	{
		Full_Stepping_Clockwise();
	}
	if (/* snoring stops */)
	{
		/* code */
	}
	
}
