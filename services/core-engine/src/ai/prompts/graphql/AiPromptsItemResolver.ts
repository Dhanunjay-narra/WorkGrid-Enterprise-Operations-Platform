export const AiPromptsItemGqlTypeDefs = `
  type AiPromptsItem {
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
    getAiPromptsItem(id: ID!): AiPromptsItem
    listAiPromptsItems(tenantId: String!, limit: Int): [AiPromptsItem!]!
  }

  extend type Mutation {
    createAiPromptsItem(tenantId: String!, code: String!, name: String!): AiPromptsItem!
    deleteAiPromptsItem(id: ID!): Boolean!
  }
`;

export const AiPromptsItemGqlResolvers = {
  Query: {
    getAiPromptsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
