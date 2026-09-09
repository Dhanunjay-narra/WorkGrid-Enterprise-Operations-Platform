export const BiForecastsScheduleGqlTypeDefs = `
  type BiForecastsSchedule {
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
    getBiForecastsSchedule(id: ID!): BiForecastsSchedule
    listBiForecastsSchedules(tenantId: String!, limit: Int): [BiForecastsSchedule!]!
  }

  extend type Mutation {
    createBiForecastsSchedule(tenantId: String!, code: String!, name: String!): BiForecastsSchedule!
    deleteBiForecastsSchedule(id: ID!): Boolean!
  }
`;

export const BiForecastsScheduleGqlResolvers = {
  Query: {
    getBiForecastsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
