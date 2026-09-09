export const CrmSalesQuotaTypeDefs = `
  type CrmSalesQuota {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmSalesQuota(id: ID!): CrmSalesQuota
    listCrmSalesQuotas(tenantId: String!): [CrmSalesQuota!]!
  }
`;

export const CrmSalesQuotaResolvers = {
  Query: {
    getCrmSalesQuota: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmSalesQuota", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmSalesQuotas: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmSalesQuota", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
