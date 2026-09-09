export const FinanceInvoicesScheduleGqlTypeDefs = `
  type FinanceInvoicesSchedule {
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
    getFinanceInvoicesSchedule(id: ID!): FinanceInvoicesSchedule
    listFinanceInvoicesSchedules(tenantId: String!, limit: Int): [FinanceInvoicesSchedule!]!
  }

  extend type Mutation {
    createFinanceInvoicesSchedule(tenantId: String!, code: String!, name: String!): FinanceInvoicesSchedule!
    deleteFinanceInvoicesSchedule(id: ID!): Boolean!
  }
`;

export const FinanceInvoicesScheduleGqlResolvers = {
  Query: {
    getFinanceInvoicesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceInvoicesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
