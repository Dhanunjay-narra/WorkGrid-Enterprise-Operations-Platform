export const IdentityProfileGqlTypeDefs = `
  type IdentityProfile {
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
    getIdentityProfile(id: ID!): IdentityProfile
    listIdentityProfiles(tenantId: String!, limit: Int): [IdentityProfile!]!
  }

  extend type Mutation {
    createIdentityProfile(tenantId: String!, code: String!, name: String!): IdentityProfile!
    deleteIdentityProfile(id: ID!): Boolean!
  }
`;

export const IdentityProfileGqlResolvers = {
  Query: {
    getIdentityProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
