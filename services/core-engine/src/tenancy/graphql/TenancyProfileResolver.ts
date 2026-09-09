export const TenancyProfileGqlTypeDefs = `
  type TenancyProfile {
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
    getTenancyProfile(id: ID!): TenancyProfile
    listTenancyProfiles(tenantId: String!, limit: Int): [TenancyProfile!]!
  }

  extend type Mutation {
    createTenancyProfile(tenantId: String!, code: String!, name: String!): TenancyProfile!
    deleteTenancyProfile(id: ID!): Boolean!
  }
`;

export const TenancyProfileGqlResolvers = {
  Query: {
    getTenancyProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
