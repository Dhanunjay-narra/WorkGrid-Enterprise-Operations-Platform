export const BiForecastsProfileGqlTypeDefs = `
  type BiForecastsProfile {
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
    getBiForecastsProfile(id: ID!): BiForecastsProfile
    listBiForecastsProfiles(tenantId: String!, limit: Int): [BiForecastsProfile!]!
  }

  extend type Mutation {
    createBiForecastsProfile(tenantId: String!, code: String!, name: String!): BiForecastsProfile!
    deleteBiForecastsProfile(id: ID!): Boolean!
  }
`;

export const BiForecastsProfileGqlResolvers = {
  Query: {
    getBiForecastsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
