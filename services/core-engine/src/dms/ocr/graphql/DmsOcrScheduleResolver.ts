export const DmsOcrScheduleGqlTypeDefs = `
  type DmsOcrSchedule {
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
    getDmsOcrSchedule(id: ID!): DmsOcrSchedule
    listDmsOcrSchedules(tenantId: String!, limit: Int): [DmsOcrSchedule!]!
  }

  extend type Mutation {
    createDmsOcrSchedule(tenantId: String!, code: String!, name: String!): DmsOcrSchedule!
    deleteDmsOcrSchedule(id: ID!): Boolean!
  }
`;

export const DmsOcrScheduleGqlResolvers = {
  Query: {
    getDmsOcrSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
