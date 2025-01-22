// NOTE: We haven't used this file yet because we are unsure where to integrate it in the project.
// This file can be used to define global types, interfaces, or type declarations for the project.

declare global {
  // Example: A global interface for a user object
  interface User {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
  }

  // Example: A global type for API response data
  type ApiResponse<T> = {
    success: boolean;
    data: T;
    error?: string;
  };

  // Example: A custom event type
  interface CustomEvent {
    type: string;
    payload: Record<string, unknown>; // Replaced `any` with a specific type
  }

  // Add more global types, interfaces, or custom declarations as needed
}

// This will ensure that the file is treated as a module and not just a global declaration.
export {};
