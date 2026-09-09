export const AiGatewayNodeGqlTypeDefs = `
  type AiGatewayNode {
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
    getAiGatewayNode(id: ID!): AiGatewayNode
    listAiGatewayNodes(tenantId: String!, limit: Int): [AiGatewayNode!]!
  }

  extend type Mutation {
    createAiGatewayNode(tenantId: String!, code: String!, name: String!): AiGatewayNode!
    deleteAiGatewayNode(id: ID!): Boolean!
  }
`;

export const AiGatewayNodeGqlResolvers = {
  Query: {
    getAiGatewayNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
