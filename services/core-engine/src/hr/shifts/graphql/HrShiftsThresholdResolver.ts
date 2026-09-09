export const HrShiftsThresholdGqlTypeDefs = `
  type HrShiftsThreshold {
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
    getHrShiftsThreshold(id: ID!): HrShiftsThreshold
    listHrShiftsThresholds(tenantId: String!, limit: Int): [HrShiftsThreshold!]!
  }

  extend type Mutation {
    createHrShiftsThreshold(tenantId: String!, code: String!, name: String!): HrShiftsThreshold!
    deleteHrShiftsThreshold(id: ID!): Boolean!
  }
`;

export const HrShiftsThresholdGqlResolvers = {
  Query: {
    getHrShiftsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
