export const CrmOpportunitySplitTypeDefs = `
  type CrmOpportunitySplit {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmOpportunitySplit(id: ID!): CrmOpportunitySplit
    listCrmOpportunitySplits(tenantId: String!): [CrmOpportunitySplit!]!
  }
`;

export const CrmOpportunitySplitResolvers = {
  Query: {
    getCrmOpportunitySplit: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmOpportunitySplit", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmOpportunitySplits: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmOpportunitySplit", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
