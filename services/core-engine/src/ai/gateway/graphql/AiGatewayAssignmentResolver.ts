export const AiGatewayAssignmentGqlTypeDefs = `
  type AiGatewayAssignment {
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
    getAiGatewayAssignment(id: ID!): AiGatewayAssignment
    listAiGatewayAssignments(tenantId: String!, limit: Int): [AiGatewayAssignment!]!
  }

  extend type Mutation {
    createAiGatewayAssignment(tenantId: String!, code: String!, name: String!): AiGatewayAssignment!
    deleteAiGatewayAssignment(id: ID!): Boolean!
  }
`;

export const AiGatewayAssignmentGqlResolvers = {
  Query: {
    getAiGatewayAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiGatewayAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
