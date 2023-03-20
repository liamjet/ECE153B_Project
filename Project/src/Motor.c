#include "stm32l476xx.h"
#include "SysTimer.h"

void GPIO_Init(void){	
	// [DONE]
	
	// Port C clock enable
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOCEN;
	
	// Set PC5, PC6, PC7, PC8 to output (01)
	// [DONE]
	GPIOC->MODER &= ~(GPIO_MODER_MODE5 | GPIO_MODER_MODE6 | GPIO_MODER_MODE8 | GPIO_MODER_MODE9);
	GPIOC->MODER |= GPIO_MODER_MODE5_0 | GPIO_MODER_MODE6_0 | GPIO_MODER_MODE8_0 | GPIO_MODER_MODE9_0;
	
	// Set the output speed of the pins to fast
	// [DONE]
	GPIOC->OSPEEDR &= ~(GPIO_OSPEEDER_OSPEEDR5 | GPIO_OSPEEDER_OSPEEDR6 | GPIO_OSPEEDER_OSPEEDR8 | GPIO_OSPEEDER_OSPEEDR9);
	GPIOC->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR5_1 | GPIO_OSPEEDER_OSPEEDR6_1 | GPIO_OSPEEDER_OSPEEDR8_1 | GPIO_OSPEEDER_OSPEEDR9_1;
	
	// Set the output type of the pins to push-pull
	// [DONE]
	GPIOC->OTYPER &= ~(GPIO_OTYPER_OT5 | GPIO_OTYPER_OT6 | GPIO_OTYPER_OT8 | GPIO_OTYPER_OT9);
	
	
	// Set the pins to no pull-up no pull-down
	// [DONE]
	GPIOC->PUPDR &= ~(GPIO_PUPDR_PUPD5 | GPIO_PUPDR_PUPD6 | GPIO_PUPDR_PUPD8 | GPIO_PUPDR_PUPD9);
}


#define DELAY 18	// delay between steps of the sequences
#define DELAY2 9

void Annoy(void) {
	for (int i = 0; i < 4; i++)
	{
		Quarter_Clockwise();
		for (int j = 0; j < 5; j++)
		{
			Half_Stepping_Clockwise();
			Half_Stepping_CounterClockwise();
		}
	}
}

void Quarter_Clockwise(void){
	// [FIXME, HOW DO I MAKE SURE IT STARTS IN THE RIGHT PLACE]
	// make a loop that loops 4096 times
	// in each loop iteration toggle 5, 56, 6, 68, 8, 89, 9, 95
	for (int j = 0; j < 128; j++)
	{
		
		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD6;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD8;

		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD9;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD6;

		delay(DELAY2);


		GPIOC->ODR |= GPIO_ODR_OD5;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD9;

		delay(DELAY2);


		GPIOC->ODR |= GPIO_ODR_OD8;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD5;
	}
}

void Half_Stepping_Clockwise(void){
	// [FIXME, HOW DO I MAKE SURE IT STARTS IN THE RIGHT PLACE]
	// make a loop that loops 4096 times
	// in each loop iteration toggle 5, 56, 6, 68, 8, 89, 9, 95
	for (int j = 0; j < 10; j++)
	{
		
		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD6;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD8;

		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD9;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD6;

		delay(DELAY2);


		GPIOC->ODR |= GPIO_ODR_OD5;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD9;

		delay(DELAY2);


		GPIOC->ODR |= GPIO_ODR_OD8;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD5;
	}
}

void Half_Stepping_CounterClockwise(void){
	// [FIXME, HOW DO I MAKE SURE IT STARTS IN THE RIGHT PLACE]
	// make a loop that loops 4096 times
	// in each loop iteration toggle 95, 9, 89, 8, 86, 6, 56, 5
	for (int j = 0; j < 10; j++)
	{
		
		delay(DELAY2);
		
		GPIOC->ODR |= GPIO_ODR_OD5;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD8;

		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD9;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD5;

		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD6;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD9;

		delay(DELAY2);

		GPIOC->ODR |= GPIO_ODR_OD8;
		delay(DELAY2);
		GPIOC->ODR &= ~GPIO_ODR_OD6;

		
	}
}