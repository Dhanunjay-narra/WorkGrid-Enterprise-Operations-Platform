export const DmsFoldersScheduleGqlTypeDefs = `
  type DmsFoldersSchedule {
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
    getDmsFoldersSchedule(id: ID!): DmsFoldersSchedule
    listDmsFoldersSchedules(tenantId: String!, limit: Int): [DmsFoldersSchedule!]!
  }

  extend type Mutation {
    createDmsFoldersSchedule(tenantId: String!, code: String!, name: String!): DmsFoldersSchedule!
    deleteDmsFoldersSchedule(id: ID!): Boolean!
  }
`;

export const DmsFoldersScheduleGqlResolvers = {
  Query: {
    getDmsFoldersSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
