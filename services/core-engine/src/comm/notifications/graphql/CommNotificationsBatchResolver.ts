export const CommNotificationsBatchGqlTypeDefs = `
  type CommNotificationsBatch {
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
    getCommNotificationsBatch(id: ID!): CommNotificationsBatch
    listCommNotificationsBatchs(tenantId: String!, limit: Int): [CommNotificationsBatch!]!
  }

  extend type Mutation {
    createCommNotificationsBatch(tenantId: String!, code: String!, name: String!): CommNotificationsBatch!
    deleteCommNotificationsBatch(id: ID!): Boolean!
  }
`;

export const CommNotificationsBatchGqlResolvers = {
  Query: {
    getCommNotificationsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
