export const AiAgentsEntryGqlTypeDefs = `
  type AiAgentsEntry {
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
    getAiAgentsEntry(id: ID!): AiAgentsEntry
    listAiAgentsEntrys(tenantId: String!, limit: Int): [AiAgentsEntry!]!
  }

  extend type Mutation {
    createAiAgentsEntry(tenantId: String!, code: String!, name: String!): AiAgentsEntry!
    deleteAiAgentsEntry(id: ID!): Boolean!
  }
`;

export const AiAgentsEntryGqlResolvers = {
  Query: {
    getAiAgentsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiAgentsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
