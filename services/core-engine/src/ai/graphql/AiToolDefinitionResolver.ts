export const AiToolDefinitionTypeDefs = `
  type AiToolDefinition {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiToolDefinition(id: ID!): AiToolDefinition
    listAiToolDefinitions(tenantId: String!): [AiToolDefinition!]!
  }
`;

export const AiToolDefinitionResolvers = {
  Query: {
    getAiToolDefinition: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiToolDefinition", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiToolDefinitions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiToolDefinition", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
