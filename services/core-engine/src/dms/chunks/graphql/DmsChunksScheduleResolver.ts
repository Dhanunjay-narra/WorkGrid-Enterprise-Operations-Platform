export const DmsChunksScheduleGqlTypeDefs = `
  type DmsChunksSchedule {
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
    getDmsChunksSchedule(id: ID!): DmsChunksSchedule
    listDmsChunksSchedules(tenantId: String!, limit: Int): [DmsChunksSchedule!]!
  }

  extend type Mutation {
    createDmsChunksSchedule(tenantId: String!, code: String!, name: String!): DmsChunksSchedule!
    deleteDmsChunksSchedule(id: ID!): Boolean!
  }
`;

export const DmsChunksScheduleGqlResolvers = {
  Query: {
    getDmsChunksSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
