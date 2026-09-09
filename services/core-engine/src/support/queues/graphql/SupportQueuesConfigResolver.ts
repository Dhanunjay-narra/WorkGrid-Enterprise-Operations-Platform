export const SupportQueuesConfigGqlTypeDefs = `
  type SupportQueuesConfig {
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
    getSupportQueuesConfig(id: ID!): SupportQueuesConfig
    listSupportQueuesConfigs(tenantId: String!, limit: Int): [SupportQueuesConfig!]!
  }

  extend type Mutation {
    createSupportQueuesConfig(tenantId: String!, code: String!, name: String!): SupportQueuesConfig!
    deleteSupportQueuesConfig(id: ID!): Boolean!
  }
`;

export const SupportQueuesConfigGqlResolvers = {
  Query: {
    getSupportQueuesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
