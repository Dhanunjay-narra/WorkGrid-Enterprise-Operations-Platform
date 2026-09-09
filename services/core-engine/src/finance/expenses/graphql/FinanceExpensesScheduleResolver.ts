export const FinanceExpensesScheduleGqlTypeDefs = `
  type FinanceExpensesSchedule {
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
    getFinanceExpensesSchedule(id: ID!): FinanceExpensesSchedule
    listFinanceExpensesSchedules(tenantId: String!, limit: Int): [FinanceExpensesSchedule!]!
  }

  extend type Mutation {
    createFinanceExpensesSchedule(tenantId: String!, code: String!, name: String!): FinanceExpensesSchedule!
    deleteFinanceExpensesSchedule(id: ID!): Boolean!
  }
`;

export const FinanceExpensesScheduleGqlResolvers = {
  Query: {
    getFinanceExpensesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceExpensesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
