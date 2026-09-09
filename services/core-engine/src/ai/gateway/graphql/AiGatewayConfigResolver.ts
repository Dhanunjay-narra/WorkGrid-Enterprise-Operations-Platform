export const AiGatewayConfigGqlTypeDefs = `
  type AiGatewayConfig {
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
    getAiGatewayConfig(id: ID!): AiGatewayConfig
    listAiGatewayConfigs(tenantId: String!, limit: Int): [AiGatewayConfig!]!
  }

  extend type Mutation {
    createAiGatewayConfig(tenantId: String!, code: String!, name: String!): AiGatewayConfig!
    deleteAiGatewayConfig(id: ID!): Boolean!
  }
`;

export const AiGatewayConfigGqlResolvers = {
  Query: {
    getAiGatewayConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
