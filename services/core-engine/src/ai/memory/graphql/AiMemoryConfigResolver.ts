export const AiMemoryConfigGqlTypeDefs = `
  type AiMemoryConfig {
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
    getAiMemoryConfig(id: ID!): AiMemoryConfig
    listAiMemoryConfigs(tenantId: String!, limit: Int): [AiMemoryConfig!]!
  }

  extend type Mutation {
    createAiMemoryConfig(tenantId: String!, code: String!, name: String!): AiMemoryConfig!
    deleteAiMemoryConfig(id: ID!): Boolean!
  }
`;

export const AiMemoryConfigGqlResolvers = {
  Query: {
    getAiMemoryConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiMemoryConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
