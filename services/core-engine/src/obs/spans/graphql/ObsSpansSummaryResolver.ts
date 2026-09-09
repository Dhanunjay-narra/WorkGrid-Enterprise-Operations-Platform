export const ObsSpansSummaryGqlTypeDefs = `
  type ObsSpansSummary {
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
    getObsSpansSummary(id: ID!): ObsSpansSummary
    listObsSpansSummarys(tenantId: String!, limit: Int): [ObsSpansSummary!]!
  }

  extend type Mutation {
    createObsSpansSummary(tenantId: String!, code: String!, name: String!): ObsSpansSummary!
    deleteObsSpansSummary(id: ID!): Boolean!
  }
`;

export const ObsSpansSummaryGqlResolvers = {
  Query: {
    getObsSpansSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
