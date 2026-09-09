export const AiGatewayMappingGqlTypeDefs = `
  type AiGatewayMapping {
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
    getAiGatewayMapping(id: ID!): AiGatewayMapping
    listAiGatewayMappings(tenantId: String!, limit: Int): [AiGatewayMapping!]!
  }

  extend type Mutation {
    createAiGatewayMapping(tenantId: String!, code: String!, name: String!): AiGatewayMapping!
    deleteAiGatewayMapping(id: ID!): Boolean!
  }
`;

export const AiGatewayMappingGqlResolvers = {
  Query: {
    getAiGatewayMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
