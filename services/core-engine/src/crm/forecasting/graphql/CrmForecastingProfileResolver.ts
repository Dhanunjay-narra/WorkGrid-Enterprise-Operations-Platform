export const CrmForecastingProfileGqlTypeDefs = `
  type CrmForecastingProfile {
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
    getCrmForecastingProfile(id: ID!): CrmForecastingProfile
    listCrmForecastingProfiles(tenantId: String!, limit: Int): [CrmForecastingProfile!]!
  }

  extend type Mutation {
    createCrmForecastingProfile(tenantId: String!, code: String!, name: String!): CrmForecastingProfile!
    deleteCrmForecastingProfile(id: ID!): Boolean!
  }
`;

export const CrmForecastingProfileGqlResolvers = {
  Query: {
    getCrmForecastingProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
