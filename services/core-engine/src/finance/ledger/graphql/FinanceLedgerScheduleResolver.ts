export const FinanceLedgerScheduleGqlTypeDefs = `
  type FinanceLedgerSchedule {
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
    getFinanceLedgerSchedule(id: ID!): FinanceLedgerSchedule
    listFinanceLedgerSchedules(tenantId: String!, limit: Int): [FinanceLedgerSchedule!]!
  }

  extend type Mutation {
    createFinanceLedgerSchedule(tenantId: String!, code: String!, name: String!): FinanceLedgerSchedule!
    deleteFinanceLedgerSchedule(id: ID!): Boolean!
  }
`;

export const FinanceLedgerScheduleGqlResolvers = {
  Query: {
    getFinanceLedgerSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
