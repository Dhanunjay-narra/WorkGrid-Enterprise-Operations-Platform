export const HrShiftsPolicyGqlTypeDefs = `
  type HrShiftsPolicy {
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
    getHrShiftsPolicy(id: ID!): HrShiftsPolicy
    listHrShiftsPolicys(tenantId: String!, limit: Int): [HrShiftsPolicy!]!
  }

  extend type Mutation {
    createHrShiftsPolicy(tenantId: String!, code: String!, name: String!): HrShiftsPolicy!
    deleteHrShiftsPolicy(id: ID!): Boolean!
  }
`;

export const HrShiftsPolicyGqlResolvers = {
  Query: {
    getHrShiftsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
