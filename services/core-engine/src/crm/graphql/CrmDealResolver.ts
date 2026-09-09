export const CrmDealTypeDefs = `
  type CrmDeal {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmDeal(id: ID!): CrmDeal
    listCrmDeals(tenantId: String!): [CrmDeal!]!
  }
`;

export const CrmDealResolvers = {
  Query: {
    getCrmDeal: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmDeal", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmDeals: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmDeal", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
