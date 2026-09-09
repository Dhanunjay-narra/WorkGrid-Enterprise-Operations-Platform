export const CommDigestScheduleGqlTypeDefs = `
  type CommDigestSchedule {
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
    getCommDigestSchedule(id: ID!): CommDigestSchedule
    listCommDigestSchedules(tenantId: String!, limit: Int): [CommDigestSchedule!]!
  }

  extend type Mutation {
    createCommDigestSchedule(tenantId: String!, code: String!, name: String!): CommDigestSchedule!
    deleteCommDigestSchedule(id: ID!): Boolean!
  }
`;

export const CommDigestScheduleGqlResolvers = {
  Query: {
    getCommDigestSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
