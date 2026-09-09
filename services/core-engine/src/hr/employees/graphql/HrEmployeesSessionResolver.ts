export const HrEmployeesSessionGqlTypeDefs = `
  type HrEmployeesSession {
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
    getHrEmployeesSession(id: ID!): HrEmployeesSession
    listHrEmployeesSessions(tenantId: String!, limit: Int): [HrEmployeesSession!]!
  }

  extend type Mutation {
    createHrEmployeesSession(tenantId: String!, code: String!, name: String!): HrEmployeesSession!
    deleteHrEmployeesSession(id: ID!): Boolean!
  }
`;

export const HrEmployeesSessionGqlResolvers = {
  Query: {
    getHrEmployeesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
