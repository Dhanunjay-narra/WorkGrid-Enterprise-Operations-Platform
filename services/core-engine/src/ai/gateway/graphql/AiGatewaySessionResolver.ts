export const AiGatewaySessionGqlTypeDefs = `
  type AiGatewaySession {
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
    getAiGatewaySession(id: ID!): AiGatewaySession
    listAiGatewaySessions(tenantId: String!, limit: Int): [AiGatewaySession!]!
  }

  extend type Mutation {
    createAiGatewaySession(tenantId: String!, code: String!, name: String!): AiGatewaySession!
    deleteAiGatewaySession(id: ID!): Boolean!
  }
`;

export const AiGatewaySessionGqlResolvers = {
  Query: {
    getAiGatewaySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewaySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
