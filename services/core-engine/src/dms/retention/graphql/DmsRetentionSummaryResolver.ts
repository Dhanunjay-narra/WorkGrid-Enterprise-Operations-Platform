export const DmsRetentionSummaryGqlTypeDefs = `
  type DmsRetentionSummary {
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
    getDmsRetentionSummary(id: ID!): DmsRetentionSummary
    listDmsRetentionSummarys(tenantId: String!, limit: Int): [DmsRetentionSummary!]!
  }

  extend type Mutation {
    createDmsRetentionSummary(tenantId: String!, code: String!, name: String!): DmsRetentionSummary!
    deleteDmsRetentionSummary(id: ID!): Boolean!
  }
`;

export const DmsRetentionSummaryGqlResolvers = {
  Query: {
    getDmsRetentionSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
