import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <section
        className="p-5 bg-cover bg-center h-[50vh]"
        style={{
          backgroundImage: `url("https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2")`,
        }}
      >
        <div className="flex flex-col items-start justify-center h-full ">
          <h4 className="text-white text-2xl font-bold mb-4">FreshGoods</h4>
          <h1 className="text-white text-5xl max-w-lg">
            Concisely describe your product or service
          </h1>
          <p className="text-white text-base mt-4 max-w-md">
            No need to get clever. Tell people exactly what you're offering,
            then use this space to communicate your key value proposition.
          </p>
          <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </section>

      <section className="p-5 text-center py-16">
        <h2 className="text-3xl font-bold mb-8">
          Here are some of the benefits of your offer
        </h2>
        <p className="text-gray-600 mb-12">
          Explain what makes your product or service great. Talk about features
          that highlight the real value people get out of them.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
              alt="Benefit 1"
              className="mb-4 w-16 h-16"
            />
            <h3 className="text-lg font-bold">Benefit 1</h3>
            <p className="text-gray-600">
              For example, restaurants and bakeries could outline the health
              benefits of their all-natural ingredients.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
              alt="Benefit 2"
              className="mb-4 w-16 h-16"
            />
            <h3 className="text-lg font-bold">Benefit 2</h3>
            <p className="text-gray-600">
              Florists and other small retailers might use this space to
              describe how their products make delightful, one-of-a-kind gifts.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
              alt="Benefit 3"
              className="mb-4 w-16 h-16"
            />
            <h3 className="text-lg font-bold">Benefit 3</h3>
            <p className="text-gray-600">
              You could also add buttons to this section and share links to
              other products or available delivery methods.
            </p>
          </div>
        </div>
      </section>

      <section
        className="p-5 bg-gray-800 text-white py-16 text-center"
        style={{
          backgroundImage:
            'url("https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=fff185a2-dff1-8155-8342-ca7bab2c8a64&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=860&userId=&cache=v2")',
        }}
      >
        <h3 className="text-2xl font-bold mb-4">What our customers say</h3>
        <span className="text-yellow-500 text-5xl mx-2">,,</span>
        <p className="text-lg italic mb-8">
          Share a real testimonial that hits some of your benefits (but isn’t
          too sales-y).
        </p>
        <div className="flex flex-col items-center">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png"
            alt="Customer"
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="text-lg font-bold">Real Name</p>
          <p>
            Location
            <br />
            ⭐⭐⭐⭐⭐
          </p>
        </div>
      </section>

      <section className=" p-5 py-16 text-center bg-gray-200">
        <h3 className="text-2xl font-bold mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg"
              alt="Feature 1"
              className="mb-4 w-42 h-32"
            />
            <h4 className="text-lg font-bold">Feature 1</h4>
            <p className="text-gray-600">
              Talk about some of the details of your offer with a focus on the
              value people get back.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg"
              alt="Feature 2"
              className="mb-4 w-42 h-32"
            />
            <h4 className="text-lg font-bold">Feature 2</h4>
            <p className="text-gray-600">
              Is there a pain point that your product or service resolves? Tell
              visitors about it here.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg"
              alt="Feature 3"
              className="mb-4 w-42 h-32"
            />
            <h4 className="text-lg font-bold">Feature 3</h4>
            <p className="text-gray-600">
              Alternatively, you could use this section to address some
              frequently asked questions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
