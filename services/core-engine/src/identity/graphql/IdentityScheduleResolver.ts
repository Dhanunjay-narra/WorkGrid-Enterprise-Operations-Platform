export const IdentityScheduleGqlTypeDefs = `
  type IdentitySchedule {
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
    getIdentitySchedule(id: ID!): IdentitySchedule
    listIdentitySchedules(tenantId: String!, limit: Int): [IdentitySchedule!]!
  }

  extend type Mutation {
    createIdentitySchedule(tenantId: String!, code: String!, name: String!): IdentitySchedule!
    deleteIdentitySchedule(id: ID!): Boolean!
  }
`;

export const IdentityScheduleGqlResolvers = {
  Query: {
    getIdentitySchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentitySchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
