export const ObsAlertsProfileGqlTypeDefs = `
  type ObsAlertsProfile {
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
    getObsAlertsProfile(id: ID!): ObsAlertsProfile
    listObsAlertsProfiles(tenantId: String!, limit: Int): [ObsAlertsProfile!]!
  }

  extend type Mutation {
    createObsAlertsProfile(tenantId: String!, code: String!, name: String!): ObsAlertsProfile!
    deleteObsAlertsProfile(id: ID!): Boolean!
  }
`;

export const ObsAlertsProfileGqlResolvers = {
  Query: {
    getObsAlertsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
