export const ObsDashboardsProfileGqlTypeDefs = `
  type ObsDashboardsProfile {
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
    getObsDashboardsProfile(id: ID!): ObsDashboardsProfile
    listObsDashboardsProfiles(tenantId: String!, limit: Int): [ObsDashboardsProfile!]!
  }

  extend type Mutation {
    createObsDashboardsProfile(tenantId: String!, code: String!, name: String!): ObsDashboardsProfile!
    deleteObsDashboardsProfile(id: ID!): Boolean!
  }
`;

export const ObsDashboardsProfileGqlResolvers = {
  Query: {
    getObsDashboardsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
