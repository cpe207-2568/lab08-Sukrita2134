import type { FooterProps } from "../libs/types";

export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {year} {fullName} {studentId}
    </footer>
  );
}
