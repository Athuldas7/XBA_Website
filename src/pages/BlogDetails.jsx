import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    image: '/assets/expand.jpg', 
    title: 'The definition of a kitchen garden has dramatically evolved with the CAAX unit',
    paragraph: `The definition of a kitchen garden has dramatically evolved with the CAAX  unit, merging traditional gardening with cutting-edge technology. Unlike traditional soil-based gardens, hydroponics allows plants to grow in nutrient-rich water solutions, enabling efficient space usage and year-round cultivation. This method is particularly appealing to urban dwellers with limited space, as it can be set up indoors and requires significantly less water than conventional gardening. Additionally, CAAX gardens often yield faster growth and higher produce, all while reducing the need for pesticides, making it a sustainable and practical choice for modern home gardeners.

    CAAX is revolutionizing how we approach home gardening, making it more accessible and sustainable. This innovative technique not only offers a solution for those with limited outdoor space but also ensures a continuous supply of fresh, organic produce regardless of the season. As we embrace this blend of tradition and technology, the concept of the kitchen garden transforms, promising a greener and more efficient way to grow our own food`,
  },
  {
    id: 2,
    image: '/assets/WEB2.jpg',
    title: 'History of Hydroponics',
    paragraph: `Hydroponics, or the manner of growing plants in the absence of soil, has roots that extend back to ancient civilizations. One of the oldest examples of hydroponic farming could be thought to be the Hanging Gardens of Babylon, dating back to approximately 600 BCE, where watering systems should have supported the growth of plants without ordinary soil. Similarly, the Aztecs practiced "chinampas" or floating gardens about 1150 CE, in which crops were raised on artificial islands constructed in shallow lakes, the roots drawing nutrients directly from the water. Soilless plant cultivation received its first scientific investigation in the 17th century, with work by Sir Francis Bacon laying the foundation for future hydroponic research. In the late 19th and early 20th centuries, German botanists Julius von Sachs and Wilhelm Knop advanced the art one step further by demonstrating that plants could grow well if their roots were submerged in nutrient-rich water. Modern hydroponics, as we know it today, did not really start to come into its own until the 1930s, when Dr. William F. Gericke of the University of California coined the term "hydroponics" to refer to the process and established that it could be scaled up for commercial use.

Hydroponics captured public attention in the course of World War II, when it was used by the military forces of the United States for growing fresh vegetables for troops stationed on desolate Pacific islands—bringing out its practicality. In the post-war period, hydroponic farming spread over into the research and commercial sectors, especially in areas where conventional farming was not easy. In the 21st century, with increased efficiency, less water usage, and the ability to grow crops even within urban areas and poor soil conditions, hydroponics has been widely accepted. Hydroponic farming continues to be developed further as a sustainable solution for world food production today.`,
  },
  {
    id: 3,
    image: '/assets/WEB3.jpg',
    title: 'Why CAAX?',
    paragraph: `Contrasted with conventional soil-based farming, CAAX has enormous advantages that make it one of the lead methods in modern agriculture. The first striking advantage that CAAX has over traditional farming is its water efficiency. When compared to conventional farming techniques that usually apply large amounts of water, let alone evaporation and high amounts of runoff, it actually uses about 90% less water. This is realized through the recirculating systems that enable the reutilization of water, making CAAX an excellent solution for agriculture in water-scarce regions and conserving this finite resource.

Another reason CAAX is much more advantageous than open field agriculture is in using up space. CAAX systems can be designed to grow crops vertically so as to save on space and thereby grow huge amounts of produce within small urban settings. This of course becomes very important noting that the world's population is moving towards settlement in towns and cities, leaving little land available for farming. Only that traditional farming covers large areas of land that may not be easily available, especially where the population is dense, or the soil is not so fertile in supplying nutrients.

Another area in which CAAX does well is cropping yield and growth rate. As suggested, because plants under CAAX enjoy conditions that are greatly controlled, the delivery of required nutrients can really speed up a plant's growth with higher yields when compared to crops grown over soil. With the exact control of light, temperature, and nutrient supply through CAAX, consistency and predictability in the outcome of harvest year-round are guaranteed.

CAAX is also much better in reducing pest and disease susceptibility. Not having any soil dramatically eliminates most common pests and diseases that usually infest plants from the soil, reducing the need to spray chemical pesticides. This provides two advantages: healthy produce and a lower environmental impact from pesticide use. Conventional farming is constantly tormented by pests and diseases, often leading to the destruction of the crops and requiring huge pesticide use, which harms people's well-being and the environment.

CAAX as a farming method is much more environmentally sustainable than traditional methods. With less use of both water and pesticides, CAAX systems can be maintained in controlled environments to not destroy the habitat of its surrounding areas. This type of agriculture does not require acres and acres of space cleared out, thus preserving natural habitats and their biodiversity.

Another critical advantage of CAAX is that it allows for production all year. Since CAAX systems are installed indoors or in greenhouses, they are not subjected to the onslaught of the seasons like other traditional forms of farming. These are hence cultivable crops that can always be grown to give fresh commodities throughout the year despite inclement weather.

One of the best things about CAAX, however, is that it exhibits great scalability and flexibility. From the case of a small home garden to large commercial farms, CAAX systems prove to be very flexible and, with ease, can be scalable in order to answer all the potential needs of a cultivator. Because CAAX setups are modular in nature, it is very easy to adjust and scale. Basically, that makes scaling up the production easily done or experimentation with different crops quite easy.

This is unlike conventional farming, which is largely constrained by soil, climatic conditions, and arable land. Some of these constraints the conventional ways bear relate to them being less versatile in meeting the ever-increasing needs of a growing population and sustainability affected by climate change. The conventional ways need more labor and time to expand, especially in areas where such land is not readily available.

In a word, CAAX is providing an agriculture that is more efficient, sustainable, and versatile in comparison with the traditional, soil-based one. It can save water, use to the maximum spatial resource, bring higher yields with lower environmental degradation, and give the possibility of year-round production; thus, it is among the most important ways to meet the challenges of future food security, especially in urban and limited-resource conditions. As technology continues to advance, the potential of CAAX to actually revolutionize the way we grow our food becomes increasingly crystal clear.`,
  }
];

const BlogDetails = () => {
  const { id } = useParams(); 
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="px-6 py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-300">
          {blog.title}
        </h2>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-1/2">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="object-cover w-full rounded-lg shadow-lg h-96"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-300">
              {blog.paragraph}
            </p>
          </div>
        </div>
        <div className="block mt-8 md:hidden">
          <p className="text-lg text-gray-300">
            {blog.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
