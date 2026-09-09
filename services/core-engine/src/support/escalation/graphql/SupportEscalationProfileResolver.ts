export const SupportEscalationProfileGqlTypeDefs = `
  type SupportEscalationProfile {
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
    getSupportEscalationProfile(id: ID!): SupportEscalationProfile
    listSupportEscalationProfiles(tenantId: String!, limit: Int): [SupportEscalationProfile!]!
  }

  extend type Mutation {
    createSupportEscalationProfile(tenantId: String!, code: String!, name: String!): SupportEscalationProfile!
    deleteSupportEscalationProfile(id: ID!): Boolean!
  }
`;

export const SupportEscalationProfileGqlResolvers = {
  Query: {
    getSupportEscalationProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
