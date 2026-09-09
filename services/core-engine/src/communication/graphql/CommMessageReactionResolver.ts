export const CommMessageReactionTypeDefs = `
  type CommMessageReaction {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommMessageReaction(id: ID!): CommMessageReaction
    listCommMessageReactions(tenantId: String!): [CommMessageReaction!]!
  }
`;

export const CommMessageReactionResolvers = {
  Query: {
    getCommMessageReaction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommMessageReaction", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommMessageReactions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommMessageReaction", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
