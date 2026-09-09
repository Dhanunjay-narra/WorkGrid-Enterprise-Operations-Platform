export const AiDocumentChunkTypeDefs = `
  type AiDocumentChunk {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiDocumentChunk(id: ID!): AiDocumentChunk
    listAiDocumentChunks(tenantId: String!): [AiDocumentChunk!]!
  }
`;

export const AiDocumentChunkResolvers = {
  Query: {
    getAiDocumentChunk: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiDocumentChunk", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiDocumentChunks: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiDocumentChunk", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
