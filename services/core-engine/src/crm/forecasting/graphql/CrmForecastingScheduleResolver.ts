export const CrmForecastingScheduleGqlTypeDefs = `
  type CrmForecastingSchedule {
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
    getCrmForecastingSchedule(id: ID!): CrmForecastingSchedule
    listCrmForecastingSchedules(tenantId: String!, limit: Int): [CrmForecastingSchedule!]!
  }

  extend type Mutation {
    createCrmForecastingSchedule(tenantId: String!, code: String!, name: String!): CrmForecastingSchedule!
    deleteCrmForecastingSchedule(id: ID!): Boolean!
  }
`;

export const CrmForecastingScheduleGqlResolvers = {
  Query: {
    getCrmForecastingSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
