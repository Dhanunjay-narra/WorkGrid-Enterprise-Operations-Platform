export const AiPromptsEntryGqlTypeDefs = `
  type AiPromptsEntry {
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
    getAiPromptsEntry(id: ID!): AiPromptsEntry
    listAiPromptsEntrys(tenantId: String!, limit: Int): [AiPromptsEntry!]!
  }

  extend type Mutation {
    createAiPromptsEntry(tenantId: String!, code: String!, name: String!): AiPromptsEntry!
    deleteAiPromptsEntry(id: ID!): Boolean!
  }
`;

export const AiPromptsEntryGqlResolvers = {
  Query: {
    getAiPromptsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
