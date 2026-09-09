export const HrLeaveStateGqlTypeDefs = `
  type HrLeaveState {
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
    getHrLeaveState(id: ID!): HrLeaveState
    listHrLeaveStates(tenantId: String!, limit: Int): [HrLeaveState!]!
  }

  extend type Mutation {
    createHrLeaveState(tenantId: String!, code: String!, name: String!): HrLeaveState!
    deleteHrLeaveState(id: ID!): Boolean!
  }
`;

export const HrLeaveStateGqlResolvers = {
  Query: {
    getHrLeaveState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
