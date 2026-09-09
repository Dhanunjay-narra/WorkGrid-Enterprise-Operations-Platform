export const AiRagItemGqlTypeDefs = `
  type AiRagItem {
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
    getAiRagItem(id: ID!): AiRagItem
    listAiRagItems(tenantId: String!, limit: Int): [AiRagItem!]!
  }

  extend type Mutation {
    createAiRagItem(tenantId: String!, code: String!, name: String!): AiRagItem!
    deleteAiRagItem(id: ID!): Boolean!
  }
`;

export const AiRagItemGqlResolvers = {
  Query: {
    getAiRagItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiRagItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
