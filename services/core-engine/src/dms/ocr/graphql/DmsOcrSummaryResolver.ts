export const DmsOcrSummaryGqlTypeDefs = `
  type DmsOcrSummary {
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
    getDmsOcrSummary(id: ID!): DmsOcrSummary
    listDmsOcrSummarys(tenantId: String!, limit: Int): [DmsOcrSummary!]!
  }

  extend type Mutation {
    createDmsOcrSummary(tenantId: String!, code: String!, name: String!): DmsOcrSummary!
    deleteDmsOcrSummary(id: ID!): Boolean!
  }
`;

export const DmsOcrSummaryGqlResolvers = {
  Query: {
    getDmsOcrSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
