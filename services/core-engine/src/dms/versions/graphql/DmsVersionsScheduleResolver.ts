export const DmsVersionsScheduleGqlTypeDefs = `
  type DmsVersionsSchedule {
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
    getDmsVersionsSchedule(id: ID!): DmsVersionsSchedule
    listDmsVersionsSchedules(tenantId: String!, limit: Int): [DmsVersionsSchedule!]!
  }

  extend type Mutation {
    createDmsVersionsSchedule(tenantId: String!, code: String!, name: String!): DmsVersionsSchedule!
    deleteDmsVersionsSchedule(id: ID!): Boolean!
  }
`;

export const DmsVersionsScheduleGqlResolvers = {
  Query: {
    getDmsVersionsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
