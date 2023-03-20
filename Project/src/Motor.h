/*
 * ECE 153B - Winter 2021
 *
 * Name(s): Liam Pang-Naylor, Jacob Eisner
 * Section: Tuesday 7pm
 * Lab: 2B
 */

#ifndef __STM32L476G_NUCLEO_MOTOR_H
#define __STM32L476G_NUCLEO_MOTOR_H

#include "stm32l476xx.h"

void GPIO_Init(void);
void Quarter_Clockwise(void);
void Half_Stepping_Clockwise(void);
void Half_Stepping_CounterClockwise(void);
void Annoy(void);

#endif