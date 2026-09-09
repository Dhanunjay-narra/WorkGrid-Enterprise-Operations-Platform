export const HrLeaveNodeGqlTypeDefs = `
  type HrLeaveNode {
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
    getHrLeaveNode(id: ID!): HrLeaveNode
    listHrLeaveNodes(tenantId: String!, limit: Int): [HrLeaveNode!]!
  }

  extend type Mutation {
    createHrLeaveNode(tenantId: String!, code: String!, name: String!): HrLeaveNode!
    deleteHrLeaveNode(id: ID!): Boolean!
  }
`;

export const HrLeaveNodeGqlResolvers = {
  Query: {
    getHrLeaveNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
