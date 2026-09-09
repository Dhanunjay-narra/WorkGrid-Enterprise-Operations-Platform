export const HrDepartmentsStateGqlTypeDefs = `
  type HrDepartmentsState {
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
    getHrDepartmentsState(id: ID!): HrDepartmentsState
    listHrDepartmentsStates(tenantId: String!, limit: Int): [HrDepartmentsState!]!
  }

  extend type Mutation {
    createHrDepartmentsState(tenantId: String!, code: String!, name: String!): HrDepartmentsState!
    deleteHrDepartmentsState(id: ID!): Boolean!
  }
`;

export const HrDepartmentsStateGqlResolvers = {
  Query: {
    getHrDepartmentsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
