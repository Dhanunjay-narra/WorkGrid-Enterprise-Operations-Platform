export const AiPromptsThresholdGqlTypeDefs = `
  type AiPromptsThreshold {
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
    getAiPromptsThreshold(id: ID!): AiPromptsThreshold
    listAiPromptsThresholds(tenantId: String!, limit: Int): [AiPromptsThreshold!]!
  }

  extend type Mutation {
    createAiPromptsThreshold(tenantId: String!, code: String!, name: String!): AiPromptsThreshold!
    deleteAiPromptsThreshold(id: ID!): Boolean!
  }
`;

export const AiPromptsThresholdGqlResolvers = {
  Query: {
    getAiPromptsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
