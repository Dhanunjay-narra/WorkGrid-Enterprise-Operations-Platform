export const SupportSurveysEntryGqlTypeDefs = `
  type SupportSurveysEntry {
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
    getSupportSurveysEntry(id: ID!): SupportSurveysEntry
    listSupportSurveysEntrys(tenantId: String!, limit: Int): [SupportSurveysEntry!]!
  }

  extend type Mutation {
    createSupportSurveysEntry(tenantId: String!, code: String!, name: String!): SupportSurveysEntry!
    deleteSupportSurveysEntry(id: ID!): Boolean!
  }
`;

export const SupportSurveysEntryGqlResolvers = {
  Query: {
    getSupportSurveysEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
