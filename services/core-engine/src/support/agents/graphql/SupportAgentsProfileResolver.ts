export const SupportAgentsProfileGqlTypeDefs = `
  type SupportAgentsProfile {
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
    getSupportAgentsProfile(id: ID!): SupportAgentsProfile
    listSupportAgentsProfiles(tenantId: String!, limit: Int): [SupportAgentsProfile!]!
  }

  extend type Mutation {
    createSupportAgentsProfile(tenantId: String!, code: String!, name: String!): SupportAgentsProfile!
    deleteSupportAgentsProfile(id: ID!): Boolean!
  }
`;

export const SupportAgentsProfileGqlResolvers = {
  Query: {
    getSupportAgentsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
