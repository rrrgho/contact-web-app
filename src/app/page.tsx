import Image from "next/image";
import MainLayout from "./organisms/Layout";
import ContactList from "./organisms/ContactList";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-3 py-8">
        <ContactList />
      </div>
    </MainLayout>
  );
}
