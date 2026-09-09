export const AiPromptsProfileGqlTypeDefs = `
  type AiPromptsProfile {
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
    getAiPromptsProfile(id: ID!): AiPromptsProfile
    listAiPromptsProfiles(tenantId: String!, limit: Int): [AiPromptsProfile!]!
  }

  extend type Mutation {
    createAiPromptsProfile(tenantId: String!, code: String!, name: String!): AiPromptsProfile!
    deleteAiPromptsProfile(id: ID!): Boolean!
  }
`;

export const AiPromptsProfileGqlResolvers = {
  Query: {
    getAiPromptsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
