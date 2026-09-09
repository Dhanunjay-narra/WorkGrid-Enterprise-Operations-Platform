export const AiMemoryThresholdGqlTypeDefs = `
  type AiMemoryThreshold {
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
    getAiMemoryThreshold(id: ID!): AiMemoryThreshold
    listAiMemoryThresholds(tenantId: String!, limit: Int): [AiMemoryThreshold!]!
  }

  extend type Mutation {
    createAiMemoryThreshold(tenantId: String!, code: String!, name: String!): AiMemoryThreshold!
    deleteAiMemoryThreshold(id: ID!): Boolean!
  }
`;

export const AiMemoryThresholdGqlResolvers = {
  Query: {
    getAiMemoryThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
