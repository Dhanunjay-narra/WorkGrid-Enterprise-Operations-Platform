export const CommMessagesScheduleGqlTypeDefs = `
  type CommMessagesSchedule {
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
    getCommMessagesSchedule(id: ID!): CommMessagesSchedule
    listCommMessagesSchedules(tenantId: String!, limit: Int): [CommMessagesSchedule!]!
  }

  extend type Mutation {
    createCommMessagesSchedule(tenantId: String!, code: String!, name: String!): CommMessagesSchedule!
    deleteCommMessagesSchedule(id: ID!): Boolean!
  }
`;

export const CommMessagesScheduleGqlResolvers = {
  Query: {
    getCommMessagesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
