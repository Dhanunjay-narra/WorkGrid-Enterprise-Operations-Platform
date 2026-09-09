export const SupportCsatScheduleGqlTypeDefs = `
  type SupportCsatSchedule {
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
    getSupportCsatSchedule(id: ID!): SupportCsatSchedule
    listSupportCsatSchedules(tenantId: String!, limit: Int): [SupportCsatSchedule!]!
  }

  extend type Mutation {
    createSupportCsatSchedule(tenantId: String!, code: String!, name: String!): SupportCsatSchedule!
    deleteSupportCsatSchedule(id: ID!): Boolean!
  }
`;

export const SupportCsatScheduleGqlResolvers = {
  Query: {
    getSupportCsatSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
