export const HrShiftsTaskGqlTypeDefs = `
  type HrShiftsTask {
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
    getHrShiftsTask(id: ID!): HrShiftsTask
    listHrShiftsTasks(tenantId: String!, limit: Int): [HrShiftsTask!]!
  }

  extend type Mutation {
    createHrShiftsTask(tenantId: String!, code: String!, name: String!): HrShiftsTask!
    deleteHrShiftsTask(id: ID!): Boolean!
  }
`;

export const HrShiftsTaskGqlResolvers = {
  Query: {
    getHrShiftsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
