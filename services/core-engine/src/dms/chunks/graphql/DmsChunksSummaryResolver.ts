export const DmsChunksSummaryGqlTypeDefs = `
  type DmsChunksSummary {
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
    getDmsChunksSummary(id: ID!): DmsChunksSummary
    listDmsChunksSummarys(tenantId: String!, limit: Int): [DmsChunksSummary!]!
  }

  extend type Mutation {
    createDmsChunksSummary(tenantId: String!, code: String!, name: String!): DmsChunksSummary!
    deleteDmsChunksSummary(id: ID!): Boolean!
  }
`;

export const DmsChunksSummaryGqlResolvers = {
  Query: {
    getDmsChunksSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
