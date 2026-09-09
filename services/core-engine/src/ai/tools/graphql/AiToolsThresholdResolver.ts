export const AiToolsThresholdGqlTypeDefs = `
  type AiToolsThreshold {
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
    getAiToolsThreshold(id: ID!): AiToolsThreshold
    listAiToolsThresholds(tenantId: String!, limit: Int): [AiToolsThreshold!]!
  }

  extend type Mutation {
    createAiToolsThreshold(tenantId: String!, code: String!, name: String!): AiToolsThreshold!
    deleteAiToolsThreshold(id: ID!): Boolean!
  }
`;

export const AiToolsThresholdGqlResolvers = {
  Query: {
    getAiToolsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
