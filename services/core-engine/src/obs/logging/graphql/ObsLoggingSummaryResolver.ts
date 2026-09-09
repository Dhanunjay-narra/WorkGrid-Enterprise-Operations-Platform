export const ObsLoggingSummaryGqlTypeDefs = `
  type ObsLoggingSummary {
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
    getObsLoggingSummary(id: ID!): ObsLoggingSummary
    listObsLoggingSummarys(tenantId: String!, limit: Int): [ObsLoggingSummary!]!
  }

  extend type Mutation {
    createObsLoggingSummary(tenantId: String!, code: String!, name: String!): ObsLoggingSummary!
    deleteObsLoggingSummary(id: ID!): Boolean!
  }
`;

export const ObsLoggingSummaryGqlResolvers = {
  Query: {
    getObsLoggingSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
