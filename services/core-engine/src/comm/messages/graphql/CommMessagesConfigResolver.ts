export const CommMessagesConfigGqlTypeDefs = `
  type CommMessagesConfig {
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
    getCommMessagesConfig(id: ID!): CommMessagesConfig
    listCommMessagesConfigs(tenantId: String!, limit: Int): [CommMessagesConfig!]!
  }

  extend type Mutation {
    createCommMessagesConfig(tenantId: String!, code: String!, name: String!): CommMessagesConfig!
    deleteCommMessagesConfig(id: ID!): Boolean!
  }
`;

export const CommMessagesConfigGqlResolvers = {
  Query: {
    getCommMessagesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
