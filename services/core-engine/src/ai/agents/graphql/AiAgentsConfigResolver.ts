export const AiAgentsConfigGqlTypeDefs = `
  type AiAgentsConfig {
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
    getAiAgentsConfig(id: ID!): AiAgentsConfig
    listAiAgentsConfigs(tenantId: String!, limit: Int): [AiAgentsConfig!]!
  }

  extend type Mutation {
    createAiAgentsConfig(tenantId: String!, code: String!, name: String!): AiAgentsConfig!
    deleteAiAgentsConfig(id: ID!): Boolean!
  }
`;

export const AiAgentsConfigGqlResolvers = {
  Query: {
    getAiAgentsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
