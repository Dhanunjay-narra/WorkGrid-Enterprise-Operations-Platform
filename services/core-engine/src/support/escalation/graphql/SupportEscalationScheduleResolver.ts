export const SupportEscalationScheduleGqlTypeDefs = `
  type SupportEscalationSchedule {
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
    getSupportEscalationSchedule(id: ID!): SupportEscalationSchedule
    listSupportEscalationSchedules(tenantId: String!, limit: Int): [SupportEscalationSchedule!]!
  }

  extend type Mutation {
    createSupportEscalationSchedule(tenantId: String!, code: String!, name: String!): SupportEscalationSchedule!
    deleteSupportEscalationSchedule(id: ID!): Boolean!
  }
`;

export const SupportEscalationScheduleGqlResolvers = {
  Query: {
    getSupportEscalationSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
