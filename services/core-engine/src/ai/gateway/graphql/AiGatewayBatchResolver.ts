export const AiGatewayBatchGqlTypeDefs = `
  type AiGatewayBatch {
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
    getAiGatewayBatch(id: ID!): AiGatewayBatch
    listAiGatewayBatchs(tenantId: String!, limit: Int): [AiGatewayBatch!]!
  }

  extend type Mutation {
    createAiGatewayBatch(tenantId: String!, code: String!, name: String!): AiGatewayBatch!
    deleteAiGatewayBatch(id: ID!): Boolean!
  }
`;

export const AiGatewayBatchGqlResolvers = {
  Query: {
    getAiGatewayBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
