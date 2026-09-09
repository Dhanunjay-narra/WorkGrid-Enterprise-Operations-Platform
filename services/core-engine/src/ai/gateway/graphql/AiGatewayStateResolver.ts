export const AiGatewayStateGqlTypeDefs = `
  type AiGatewayState {
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
    getAiGatewayState(id: ID!): AiGatewayState
    listAiGatewayStates(tenantId: String!, limit: Int): [AiGatewayState!]!
  }

  extend type Mutation {
    createAiGatewayState(tenantId: String!, code: String!, name: String!): AiGatewayState!
    deleteAiGatewayState(id: ID!): Boolean!
  }
`;

export const AiGatewayStateGqlResolvers = {
  Query: {
    getAiGatewayState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
