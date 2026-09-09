export const CommThreadReplyTypeDefs = `
  type CommThreadReply {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommThreadReply(id: ID!): CommThreadReply
    listCommThreadReplys(tenantId: String!): [CommThreadReply!]!
  }
`;

export const CommThreadReplyResolvers = {
  Query: {
    getCommThreadReply: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommThreadReply", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommThreadReplys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommThreadReply", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
