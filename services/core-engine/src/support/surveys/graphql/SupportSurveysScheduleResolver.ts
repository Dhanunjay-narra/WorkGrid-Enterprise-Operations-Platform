export const SupportSurveysScheduleGqlTypeDefs = `
  type SupportSurveysSchedule {
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
    getSupportSurveysSchedule(id: ID!): SupportSurveysSchedule
    listSupportSurveysSchedules(tenantId: String!, limit: Int): [SupportSurveysSchedule!]!
  }

  extend type Mutation {
    createSupportSurveysSchedule(tenantId: String!, code: String!, name: String!): SupportSurveysSchedule!
    deleteSupportSurveysSchedule(id: ID!): Boolean!
  }
`;

export const SupportSurveysScheduleGqlResolvers = {
  Query: {
    getSupportSurveysSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
