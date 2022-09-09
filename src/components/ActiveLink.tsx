import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export default function ActiveLink({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter();

    let isActive = false;

    if (shouldMatchExactHref && (rest.href === asPath || rest.as === asPath)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }
    
  return (
    <Link {...rest}>
        {cloneElement(children as ReactElement, {
            color: isActive ? 'pink.400' : 'gray.50',
        })}
    </Link>
  )
}
