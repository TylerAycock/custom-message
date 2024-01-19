import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  let { contactId } = params;
  // console.log(contactId)
  const contact = await getContact(contactId);
  // console.log(contact);
  return contact;
}

function Contact() {
  let contact = useLoaderData();

  let staticContact = {
    first: "Tyler",
    last: "Aycock",
    avatar: "https://placekitten.com/g/200/200",
    github: "https://github.com/TylerAycock",
    notes: "This is me!",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar || null} key={contact.avatar} />
      </div>
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>
        {contact.github && (
          <p id="github">
            <a target="blank" href={contact.github}>
              Github
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(e) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                e.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

function Favorite({ contact }) {
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? false : true}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
