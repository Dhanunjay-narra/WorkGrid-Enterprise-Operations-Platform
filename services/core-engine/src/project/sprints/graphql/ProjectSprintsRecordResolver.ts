export const ProjectSprintsRecordGqlTypeDefs = `
  type ProjectSprintsRecord {
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
    getProjectSprintsRecord(id: ID!): ProjectSprintsRecord
    listProjectSprintsRecords(tenantId: String!, limit: Int): [ProjectSprintsRecord!]!
  }

  extend type Mutation {
    createProjectSprintsRecord(tenantId: String!, code: String!, name: String!): ProjectSprintsRecord!
    deleteProjectSprintsRecord(id: ID!): Boolean!
  }
`;

export const ProjectSprintsRecordGqlResolvers = {
  Query: {
    getProjectSprintsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
