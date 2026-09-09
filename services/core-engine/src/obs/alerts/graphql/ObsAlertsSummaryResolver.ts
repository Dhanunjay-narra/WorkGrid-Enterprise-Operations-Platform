export const ObsAlertsSummaryGqlTypeDefs = `
  type ObsAlertsSummary {
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
    getObsAlertsSummary(id: ID!): ObsAlertsSummary
    listObsAlertsSummarys(tenantId: String!, limit: Int): [ObsAlertsSummary!]!
  }

  extend type Mutation {
    createObsAlertsSummary(tenantId: String!, code: String!, name: String!): ObsAlertsSummary!
    deleteObsAlertsSummary(id: ID!): Boolean!
  }
`;

export const ObsAlertsSummaryGqlResolvers = {
  Query: {
    getObsAlertsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
