export const BiCohortsSummaryGqlTypeDefs = `
  type BiCohortsSummary {
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
    getBiCohortsSummary(id: ID!): BiCohortsSummary
    listBiCohortsSummarys(tenantId: String!, limit: Int): [BiCohortsSummary!]!
  }

  extend type Mutation {
    createBiCohortsSummary(tenantId: String!, code: String!, name: String!): BiCohortsSummary!
    deleteBiCohortsSummary(id: ID!): Boolean!
  }
`;

export const BiCohortsSummaryGqlResolvers = {
  Query: {
    getBiCohortsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
