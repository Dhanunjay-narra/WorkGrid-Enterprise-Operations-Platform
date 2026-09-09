export const IntSlackScheduleGqlTypeDefs = `
  type IntSlackSchedule {
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
    getIntSlackSchedule(id: ID!): IntSlackSchedule
    listIntSlackSchedules(tenantId: String!, limit: Int): [IntSlackSchedule!]!
  }

  extend type Mutation {
    createIntSlackSchedule(tenantId: String!, code: String!, name: String!): IntSlackSchedule!
    deleteIntSlackSchedule(id: ID!): Boolean!
  }
`;

export const IntSlackScheduleGqlResolvers = {
  Query: {
    getIntSlackSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
