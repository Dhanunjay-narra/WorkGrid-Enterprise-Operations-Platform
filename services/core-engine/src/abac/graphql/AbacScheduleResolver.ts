export const AbacScheduleGqlTypeDefs = `
  type AbacSchedule {
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
    getAbacSchedule(id: ID!): AbacSchedule
    listAbacSchedules(tenantId: String!, limit: Int): [AbacSchedule!]!
  }

  extend type Mutation {
    createAbacSchedule(tenantId: String!, code: String!, name: String!): AbacSchedule!
    deleteAbacSchedule(id: ID!): Boolean!
  }
`;

export const AbacScheduleGqlResolvers = {
  Query: {
    getAbacSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
