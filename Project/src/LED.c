#include "LED.h"

void LED_Init(void) {
	// Enable GPIO Clocks
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOAEN; // Enable clock of Port A
	
	// Initialize Green LED
	// [DONE]
	GPIOA->MODER &= ~(3UL<<10); // Clear bits 10 and 11 for Pin 5 
	GPIOA->MODER |= 1UL<<10; // Set bit 10, set Pin 5 as output

	GPIOA->OTYPER &= ~(1UL<<5); // Select pull-push output
	GPIOA->PUPDR &= ~(3UL<<10); // No pull-up no pull-down
}

void Green_LED_Off(void) {
	// [DONE]
	GPIOA->ODR &= ~(1UL<<5);
}

void Green_LED_On(void) {
	// [DONE]
	GPIOA->ODR |= 1UL<<5;
}

void Green_LED_Toggle(void) {
	// [DONE]
	GPIOA->ODR ^= 1UL<<5;
}
