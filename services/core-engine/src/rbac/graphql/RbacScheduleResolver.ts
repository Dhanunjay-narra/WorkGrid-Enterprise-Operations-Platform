export const RbacScheduleGqlTypeDefs = `
  type RbacSchedule {
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
    getRbacSchedule(id: ID!): RbacSchedule
    listRbacSchedules(tenantId: String!, limit: Int): [RbacSchedule!]!
  }

  extend type Mutation {
    createRbacSchedule(tenantId: String!, code: String!, name: String!): RbacSchedule!
    deleteRbacSchedule(id: ID!): Boolean!
  }
`;

export const RbacScheduleGqlResolvers = {
  Query: {
    getRbacSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
