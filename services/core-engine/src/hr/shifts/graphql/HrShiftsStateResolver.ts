export const HrShiftsStateGqlTypeDefs = `
  type HrShiftsState {
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
    getHrShiftsState(id: ID!): HrShiftsState
    listHrShiftsStates(tenantId: String!, limit: Int): [HrShiftsState!]!
  }

  extend type Mutation {
    createHrShiftsState(tenantId: String!, code: String!, name: String!): HrShiftsState!
    deleteHrShiftsState(id: ID!): Boolean!
  }
`;

export const HrShiftsStateGqlResolvers = {
  Query: {
    getHrShiftsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
