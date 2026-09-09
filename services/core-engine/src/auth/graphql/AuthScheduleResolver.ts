export const AuthScheduleGqlTypeDefs = `
  type AuthSchedule {
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
    getAuthSchedule(id: ID!): AuthSchedule
    listAuthSchedules(tenantId: String!, limit: Int): [AuthSchedule!]!
  }

  extend type Mutation {
    createAuthSchedule(tenantId: String!, code: String!, name: String!): AuthSchedule!
    deleteAuthSchedule(id: ID!): Boolean!
  }
`;

export const AuthScheduleGqlResolvers = {
  Query: {
    getAuthSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
