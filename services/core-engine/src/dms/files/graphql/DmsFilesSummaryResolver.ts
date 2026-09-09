export const DmsFilesSummaryGqlTypeDefs = `
  type DmsFilesSummary {
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
    getDmsFilesSummary(id: ID!): DmsFilesSummary
    listDmsFilesSummarys(tenantId: String!, limit: Int): [DmsFilesSummary!]!
  }

  extend type Mutation {
    createDmsFilesSummary(tenantId: String!, code: String!, name: String!): DmsFilesSummary!
    deleteDmsFilesSummary(id: ID!): Boolean!
  }
`;

export const DmsFilesSummaryGqlResolvers = {
  Query: {
    getDmsFilesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
