export const HrDepartmentsSessionGqlTypeDefs = `
  type HrDepartmentsSession {
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
    getHrDepartmentsSession(id: ID!): HrDepartmentsSession
    listHrDepartmentsSessions(tenantId: String!, limit: Int): [HrDepartmentsSession!]!
  }

  extend type Mutation {
    createHrDepartmentsSession(tenantId: String!, code: String!, name: String!): HrDepartmentsSession!
    deleteHrDepartmentsSession(id: ID!): Boolean!
  }
`;

export const HrDepartmentsSessionGqlResolvers = {
  Query: {
    getHrDepartmentsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
