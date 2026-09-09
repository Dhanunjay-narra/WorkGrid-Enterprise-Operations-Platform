export const DmsRetentionScheduleGqlTypeDefs = `
  type DmsRetentionSchedule {
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
    getDmsRetentionSchedule(id: ID!): DmsRetentionSchedule
    listDmsRetentionSchedules(tenantId: String!, limit: Int): [DmsRetentionSchedule!]!
  }

  extend type Mutation {
    createDmsRetentionSchedule(tenantId: String!, code: String!, name: String!): DmsRetentionSchedule!
    deleteDmsRetentionSchedule(id: ID!): Boolean!
  }
`;

export const DmsRetentionScheduleGqlResolvers = {
  Query: {
    getDmsRetentionSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
