export const SupportKnowledgeProfileGqlTypeDefs = `
  type SupportKnowledgeProfile {
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
    getSupportKnowledgeProfile(id: ID!): SupportKnowledgeProfile
    listSupportKnowledgeProfiles(tenantId: String!, limit: Int): [SupportKnowledgeProfile!]!
  }

  extend type Mutation {
    createSupportKnowledgeProfile(tenantId: String!, code: String!, name: String!): SupportKnowledgeProfile!
    deleteSupportKnowledgeProfile(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeProfileGqlResolvers = {
  Query: {
    getSupportKnowledgeProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
