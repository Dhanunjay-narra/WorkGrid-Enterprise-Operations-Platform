export const CommNotificationsConfigGqlTypeDefs = `
  type CommNotificationsConfig {
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
    getCommNotificationsConfig(id: ID!): CommNotificationsConfig
    listCommNotificationsConfigs(tenantId: String!, limit: Int): [CommNotificationsConfig!]!
  }

  extend type Mutation {
    createCommNotificationsConfig(tenantId: String!, code: String!, name: String!): CommNotificationsConfig!
    deleteCommNotificationsConfig(id: ID!): Boolean!
  }
`;

export const CommNotificationsConfigGqlResolvers = {
  Query: {
    getCommNotificationsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
