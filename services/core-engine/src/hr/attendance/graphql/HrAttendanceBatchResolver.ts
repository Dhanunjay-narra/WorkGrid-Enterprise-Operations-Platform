export const HrAttendanceBatchGqlTypeDefs = `
  type HrAttendanceBatch {
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
    getHrAttendanceBatch(id: ID!): HrAttendanceBatch
    listHrAttendanceBatchs(tenantId: String!, limit: Int): [HrAttendanceBatch!]!
  }

  extend type Mutation {
    createHrAttendanceBatch(tenantId: String!, code: String!, name: String!): HrAttendanceBatch!
    deleteHrAttendanceBatch(id: ID!): Boolean!
  }
`;

export const HrAttendanceBatchGqlResolvers = {
  Query: {
    getHrAttendanceBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
