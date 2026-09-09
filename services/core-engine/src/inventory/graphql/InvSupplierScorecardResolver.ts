export const InvSupplierScorecardTypeDefs = `
  type InvSupplierScorecard {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvSupplierScorecard(id: ID!): InvSupplierScorecard
    listInvSupplierScorecards(tenantId: String!): [InvSupplierScorecard!]!
  }
`;

export const InvSupplierScorecardResolvers = {
  Query: {
    getInvSupplierScorecard: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvSupplierScorecard", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvSupplierScorecards: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvSupplierScorecard", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
