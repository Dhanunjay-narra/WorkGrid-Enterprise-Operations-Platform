export const CommNotificationsScheduleGqlTypeDefs = `
  type CommNotificationsSchedule {
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
    getCommNotificationsSchedule(id: ID!): CommNotificationsSchedule
    listCommNotificationsSchedules(tenantId: String!, limit: Int): [CommNotificationsSchedule!]!
  }

  extend type Mutation {
    createCommNotificationsSchedule(tenantId: String!, code: String!, name: String!): CommNotificationsSchedule!
    deleteCommNotificationsSchedule(id: ID!): Boolean!
  }
`;

export const CommNotificationsScheduleGqlResolvers = {
  Query: {
    getCommNotificationsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
