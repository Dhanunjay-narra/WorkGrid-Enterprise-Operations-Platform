export const CommNotificationsThresholdGqlTypeDefs = `
  type CommNotificationsThreshold {
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
    getCommNotificationsThreshold(id: ID!): CommNotificationsThreshold
    listCommNotificationsThresholds(tenantId: String!, limit: Int): [CommNotificationsThreshold!]!
  }

  extend type Mutation {
    createCommNotificationsThreshold(tenantId: String!, code: String!, name: String!): CommNotificationsThreshold!
    deleteCommNotificationsThreshold(id: ID!): Boolean!
  }
`;

export const CommNotificationsThresholdGqlResolvers = {
  Query: {
    getCommNotificationsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
