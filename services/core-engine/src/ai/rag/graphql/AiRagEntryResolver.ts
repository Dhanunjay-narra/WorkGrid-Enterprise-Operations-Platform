export const AiRagEntryGqlTypeDefs = `
  type AiRagEntry {
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
    getAiRagEntry(id: ID!): AiRagEntry
    listAiRagEntrys(tenantId: String!, limit: Int): [AiRagEntry!]!
  }

  extend type Mutation {
    createAiRagEntry(tenantId: String!, code: String!, name: String!): AiRagEntry!
    deleteAiRagEntry(id: ID!): Boolean!
  }
`;

export const AiRagEntryGqlResolvers = {
  Query: {
    getAiRagEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
