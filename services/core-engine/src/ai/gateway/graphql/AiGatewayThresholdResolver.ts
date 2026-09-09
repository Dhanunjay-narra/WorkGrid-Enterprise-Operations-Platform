export const AiGatewayThresholdGqlTypeDefs = `
  type AiGatewayThreshold {
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
    getAiGatewayThreshold(id: ID!): AiGatewayThreshold
    listAiGatewayThresholds(tenantId: String!, limit: Int): [AiGatewayThreshold!]!
  }

  extend type Mutation {
    createAiGatewayThreshold(tenantId: String!, code: String!, name: String!): AiGatewayThreshold!
    deleteAiGatewayThreshold(id: ID!): Boolean!
  }
`;

export const AiGatewayThresholdGqlResolvers = {
  Query: {
    getAiGatewayThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
