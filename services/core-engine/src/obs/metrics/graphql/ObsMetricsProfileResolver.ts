export const ObsMetricsProfileGqlTypeDefs = `
  type ObsMetricsProfile {
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
    getObsMetricsProfile(id: ID!): ObsMetricsProfile
    listObsMetricsProfiles(tenantId: String!, limit: Int): [ObsMetricsProfile!]!
  }

  extend type Mutation {
    createObsMetricsProfile(tenantId: String!, code: String!, name: String!): ObsMetricsProfile!
    deleteObsMetricsProfile(id: ID!): Boolean!
  }
`;

export const ObsMetricsProfileGqlResolvers = {
  Query: {
    getObsMetricsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
