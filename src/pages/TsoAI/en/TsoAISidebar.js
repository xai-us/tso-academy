import "./TsoAISidebar.css";

export default function TsoAISidebar() {
  const data = [
    {
      title: "1. AIGC Beginner's Tutorial",
      children: [
        { title: "1.1 Top 10 questions on AIGC" },
        { title: "1.2 Get started with ChatGPT" },
        { title: "1.3 Get started with Midjourney" },
        { title: "1.4 Get started with Stable Diffusion" },
        { title: "1.5 Learning Sora" },
        { title: "1.6 Practice AIGC" },
      ],
    },
    {
      title: "2. AIGC Advanced Tutorial",
      children: [
        {
          title: "2.1 GPT & LLM Overview（Transformer）",
          children: [{ title: "2.1.1 Papers" }, { title: "2.1.2 Report" }],
        },

        { title: "2.2 AIGC（LDM & Diffusion & NeRF）Overview" },
        { title: "2.2.1 Papers", children: [{ title: "2.2.2 Reference" }] },
        { title: "2.3 Company and projects" },
      ],
    },
    {
      title: "3. GPT & LLM Path",
      children: [
        { title: "3.1 GPT Basic" },
        {
          title: "3.2 GPT Fundamental",
          children: [
            { title: "3.2.1 Components" },
            {
              title: "3.2.2 GPT-4 Fundamental",
              children: [
                { title: "3.2.2.1 Summary" },
                { title: "3.2.2.2 Reference" },
              ],
            },
          ],
        },

        { title: "3.3 Future" },
      ],
    },

    {
      title: "4. Case study, passibility senarios",
      children: [
        { title: "4.1 General Categories" },
        {
          title: "4.2 GPT/AIGC+ products and services",
          children: [
            { title: "4.2.1 Miro AI+ features" },
            {
              title: "4.2.2 Gamma App features",
              children: [
                { title: "4.2.2.1 official videos" },
                { title: "4.2.2.2 public fetures" },
                { title: "4.2.2.3 Growth by invitation credit" },
              ],
            },
          ],
        },
        { title: "4.3 AIGC" },
        {
          title: "4.3.1 Midjourney",
          children: [
            { title: "4.3.1.1 Related data" },
            { title: "4.3.1.2 Iteration direction" },
            { title: "4.3.1.3 V5 effect" },
          ],
        },

        {
          title: "4.3.2 Picture model",
          children: [{ title: "4.3.2.1 Common design view #domain-knowledge" }],
        },
        {
          title: "4.3.3 Video model",
          children: [{ title: "4.3.3.1 Runway Gen-2 features" }],
        },
      ],
    },
    { title: "5. Idaes and monitization" },
    {
      title: "6. How to Maximize GPT's Capabilities",
      children: [
        { title: "6.1 Convergence Methods for Different Tasks with GPT-3" },
        { title: "6.2 Adding More Context to GPT | Common Training Methods" },
        { title: "6.2.1 Overview" },
        {
          title: "6.2.2 Common Approaches",
          children: [
            { title: "6.2.2.1 Prompt Engineering/Few-shot learning" },
            { title: "6.2.2.2 Fine-tuning" },
            { title: "6.2.2.3 RAG - Retrieval Augmented Generation" },
          ],
        },
        { title: "6.2.3 Supplement: Extending Context with Embedding" },
      ],
    },

    {
      title: "7. Evaluation & Benchmarking of LLMs",
      children: [
        {
          title: "7.1 Evaluation Frameworks",
          children: [{ title: "7.1.1 Chain-of-Thought Hub" }],
        },
        { title: "7.2 Evaluation Datasets/Methods" },
        {
          title:
            "7.3 Performance Differences between GPT-3.5 and GPT-4 on the Same Questions",
        },
        { title: "7.4 Problems GPT-4 Cannot Solve but Humans Can" },
        {
          title: "7.5 ⭐️ Specific Scenario Benchmarks for Different Models",
          children: [
            {
              title:
                "7.5.1 Purpose and Scenario: Interpreting Specialized Concepts with Limited Public Information like 'VC Dimension' and 'Chomsky Hierarchy'",
              children: [{ title: "7.5.1.1 Specific Comparison Tables" }],
            },
            {
              title:
                "7.5.2 Purpose and Scenario: Investigating 'Visual Frequency Limits'",
              children: [{ title: "7.5.2.1 Specific Comparison Tables" }],
            },
            {
              title:
                "7.5.3 Purpose and Scenario: Comparative Analysis of Memory Management Methods in Programming Languages (Functional Analysis)",
              children: [{ title: "7.5.3.1 Specific Comparison Tables" }],
            },
          ],
        },
      ],
    },
    {
      title: "8. Prompt Engineering",
      children: [
        { title: "8.1 Relevant Resources" },
        { title: "8.2 Engineering Use of GPT | Advanced Prompt Usage" },
        {
          title: "8.3 Methodology",
          children: [
            { title: "8.3.1 Structured Prompts" },
            { title: "8.3.2 Learning Prompt Writing from Langchain" },
            { title: "8.3.3 Designing ChatGPT Prompts with 'BORE' Analysis" },
            { title: "8.3.4 10 Small Tips" },
            { title: "8.3.5 Avoiding Long Dialogue Sequences" },
          ],
        },
      ],
    },
    {
      title: "9. Costs/Expenses & Time",
      children: [
        {
          title: "9.1 Model Training and Inference",
          children: [
            { title: "9.1.1 Breakdown of Server Costs" },
            { title: "9.1.2 GPU Parameters" },
          ],
        },
        { title: "9.2 Calling the OpenAI API" },
        { title: "9.3 Instances / Foundry" },
      ],
    },
    {
      title: "10. Domain Knowledge",
      children: [
        {
          title: "10.1 Task Types for BERT Pre-trained Models",
          children: [
            { title: "10.1.1 Note: Principles of Transformer Models" },
          ],
        },
        { title: "10.2 Comparison between GPT-3 and BERT" },
      ],
    },
    {
      title: "11. Detailed Explanation of the OpenAI API Playground",
      children: [
        {
          title: "11.1 Overview and Modes",
          children: [{ title: "11.2 Mode = Complete Preset 🚧" }],
        },
        { title: "11.3 Adjustable Parameters" },
      ],
    },
    { title: "12. Fragmentary Facts" },
    { title: "13. Key Issues" },
  ];

  return <IndexList nodes={data} className="tree" />;
}

function IndexList({ nodes, ...props }) {
  return (
    <ul {...props}>
      {nodes &&
        nodes.map((node, idx) => (
          <li key={idx}>
            <div className="title">{node.title}</div>
            {node.children && <IndexList nodes={node.children} />}
          </li>
        ))}
    </ul>
  );
}
