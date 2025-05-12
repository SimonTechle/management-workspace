<<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
=======
import { clsx, type ClassValue } from "clsx"
>>>>>>> a71d26b7cd6ca4df9d5f8e3a012e25834d465c84
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
<<<<<<< HEAD
}
=======
}
>>>>>>> a71d26b7cd6ca4df9d5f8e3a012e25834d465c84
