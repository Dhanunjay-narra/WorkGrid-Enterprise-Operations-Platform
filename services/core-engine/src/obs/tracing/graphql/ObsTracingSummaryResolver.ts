export const ObsTracingSummaryGqlTypeDefs = `
  type ObsTracingSummary {
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
    getObsTracingSummary(id: ID!): ObsTracingSummary
    listObsTracingSummarys(tenantId: String!, limit: Int): [ObsTracingSummary!]!
  }

  extend type Mutation {
    createObsTracingSummary(tenantId: String!, code: String!, name: String!): ObsTracingSummary!
    deleteObsTracingSummary(id: ID!): Boolean!
  }
`;

export const ObsTracingSummaryGqlResolvers = {
  Query: {
    getObsTracingSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
