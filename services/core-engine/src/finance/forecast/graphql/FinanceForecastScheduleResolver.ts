export const FinanceForecastScheduleGqlTypeDefs = `
  type FinanceForecastSchedule {
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
    getFinanceForecastSchedule(id: ID!): FinanceForecastSchedule
    listFinanceForecastSchedules(tenantId: String!, limit: Int): [FinanceForecastSchedule!]!
  }

  extend type Mutation {
    createFinanceForecastSchedule(tenantId: String!, code: String!, name: String!): FinanceForecastSchedule!
    deleteFinanceForecastSchedule(id: ID!): Boolean!
  }
`;

export const FinanceForecastScheduleGqlResolvers = {
  Query: {
    getFinanceForecastSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
