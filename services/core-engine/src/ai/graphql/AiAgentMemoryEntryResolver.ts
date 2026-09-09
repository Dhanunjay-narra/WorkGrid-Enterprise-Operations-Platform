export const AiAgentMemoryEntryTypeDefs = `
  type AiAgentMemoryEntry {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiAgentMemoryEntry(id: ID!): AiAgentMemoryEntry
    listAiAgentMemoryEntrys(tenantId: String!): [AiAgentMemoryEntry!]!
  }
`;

export const AiAgentMemoryEntryResolvers = {
  Query: {
    getAiAgentMemoryEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiAgentMemoryEntry", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiAgentMemoryEntrys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiAgentMemoryEntry", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
