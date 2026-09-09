export const FinanceTreasuryScheduleGqlTypeDefs = `
  type FinanceTreasurySchedule {
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
    getFinanceTreasurySchedule(id: ID!): FinanceTreasurySchedule
    listFinanceTreasurySchedules(tenantId: String!, limit: Int): [FinanceTreasurySchedule!]!
  }

  extend type Mutation {
    createFinanceTreasurySchedule(tenantId: String!, code: String!, name: String!): FinanceTreasurySchedule!
    deleteFinanceTreasurySchedule(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryScheduleGqlResolvers = {
  Query: {
    getFinanceTreasurySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasurySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
