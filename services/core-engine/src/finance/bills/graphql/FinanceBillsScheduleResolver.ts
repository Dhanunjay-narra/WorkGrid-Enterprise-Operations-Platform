export const FinanceBillsScheduleGqlTypeDefs = `
  type FinanceBillsSchedule {
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
    getFinanceBillsSchedule(id: ID!): FinanceBillsSchedule
    listFinanceBillsSchedules(tenantId: String!, limit: Int): [FinanceBillsSchedule!]!
  }

  extend type Mutation {
    createFinanceBillsSchedule(tenantId: String!, code: String!, name: String!): FinanceBillsSchedule!
    deleteFinanceBillsSchedule(id: ID!): Boolean!
  }
`;

export const FinanceBillsScheduleGqlResolvers = {
  Query: {
    getFinanceBillsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
