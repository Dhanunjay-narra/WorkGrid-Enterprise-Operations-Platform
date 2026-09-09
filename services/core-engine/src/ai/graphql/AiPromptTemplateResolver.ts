export const AiPromptTemplateTypeDefs = `
  type AiPromptTemplate {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiPromptTemplate(id: ID!): AiPromptTemplate
    listAiPromptTemplates(tenantId: String!): [AiPromptTemplate!]!
  }
`;

export const AiPromptTemplateResolvers = {
  Query: {
    getAiPromptTemplate: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiPromptTemplate", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiPromptTemplates: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiPromptTemplate", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
