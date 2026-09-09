export const CommNotificationsMappingGqlTypeDefs = `
  type CommNotificationsMapping {
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
    getCommNotificationsMapping(id: ID!): CommNotificationsMapping
    listCommNotificationsMappings(tenantId: String!, limit: Int): [CommNotificationsMapping!]!
  }

  extend type Mutation {
    createCommNotificationsMapping(tenantId: String!, code: String!, name: String!): CommNotificationsMapping!
    deleteCommNotificationsMapping(id: ID!): Boolean!
  }
`;

export const CommNotificationsMappingGqlResolvers = {
  Query: {
    getCommNotificationsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
