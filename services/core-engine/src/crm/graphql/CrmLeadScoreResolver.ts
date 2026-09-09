export const CrmLeadScoreTypeDefs = `
  type CrmLeadScore {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmLeadScore(id: ID!): CrmLeadScore
    listCrmLeadScores(tenantId: String!): [CrmLeadScore!]!
  }
`;

export const CrmLeadScoreResolvers = {
  Query: {
    getCrmLeadScore: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmLeadScore", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmLeadScores: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmLeadScore", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
