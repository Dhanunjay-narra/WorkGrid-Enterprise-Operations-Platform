export const CrmSalesContractTypeDefs = `
  type CrmSalesContract {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmSalesContract(id: ID!): CrmSalesContract
    listCrmSalesContracts(tenantId: String!): [CrmSalesContract!]!
  }
`;

export const CrmSalesContractResolvers = {
  Query: {
    getCrmSalesContract: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmSalesContract", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmSalesContracts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmSalesContract", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
