export const CommThreadsSummaryGqlTypeDefs = `
  type CommThreadsSummary {
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
    getCommThreadsSummary(id: ID!): CommThreadsSummary
    listCommThreadsSummarys(tenantId: String!, limit: Int): [CommThreadsSummary!]!
  }

  extend type Mutation {
    createCommThreadsSummary(tenantId: String!, code: String!, name: String!): CommThreadsSummary!
    deleteCommThreadsSummary(id: ID!): Boolean!
  }
`;

export const CommThreadsSummaryGqlResolvers = {
  Query: {
    getCommThreadsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
