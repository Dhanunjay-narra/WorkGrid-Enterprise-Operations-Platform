export const IntRateLimitsScheduleGqlTypeDefs = `
  type IntRateLimitsSchedule {
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
    getIntRateLimitsSchedule(id: ID!): IntRateLimitsSchedule
    listIntRateLimitsSchedules(tenantId: String!, limit: Int): [IntRateLimitsSchedule!]!
  }

  extend type Mutation {
    createIntRateLimitsSchedule(tenantId: String!, code: String!, name: String!): IntRateLimitsSchedule!
    deleteIntRateLimitsSchedule(id: ID!): Boolean!
  }
`;

export const IntRateLimitsScheduleGqlResolvers = {
  Query: {
    getIntRateLimitsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
