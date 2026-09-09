export const CommChannelTypeDefs = `
  type CommChannel {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommChannel(id: ID!): CommChannel
    listCommChannels(tenantId: String!): [CommChannel!]!
  }
`;

export const CommChannelResolvers = {
  Query: {
    getCommChannel: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommChannel", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommChannels: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommChannel", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
