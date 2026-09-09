export const DmsFoldersSummaryGqlTypeDefs = `
  type DmsFoldersSummary {
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
    getDmsFoldersSummary(id: ID!): DmsFoldersSummary
    listDmsFoldersSummarys(tenantId: String!, limit: Int): [DmsFoldersSummary!]!
  }

  extend type Mutation {
    createDmsFoldersSummary(tenantId: String!, code: String!, name: String!): DmsFoldersSummary!
    deleteDmsFoldersSummary(id: ID!): Boolean!
  }
`;

export const DmsFoldersSummaryGqlResolvers = {
  Query: {
    getDmsFoldersSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
