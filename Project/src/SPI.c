#include "SPI.h"
#include "SysTimer.h"
#include "stm32l476xx.h"


extern uint8_t Rx1_Counter;
extern uint8_t Rx2_Counter;


void SPI_GPIO_Init(void) {
	// Enable the GPIO Clock
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOBEN;
	
	// Set Alternative Functions for SPI
	// [DONE]
	GPIOB->MODER &= ~(GPIO_MODER_MODE14 | GPIO_MODER_MODE15);
	GPIOB->MODER |= GPIO_MODER_MODE14_1 | GPIO_MODER_MODE15_1;
	
	// Alternative function set 0101
	// [DONE]
	GPIOB->AFR[1] &= ~(GPIO_AFRH_AFSEL14 | GPIO_AFRH_AFSEL15);
	GPIOB->AFR[1] |= GPIO_AFRH_AFSEL14_0 | GPIO_AFRH_AFSEL14_2 | GPIO_AFRH_AFSEL15_0 | GPIO_AFRH_AFSEL15_2;
	
	// Set GPIO Pins to: Very High Output speed, Output Type Push-Pull, and No Pull-Up/Down
	// [DONE]
	GPIOB->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR14 | GPIO_OSPEEDER_OSPEEDR15;
	GPIOB->OTYPER &= ~(GPIO_OTYPER_OT14 | GPIO_OTYPER_OT15);
	GPIOB->PUPDR &= ~(GPIO_PUPDR_PUPD14 | GPIO_PUPDR_PUPD15);
	
}

//SPI Init for ILI9341 on Nucleo board
void SPI_Init(void){
	// Enable SPI clock and Reset SPI
	// [DONE]
	RCC->APB2ENR |= RCC_APB2ENR_SPI1EN;
	RCC->APB2RSTR |= RCC_APB2RSTR_SPI1RST;
	RCC->APB2RSTR &= ~RCC_APB2RSTR_SPI1RST;
	
	// Disable SPI
	// [DONE]
	SPI1->CR1 &= ~SPI_CR1_SPE;
	
	// Configure for Full Duplex Communication
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_RXONLY);
	
	// Configure for 2-line Unidirectional Data Mode
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_BIDIMODE);

	// Set Frame Format
	// [DONE]
	SPI1->CR2 &= ~(SPI_CR2_DS);
	SPI1->CR2 |= SPI_CR2_DS_0 | SPI_CR2_DS_1 | SPI_CR2_DS_2;
	
	// Configure Clock
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_CPOL);
	SPI1->CR1 &= ~(SPI_CR1_CPHA);
	
	// Set Baud Rate Prescaler.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_BR);
	SPI1->CR1 |= SPI_CR1_BR_0 | SPI_CR1_BR_1;

	// Disable Hardware CRC Calculation
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_CRCEN);
	
	// Set as Master and Enable Software Slave Management and NSS Pulse Management
	// [DONE]
	SPI1->CR1 |= SPI_CR1_MSTR;
	SPI1->CR1 |= SPI_CR1_SSM;
	SPI1->CR2 |= SPI_CR2_NSSP;

	// Manage NSS using Software
	// [TODO]
	
	
	// Set FIFO Reception Threshold
	// [DONE]
	SPI1->CR2 |= SPI_CR2_FRXTH;
	
	// Enable SPI
	// [DONE]
	SPI1->CR1 |= SPI_CR1_SPE;
}


void SPI_Write(SPI_TypeDef * SPIx, uint8_t *txBuffer, uint8_t * rxBuffer, int size) {
    for (int i = 0; i < size; i++) {

        while (!(SPIx->SR & SPI_SR_TXE)); // Wait until TX buffer is empty
        *(uint8_t *)&SPIx->DR = txBuffer[i]; // Write data to be transmitted to the SPI data register

        while (!(SPIx->SR & SPI_SR_RXNE)); // Wait until RX buffer is not empty
        rxBuffer[i] = *(uint8_t *)&SPIx->DR; // Read received data from SPI data register

        SPI_Delay(100); // Delay for 100 microseconds
    }
}

void SPI_Read(SPI_TypeDef * SPIx, uint8_t *rxBuffer, int size) {
    for (int i = 0; i < size; i++) {

        while (!(SPIx->SR & SPI_SR_TXE)); // Wait until TX buffer is empty
        *(uint8_t *)&SPIx->DR = 0xFF; // Send dummy byte to generate clock for reading data

        while (!(SPIx->SR & SPI_SR_RXNE)); // Wait until RX buffer is not empty
        rxBuffer[i] = *(uint8_t *)&SPIx->DR; // Read received data from SPI data register
		
        SPI_Delay(100); // Delay for 100 microseconds
    }
}


//Where do we use this
//Incorporate delay function (same as delay() in previous labs but with us)
void SPI_Delay(uint32_t us) {
	uint32_t time = 100*us/7;    
	while(--time);  
}
