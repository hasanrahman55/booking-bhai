function Heading({ title }) {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg rounded-lg px-6 py-5 mb-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
        {title}
      </h1>
    </section>
  );
}

export default Heading;
