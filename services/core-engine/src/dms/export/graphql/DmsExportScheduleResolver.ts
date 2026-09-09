export const DmsExportScheduleGqlTypeDefs = `
  type DmsExportSchedule {
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
    getDmsExportSchedule(id: ID!): DmsExportSchedule
    listDmsExportSchedules(tenantId: String!, limit: Int): [DmsExportSchedule!]!
  }

  extend type Mutation {
    createDmsExportSchedule(tenantId: String!, code: String!, name: String!): DmsExportSchedule!
    deleteDmsExportSchedule(id: ID!): Boolean!
  }
`;

export const DmsExportScheduleGqlResolvers = {
  Query: {
    getDmsExportSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
