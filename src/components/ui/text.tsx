import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const textVariants = cva('scroll-m-20 tracking-tight text-foreground font-heading', {
  variants: {
    variant: {
      default: 'text-2xl font-semibold',
      super: 'font-bold tracking-[0.04em] uppercase text-foreground text-[138px]',
      super_custom: 'font-bold tracking-[0.04em] uppercase text-forest text-[138px]',
      hero: 'font-bold text-foreground text-[120px]',
      hero_custom: 'font-bold text-forest text-[120px]',
      end_text: 'font-semibold text-[114px] tracking-[-0.03em] text-final-white',
      sub_hero: 'font-normal uppercase text-foreground text-[100px]',
      sub_hero_custom: 'font-normal uppercase text-forest text-[100px]',
      bold_sub_hero: 'font-bold uppercase text-foreground text-[100px]',
      bold_sub_hero_custom: 'font-bold uppercase text-forest text-[100px]',
      title: 'font-bold uppercase text-foreground text-[43px]',
      title_custom: 'font-bold uppercase text-forest text-[43px]',
      minor_title: 'font-bold uppercase text-foreground text-[40px]',
      minor_title_custom: 'font-bold uppercase text-forest text-[40px]',
      prompt_text: 'font-bold uppercase text-foreground text-[36px]',
      prompt_text_custom: 'font-bold uppercase text-forest text-[36px]',
      subtitle: 'font-bold uppercase text-foreground text-[30px]',
      subtitle_custom: 'font-bold uppercase text-forest text-[30px]',
      section_title: 'font-bold text-foreground text-[20px]',
      section_title_custom: 'font-bold text-forest text-[20px]',
      section_text: 'font-normal text-foreground text-[20px]',
      section_text_custom: 'font-normal text-forest text-[20px]',
      plain_big: 'font-normal capitalize text-foreground text-[20px]',
      plain_big_custom: 'font-normal capitalize text-forest text-[20px]',
      footer_text: 'font-bold text-footer-foreground text-[19px] font-semibold leading-[1.4] tracking-[-0.02em]',
      plain_text: 'font-normal capitalize leading-[1.71] tracking-[0.01em] text-foreground text-[14px]',
      plain_custom: 'font-normal capitalize leading-[1.71] tracking-[0.01em] text-forest text-[14px]',
      plain_bold: 'font-bold uppercase leading-[1.71] tracking-[0.01em] text-foreground text-[14px]',
      plain_bold_custom: 'font-bold uppercase leading-[1.71] tracking-[0.01em] text-forest text-[14px]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'left',
  },
});

export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof textVariants> {
  as?: React.ElementType;
}

export function Typography({ className, variant, align, as: Comp = 'h2', ...props }: TextProps) {
  return <Comp className={cn(textVariants({ variant, align, className }))} {...props} />;
}
