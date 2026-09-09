export const SupCsatScoreTypeDefs = `
  type SupCsatScore {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSupCsatScore(id: ID!): SupCsatScore
    listSupCsatScores(tenantId: String!): [SupCsatScore!]!
  }
`;

export const SupCsatScoreResolvers = {
  Query: {
    getSupCsatScore: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SupCsatScore", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSupCsatScores: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SupCsatScore", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
