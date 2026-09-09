export const HrLeaveAssignmentGqlTypeDefs = `
  type HrLeaveAssignment {
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
    getHrLeaveAssignment(id: ID!): HrLeaveAssignment
    listHrLeaveAssignments(tenantId: String!, limit: Int): [HrLeaveAssignment!]!
  }

  extend type Mutation {
    createHrLeaveAssignment(tenantId: String!, code: String!, name: String!): HrLeaveAssignment!
    deleteHrLeaveAssignment(id: ID!): Boolean!
  }
`;

export const HrLeaveAssignmentGqlResolvers = {
  Query: {
    getHrLeaveAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
