export const HrShiftsNodeGqlTypeDefs = `
  type HrShiftsNode {
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
    getHrShiftsNode(id: ID!): HrShiftsNode
    listHrShiftsNodes(tenantId: String!, limit: Int): [HrShiftsNode!]!
  }

  extend type Mutation {
    createHrShiftsNode(tenantId: String!, code: String!, name: String!): HrShiftsNode!
    deleteHrShiftsNode(id: ID!): Boolean!
  }
`;

export const HrShiftsNodeGqlResolvers = {
  Query: {
    getHrShiftsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
