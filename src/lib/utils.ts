import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: 'create' | 'update' | 'delete' | 'list' | 'get' | 'write';
  path: string | null;
  authInfo: {
    userId: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerInfo: { providerId: string; displayName: string; email: string; }[];
  }
}

export function handleFirestoreError(error: any, operationType: FirestoreErrorInfo['operationType'], path: string | null): never {
  const authInfo = {
    userId: 'anonymous',
    email: 'none',
    emailVerified: false,
    isAnonymous: true,
    providerInfo: []
  };

  const errorInfo: FirestoreErrorInfo = {
    error: error.message || 'Unknown Firestore error',
    operationType,
    path,
    authInfo: (window as any).auth?.currentUser ? {
      userId: (window as any).auth.currentUser.uid,
      email: (window as any).auth.currentUser.email || 'none',
      emailVerified: (window as any).auth.currentUser.emailVerified,
      isAnonymous: (window as any).auth.currentUser.isAnonymous,
      providerInfo: (window as any).auth.currentUser.providerData.map((p: any) => ({
        providerId: p.providerId,
        displayName: p.displayName || '',
        email: p.email || ''
      }))
    } : authInfo
  };

  throw new Error(JSON.stringify(errorInfo));
}
