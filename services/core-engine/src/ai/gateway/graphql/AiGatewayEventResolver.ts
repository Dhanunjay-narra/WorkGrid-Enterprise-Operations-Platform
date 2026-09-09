export const AiGatewayEventGqlTypeDefs = `
  type AiGatewayEvent {
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
    getAiGatewayEvent(id: ID!): AiGatewayEvent
    listAiGatewayEvents(tenantId: String!, limit: Int): [AiGatewayEvent!]!
  }

  extend type Mutation {
    createAiGatewayEvent(tenantId: String!, code: String!, name: String!): AiGatewayEvent!
    deleteAiGatewayEvent(id: ID!): Boolean!
  }
`;

export const AiGatewayEventGqlResolvers = {
  Query: {
    getAiGatewayEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
