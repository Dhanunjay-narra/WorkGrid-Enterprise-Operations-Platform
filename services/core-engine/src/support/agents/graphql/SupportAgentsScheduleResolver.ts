export const SupportAgentsScheduleGqlTypeDefs = `
  type SupportAgentsSchedule {
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
    getSupportAgentsSchedule(id: ID!): SupportAgentsSchedule
    listSupportAgentsSchedules(tenantId: String!, limit: Int): [SupportAgentsSchedule!]!
  }

  extend type Mutation {
    createSupportAgentsSchedule(tenantId: String!, code: String!, name: String!): SupportAgentsSchedule!
    deleteSupportAgentsSchedule(id: ID!): Boolean!
  }
`;

export const SupportAgentsScheduleGqlResolvers = {
  Query: {
    getSupportAgentsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
