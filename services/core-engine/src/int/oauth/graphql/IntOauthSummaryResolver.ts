export const IntOauthSummaryGqlTypeDefs = `
  type IntOauthSummary {
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
    getIntOauthSummary(id: ID!): IntOauthSummary
    listIntOauthSummarys(tenantId: String!, limit: Int): [IntOauthSummary!]!
  }

  extend type Mutation {
    createIntOauthSummary(tenantId: String!, code: String!, name: String!): IntOauthSummary!
    deleteIntOauthSummary(id: ID!): Boolean!
  }
`;

export const IntOauthSummaryGqlResolvers = {
  Query: {
    getIntOauthSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
