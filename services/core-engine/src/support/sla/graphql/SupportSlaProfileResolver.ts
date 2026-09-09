export const SupportSlaProfileGqlTypeDefs = `
  type SupportSlaProfile {
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
    getSupportSlaProfile(id: ID!): SupportSlaProfile
    listSupportSlaProfiles(tenantId: String!, limit: Int): [SupportSlaProfile!]!
  }

  extend type Mutation {
    createSupportSlaProfile(tenantId: String!, code: String!, name: String!): SupportSlaProfile!
    deleteSupportSlaProfile(id: ID!): Boolean!
  }
`;

export const SupportSlaProfileGqlResolvers = {
  Query: {
    getSupportSlaProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
