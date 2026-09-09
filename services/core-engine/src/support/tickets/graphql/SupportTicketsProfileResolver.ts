export const SupportTicketsProfileGqlTypeDefs = `
  type SupportTicketsProfile {
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
    getSupportTicketsProfile(id: ID!): SupportTicketsProfile
    listSupportTicketsProfiles(tenantId: String!, limit: Int): [SupportTicketsProfile!]!
  }

  extend type Mutation {
    createSupportTicketsProfile(tenantId: String!, code: String!, name: String!): SupportTicketsProfile!
    deleteSupportTicketsProfile(id: ID!): Boolean!
  }
`;

export const SupportTicketsProfileGqlResolvers = {
  Query: {
    getSupportTicketsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
