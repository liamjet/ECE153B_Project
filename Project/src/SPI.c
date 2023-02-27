#include "SPI.h"
#include "SysTimer.h"

// Note: When the data frame size is 8 bit, "SPIx->DR = byte_data;" works incorrectly. 
// It mistakenly send two bytes out because SPIx->DR has 16 bits. To solve the program,
// we should use "*((volatile uint8_t*)&SPIx->DR) = byte_data";

void SPI1_GPIO_Init(void) {
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOBEN; // Enable GPIO Port B Clock
	
	// [Not listed] Set Alternative function mode
	// [DONE]
	GPIOB->MODER &= ~(GPIO_MODER_MODE3 | GPIO_MODER_MODE4 | GPIO_MODER_MODE5);
	GPIOB->MODER |= GPIO_MODER_MODE3_1 | GPIO_MODER_MODE4_1 | GPIO_MODER_MODE5_1;
	
	// [Not listed] Alternative function set 0101
	// [DONE]
	GPIOB->AFR[0] &= ~(GPIO_AFRL_AFSEL3 | GPIO_AFRL_AFSEL4 | GPIO_AFRL_AFSEL5);
	GPIOB->AFR[0] |= GPIO_AFRL_AFSEL3_0 | GPIO_AFRL_AFSEL3_2 | GPIO_AFRL_AFSEL4_0 | GPIO_AFRL_AFSEL4_2 | GPIO_AFRL_AFSEL5_0 | GPIO_AFRL_AFSEL5_2;
	
	// [3] Configure PB3,4,5 to Very High Output Speed
	// [DONE]
	GPIOB->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR3 | GPIO_OSPEEDER_OSPEEDR4 | GPIO_OSPEEDER_OSPEEDR5;
	
	// [3] Set PB3,4,5 output type to push-pull
	// [DONE]
	GPIOB->OTYPER &= ~(GPIO_OTYPER_OT3 | GPIO_OTYPER_OT4 | GPIO_OTYPER_OT5);

	// [3] Configure both GPIO pins to use no pull-up resistors for I/O
	// [DONE]
	GPIOB->PUPDR &= ~(GPIO_PUPDR_PUPD3 | GPIO_PUPDR_PUPD4 | GPIO_PUPDR_PUPD5);
}

void SPI2_GPIO_Init(void) {
	// [DONE]
	RCC->AHB2ENR |= RCC_AHB2ENR_GPIOBEN; // Enable GPIO Port B Clock
	
	// [Not listed] Set Alternative function mode (10)
	// [DONE]
	GPIOB->MODER &= ~(GPIO_MODER_MODE13 | GPIO_MODER_MODE14 | GPIO_MODER_MODE15);
	GPIOB->MODER |= GPIO_MODER_MODE13_1 | GPIO_MODER_MODE14_1 | GPIO_MODER_MODE15_1;
	
	// [Not listed] Alternative function set 0101
	// [DONE]
	GPIOB->AFR[1] &= ~(GPIO_AFRH_AFSEL13 | GPIO_AFRH_AFSEL14 | GPIO_AFRH_AFSEL15);
	GPIOB->AFR[1] |= GPIO_AFRH_AFSEL13_0 | GPIO_AFRH_AFSEL13_2 | GPIO_AFRH_AFSEL14_0 | GPIO_AFRH_AFSEL14_2 | GPIO_AFRH_AFSEL15_0 | GPIO_AFRH_AFSEL15_2;
	
	// [3] Configure PB13,14,15 to Very High Output Speed
	// [DONE]
	GPIOB->OSPEEDR |= GPIO_OSPEEDER_OSPEEDR13 | GPIO_OSPEEDER_OSPEEDR14 | GPIO_OSPEEDER_OSPEEDR15;
	
	// [3] Set PB13,14,15 output type to push-pull
	// [DONE]
	GPIOB->OTYPER &= ~(GPIO_OTYPER_OT13 | GPIO_OTYPER_OT14 | GPIO_OTYPER_OT15);

	// [3] Configure both GPIO pins to use no pull-up resistors for I/O
	// [DONE]
	GPIOB->PUPDR &= ~(GPIO_PUPDR_PUPD13 | GPIO_PUPDR_PUPD14 | GPIO_PUPDR_PUPD15);
}

