#include "UART.h"

void UART1_Init(void) {
	// [DONE]
	
	// Refer to directions near Figure 4. Numbered directions below are from UART2
	
	// [1a]	Enable USART1 clock in the peripheral clock register (AHB2ENR)
	RCC->APB2ENR |= RCC_APB2ENR_USART1EN; // Enable USART2 clock

	// [1b] Select system clock as USART1 clock source in peripheral independent clock configuration register (CCIPR)
	// [DONE]
	RCC->CCIPR &= ~RCC_CCIPR_USART1SEL; // b Clear USART1SEL bits (USART1SEL = 00)
	RCC->CCIPR |= RCC_CCIPR_USART1SEL_0; // b Set bit 1 (USART1SEL = 01)
}

void UART2_Init(void) {
	// [DONE]
	
	// [1a]	Enable USART2 clock in the peripheral clock register (AHB1ENR)
	// [DONE]
	RCC->APB1ENR1 |= RCC_APB1ENR1_USART2EN; // Enable USART2 clock
	
	// [1b] Select system clock as USART2 clock source in peripheral independent clock configuration register (CCIPR)
	// [DONE]
	RCC->CCIPR &= ~RCC_CCIPR_USART2SEL; // b Clear USART2SEL bits (USART2SEL = 00)
	RCC->CCIPR |= RCC_CCIPR_USART2SEL_0; // b Set bit 1 (USART2SEL = 01)
}

void UART1_GPIO_Init(void) {
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOBEN; // Enable GPIO Port B Clock
	
	// [Not listed] Set Alternative function mode
	// [DONE]
	GPIOB->MODER &= ~(GPIO_MODER_MODE6 | GPIO_MODER_MODE7);
	GPIOB->MODER |= GPIO_MODER_MODE6_1 | GPIO_MODER_MODE7_1;
	
	// [not in directions] Alternative functions
	// [DONE]
	GPIOB->AFR[0] &= ~(GPIO_AFRL_AFSEL6);
	GPIOB->AFR[0] |= GPIO_AFRL_AFSEL6_0 | GPIO_AFRL_AFSEL6_1 | GPIO_AFRL_AFSEL6_2;
	GPIOB->AFR[0] &= ~(GPIO_AFRL_AFSEL7);
	GPIOB->AFR[0] |= GPIO_AFRL_AFSEL7_0 | GPIO_AFRL_AFSEL7_1 | GPIO_AFRL_AFSEL7_2;
	
	// [2a] Configure PB6 and PB7 to Very High Output Speed
	// [DONE]
	GPIOB->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR6;
	GPIOB->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR7;
	
	// [2b] Set PA9 output type to push-pull
	// [DONE]
	GPIOB->OTYPER &= ~(GPIO_OTYPER_OT6);
	GPIOB->OTYPER &= ~(GPIO_OTYPER_OT7);

	// [2c] Configure both GPIO pins to use pull-up resistors for I/O
	// [DONE]
	GPIOB->PUPDR &= ~(GPIO_PUPDR_PUPD6 | GPIO_PUPDR_PUPD7);
	//GPIOB->PUPDR |= GPIO_PUPDR_PUPD6_0 | GPIO_PUPDR_PUPD7_0;
}

void UART2_GPIO_Init(void) {
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOAEN; // Enable GPIO Port A Clock
	
	// [Not listed] Set Alternative function mode
	// [DONE]
	GPIOA->MODER &= ~(GPIO_MODER_MODE2 | GPIO_MODER_MODE3);
	GPIOA->MODER |= GPIO_MODER_MODE2_1 | GPIO_MODER_MODE3_1;
	
	// [Not listed] Alternative function set
	// [DONE]
	GPIOA->AFR[0] &= ~(GPIO_AFRL_AFSEL2);
	GPIOA->AFR[0] |= GPIO_AFRL_AFSEL2_0 | GPIO_AFRL_AFSEL2_1 | GPIO_AFRL_AFSEL2_2;
	GPIOA->AFR[0] &= ~(GPIO_AFRL_AFSEL3);
	GPIOA->AFR[0] |= GPIO_AFRL_AFSEL3_0 | GPIO_AFRL_AFSEL3_1 | GPIO_AFRL_AFSEL3_2;
	
	// [2a] Configure PA2 and PA3 to Very High Output Speed
	// [DONE]
	GPIOA->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR2;
	GPIOA->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR3;
	
	// [2b] Set PA9 output type to push-pull
	// [DONE]
	GPIOA->OTYPER &= ~(GPIO_OTYPER_OT2);
	GPIOA->OTYPER &= ~(GPIO_OTYPER_OT3);

	// [2c] Configure both GPIO pins to use pull-up resistors for I/O
	// [DONE]
	GPIOA->PUPDR &= ~(GPIO_PUPDR_PUPD2 | GPIO_PUPDR_PUPD3);
	GPIOA->PUPDR |= GPIO_PUPDR_PUPD2_0 | GPIO_PUPDR_PUPD3_0;
}

void USART_Init(USART_TypeDef* USARTx) {
	// [DONE]
	
	// [3] USART must be disabled before modifying USART registers
	// [DONE]
	USARTx->CR1 &= ~USART_CR1_UE; // Reset USART enable bit
	
	// [3a] In control registers, set word length to 8 bits, oversampling mode to oversample by 16, num of stop bits to 1
	// [DONE]
	USARTx->CR1 &= ~USART_CR1_M; // Reset word length bits (M = 00: 8 data bits)
	USARTx->CR1 &= ~USART_CR1_OVER8; // Reset oversampling bit (OVER8 = 0: oversample by 16)
	USARTx->CR2 &= ~USART_CR2_STOP; // Reset stop bits (STOP = 00: num stop bits 1)
	
	// [3b] Set baud rate to 9600, generate using provided equation
	// [DONE]
	USARTx->BRR = 8333;
	
	// [3c] In control registers, enable both transmitter and receiver
	// [DONE]
	USARTx->CR1 |= USART_CR1_RE; // Receiver enable
	USARTx->CR1 |= USART_CR1_TE; // Transmitter enable

	// [3d] Enable USART
	// [DONE]
	USARTx->CR1 |= USART_CR1_UE; // Set USART enable bit
}

uint8_t USART_Read (USART_TypeDef * USARTx) {
	// SR_RXNE (Read data register not empty) bit is set by hardware
	while (!(USARTx->ISR & USART_ISR_RXNE));  // Wait until RXNE (RX not empty) bit is set
	// USART resets the RXNE flag automatically after reading DR
	return ((uint8_t)(USARTx->RDR & 0xFF));
	// Reading USART_DR automatically clears the RXNE flag 
}

void USART_Write(USART_TypeDef * USARTx, uint8_t *buffer, uint32_t nBytes) {
	int i;
	// TXE is cleared by a write to the USART_DR register.
	// TXE is set by hardware when the content of the TDR 
	// register has been transferred into the shift register.
	for (i = 0; i < nBytes; i++) {
		while (!(USARTx->ISR & USART_ISR_TXE));   	// wait until TXE (TX empty) bit is set
		// Writing USART_DR automatically clears the TXE flag 	
		USARTx->TDR = buffer[i] & 0xFF;
		USART_Delay(300);
	}
	while (!(USARTx->ISR & USART_ISR_TC));   		  // wait until TC bit is set
	USARTx->ISR &= ~USART_ISR_TC;
}   

void USART_Delay(uint32_t us) {
	uint32_t time = 100*us/7;    
	while(--time);   
}
