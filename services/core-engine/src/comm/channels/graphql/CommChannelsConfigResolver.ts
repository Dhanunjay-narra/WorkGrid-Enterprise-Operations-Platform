export const CommChannelsConfigGqlTypeDefs = `
  type CommChannelsConfig {
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
    getCommChannelsConfig(id: ID!): CommChannelsConfig
    listCommChannelsConfigs(tenantId: String!, limit: Int): [CommChannelsConfig!]!
  }

  extend type Mutation {
    createCommChannelsConfig(tenantId: String!, code: String!, name: String!): CommChannelsConfig!
    deleteCommChannelsConfig(id: ID!): Boolean!
  }
`;

export const CommChannelsConfigGqlResolvers = {
  Query: {
    getCommChannelsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
