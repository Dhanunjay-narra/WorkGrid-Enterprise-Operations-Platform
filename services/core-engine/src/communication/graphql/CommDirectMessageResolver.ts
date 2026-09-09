export const CommDirectMessageTypeDefs = `
  type CommDirectMessage {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommDirectMessage(id: ID!): CommDirectMessage
    listCommDirectMessages(tenantId: String!): [CommDirectMessage!]!
  }
`;

export const CommDirectMessageResolvers = {
  Query: {
    getCommDirectMessage: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommDirectMessage", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommDirectMessages: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommDirectMessage", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
