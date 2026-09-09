export const DmsSignaturesSummaryGqlTypeDefs = `
  type DmsSignaturesSummary {
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
    getDmsSignaturesSummary(id: ID!): DmsSignaturesSummary
    listDmsSignaturesSummarys(tenantId: String!, limit: Int): [DmsSignaturesSummary!]!
  }

  extend type Mutation {
    createDmsSignaturesSummary(tenantId: String!, code: String!, name: String!): DmsSignaturesSummary!
    deleteDmsSignaturesSummary(id: ID!): Boolean!
  }
`;

export const DmsSignaturesSummaryGqlResolvers = {
  Query: {
    getDmsSignaturesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
