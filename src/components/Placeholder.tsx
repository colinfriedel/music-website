/** Dashed box shown wherever Colin hasn't provided the text yet. */
export function Placeholder({ children }: { children: string }) {
  return <p className="ph">Placeholder: {children}</p>;
}
