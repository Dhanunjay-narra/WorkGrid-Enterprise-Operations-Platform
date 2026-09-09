export const HrPayrollStateGqlTypeDefs = `
  type HrPayrollState {
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
    getHrPayrollState(id: ID!): HrPayrollState
    listHrPayrollStates(tenantId: String!, limit: Int): [HrPayrollState!]!
  }

  extend type Mutation {
    createHrPayrollState(tenantId: String!, code: String!, name: String!): HrPayrollState!
    deleteHrPayrollState(id: ID!): Boolean!
  }
`;

export const HrPayrollStateGqlResolvers = {
  Query: {
    getHrPayrollState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
