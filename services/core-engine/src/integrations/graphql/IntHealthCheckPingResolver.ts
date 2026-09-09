export const IntHealthCheckPingTypeDefs = `
  type IntHealthCheckPing {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIntHealthCheckPing(id: ID!): IntHealthCheckPing
    listIntHealthCheckPings(tenantId: String!): [IntHealthCheckPing!]!
  }
`;

export const IntHealthCheckPingResolvers = {
  Query: {
    getIntHealthCheckPing: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IntHealthCheckPing", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIntHealthCheckPings: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IntHealthCheckPing", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
