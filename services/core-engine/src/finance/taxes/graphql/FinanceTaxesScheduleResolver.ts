export const FinanceTaxesScheduleGqlTypeDefs = `
  type FinanceTaxesSchedule {
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
    getFinanceTaxesSchedule(id: ID!): FinanceTaxesSchedule
    listFinanceTaxesSchedules(tenantId: String!, limit: Int): [FinanceTaxesSchedule!]!
  }

  extend type Mutation {
    createFinanceTaxesSchedule(tenantId: String!, code: String!, name: String!): FinanceTaxesSchedule!
    deleteFinanceTaxesSchedule(id: ID!): Boolean!
  }
`;

export const FinanceTaxesScheduleGqlResolvers = {
  Query: {
    getFinanceTaxesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
