export const CommNotificationsPolicyGqlTypeDefs = `
  type CommNotificationsPolicy {
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
    getCommNotificationsPolicy(id: ID!): CommNotificationsPolicy
    listCommNotificationsPolicys(tenantId: String!, limit: Int): [CommNotificationsPolicy!]!
  }

  extend type Mutation {
    createCommNotificationsPolicy(tenantId: String!, code: String!, name: String!): CommNotificationsPolicy!
    deleteCommNotificationsPolicy(id: ID!): Boolean!
  }
`;

export const CommNotificationsPolicyGqlResolvers = {
  Query: {
    getCommNotificationsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
