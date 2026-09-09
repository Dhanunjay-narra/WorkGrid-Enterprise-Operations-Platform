export const TenancySummaryGqlTypeDefs = `
  type TenancySummary {
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
    getTenancySummary(id: ID!): TenancySummary
    listTenancySummarys(tenantId: String!, limit: Int): [TenancySummary!]!
  }

  extend type Mutation {
    createTenancySummary(tenantId: String!, code: String!, name: String!): TenancySummary!
    deleteTenancySummary(id: ID!): Boolean!
  }
`;

export const TenancySummaryGqlResolvers = {
  Query: {
    getTenancySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
