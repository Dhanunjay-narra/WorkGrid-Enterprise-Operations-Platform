export const HrPayrollSessionGqlTypeDefs = `
  type HrPayrollSession {
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
    getHrPayrollSession(id: ID!): HrPayrollSession
    listHrPayrollSessions(tenantId: String!, limit: Int): [HrPayrollSession!]!
  }

  extend type Mutation {
    createHrPayrollSession(tenantId: String!, code: String!, name: String!): HrPayrollSession!
    deleteHrPayrollSession(id: ID!): Boolean!
  }
`;

export const HrPayrollSessionGqlResolvers = {
  Query: {
    getHrPayrollSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
