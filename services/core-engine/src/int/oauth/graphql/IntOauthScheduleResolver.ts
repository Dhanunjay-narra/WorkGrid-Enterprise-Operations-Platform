export const IntOauthScheduleGqlTypeDefs = `
  type IntOauthSchedule {
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
    getIntOauthSchedule(id: ID!): IntOauthSchedule
    listIntOauthSchedules(tenantId: String!, limit: Int): [IntOauthSchedule!]!
  }

  extend type Mutation {
    createIntOauthSchedule(tenantId: String!, code: String!, name: String!): IntOauthSchedule!
    deleteIntOauthSchedule(id: ID!): Boolean!
  }
`;

export const IntOauthScheduleGqlResolvers = {
  Query: {
    getIntOauthSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
