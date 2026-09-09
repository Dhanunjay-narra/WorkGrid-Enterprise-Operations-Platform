export const CommChannelsScheduleGqlTypeDefs = `
  type CommChannelsSchedule {
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
    getCommChannelsSchedule(id: ID!): CommChannelsSchedule
    listCommChannelsSchedules(tenantId: String!, limit: Int): [CommChannelsSchedule!]!
  }

  extend type Mutation {
    createCommChannelsSchedule(tenantId: String!, code: String!, name: String!): CommChannelsSchedule!
    deleteCommChannelsSchedule(id: ID!): Boolean!
  }
`;

export const CommChannelsScheduleGqlResolvers = {
  Query: {
    getCommChannelsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
