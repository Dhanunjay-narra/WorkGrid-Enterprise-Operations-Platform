export const IdSessionTypeDefs = `
  type IdSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdSession(id: ID!): IdSession
    listIdSessions(tenantId: String!): [IdSession!]!
  }
`;

export const IdSessionResolvers = {
  Query: {
    getIdSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdSession", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdSessions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdSession", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
