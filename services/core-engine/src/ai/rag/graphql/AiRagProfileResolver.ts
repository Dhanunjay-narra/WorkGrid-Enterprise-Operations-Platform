export const AiRagProfileGqlTypeDefs = `
  type AiRagProfile {
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
    getAiRagProfile(id: ID!): AiRagProfile
    listAiRagProfiles(tenantId: String!, limit: Int): [AiRagProfile!]!
  }

  extend type Mutation {
    createAiRagProfile(tenantId: String!, code: String!, name: String!): AiRagProfile!
    deleteAiRagProfile(id: ID!): Boolean!
  }
`;

export const AiRagProfileGqlResolvers = {
  Query: {
    getAiRagProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
