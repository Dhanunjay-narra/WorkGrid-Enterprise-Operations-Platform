export const ObsProbesSummaryGqlTypeDefs = `
  type ObsProbesSummary {
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
    getObsProbesSummary(id: ID!): ObsProbesSummary
    listObsProbesSummarys(tenantId: String!, limit: Int): [ObsProbesSummary!]!
  }

  extend type Mutation {
    createObsProbesSummary(tenantId: String!, code: String!, name: String!): ObsProbesSummary!
    deleteObsProbesSummary(id: ID!): Boolean!
  }
`;

export const ObsProbesSummaryGqlResolvers = {
  Query: {
    getObsProbesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
