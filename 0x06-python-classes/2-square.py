#!/usr/bin/python3
"""Square generation module for Python project 0x06
"""


class Square:
    """Defines a square"""
    def __init__(self, size=0):
        if type(size) != int:
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
