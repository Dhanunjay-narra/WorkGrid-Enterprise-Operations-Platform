export const SupportAgentsBatchGqlTypeDefs = `
  type SupportAgentsBatch {
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
    getSupportAgentsBatch(id: ID!): SupportAgentsBatch
    listSupportAgentsBatchs(tenantId: String!, limit: Int): [SupportAgentsBatch!]!
  }

  extend type Mutation {
    createSupportAgentsBatch(tenantId: String!, code: String!, name: String!): SupportAgentsBatch!
    deleteSupportAgentsBatch(id: ID!): Boolean!
  }
`;

export const SupportAgentsBatchGqlResolvers = {
  Query: {
    getSupportAgentsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
