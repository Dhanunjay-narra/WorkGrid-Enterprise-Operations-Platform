export const AiGatewayPolicyGqlTypeDefs = `
  type AiGatewayPolicy {
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
    getAiGatewayPolicy(id: ID!): AiGatewayPolicy
    listAiGatewayPolicys(tenantId: String!, limit: Int): [AiGatewayPolicy!]!
  }

  extend type Mutation {
    createAiGatewayPolicy(tenantId: String!, code: String!, name: String!): AiGatewayPolicy!
    deleteAiGatewayPolicy(id: ID!): Boolean!
  }
`;

export const AiGatewayPolicyGqlResolvers = {
  Query: {
    getAiGatewayPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
