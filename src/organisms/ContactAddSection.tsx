import { Card, CardContent } from "@/components/ui/card";
import { IContactItem } from "@/d.type";
import { useContactApi } from "@/hooks/useContactApi";
import {
  faCalendar,
  faImage,
  faPhone,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonLight from "../app-components/ButtonLight";
import ButtonPrimary from "../app-components/ButtonPrimary";
import Label from "../app-components/Label";
import TextInput from "../app-components/TextInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useAppSelector } from "@/libstore/hooks";
import InfoSection from "./InfoSection";

// Image Error Evidence
import PostmanEditError from "@/assets/images/edit-error.png";
import ReduxEditEvidence from "@/assets/images/redux-edit-evidence.png";

interface IContactAddSection {
  setShowAddSection: any;
  isEdit: boolean;
}

const ContactAddSection: FC<IContactAddSection> = ({
  setShowAddSection,
  isEdit,
}) => {
  const { handleAddContact, handleEditContact, insertProcess } =
    useContactApi();
  const form = useForm<IContactItem>();
  const { handleSubmit } = form;
  let selectedContact: IContactItem;
  selectedContact = useAppSelector((state) => state.dialing);
  const [showEditInfo, setShowEditInfo] = useState(false);

  const onSubmit: SubmitHandler<IContactItem> = (data) => {
    data.id = (Math.random() + 1).toString(36).substring(7);
    handleAddContact(data, () => {
      setShowAddSection(false);
    });
  };

  const onContinueEdit = () => {
    handleEditContact(form.getValues(), () => {
      setShowAddSection(false);
      setShowEditInfo(false);
    });
  };

  const onEdit: SubmitHandler<IContactItem> = () => {
    setShowEditInfo(true);
  };

  /**
   * Handle image upload and preview
   * @param e value if input file
   */
  const [file, setFile] = useState<any>();
  function handleChange(e: any) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    if (isEdit) {
      form.setValue("id", selectedContact.id);
      form.setValue("firstName", selectedContact.firstName);
      form.setValue("lastName", selectedContact.lastName);
      form.setValue("age", selectedContact.age);
      form.setValue("photo", selectedContact.photo);
    }
  }, [isEdit]);
  return (
    <div
      className="w-full h-screen z-40 fixed justify-center content-center item-center top-0"
      style={{ background: "rgba(0,0,0,0.5)" }}
    >
      {/* Info Alert Section */}
      {showEditInfo && (
        <InfoSection onContinue={onContinueEdit}>
          <div className="w-full flex">
            <div className="w-1/6 justify-center content-center item-center flex">
              <FontAwesomeIcon
                icon={faWarning}
                size="4x"
                className="text-primary"
              />
            </div>
            <div className="w-5/6 h-[600px] overflow-auto">
              <div className="w-full rounded-lg bg-amber-100 p-3">
                <Label text="Editing may not save data to the database !" />{" "}
                <br />
                <span>
                  The API Provided https://contact.herokuapp.com/contact with
                  method PUT doesn't work properly, it returns 400 in anyway.
                  I'll show you the evidence below
                </span>
              </div>
              <div className="w-full p-3">
                <Label text="Postman Test Edit Error ( 400 ) API" /> <br />
                <Image src={PostmanEditError} alt="Edit Error Evidence" />
              </div>
              <div className="w-full p-3">
                <Label text="Solution" /> <br />
                <span>
                  You can still get the changes of selected contact you've
                  selected, I change the data in the Contact List Reducer so it
                  will show us the changed data after we click Edit. <br />
                  But, when we reload the page, the data will not be changed.
                </span>
              </div>
              <div className="w-full p-3">
                <Label text="Postman Test Edit Error ( 400 ) API" /> <br />
                <Image src={ReduxEditEvidence} alt="Edit Error Evidence" />
              </div>
            </div>
          </div>
        </InfoSection>
      )}

      {/* Pop Up Form Section */}
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-2/5 p-5">
          <Card>
            <CardContent className="p-10">
              <Label text="Add contact" /> <br />
              <span className="font-mainLight">
                Phone number you added will be automatically synced to the
                i-cloud, you can change it anytime at settings !
              </span>
            </CardContent>
            <CardContent className="lg:py-5">
              <Form {...form}>
                <form onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)}>
                  <div className="lg:flex">
                    <div className="w-full py-5 lg:py-0  lg:w-2/6 flex justify-center content-center item-center">
                      <label htmlFor="avatar-upload">
                        <div className="rounded-full cursor-pointer hover:bg-amber-100 w-[150px] h-[150px] bg-amber-200 overflow-hidden content-center text-center justify-center">
                          <input
                            type="file"
                            name="avatar"
                            id="avatar-upload"
                            className="hidden"
                            onChange={handleChange}
                          />
                          {file ? (
                            <Image
                              alt="avatar preview"
                              width={150}
                              height={150}
                              src={file}
                            />
                          ) : (
                            <FontAwesomeIcon icon={faImage} size="3x" />
                          )}
                        </div>
                      </label>
                    </div>
                    <div className="w-full lg:w-4/6">
                      <div className="w-full lg:flex">
                        <div className="w-full lg:w-1/2 p-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <TextInput
                                    icon={faUser}
                                    placeholder="First name"
                                    defaultValue={field.value}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full lg:w-1/2 p-2 pl-9 lg:pl-2">
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <TextInput
                                    placeholder="Last name"
                                    defaultValue={field.value}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:flex">
                        <div className="w-full lg:w-1/2 p-2">
                          <FormField
                            control={form.control}
                            name="age"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <TextInput
                                    icon={faCalendar}
                                    placeholder="Age"
                                    defaultValue={field.value}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="w-full hidden lg:block lg:w-1/2 p-2 pl-9 lg:pl-2"></div>
                      </div>
                      <div className="w-full flex">
                        <div className="w-full p-2">
                          <TextInput
                            icon={faPhone}
                            placeholder="Phone number"
                            defaultValue={form.getValues("phone")}
                            onChange={(e: any) => {
                              console.log(e.target.value);
                            }}
                          />
                          {/* <span className="text-[10px] ms-10 text-primary">
                            Phone number will not be stored because the API
                            doesn't provide its key !
                          </span> */}
                        </div>
                      </div>
                      <div className="w-full flex flex-row justify-end p-2">
                        <div className="ms-2">
                          <ButtonLight
                            onClick={() => {
                              setShowAddSection(false);
                            }}
                            type="button"
                            title="Cancel"
                          />
                        </div>
                        <div className="ms-2">
                          <ButtonPrimary
                            disabled={insertProcess}
                            type="submit"
                            title={insertProcess ? "Saving..." : "Save"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactAddSection;
