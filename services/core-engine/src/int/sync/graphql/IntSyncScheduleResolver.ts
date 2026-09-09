export const IntSyncScheduleGqlTypeDefs = `
  type IntSyncSchedule {
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
    getIntSyncSchedule(id: ID!): IntSyncSchedule
    listIntSyncSchedules(tenantId: String!, limit: Int): [IntSyncSchedule!]!
  }

  extend type Mutation {
    createIntSyncSchedule(tenantId: String!, code: String!, name: String!): IntSyncSchedule!
    deleteIntSyncSchedule(id: ID!): Boolean!
  }
`;

export const IntSyncScheduleGqlResolvers = {
  Query: {
    getIntSyncSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
