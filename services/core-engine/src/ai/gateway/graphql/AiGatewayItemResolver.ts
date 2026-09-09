export const AiGatewayItemGqlTypeDefs = `
  type AiGatewayItem {
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
    getAiGatewayItem(id: ID!): AiGatewayItem
    listAiGatewayItems(tenantId: String!, limit: Int): [AiGatewayItem!]!
  }

  extend type Mutation {
    createAiGatewayItem(tenantId: String!, code: String!, name: String!): AiGatewayItem!
    deleteAiGatewayItem(id: ID!): Boolean!
  }
`;

export const AiGatewayItemGqlResolvers = {
  Query: {
    getAiGatewayItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