void SPI1_Init(void){
	// DONE: initialize SPI2 peripheral
	
	// [4a] Enable the SPI1 clock
	// [FIXME]
	RCC->APB2ENR |= RCC_APB2ENR_SPI1EN;

	// [4b] Set the RCC SPI reset bit, then clear it to reset the SPI1 peripheral
	// [DONE]
	RCC->APB2RSTR |= RCC_APB2RSTR_SPI1RST;
	RCC->APB2RSTR &= ~RCC_APB2RSTR_SPI1RST;

	// [4c] Disable spi enable bit
	// [DONE]
	SPI1->CR1 &= ~SPI_CR1_SPE;

	// [4d] Configure the peripheral for full-duplex communication.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_RXONLY);

	// [4e] Disable the peripheral for 2-line unidirectional data mode.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_BIDIMODE);

	// [4f] Disable output in bidirectional mode.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_BIDIOE);

	// [4g] Configure the frame format as MSB first.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_LSBFIRST);

	// [4h] Configure the frame format to 8-bit mode.
	// [DONE]
	SPI1->CR2 &= ~(SPI_CR2_DS);
	SPI1->CR2 |= SPI_CR2_DS_0 | SPI_CR2_DS_1 | SPI_CR2_DS_2;

	// [4i] Use Motorola SPI mode.
	// [DONE]
	SPI1->CR2 &= ~(SPI_CR2_FRF);

	// [4j] Configure the clock to low polarity.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_CPOL);

	// [4k] Configure the clock to first clock transition.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_CPHA);

	// [4l] Set the baud rate prescaler to 16.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_BR);
	SPI1->CR1 |= SPI_CR1_BR_0 | SPI_CR1_BR_1;

	// [4m] Disable hardware CRC calculation.
	// [DONE]
	SPI1->CR1 &= ~(SPI_CR1_CRCEN);

	// [4n] Set SPI1 to master mode.
	// [TODO]
	SPI1->CR1 |= SPI_CR1_MSTR;

	// [4o] Enable software SSM.
	// [DONE]
	SPI1->CR1 |= SPI_CR1_SSM;

	// [4p] Enable NSS pulse generation.
	// [DONE]
	SPI1->CR2 |= SPI_CR2_NSSP;

	// [4q] Set the internal slave select bit.
	// [DONE]
	SPI1->CR1 |= SPI_CR1_SSI;

	// [4r] Set the FIFO threshold to 1/4 (required for 8-bit mode).
	// [DONE]
	SPI1->CR2 |= SPI_CR2_FRXTH;

	// [4s] Enable the SPI peripheral.
	// [DONE]
	SPI1->CR1 |= SPI_CR1_SPE;
}

