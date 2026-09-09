export const AiPromptsPayloadGqlTypeDefs = `
  type AiPromptsPayload {
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
    getAiPromptsPayload(id: ID!): AiPromptsPayload
    listAiPromptsPayloads(tenantId: String!, limit: Int): [AiPromptsPayload!]!
  }

  extend type Mutation {
    createAiPromptsPayload(tenantId: String!, code: String!, name: String!): AiPromptsPayload!
    deleteAiPromptsPayload(id: ID!): Boolean!
  }
`;

export const AiPromptsPayloadGqlResolvers = {
  Query: {
    getAiPromptsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
