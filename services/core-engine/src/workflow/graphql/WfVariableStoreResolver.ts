export const WfVariableStoreTypeDefs = `
  type WfVariableStore {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfVariableStore(id: ID!): WfVariableStore
    listWfVariableStores(tenantId: String!): [WfVariableStore!]!
  }
`;

export const WfVariableStoreResolvers = {
  Query: {
    getWfVariableStore: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfVariableStore", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfVariableStores: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfVariableStore", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
