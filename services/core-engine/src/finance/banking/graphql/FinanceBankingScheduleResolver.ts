export const FinanceBankingScheduleGqlTypeDefs = `
  type FinanceBankingSchedule {
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
    getFinanceBankingSchedule(id: ID!): FinanceBankingSchedule
    listFinanceBankingSchedules(tenantId: String!, limit: Int): [FinanceBankingSchedule!]!
  }

  extend type Mutation {
    createFinanceBankingSchedule(tenantId: String!, code: String!, name: String!): FinanceBankingSchedule!
    deleteFinanceBankingSchedule(id: ID!): Boolean!
  }
`;

export const FinanceBankingScheduleGqlResolvers = {
  Query: {
    getFinanceBankingSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
