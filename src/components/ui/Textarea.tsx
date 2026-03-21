'use client';

import React, { forwardRef, useId, useCallback, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  autoResize?: boolean;
  maxCharacters?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      label,
      error,
      helperText,
      required,
      autoResize = false,
      maxCharacters,
      className,
      id,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const errorId = error ? `${textareaId}-error` : undefined;
    const helperId = helperText ? `${textareaId}-helper` : undefined;
    const describedBy =
      [errorId, helperId].filter(Boolean).join(' ') || undefined;

    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = useCallback(
      (node: HTMLTextAreaElement | null) => {
        internalRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
      },
      [ref]
    );

    const handleAutoResize = useCallback(() => {
      const el = internalRef.current;
      if (el && autoResize) {
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
      }
    }, [autoResize]);

    useEffect(() => {
      handleAutoResize();
    }, [value, handleAutoResize]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      handleAutoResize();
    };

    const charCount =
      typeof value === 'string'
        ? value.length
        : typeof defaultValue === 'string'
          ? defaultValue.length
          : 0;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-charcoal mb-1.5"
          >
            {label}
            {required && <span className="text-red-500 ml-0.5">*</span>}
          </label>
        )}
        <textarea
          ref={setRefs}
          id={textareaId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          maxLength={maxCharacters}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border text-charcoal placeholder:text-concrete-gray',
            'transition-colors duration-200 resize-y',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            autoResize && 'resize-none overflow-hidden',
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/30'
              : 'border-gray-300 focus:border-construction-yellow focus:ring-construction-yellow/30',
            className
          )}
          {...props}
        />
        <div className="flex justify-between mt-1.5">
          <div>
            {error && (
              <p id={errorId} className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
            {helperText && !error && (
              <p id={helperId} className="text-sm text-concrete-gray">
                {helperText}
              </p>
            )}
          </div>
          {maxCharacters != null && (
            <p
              className={cn(
                'text-xs ml-auto',
                charCount >= maxCharacters
                  ? 'text-red-500'
                  : 'text-concrete-gray'
              )}
            >
              {charCount}/{maxCharacters}
            </p>
          )}
        </div>
      </div>
    );
  }
);
