export const CommChannelMemberTypeDefs = `
  type CommChannelMember {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommChannelMember(id: ID!): CommChannelMember
    listCommChannelMembers(tenantId: String!): [CommChannelMember!]!
  }
`;

export const CommChannelMemberResolvers = {
  Query: {
    getCommChannelMember: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommChannelMember", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommChannelMembers: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommChannelMember", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
