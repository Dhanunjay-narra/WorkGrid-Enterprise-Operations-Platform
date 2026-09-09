export const IntSalesforceScheduleGqlTypeDefs = `
  type IntSalesforceSchedule {
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
    getIntSalesforceSchedule(id: ID!): IntSalesforceSchedule
    listIntSalesforceSchedules(tenantId: String!, limit: Int): [IntSalesforceSchedule!]!
  }

  extend type Mutation {
    createIntSalesforceSchedule(tenantId: String!, code: String!, name: String!): IntSalesforceSchedule!
    deleteIntSalesforceSchedule(id: ID!): Boolean!
  }
`;

export const IntSalesforceScheduleGqlResolvers = {
  Query: {
    getIntSalesforceSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
