export const AiAgentsThresholdGqlTypeDefs = `
  type AiAgentsThreshold {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getAiAgentsThreshold(id: ID!): AiAgentsThreshold
    listAiAgentsThresholds(tenantId: String!, limit: Int): [AiAgentsThreshold!]!
  }

  extend type Mutation {
    createAiAgentsThreshold(tenantId: String!, code: String!, name: String!): AiAgentsThreshold!
    deleteAiAgentsThreshold(id: ID!): Boolean!
  }
`;

export const AiAgentsThresholdGqlResolvers = {
  Query: {
    getAiAgentsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
