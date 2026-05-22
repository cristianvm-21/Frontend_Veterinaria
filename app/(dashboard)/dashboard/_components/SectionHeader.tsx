"use client";

import { Card } from "@/components/ui/card";
import {
  CircleUserRound,
  ReceiptText,
  BookUser,
  Calendar,
  PawPrint,
} from "lucide-react";

type SectionHeaderProps = {
  iconName?: string;
  iconLabel?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

const SectionHeader = ({
  iconName,
  iconLabel,
  title,
  description,
  action,
}: SectionHeaderProps) => {
  return (
    <Card className="flex-row items-center justify-between gap-6 rounded-b-4xl p-6">
      <div>
        <span className="inline-flex items-center gap-2">
          {iconName === "Icono Usuarios" && <CircleUserRound />}
          {iconName === "Icono Servicios" && <ReceiptText />}
          {iconName === "Icono Clientes" && <BookUser />}
          {iconName === "Icono Mascotas" && <PawPrint />}
          {iconName === "Icono Citas" && <Calendar />}
          {iconLabel}
        </span>

        <h1 className="mb-2 text-[clamp(1.7rem,2.8vw,2.7rem)] text-inherit">
          {title}
        </h1>

        <p>{description}</p>
      </div>

      <div className="flex flex-col gap-2">
        {/*Formulario */}
        {action}
      </div>
    </Card>
  );
};

export default SectionHeader;
