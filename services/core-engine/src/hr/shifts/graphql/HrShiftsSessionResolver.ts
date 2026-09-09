export const HrShiftsSessionGqlTypeDefs = `
  type HrShiftsSession {
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
    getHrShiftsSession(id: ID!): HrShiftsSession
    listHrShiftsSessions(tenantId: String!, limit: Int): [HrShiftsSession!]!
  }

  extend type Mutation {
    createHrShiftsSession(tenantId: String!, code: String!, name: String!): HrShiftsSession!
    deleteHrShiftsSession(id: ID!): Boolean!
  }
`;

export const HrShiftsSessionGqlResolvers = {
  Query: {
    getHrShiftsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