void SPI2_Init(void){
	// DONE: initialize SPI2 peripheral
	
	// [4a] Enable the SPI2 clock
	// [DONE]
	RCC->APB1ENR1 |= RCC_APB1ENR1_SPI2EN;

	// [4b] Set the RCC SPI reset bit, then clear it to reset the SPI2 peripheral
	// [DONE]
	RCC->APB1RSTR1 |= RCC_APB1RSTR1_SPI2RST;
	RCC->APB1RSTR1 &= ~RCC_APB1RSTR1_SPI2RST;

	// [4c] Disable spi enable bit
	// [DONE]
	SPI2->CR1 &= ~SPI_CR1_SPE;

	// [4d] Configure the peripheral for full-duplex communication.
	// [DONE]
	SPI2->CR1 &= ~SPI_CR1_RXONLY;

	// [4e] Configure the peripheral for 2-line unidirectional data mode.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_BIDIMODE);
	
	// [4f] Disable output in bidirectional mode.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_BIDIOE);
	
	// [4g] Configure the frame format as MSB first.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_LSBFIRST);
	
	// [4h] Configure the frame format to 8-bit mode.
	// [DONE]
	SPI2->CR2 &= ~(SPI_CR2_DS);
	SPI2->CR2 |= SPI_CR2_DS_0 | SPI_CR2_DS_1 | SPI_CR2_DS_2;

	// [4i] Use Motorola SPI mode.
	// [DONE]
	SPI2->CR2 &= ~(SPI_CR2_FRF);

	// [4j] Configure the clock to low polarity.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_CPOL);

	// [4k] Configure the clock to first clock transition.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_CPHA);

	// [4l] Set the baud rate prescaler to 16.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_BR);
	SPI2->CR1 |= SPI_CR1_BR_0 | SPI_CR1_BR_1;

	// [4m] Disable hardware CRC calculation.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_CRCEN);

	// [4n] Set SPI1 to master mode and SPI2 to slave mode.
	// [DONE]
	SPI2->CR1 &= ~(SPI_CR1_MSTR);

	// [4o] Enable software SSM.
	// [DONE]
	SPI2->CR1 |= SPI_CR1_SSM;

	// [4p] Enable NSS pulse generation.
	// [DONE]
	SPI2->CR2 |= SPI_CR2_NSSP;

	// [4q] Set the internal slave select bit. (chip select)
	// [DONE]
	SPI2->CR1 &= ~SPI_CR1_SSI;

	// [4r] Set the FIFO threshold to 1/4 (required for 8-bit mode).
	// [DONE]
	SPI2->CR2 |= SPI_CR2_FRXTH;

	// [4s] Enable the SPI peripheral.
	// [DONE]
	SPI2->CR1 |= SPI_CR1_SPE;
}
/*
void SPI_Transfer_Byte(SPI_TypeDef* SPIx, uint8_t write_data, uint8_t* read_data) {
	// TODO: perform SPI transfer
	
	// Wait for the Transmit Buffer Empty flag to become set
	while ((SPIx->SR & SPI_SR_TXE) != SPI_SR_TXE);
	
	// Write data to the SPIx->DR register to begin transmission
	*((volatile uint8_t*)&SPIx->DR) = write_data;
	
	// Wait for the Busy to become unset for the transmission to complete.
	while ((SPIx->SR & SPI_SR_BSY) == SPI_SR_BSY);
	
	// Wait for the Receive Not Empty flag to set for the data to be received
	while ((SPIx->SR & SPI_SR_RXNE) != SPI_SR_RXNE);
	
	// Read received data from the SPIx->DR register
	*read_data = *((volatile uint8_t*)&SPIx->DR);
}
*/

void SPI_Send_Byte(SPI_TypeDef* SPIx, uint8_t write_data) {
	// TODO: send data from SPI1
	// [5a] Wait for the Transmit Buffer Empty flag to become set.
	// [DONE]
	while ((SPIx->SR & SPI_SR_TXE) != SPI_SR_TXE);

	// [5b] Write data to the SPIx->DR register to begin transmission.
	// [DONE]
	*((volatile uint8_t*) &SPIx->DR) = write_data;
	
	// [5c] Wait for the Busy to become unset for the transmission to complete.
	// [DONE]
	while ((SPIx->SR & SPI_SR_BSY) == SPI_SR_BSY);
}

void SPI_Receive_Byte(SPI_TypeDef* SPIx, uint8_t* read_data) {
	// TODO: receive data from SPI2
	// [5d] Wait for the Receive Not Empty flag to set for the data to be received.
	// [DONE]
	while ((SPIx->SR & SPI_SR_RXNE) != SPI_SR_RXNE)

	// [5e] Read received data from the SPIx->DR register.
	// [DONE]
	*read_data = *((volatile uint8_t*) &SPIx->DR);
}

