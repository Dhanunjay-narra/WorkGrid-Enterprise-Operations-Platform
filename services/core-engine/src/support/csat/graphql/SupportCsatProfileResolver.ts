export const SupportCsatProfileGqlTypeDefs = `
  type SupportCsatProfile {
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
    getSupportCsatProfile(id: ID!): SupportCsatProfile
    listSupportCsatProfiles(tenantId: String!, limit: Int): [SupportCsatProfile!]!
  }

  extend type Mutation {
    createSupportCsatProfile(tenantId: String!, code: String!, name: String!): SupportCsatProfile!
    deleteSupportCsatProfile(id: ID!): Boolean!
  }
`;

export const SupportCsatProfileGqlResolvers = {
  Query: {
    getSupportCsatProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
