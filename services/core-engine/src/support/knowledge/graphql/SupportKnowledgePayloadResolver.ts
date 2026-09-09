export const SupportKnowledgePayloadGqlTypeDefs = `
  type SupportKnowledgePayload {
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
    getSupportKnowledgePayload(id: ID!): SupportKnowledgePayload
    listSupportKnowledgePayloads(tenantId: String!, limit: Int): [SupportKnowledgePayload!]!
  }

  extend type Mutation {
    createSupportKnowledgePayload(tenantId: String!, code: String!, name: String!): SupportKnowledgePayload!
    deleteSupportKnowledgePayload(id: ID!): Boolean!
  }
`;

export const SupportKnowledgePayloadGqlResolvers = {
  Query: {
    getSupportKnowledgePayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgePayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
