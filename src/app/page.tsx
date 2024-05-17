import ContactList from "../organisms/ContactList";
import MainLayout from "../organisms/Layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-3 py-8">
        <ContactList />
      </div>
    </MainLayout>
  );
}
