export const RbacSessionGqlTypeDefs = `
  type RbacSession {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getRbacSession(id: ID!): RbacSession
    listRbacSessions(tenantId: String!, limit: Int): [RbacSession!]!
  }

  extend type Mutation {
    createRbacSession(tenantId: String!, code: String!, name: String!): RbacSession!
    deleteRbacSession(id: ID!): Boolean!
  }
`;

export const RbacSessionGqlResolvers = {
  Query: {
    getRbacSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
