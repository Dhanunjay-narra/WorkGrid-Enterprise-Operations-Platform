export const AiEvaluationScoreTypeDefs = `
  type AiEvaluationScore {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getAiEvaluationScore(id: ID!): AiEvaluationScore
    listAiEvaluationScores(tenantId: String!): [AiEvaluationScore!]!
  }
`;

export const AiEvaluationScoreResolvers = {
  Query: {
    getAiEvaluationScore: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "AiEvaluationScore", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listAiEvaluationScores: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "AiEvaluationScore", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
