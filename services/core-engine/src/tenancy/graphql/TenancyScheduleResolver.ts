export const TenancyScheduleGqlTypeDefs = `
  type TenancySchedule {
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
    getTenancySchedule(id: ID!): TenancySchedule
    listTenancySchedules(tenantId: String!, limit: Int): [TenancySchedule!]!
  }

  extend type Mutation {
    createTenancySchedule(tenantId: String!, code: String!, name: String!): TenancySchedule!
    deleteTenancySchedule(id: ID!): Boolean!
  }
`;

export const TenancyScheduleGqlResolvers = {
  Query: {
    getTenancySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
