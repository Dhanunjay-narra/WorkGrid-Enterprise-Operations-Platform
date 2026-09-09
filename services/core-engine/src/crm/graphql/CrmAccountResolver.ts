export const CrmAccountTypeDefs = `
  type CrmAccount {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCrmAccount(id: ID!): CrmAccount
    listCrmAccounts(tenantId: String!): [CrmAccount!]!
  }
`;

export const CrmAccountResolvers = {
  Query: {
    getCrmAccount: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CrmAccount", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCrmAccounts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CrmAccount", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
