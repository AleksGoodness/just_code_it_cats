import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const textVariants = cva('', {
  variants: {
    variant: {
      sm: 'text-xs sm:text-sm',
      md: 'text-sm sm:text-xl',
      lg: 'text-2xl sm:text-3xl',
      xl: 'text-3xl sm:text-4xl',
    },
  },
  defaultVariants: {
    variant: 'md',
  },
});

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, variant, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cn(textVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
});

Text.displayName = 'Text';

export { Text, textVariants };
