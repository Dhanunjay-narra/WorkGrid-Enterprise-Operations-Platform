export const FinCostCenterTypeDefs = `
  type FinCostCenter {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinCostCenter(id: ID!): FinCostCenter
    listFinCostCenters(tenantId: String!): [FinCostCenter!]!
  }
`;

export const FinCostCenterResolvers = {
  Query: {
    getFinCostCenter: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinCostCenter", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinCostCenters: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinCostCenter", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
