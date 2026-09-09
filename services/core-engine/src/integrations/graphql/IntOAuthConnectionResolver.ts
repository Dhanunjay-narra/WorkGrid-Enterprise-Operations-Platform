export const IntOAuthConnectionTypeDefs = `
  type IntOAuthConnection {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntOAuthConnection(id: ID!): IntOAuthConnection
    listIntOAuthConnections(tenantId: String!): [IntOAuthConnection!]!
  }
`;

export const IntOAuthConnectionResolvers = {
  Query: {
    getIntOAuthConnection: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntOAuthConnection", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntOAuthConnections: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntOAuthConnection", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
