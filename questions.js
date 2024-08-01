const questions = [
    {
        question: "What is the most effective way to reduce energy consumption in your home?",
        answers: [
            {text: "a. Using energy-efficient appliances", correct: false},
            {text: "b. Turning off lights and electronics when not in use", correct: true},
            {text: "c. Installing solar panels", correct: false},
            {text: "d. Keeping windows open instead of using air conditioning", correct: false}
        ],
        explanation: "Turning off lights, TVs, computers, and other electronics when not in use can significantly reduce energy consumption at home. It helps conserve energy and lowers utility bills, contributing to environmental sustainability."
    },
    {
        question: "How can you reduce water consumption in your daily routine?",
        answers: [
            {text: "a. Taking shorter showers", correct: true},
            {text: "b. Using a dishwasher instead of handwashing dishes", correct: false},
            {text: "c. Watering the garden during peak sunlight hours", correct: false},
            {text: "d. Washing clothes in small, separate loads", correct: false}
        ],
        explanation: "Taking shorter showers reduces water usage by limiting the amount of water flowing through the showerhead. This simple change conserves water resources and reduces energy consumption associated with heating water."
    },
    {
        question: "What action can help reduce plastic waste in your community?",
        answers: [
            {text: "a. Using reusable shopping bags", correct: true},
            {text: "b. Buying individually wrapped snacks", correct: false},
            {text: "c. Throwing plastic bottles in the regular trash", correct: false},
            {text: "d. Recycling plastic bags at home", correct: false}
        ],
        explanation: "Using reusable shopping bags reduces the need for single-use plastic bags, which contribute to plastic pollution in oceans and landfills. Reusable bags are durable and can be used multiple times, reducing environmental impact."
    },
    {
        question: "How can you contribute to improving air quality in your city?",
        answers: [
            {text: "a. Burning wood for heating", correct: false},
            {text: "b. Using gas-powered lawnmowers and leaf blowers", correct: false},
            {text: "c. Idling your car engine for extended periods", correct: false},
            {text: "d. Using public transportation or carpooling", correct: true}
        ],
        explanation: "Using public transportation or carpooling reduces vehicle emissions, which are major contributors to air pollution. Choosing cleaner transportation options helps improve air quality and reduces greenhouse gas emissions."
    },
    {
        question: "What is a sustainable practice for managing food waste at home?",
        answers: [
            {text: "a. Throwing food scraps in the regular trash", correct: false},
            {text: "b. Composting organic waste", correct: true},
            {text: "c. Leaving leftovers in the refrigerator for several days", correct: false},
            {text: "d. Buying pre-packaged meals", correct: false}
        ],
        explanation: "Composting food scraps and organic waste at home reduces methane emissions from landfills and produces nutrient-rich compost for gardening. It is a sustainable practice that helps minimize waste and supports soil health."
    },
    {
        question: "Which of the following is a renewable energy source?",
        answers: [
            {text: "a. Coal", correct: false},
            {text: "b. Natural Gas", correct: false},
            {text: "c. Solar Power", correct: true},
            {text: "d. Oil", correct: false}
        ],
        explanation: "ar power is generated from sunlight using photovoltaic cells or solar thermal systems. It is a renewable energy source because sunlight is abundant and inexhaustible"
    },
    {
        question: "Which household action contributes to reducing plastic pollution in oceans?",
        answers: [
            {text: "a. Recycling plastic bottles", correct: true},
            {text: "b. Burning plastic waste", correct: false},
            {text: "c. Using disposable plastic utensils", correct: false},
            {text: "d. Throwing plastic bags in the trash", correct: false}
        ],
        explanation: "Recycling plastic bottles reduces the amount of plastic waste that ends up in oceans and landfills, helping to protect marine ecosystems and wildlife."
    },
    {
        question: "What is the term for the process of using less energy and resources to achieve the same level of output or service?",
        answers: [
            {text: "a. Energy Conservation", correct: false},
            {text: "b. Energy efficiency", correct: true},
            {text: "c. Renewable energy", correct: false},
            {text: "d. Energy diversification", correct: false}
        ],
        explanation: "Energy efficiency refers to using less energy to perform the same tasks or achieve the same level of service. It reduces energy consumption, lowers greenhouse gas emissions, and saves money on utility bills."
    },
    {
        question: "Which action helps conserve water at home?",
        answers: [
            {text: "a. Leaving the tap running while brushing teeth", correct: false},
            {text: "b. Taking long showers", correct: false},
            {text: "c. Using a dishwasher instead of handwashing dishes", correct: true},
            {text: "d. Watering the lawn during the day", correct: false}
        ],
        explanation: "Dishwashers typically use less water than handwashing dishes, especially if they have an energy-efficient setting. This reduces overall water consumption in the household."
    },
    {
        question: "What environmental impact is associated with using plastic shopping bags?",
        answers: [
            {text: "a. Air pollution", correct: false},
            {text: "b. Soil erosion", correct: false},
            {text: "c. Deforestation", correct: false},
            {text: "d. Plastic pollution", correct: true}
        ],
        explanation: "Plastic shopping bags contribute to plastic pollution in oceans, rivers, and landfills. They harm marine life, degrade ecosystems, and persist in the environment for hundreds of years."
    },
    {
        question: "What is the environmental impact of using disposable plastic water bottles?",
        answers: [
            {text: "a. Reduced landfill waste", correct: false},
            {text: "b. Increased recycling rates", correct: false},
            {text: "c. Plastic pollution", correct: true},
            {text: "d. Improved water quality", correct: false}
        ],
        explanation: "Disposable plastic water bottles contribute to plastic pollution when improperly disposed of, impacting marine life and ecosystems."
    },
    {
        question: "How can individuals contribute to wildlife conservation in their communities?",
        answers: [
            {text: "a. Using chemical pesticides", correct: false},
            {text: "b. Building birdhouses and feeders", correct: true},
            {text: "c. Removing native plants", correct: false},
            {text: "d. Encouraging habitat destruction", correct: false}
        ],
        explanation: "Building birdhouses and feeders provides habitat and food for birds, supporting biodiversity and ecosystem health."
    },
    {
        question: "What is the term for the process of separating different materials from household waste to be recycled?",
        answers: [
            {text: "a. Landfilling", correct: false},
            {text: "b. Incineration", correct: false},
            {text: "c. Recycling", correct: true},
            {text: "d. Composting", correct: false}
        ],
        explanation: "Recycling involves sorting and processing materials such as paper, glass, plastics, and metals to create new products, reducing the need for raw materials and minimizing waste sent to landfills."
    },
    {
        question: "What does the term reduce refer to in waste management and sustainability practices?",
        answers: [
            {text: "a. Minimizing waste generation", correct: true},
            {text: "b. Repurposing materials", correct: false},
            {text: "c. Recycling plastics", correct: false},
            {text: "d. Increasing energy efficiency", correct: false}
        ],
        explanation: "The principle of reduce encourages minimizing waste generation by using fewer resources, opting for products with minimal packaging, and adopting sustainable consumption habits. This helps conserve natural resources and reduce environmental impacts associated with waste disposal."
    },
    {
        question: "Which of the following is an example of RECYCLING?",
        answers: [
            {text: "a. Throwing away plastic bottles", correct: false},
            {text: "b. Repurposing old furniture", correct: false},
            {text: "c. Turning glass bottles into new glass products", correct: true},
            {text: "d. Burning paper waste", correct: false}
        ],
        explanation: "Recycling involves processing used materials such as paper, glass, plastics, and metals to create new products. This conserves raw materials, reduces energy consumption, and minimizes the environmental impacts of waste disposal. It is an essential component of sustainable waste management practices."
    },
    {
        question: "Why is reducing waste important for environmental sustainability?",
        answers: [
            {text: "a. It reduces air pollution", correct: false},
            {text: "b. It conserves natural resources", correct: true},
            {text: "c. It increases water availability", correct: false},
            {text: "d. It promotes biodiversity", correct: false}
        ],
        explanation: "Reducing waste minimizes the extraction of raw materials, energy consumption, and greenhouse gas emissions associated with production processes. It helps preserve biodiversity by reducing habitat destruction and environmental degradation caused by resource extraction and waste disposal."
    },
    {
        question: "How can individuals contribute to the principles of reduce, reuse, and recycle in their daily lives?",
        answers: [
            {text: "a. By using disposable items", correct: false},
            {text: "b. By choosing products with excessive packaging", correct: false},
            {text: "c. By discarding electronics in regular trash", correct: false},
            {text: "d. By avoiding single-use plastics", correct: true}
        ],
        explanation: "Individuals can reduce their environmental footprint by choosing reusable alternatives, avoiding single-use plastics and excessive packaging, and properly recycling materials when possible. These actions promote sustainable consumption and waste management practices, contributing to environmental conservation."
    },
    {
        question: "What is the term used to describe the gradual increase in the average temperature of the Earth's atmosphere and oceans?",
        answers: [
            {text: "a. Climate Change", correct: true},
            {text: "b. Global Cooling", correct: false},
            {text: "c. Weather Variability", correct: false},
            {text: "d. Atmospheric Oscillation", correct: false}
        ],
        explanation: "Climate change refers to long-term changes in temperature, precipitation patterns, and other atmospheric conditions. It is primarily driven by human activities such as the burning of fossil fuels, deforestation, and industrial processes that release greenhouse gases into the atmosphere, trapping heat and causing global temperatures to rise."
    },
    {
        question: "What are the three R's in waste management that promote sustainable practices?",
        answers: [
            {text: "a. Reduce, Replenish, Restore", correct: false},
            {text: "b. Reuse, Recycle, Renew", correct: false},
            {text: "c. Reduce, Reuse, Recycle", correct: true},
            {text: "d. Reclaim, Replenish, Restore", correct: false}
        ],
        explanation: "The three R's—Reduce, Reuse, Recycle—are key principles in waste management aimed at minimizing waste generation, maximizing resource efficiency, and reducing the environmental impact of consumption and disposal."
    },
    {
        question: "Which of the following is a renewable energy source that does not produce greenhouse gas emissions during operation?",
        answers: [
            {text: "a. Natural Gas", correct: false},
            {text: "b. Wind Power", correct: true},
            {text: "c. Coal", correct: false},
            {text: "d. Nuclear Power", correct: false}
        ],
        explanation: "Wind power harnesses the kinetic energy of wind using turbines to generate electricity. It is a clean and renewable energy source that does not emit greenhouse gases or other pollutants during operation, unlike fossil fuels such as natural gas and coal, which release carbon dioxide and other pollutants when burned."
    }
];