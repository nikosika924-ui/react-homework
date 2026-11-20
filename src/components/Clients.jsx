const persons = [
  { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", phone: "1-463-123-4447", website: "ramiro.info" },
  { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", phone: "493-170-9623", website: "kale.biz" },
  { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", phone: "(254)954-1289", website: "demarco.info" },
  { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", phone: "1-477-935-8478", website: "ola.org" },
  { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", phone: "210.067.6132", website: "elvis.io" },
  { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", phone: "586.493.6943", website: "jacynthe.com" },
  { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", phone: "(775)976-6794", website: "conrad.com" },
  { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", phone: "024-648-3804", website: "ambrose.net" }
];

export default function Clients() {
  return (
    <div style={{ backgroundColor: '#ff7f50', padding: '20px', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Карточки клиентов</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
        {persons.map((p) => (
          <div key={p.id} style={{ backgroundColor: '#00ffff', border: '2px solid black', padding: '10px', width: '220px', textAlign: 'center', fontFamily: 'Times New Roman' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{p.name}</h3>
            <h4 style={{ margin: '0 0 15px 0' }}>{p.username}</h4>
            <p style={{ borderTop: '1px solid black', padding: '5px 0', margin: 0, fontSize: '13px' }}>{p.email}</p>
            <p style={{ borderTop: '1px solid black', padding: '5px 0', margin: 0, fontSize: '13px' }}>{p.phone}</p>
            <p style={{ borderTop: '1px solid black', padding: '5px 0', margin: 0, fontSize: '13px' }}>{p.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}