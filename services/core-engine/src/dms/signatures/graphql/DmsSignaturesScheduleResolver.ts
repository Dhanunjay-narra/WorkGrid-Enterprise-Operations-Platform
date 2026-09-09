export const DmsSignaturesScheduleGqlTypeDefs = `
  type DmsSignaturesSchedule {
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
    getDmsSignaturesSchedule(id: ID!): DmsSignaturesSchedule
    listDmsSignaturesSchedules(tenantId: String!, limit: Int): [DmsSignaturesSchedule!]!
  }

  extend type Mutation {
    createDmsSignaturesSchedule(tenantId: String!, code: String!, name: String!): DmsSignaturesSchedule!
    deleteDmsSignaturesSchedule(id: ID!): Boolean!
  }
`;

export const DmsSignaturesScheduleGqlResolvers = {
  Query: {
    getDmsSignaturesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
