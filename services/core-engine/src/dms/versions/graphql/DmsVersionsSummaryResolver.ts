export const DmsVersionsSummaryGqlTypeDefs = `
  type DmsVersionsSummary {
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
    getDmsVersionsSummary(id: ID!): DmsVersionsSummary
    listDmsVersionsSummarys(tenantId: String!, limit: Int): [DmsVersionsSummary!]!
  }

  extend type Mutation {
    createDmsVersionsSummary(tenantId: String!, code: String!, name: String!): DmsVersionsSummary!
    deleteDmsVersionsSummary(id: ID!): Boolean!
  }
`;

export const DmsVersionsSummaryGqlResolvers = {
  Query: {
    getDmsVersionsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
