export const SecurityScheduleGqlTypeDefs = `
  type SecuritySchedule {
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
    getSecuritySchedule(id: ID!): SecuritySchedule
    listSecuritySchedules(tenantId: String!, limit: Int): [SecuritySchedule!]!
  }

  extend type Mutation {
    createSecuritySchedule(tenantId: String!, code: String!, name: String!): SecuritySchedule!
    deleteSecuritySchedule(id: ID!): Boolean!
  }
`;

export const SecurityScheduleGqlResolvers = {
  Query: {
    getSecuritySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecuritySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
