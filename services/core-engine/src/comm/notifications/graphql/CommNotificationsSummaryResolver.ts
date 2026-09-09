export const CommNotificationsSummaryGqlTypeDefs = `
  type CommNotificationsSummary {
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
    getCommNotificationsSummary(id: ID!): CommNotificationsSummary
    listCommNotificationsSummarys(tenantId: String!, limit: Int): [CommNotificationsSummary!]!
  }

  extend type Mutation {
    createCommNotificationsSummary(tenantId: String!, code: String!, name: String!): CommNotificationsSummary!
    deleteCommNotificationsSummary(id: ID!): Boolean!
  }
`;

export const CommNotificationsSummaryGqlResolvers = {
  Query: {
    getCommNotificationsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
