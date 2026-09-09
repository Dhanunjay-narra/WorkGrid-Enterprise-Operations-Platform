export const CommCallsScheduleGqlTypeDefs = `
  type CommCallsSchedule {
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
    getCommCallsSchedule(id: ID!): CommCallsSchedule
    listCommCallsSchedules(tenantId: String!, limit: Int): [CommCallsSchedule!]!
  }

  extend type Mutation {
    createCommCallsSchedule(tenantId: String!, code: String!, name: String!): CommCallsSchedule!
    deleteCommCallsSchedule(id: ID!): Boolean!
  }
`;

export const CommCallsScheduleGqlResolvers = {
  Query: {
    getCommCallsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
