export const AbacSummaryGqlTypeDefs = `
  type AbacSummary {
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
    getAbacSummary(id: ID!): AbacSummary
    listAbacSummarys(tenantId: String!, limit: Int): [AbacSummary!]!
  }

  extend type Mutation {
    createAbacSummary(tenantId: String!, code: String!, name: String!): AbacSummary!
    deleteAbacSummary(id: ID!): Boolean!
  }
`;

export const AbacSummaryGqlResolvers = {
  Query: {
    getAbacSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
