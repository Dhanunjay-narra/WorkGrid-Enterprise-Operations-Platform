export const AuthSummaryGqlTypeDefs = `
  type AuthSummary {
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
    getAuthSummary(id: ID!): AuthSummary
    listAuthSummarys(tenantId: String!, limit: Int): [AuthSummary!]!
  }

  extend type Mutation {
    createAuthSummary(tenantId: String!, code: String!, name: String!): AuthSummary!
    deleteAuthSummary(id: ID!): Boolean!
  }
`;

export const AuthSummaryGqlResolvers = {
  Query: {
    getAuthSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
