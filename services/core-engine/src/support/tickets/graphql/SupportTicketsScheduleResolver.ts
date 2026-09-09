export const SupportTicketsScheduleGqlTypeDefs = `
  type SupportTicketsSchedule {
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
    getSupportTicketsSchedule(id: ID!): SupportTicketsSchedule
    listSupportTicketsSchedules(tenantId: String!, limit: Int): [SupportTicketsSchedule!]!
  }

  extend type Mutation {
    createSupportTicketsSchedule(tenantId: String!, code: String!, name: String!): SupportTicketsSchedule!
    deleteSupportTicketsSchedule(id: ID!): Boolean!
  }
`;

export const SupportTicketsScheduleGqlResolvers = {
  Query: {
    getSupportTicketsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
