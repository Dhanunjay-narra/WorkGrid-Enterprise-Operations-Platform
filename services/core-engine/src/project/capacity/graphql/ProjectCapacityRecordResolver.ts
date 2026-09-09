export const ProjectCapacityRecordGqlTypeDefs = `
  type ProjectCapacityRecord {
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
    getProjectCapacityRecord(id: ID!): ProjectCapacityRecord
    listProjectCapacityRecords(tenantId: String!, limit: Int): [ProjectCapacityRecord!]!
  }

  extend type Mutation {
    createProjectCapacityRecord(tenantId: String!, code: String!, name: String!): ProjectCapacityRecord!
    deleteProjectCapacityRecord(id: ID!): Boolean!
  }
`;

export const ProjectCapacityRecordGqlResolvers = {
  Query: {
    getProjectCapacityRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
