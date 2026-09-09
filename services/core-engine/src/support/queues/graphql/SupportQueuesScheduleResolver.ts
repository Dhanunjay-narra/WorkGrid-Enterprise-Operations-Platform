export const SupportQueuesScheduleGqlTypeDefs = `
  type SupportQueuesSchedule {
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
    getSupportQueuesSchedule(id: ID!): SupportQueuesSchedule
    listSupportQueuesSchedules(tenantId: String!, limit: Int): [SupportQueuesSchedule!]!
  }

  extend type Mutation {
    createSupportQueuesSchedule(tenantId: String!, code: String!, name: String!): SupportQueuesSchedule!
    deleteSupportQueuesSchedule(id: ID!): Boolean!
  }
`;

export const SupportQueuesScheduleGqlResolvers = {
  Query: {
    getSupportQueuesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
