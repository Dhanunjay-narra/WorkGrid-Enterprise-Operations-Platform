export const AiToolsConfigGqlTypeDefs = `
  type AiToolsConfig {
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
    getAiToolsConfig(id: ID!): AiToolsConfig
    listAiToolsConfigs(tenantId: String!, limit: Int): [AiToolsConfig!]!
  }

  extend type Mutation {
    createAiToolsConfig(tenantId: String!, code: String!, name: String!): AiToolsConfig!
    deleteAiToolsConfig(id: ID!): Boolean!
  }
`;

export const AiToolsConfigGqlResolvers = {
  Query: {
    getAiToolsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiToolsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
