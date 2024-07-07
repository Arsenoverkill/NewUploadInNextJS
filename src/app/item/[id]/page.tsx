"use client";
import ItemPage from "@/components/page/ItemPage";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <ItemPage />
    </div>
  );
};

export default page;
