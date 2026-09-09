export const CommUserPresenceTypeDefs = `
  type CommUserPresence {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getCommUserPresence(id: ID!): CommUserPresence
    listCommUserPresences(tenantId: String!): [CommUserPresence!]!
  }
`;

export const CommUserPresenceResolvers = {
  Query: {
    getCommUserPresence: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "CommUserPresence", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listCommUserPresences: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "CommUserPresence", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
