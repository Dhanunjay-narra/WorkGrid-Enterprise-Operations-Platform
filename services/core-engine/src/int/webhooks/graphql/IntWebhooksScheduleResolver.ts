export const IntWebhooksScheduleGqlTypeDefs = `
  type IntWebhooksSchedule {
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
    getIntWebhooksSchedule(id: ID!): IntWebhooksSchedule
    listIntWebhooksSchedules(tenantId: String!, limit: Int): [IntWebhooksSchedule!]!
  }

  extend type Mutation {
    createIntWebhooksSchedule(tenantId: String!, code: String!, name: String!): IntWebhooksSchedule!
    deleteIntWebhooksSchedule(id: ID!): Boolean!
  }
`;

export const IntWebhooksScheduleGqlResolvers = {
  Query: {
    getIntWebhooksSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
