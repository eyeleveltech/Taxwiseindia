'use client';
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Returns `true` when the device has a fine pointer and supports hover
 * (desktop mouse, not touch).
 */
export function useFinePointer(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
