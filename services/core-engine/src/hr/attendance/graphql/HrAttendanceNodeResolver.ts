export const HrAttendanceNodeGqlTypeDefs = `
  type HrAttendanceNode {
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
    getHrAttendanceNode(id: ID!): HrAttendanceNode
    listHrAttendanceNodes(tenantId: String!, limit: Int): [HrAttendanceNode!]!
  }

  extend type Mutation {
    createHrAttendanceNode(tenantId: String!, code: String!, name: String!): HrAttendanceNode!
    deleteHrAttendanceNode(id: ID!): Boolean!
  }
`;

export const HrAttendanceNodeGqlResolvers = {
  Query: {
    getHrAttendanceNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
