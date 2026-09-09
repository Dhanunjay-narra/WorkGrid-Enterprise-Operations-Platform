export const SupportSlaScheduleGqlTypeDefs = `
  type SupportSlaSchedule {
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
    getSupportSlaSchedule(id: ID!): SupportSlaSchedule
    listSupportSlaSchedules(tenantId: String!, limit: Int): [SupportSlaSchedule!]!
  }

  extend type Mutation {
    createSupportSlaSchedule(tenantId: String!, code: String!, name: String!): SupportSlaSchedule!
    deleteSupportSlaSchedule(id: ID!): Boolean!
  }
`;

export const SupportSlaScheduleGqlResolvers = {
  Query: {
    getSupportSlaSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
