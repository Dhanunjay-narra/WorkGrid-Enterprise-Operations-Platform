export const CommWebhooksScheduleGqlTypeDefs = `
  type CommWebhooksSchedule {
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
    getCommWebhooksSchedule(id: ID!): CommWebhooksSchedule
    listCommWebhooksSchedules(tenantId: String!, limit: Int): [CommWebhooksSchedule!]!
  }

  extend type Mutation {
    createCommWebhooksSchedule(tenantId: String!, code: String!, name: String!): CommWebhooksSchedule!
    deleteCommWebhooksSchedule(id: ID!): Boolean!
  }
`;

export const CommWebhooksScheduleGqlResolvers = {
  Query: {
    getCommWebhooksSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
