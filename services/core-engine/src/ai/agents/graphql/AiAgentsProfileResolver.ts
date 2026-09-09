export const AiAgentsProfileGqlTypeDefs = `
  type AiAgentsProfile {
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
    getAiAgentsProfile(id: ID!): AiAgentsProfile
    listAiAgentsProfiles(tenantId: String!, limit: Int): [AiAgentsProfile!]!
  }

  extend type Mutation {
    createAiAgentsProfile(tenantId: String!, code: String!, name: String!): AiAgentsProfile!
    deleteAiAgentsProfile(id: ID!): Boolean!
  }
`;

export const AiAgentsProfileGqlResolvers = {
  Query: {
    getAiAgentsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
