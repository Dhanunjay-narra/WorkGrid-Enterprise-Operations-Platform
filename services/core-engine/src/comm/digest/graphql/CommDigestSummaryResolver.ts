export const CommDigestSummaryGqlTypeDefs = `
  type CommDigestSummary {
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
    getCommDigestSummary(id: ID!): CommDigestSummary
    listCommDigestSummarys(tenantId: String!, limit: Int): [CommDigestSummary!]!
  }

  extend type Mutation {
    createCommDigestSummary(tenantId: String!, code: String!, name: String!): CommDigestSummary!
    deleteCommDigestSummary(id: ID!): Boolean!
  }
`;

export const CommDigestSummaryGqlResolvers = {
  Query: {
    getCommDigestSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
