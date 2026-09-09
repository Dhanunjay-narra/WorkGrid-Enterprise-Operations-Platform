export const InvBatchSerialTypeDefs = `
  type InvBatchSerial {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvBatchSerial(id: ID!): InvBatchSerial
    listInvBatchSerials(tenantId: String!): [InvBatchSerial!]!
  }
`;

export const InvBatchSerialResolvers = {
  Query: {
    getInvBatchSerial: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvBatchSerial", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvBatchSerials: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvBatchSerial", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
