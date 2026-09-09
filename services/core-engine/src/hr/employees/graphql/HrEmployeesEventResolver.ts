export const HrEmployeesEventGqlTypeDefs = `
  type HrEmployeesEvent {
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
    getHrEmployeesEvent(id: ID!): HrEmployeesEvent
    listHrEmployeesEvents(tenantId: String!, limit: Int): [HrEmployeesEvent!]!
  }

  extend type Mutation {
    createHrEmployeesEvent(tenantId: String!, code: String!, name: String!): HrEmployeesEvent!
    deleteHrEmployeesEvent(id: ID!): Boolean!
  }
`;

export const HrEmployeesEventGqlResolvers = {
  Query: {
    getHrEmployeesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
