export const InvStorageBinTypeDefs = `
  type InvStorageBin {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvStorageBin(id: ID!): InvStorageBin
    listInvStorageBins(tenantId: String!): [InvStorageBin!]!
  }
`;

export const InvStorageBinResolvers = {
  Query: {
    getInvStorageBin: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvStorageBin", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvStorageBins: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvStorageBin", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
