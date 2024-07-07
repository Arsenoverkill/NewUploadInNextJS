import { useParams } from "next/navigation";

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  return <div></div>;
};

export default ItemPage;
