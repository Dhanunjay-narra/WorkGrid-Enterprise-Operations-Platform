export const CommPresenceScheduleGqlTypeDefs = `
  type CommPresenceSchedule {
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
    getCommPresenceSchedule(id: ID!): CommPresenceSchedule
    listCommPresenceSchedules(tenantId: String!, limit: Int): [CommPresenceSchedule!]!
  }

  extend type Mutation {
    createCommPresenceSchedule(tenantId: String!, code: String!, name: String!): CommPresenceSchedule!
    deleteCommPresenceSchedule(id: ID!): Boolean!
  }
`;

export const CommPresenceScheduleGqlResolvers = {
  Query: {
    getCommPresenceSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
