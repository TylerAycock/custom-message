import { Form, useLoaderData, redirect } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

function EditContact() {
  const contact = useLoaderData();
  //   console.log(contact);

  let staticContact = {
    first: "Tyler",
    last: "Aycock",
    avatar: "https://placekitten.com/g/200/200",
    github: "https://github.com/TylerAycock",
    notes: "This is me!",
    favorite: true,
  };

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First name"
          name="first"
          defaultValue={contact.first}
        />
        <input
          type="text"
          name="last"
          placeholder="Last"
          aria-label="Last name"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Github</span>
        <input
          type="text"
          name="github"
          placeholder="GitHub URL"
          defaultValue={contact.github}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          name="avatar"
          aria-label="Avatar URL"
          placeholder="https://example.com/avatar.jpg"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          rows={6}
          defaultValue={contact.notes}
          placeholder="Enter some notes..."
          name="notes"
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}

export default EditContact;

//Loader Functions

export async function loader({ params }) {
  let contact = await getContact(params.contactId);
  return contact;
}

export async function action(data) {
  let formData = await data.request.formData();
  let updates = Object.fromEntries(formData);
  let { contactId: id } = data.params;
  await updateContact(id, updates);
  return redirect(`/contacts/${id}`);
}
