export const CrmActivityTypeDefs = `
  type CrmActivity {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmActivity(id: ID!): CrmActivity
    listCrmActivitys(tenantId: String!): [CrmActivity!]!
  }
`;

export const CrmActivityResolvers = {
  Query: {
    getCrmActivity: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmActivity", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmActivitys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmActivity", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
