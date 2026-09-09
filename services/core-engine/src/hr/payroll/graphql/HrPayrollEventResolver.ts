export const HrPayrollEventGqlTypeDefs = `
  type HrPayrollEvent {
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
    getHrPayrollEvent(id: ID!): HrPayrollEvent
    listHrPayrollEvents(tenantId: String!, limit: Int): [HrPayrollEvent!]!
  }

  extend type Mutation {
    createHrPayrollEvent(tenantId: String!, code: String!, name: String!): HrPayrollEvent!
    deleteHrPayrollEvent(id: ID!): Boolean!
  }
`;

export const HrPayrollEventGqlResolvers = {
  Query: {
    getHrPayrollEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
