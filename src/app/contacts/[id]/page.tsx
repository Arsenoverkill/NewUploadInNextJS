import ContactsPage from "@/components/page/ContactsPage";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <ContactsPage />
      <Link href={`/contacts/1`}></Link>
    </div>
  );
};

export default page;
