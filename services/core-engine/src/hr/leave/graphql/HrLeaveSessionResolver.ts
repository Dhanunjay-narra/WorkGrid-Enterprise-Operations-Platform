export const HrLeaveSessionGqlTypeDefs = `
  type HrLeaveSession {
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
    getHrLeaveSession(id: ID!): HrLeaveSession
    listHrLeaveSessions(tenantId: String!, limit: Int): [HrLeaveSession!]!
  }

  extend type Mutation {
    createHrLeaveSession(tenantId: String!, code: String!, name: String!): HrLeaveSession!
    deleteHrLeaveSession(id: ID!): Boolean!
  }
`;

export const HrLeaveSessionGqlResolvers = {
  Query: {
    getHrLeaveSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
