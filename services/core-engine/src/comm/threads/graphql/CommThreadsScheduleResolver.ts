export const CommThreadsScheduleGqlTypeDefs = `
  type CommThreadsSchedule {
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
    getCommThreadsSchedule(id: ID!): CommThreadsSchedule
    listCommThreadsSchedules(tenantId: String!, limit: Int): [CommThreadsSchedule!]!
  }

  extend type Mutation {
    createCommThreadsSchedule(tenantId: String!, code: String!, name: String!): CommThreadsSchedule!
    deleteCommThreadsSchedule(id: ID!): Boolean!
  }
`;

export const CommThreadsScheduleGqlResolvers = {
  Query: {
    getCommThreadsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
