export const CommChatMessageTypeDefs = `
  type CommChatMessage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommChatMessage(id: ID!): CommChatMessage
    listCommChatMessages(tenantId: String!): [CommChatMessage!]!
  }
`;

export const CommChatMessageResolvers = {
  Query: {
    getCommChatMessage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommChatMessage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommChatMessages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommChatMessage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
