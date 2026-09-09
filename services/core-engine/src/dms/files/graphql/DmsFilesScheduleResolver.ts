export const DmsFilesScheduleGqlTypeDefs = `
  type DmsFilesSchedule {
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
    getDmsFilesSchedule(id: ID!): DmsFilesSchedule
    listDmsFilesSchedules(tenantId: String!, limit: Int): [DmsFilesSchedule!]!
  }

  extend type Mutation {
    createDmsFilesSchedule(tenantId: String!, code: String!, name: String!): DmsFilesSchedule!
    deleteDmsFilesSchedule(id: ID!): Boolean!
  }
`;

export const DmsFilesScheduleGqlResolvers = {
  Query: {
    getDmsFilesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
