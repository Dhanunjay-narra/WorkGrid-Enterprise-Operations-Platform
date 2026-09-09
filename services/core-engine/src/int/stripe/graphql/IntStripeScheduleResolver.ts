export const IntStripeScheduleGqlTypeDefs = `
  type IntStripeSchedule {
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
    getIntStripeSchedule(id: ID!): IntStripeSchedule
    listIntStripeSchedules(tenantId: String!, limit: Int): [IntStripeSchedule!]!
  }

  extend type Mutation {
    createIntStripeSchedule(tenantId: String!, code: String!, name: String!): IntStripeSchedule!
    deleteIntStripeSchedule(id: ID!): Boolean!
  }
`;

export const IntStripeScheduleGqlResolvers = {
  Query: {
    getIntStripeSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
