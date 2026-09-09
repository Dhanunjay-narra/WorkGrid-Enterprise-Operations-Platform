export const IdentitySummaryGqlTypeDefs = `
  type IdentitySummary {
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
    getIdentitySummary(id: ID!): IdentitySummary
    listIdentitySummarys(tenantId: String!, limit: Int): [IdentitySummary!]!
  }

  extend type Mutation {
    createIdentitySummary(tenantId: String!, code: String!, name: String!): IdentitySummary!
    deleteIdentitySummary(id: ID!): Boolean!
  }
`;

export const IdentitySummaryGqlResolvers = {
  Query: {
    getIdentitySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentitySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
