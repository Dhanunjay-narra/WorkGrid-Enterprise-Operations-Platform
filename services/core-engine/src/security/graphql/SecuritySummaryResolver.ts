export const SecuritySummaryGqlTypeDefs = `
  type SecuritySummary {
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
    getSecuritySummary(id: ID!): SecuritySummary
    listSecuritySummarys(tenantId: String!, limit: Int): [SecuritySummary!]!
  }

  extend type Mutation {
    createSecuritySummary(tenantId: String!, code: String!, name: String!): SecuritySummary!
    deleteSecuritySummary(id: ID!): Boolean!
  }
`;

export const SecuritySummaryGqlResolvers = {
  Query: {
    getSecuritySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecuritySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
