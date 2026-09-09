export const AiGatewayEntryGqlTypeDefs = `
  type AiGatewayEntry {
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
    getAiGatewayEntry(id: ID!): AiGatewayEntry
    listAiGatewayEntrys(tenantId: String!, limit: Int): [AiGatewayEntry!]!
  }

  extend type Mutation {
    createAiGatewayEntry(tenantId: String!, code: String!, name: String!): AiGatewayEntry!
    deleteAiGatewayEntry(id: ID!): Boolean!
  }
`;

export const AiGatewayEntryGqlResolvers = {
  Query: {
    getAiGatewayEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
