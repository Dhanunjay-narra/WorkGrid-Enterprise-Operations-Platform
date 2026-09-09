export const ObsProfilingSummaryGqlTypeDefs = `
  type ObsProfilingSummary {
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
    getObsProfilingSummary(id: ID!): ObsProfilingSummary
    listObsProfilingSummarys(tenantId: String!, limit: Int): [ObsProfilingSummary!]!
  }

  extend type Mutation {
    createObsProfilingSummary(tenantId: String!, code: String!, name: String!): ObsProfilingSummary!
    deleteObsProfilingSummary(id: ID!): Boolean!
  }
`;

export const ObsProfilingSummaryGqlResolvers = {
  Query: {
    getObsProfilingSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
