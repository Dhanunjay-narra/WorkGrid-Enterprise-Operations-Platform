export const HrEmployeesStateGqlTypeDefs = `
  type HrEmployeesState {
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
    getHrEmployeesState(id: ID!): HrEmployeesState
    listHrEmployeesStates(tenantId: String!, limit: Int): [HrEmployeesState!]!
  }

  extend type Mutation {
    createHrEmployeesState(tenantId: String!, code: String!, name: String!): HrEmployeesState!
    deleteHrEmployeesState(id: ID!): Boolean!
  }
`;

export const HrEmployeesStateGqlResolvers = {
  Query: {
    getHrEmployeesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
